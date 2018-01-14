import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import { Store } from "@ngrx/store";
import * as fromApp from '../store/app.reducers';
import * as fromAuth from '../auth/store/auth.reducers';
import 'rxjs/add/operator/switchMap'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private store: Store<fromApp.AppState>) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('Intercepted! ' + req)
        return this.store.select('auth')    // this section explained in 320, time: 5:20
        .take(1) //only get this value once
        .switchMap((authState: fromAuth.State) => { // switchMap instead of map: because with map it will wrap and return an observable. With switchMap it wont wrap the return value into a new observable, but instead just use the return value which already is an observable -- import 'rxjs/add/operator/switchMap'
            const copiedReq = req.clone({params: req.params.set('auth', authState.token)});
            return next.handle(copiedReq);
        })
    }
}