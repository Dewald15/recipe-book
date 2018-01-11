import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header/header.component";
import { HomeComponent } from "./home/home.component";
import { SharedModule } from "../shared/shared.module";
import { AppRoutingModule } from "../app-routing.module";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { RecipesService } from "../recipes/recipes.service";
import { DataStorageService } from "../shared/data-storage.service";
import { AuthService } from "../auth/auth.service";

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent
    ],
    imports: [
        SharedModule,
        AppRoutingModule
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent
    ],
    providers: [    // defines which services we may use in this module, and mostly that means for our whole app. We will use the same instances in our whole app 
        ShoppingListService, 
        RecipesService, 
        DataStorageService, 
        AuthService
    ]
})
export class CoreModule{}