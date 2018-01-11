import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipesService } from './recipes/recipes.service';
import { DataStorageService } from './shared/data-storage.service';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [ // defines which components, pipes or directives this module use
    AppComponent
  ],
  imports: [ // define which other modules this module use, so we basically import everything these modules exports for us
    BrowserModule, // BrowserModule contains all the features of the CommonModule and some additional features only needed in the point of time the application starts and therefore are only needed in the app module and CommonModules in all other modules
    HttpModule,
    AppRoutingModule,
    SharedModule,
    ShoppingListModule,
    AuthModule,
    CoreModule
  ],
  bootstrap: [ // defines our root component. The root component is different than the root module(more of a meta thing, it basically wraps our app and defines which features we use)
    AppComponent
  ] 
})

export class AppModule { }
