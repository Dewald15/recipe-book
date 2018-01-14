import { Action } from '@ngrx/store';
import { Ingredient } from '../../shared/ingredient.model';

export const ADD_INGREDIENT = 'ADD_INGREDIENT'; // define unique idetifier for this action 
export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';
export const UPDATE_INGREDIENT = 'UPDATE_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export const START_EDIT = 'START_EDIT';
export const STOP_EDIT = 'STOP_EDIT';

export class AddIngredient implements Action {
    readonly type = ADD_INGREDIENT; //we need type here for action to use in the reducers file
    
    constructor(public payload: Ingredient) {} // dispatched from shopping-edit.component.ts
}

export class AddIngredients implements Action {
    readonly type = ADD_INGREDIENTS; //we need type here for action to use in the reducers file
    
    constructor(public payload: Ingredient[]) {} // dipsatched from recipe-detail.component.ts
}

export class UpdateIngredient implements Action {
    readonly type = UPDATE_INGREDIENT; //we need type here for action to use in the reducers file
    
    constructor(public payload: {ingredient: Ingredient}) {} 
}

export class DeleteIngredient implements Action {
    readonly type = DELETE_INGREDIENT; //we need type here for action to use in the reducers file
}

export class StartEdit implements Action {
    readonly type = START_EDIT; //we need type here for action to use in the reducers file
    
    constructor(public payload: number) {} 
}

export class StopEdit implements Action {
    readonly type = STOP_EDIT; //we need type here for action to use in the reducers file
}

export type ShoppingListActions =   //bundle all types in a ShoppingListActions type
    AddIngredient | AddIngredients | 
    UpdateIngredient |
    DeleteIngredient | 
    StartEdit |
    StopEdit; 