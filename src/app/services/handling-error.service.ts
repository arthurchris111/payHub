import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class HandlingErrorService {
  constructor(private toastr: ToastrService) {}

  showError(message: string, title: string = 'Error') {
    this.toastr.error(message, title, {
      closeButton: true,
    });
  }
}
