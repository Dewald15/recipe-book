import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { HomeComponent } from "./core/home/home.component";

const appRoutes: Routes = [
    // { path: '', redirectTo: '/recipes', pathMatch: 'full' }, //this rewrites the default 'prefix' and now only redirects if the full path is empty
    { path: '', component: HomeComponent }, 
    { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule' }, // lazy loading because of string and no import
    { path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules}) // forRoot() 2nd argument is js object to configure this router module..'PreloadAllModules' loads all lazy loaded modules after the app has been loaded 
    ],
    exports: [
        RouterModule 
    ]
})

export class AppRoutingModule {

}