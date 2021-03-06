import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class UsersInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap(
        (event) => {
          if (event instanceof HttpResponse && event.body.length > 1) {
            event.body.forEach(user => {
              user.address = user.address.zipcode + ", " + user.address.city + ", " + user.address.street + ", " + user.address.suite;
            });
          }
        }
      )
    )
  }
}
