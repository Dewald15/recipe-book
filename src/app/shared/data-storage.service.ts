import { Injectable } from "@angular/core";
import { Response } from "@angular/http";
import { HttpClient, HttpParams, HttpRequest } from "@angular/common/http";
import 'rxjs/Rx';
import { RecipesService } from "../recipes/recipes.service";
import { Recipe } from "../recipes/recipe.model";

@Injectable()
export class DataStorageService {
    constructor(private httpClient: HttpClient, private recipeService: RecipesService){}

    storeRecipes(){
        // const token = this.authService.getToken();

        // return this.httpClient.put('https://ng-recipe-book-feaee.firebaseio.com/recipes.json?auth=' + token, this.recipeService
        // .getRecipes()
        // );

        const req = new HttpRequest('PUT', 'https://ng-recipe-book-feaee.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
            reportProgress: true
            // params: new HttpParams().set('auth', token)
        });
        return this.httpClient.request(req);
    };

    getRecipes(){
        // const token = this.authService.getToken();

        // this.httpClient.get<Recipe[]>('https://ng-recipe-book-feaee.firebaseio.com/recipes.json?auth=' + token)
        
        this.httpClient.get<Recipe[]>('https://ng-recipe-book-feaee.firebaseio.com/recipes.json', {
            observe: 'body' // 'response' will give us the full response instead of only the body. 'body' is default on HttpClient
            // params: new HttpParams().set('auth', token)
        })
        // .map((response: Response) => {
        //     const recipes: Recipe[] = response.json();
        .map((recipes) => { // above is the old method on how to use http(without the <Recipe[]>), with the new one, we only get back the body of the response. We can however overwrite this behaviour if we need access to the full response like to the header and the status codes. Basically the differance between the old and new method is that we are being explicit on the type of data we get back (<Recipe[]>) and without the need to manually extract the body of our response
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