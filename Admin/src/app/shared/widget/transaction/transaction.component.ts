import { Component, OnInit, Input } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
 data = {} as any;
  @Input() transactions: Array<{
    id?: string;
    index?: number,
    name?: string,
    date?: string,
    total?: string,
    status?: string,
    payment?: string[],
  }>;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  /**
   * Open modal
   * @param content modal content
   */
  show(data) {
    this.data = data;
    console.log('id' , data);
  }
  openModal(content: any) {
    console.log('content=', content);
    this.modalService.open(content, { centered: true });
  }

}
