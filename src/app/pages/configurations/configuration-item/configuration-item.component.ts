import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ConfigurationItemservice} from './configuration-item.service';
import Swal from 'sweetalert2';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';
import {ConfigurationItem} from '../../test/configuration/configuration.model';


@Component({
  selector: 'app-configuration-item',
  templateUrl: './configuration-item.component.html',
  styleUrls: ['./configuration-item.component.scss']
})
export class ConfigurationItemComponent implements OnInit {
  breadCrumbItems: Array<{}>;
  item: ConfigurationItem;
  itemForm: FormGroup;
  items: ConfigurationItem[];
  updatedUserIndex: number;
  imageView = true;
  imageChanged = false;
  public classAccess: any;
  tableConfig = {
    page: 1,
    pageSize: 10,
    searchTerm: '',
    startIndex: 0,
    endIndex: 10,
    totalRecords: 0
  };
  public language: string;

  constructor(private configItemsService: ConfigurationItemservice, private formBuilder: FormBuilder,
              private translateService: TranslateService) {
    this.language = translateService.currentLang;
    translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      this.language = event.lang;
    });
  }

  image: string;

  get f() {
    return this.itemForm.controls;
  }


  ngOnInit(): void {

    this.breadCrumbItems = [{label: 'Dashboard', link: '/'}, {label: 'details', active: true}];
    this.items = this.configItemsService.configItems;
    this.tableConfig.totalRecords = this.configItemsService.count;
  }

  success(data) {
    this.itemForm.patchValue({icon: data[1].name});
    this.imageChanged = true;
    this.imageView = false;
  }

  onRemove() {
    this.imageView = true;
  }

  position() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    });
  }

  loaditem(item: ConfigurationItem, index) {
    this.item = item;
    this.updatedUserIndex = index;
    this.imageChanged = false;
    this.itemForm.patchValue(this.item);
  }

  cancel() {
    this.item = undefined;
    this.updatedUserIndex = undefined;

  }

  filteritems() {
    const query = {
      limit: this.tableConfig.pageSize,
      searchKey: this.tableConfig.searchTerm,
      page: this.tableConfig.page
    };
    this.configItemsService.getAll(query).then((response) => {
      this.items = response.items;
      this.tableConfig.totalRecords = response.count;
    });
  }

  changeActive(value, item: ConfigurationItem, index) {
    this.configItemsService.changeActiveation(item.id, {active: value}).subscribe((response) => {
      this.items[index] = response.item;
      this.deleteModelResult('Updated!', 'Your item has been Updated.', 'success');
    }, (error) => {
      this.items[index].active = !value.currentTarget.checked;
      this.deleteModelResult('Cancelled', error, 'error');
    });
  }

  deleteModelResult(title: any, message: any, icon: any) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger ml-2'
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire(title, message, icon);
  }

  pageSizeChanged(event) {

    this.filteritems();
  }
}
