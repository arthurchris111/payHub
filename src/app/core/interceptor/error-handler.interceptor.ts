import { Injectable, inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
// import { AlertService } from '../services/alert.service';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  /**
   *
   */
  // constructor(public alert: AlertService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    debugger;
    console.log(request);
    // Toatr  handle all incoming error
    return next.handle(request).pipe(
      catchError((error) => {
        // Handle errors here
        console.error('HTTP Request Error:', error);

        // Show an error notification using Toastr
        // this.alert.error('An error occurred', 'Error');

        return throwError(() => error);
      })
    );
  }
}
