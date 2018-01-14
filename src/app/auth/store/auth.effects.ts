import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects'; //will be able to automatically retrieve these actions we have registered in our store
import { Router } from '@angular/router';
import { fromPromise } from 'rxjs/observable/fromPromise';  //switch promise to observable
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import * as AuthActions from './auth.actions';
import * as firebase from 'firebase';

@Injectable()
export class AuthEffects {
    @Effect()   //expects to get an observable. User '@Effect({dispatch: false})' if you have a side affect that does not yield a new action or state change in the end, but then you also must not emit any action at the end
    authSignup = this.actions$ //Actions is a list of all the actions we have in our app
    .ofType(AuthActions.TRY_SIGNUP)
    .map((action: AuthActions.TrySignup) => {
        return action.payload;
    })
    .switchMap((authData: {username: string, password: string}) => { //video 326
        return fromPromise(firebase.auth().createUserWithEmailAndPassword(authData.username, authData.password));
    })
    .switchMap(() => {
        return fromPromise(firebase.auth().currentUser.getIdToken());
    })
    .mergeMap((token: string) => {  //merge multiple observables into one
        return [
            {
                type: AuthActions.SIGNUP
            },
            {
                type: AuthActions.SET_TOKEN,
                payload: token
            }
        ]
    })     

    @Effect()
    authSignin = this.actions$
    .ofType(AuthActions.TRY_SIGNIN)
    .map((action: AuthActions.TrySignup) => {
        return action.payload;
    })
    .switchMap((authData: {username: string, password: string}) => { //video 326
        return fromPromise(firebase.auth().signInWithEmailAndPassword(authData.username, authData.password));
    })
    .switchMap(() => {
        return fromPromise(firebase.auth().currentUser.getIdToken());
    })
    .mergeMap((token: string) => {  //merge multiple observables into one
        this.router.navigate(['/']);
        return [
            {
                type: AuthActions.SIGNIN
            },
            {
                type: AuthActions.SET_TOKEN,
                payload: token
            }
        ]
    })  

    @Effect({dispatch: false}) 
    authLogout = this.actions$
    .ofType(AuthActions.LOGOUT)
    .do(() => {
        this.router.navigate(['/']);
    })

    constructor(private actions$: Actions, private router: Router){} //actions$: the sign '$' is there to kind of signal that it's an observable. Just highlighting that this is a special property in this class where we will otherwise just have these effects  
}