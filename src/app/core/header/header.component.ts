import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
// import { DataStorageService } from '../../shared/data-storage.service';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducers';
import { Observable } from 'rxjs/Observable';
import * as fromAuth from '../../auth/store/auth.reducers';
import * as AuthActions from '../../auth/store/auth.actions';
import * as RecipeActions from '../../recipes/store/recipe.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  authState: Observable<fromAuth.State>;

  constructor(
    // private dataStorageService: DataStorageService,
    private store: Store<fromApp.AppState>
  ){} // public because of prod build error: "Property is private and only accessible within class"

  ngOnInit(){
    this.authState = this.store.select('auth');
  }

  onSaveData(){
    this.store.dispatch(new RecipeActions.StoreRecipes());
    // this.dataStorageService.storeRecipes()
    // .subscribe(
    //   (response) => {
    //     console.log(response);
    //   }
    // );
  }

  onFetchData(){
    // this.dataStorageService.getRecipes();
    this.store.dispatch(new RecipeActions.FetchRecipes());
  }

  onLogout(){
    this.store.dispatch(new AuthActions.Logout());
  }
}
