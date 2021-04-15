import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class ConfirmationService {
  constructor(private http: HttpClient, private translateService: TranslateService) {}

  deleteConfirmationModel(data: any, functionObject) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger ml-2',
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: this.translateService.instant('sure'),
        text: this.translateService.instant('revert'),
        icon: 'warning',
        confirmButtonText: this.translateService.instant('confirmButtonText'),
        cancelButtonText: this.translateService.instant('cancelButtonText'),
        showCancelButton: true,
      })
      .then((result) => {
        console.log('result', result);
        if (result.value) {
          if (data) {
            functionObject(...data);
          } else {
            functionObject();
          }
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire();
          this.deleteModelResult(
            this.translateService.instant('cancelled'),
            this.translateService.instant('safe'),
            'error'
          );
        }
      });
  }

  deleteModelResult(title: any, message: any, icon: any) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger ml-2',
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons.fire(title, message, icon);
  }

  successMessage(title: string) {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: this.translateService.instant(title),
      showConfirmButton: false,
      timer: 1500,
    });
  }

  errorMessage(error: string) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger ml-2',
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons.fire('Cancelled', error, 'error');
  }
}
