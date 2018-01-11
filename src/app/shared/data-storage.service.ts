import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';
import { RecipesService } from "../recipes/recipes.service";
import { Recipe } from "../recipes/recipe.model";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class DataStorageService {
    constructor(private http: Http, private recipeService: RecipesService, private authService: AuthService){}

    storeRecipes(){
        const token = this.authService.getToken();

        return this.http.put('https://ng-recipe-book-feaee.firebaseio.com/recipes.json?auth=' + token, this.recipeService
        .getRecipes()
        );
    };

    getRecipes(){
        const token = this.authService.getToken();

        this.http.get('https://ng-recipe-book-feaee.firebaseio.com/recipes.json?auth=' + token)
        .map((response: Response) => {
            const recipes: Recipe[] = response.json();
            for(let recipe of recipes){
                if(!recipe['ingredients']){
                    recipe['ingredients'] = [];
                }
            }
            return recipes;
        })
        .subscribe((recipes: Recipe[]) => {
            this.recipeService.setRecipes(recipes);
        })
    }
};