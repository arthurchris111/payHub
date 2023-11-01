import { ErrorHandler, Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class HandlingErrorService implements ErrorHandler {
  // constructor(private toastr: ToastrService) {}

  handleError(error: any): void {
    console.log(error);

    throw new Error('Method not implemented.');
  }
}
