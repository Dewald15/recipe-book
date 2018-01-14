import { Subject } from 'rxjs/Subject';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipesService { 
    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe('Tasty Schnitzel',
         'A super-tasty Schnitzel - just awesome!',
         "https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG",
         [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]),
        new Recipe('Big Fat Burger',
         'What else needs to be said?',
         "https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg",
         [new Ingredient('Buns', 1), new Ingredient('Meat', 20)])
      ];

      constructor(){}

      setRecipes(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
        console.log(this.recipes.slice())
      }

      getRecipes() {
          return this.recipes.slice(); //will return a new array instance which is an exact copy of this one in our services file
      }
      
      getRecipe(index: number){
          return this.recipes[index];
      }

      // addIngredientsToShoppingList(ingredients: Ingredient[]){
      //   // this.slService.addIngredients(ingredients);
      //   this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));
      // }

      // addRecipe(recipe: Recipe){
      //   this.recipes.push(recipe);
      //   this.recipesChanged.next(this.recipes.slice());
      // }

      // updateRecipe(index: number, newRecipe: Recipe){
      //   this.recipes[index] = newRecipe;
      //   this.recipesChanged.next(this.recipes.slice());
      // }

      // deleteRecipe(index: number){
      //   this.recipes.splice(index, 1);
      //   this.recipesChanged.next(this.recipes.slice());
      // }
}