import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadingSpinnerService } from '../services/loading-spinner.service';

import { finalize } from 'rxjs/operators';
@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor(private loadingSpinner: LoadingSpinnerService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loadingSpinner.show(); // Show the loading spinner before making the request


    return next.handle(request).pipe(
      finalize(() => {
        this.loadingSpinner.hide(); // Hide the loading spinner when the request is done
      })
    );
  }
}