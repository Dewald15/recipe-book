import * as ShoppingListActions from './shopping-list.actions';
import { Ingredient } from '../../shared/ingredient.model';

export interface State {
    ingredients: Ingredient[];
    editedIngredient: Ingredient;
    editedIngredientIndex: number;
}

const initialState: State = {   // ': State' is the same as 'implements State'
    ingredients: [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ],
    editedIngredient: null,
    editedIngredientIndex: -1
}

export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions){  // a reducer function will be triggered whenever an action is dispatched
    switch(action.type){
        case ShoppingListActions.ADD_INGREDIENT:
            return {
                ...state, //taking all the old state parameters so that all properties of that object are added to the new object we are returning
                ingredients: [...state.ingredients, action.payload] //overwrite one of these properties, ingredients, this shall now be an array where we also add the new ingredient to it
            }
        case ShoppingListActions.ADD_INGREDIENTS:
            return {
                ...state, //taking all the old state parameters so that all properties of that object are added to the new object we are returning
                ingredients: [...state.ingredients, ...action.payload] //overwrite one of these properties, ingredients, this shall now be an array where we also add the new ingredient to it
            }
        case ShoppingListActions.UPDATE_INGREDIENT:
            const ingredient = state.ingredients[state.editedIngredientIndex];
            const updatedIngredient = {
                ...ingredient,
                ...action.payload.ingredient
            }
            const ingredients = [...state.ingredients];
            ingredients[state.editedIngredientIndex] = updatedIngredient;
            return {
                ...state,
                ingredients: ingredients,
                editedIngredient: null,
                editedIngredientIndex: -1
            }
        case ShoppingListActions.DELETE_INGREDIENT:
            const oldIngredients = [...state.ingredients];
            oldIngredients.splice(state.editedIngredientIndex, 1); // note: action.payload here is equal to an index
            return {
                ...state,
                ingredients: oldIngredients,
                editedIngredient: null,
                editedIngredientIndex: -1
            }
        case ShoppingListActions.START_EDIT:
            const editedIngredient = {...state.ingredients[action.payload]};
            return{
                ...state,
                editedIngredient: editedIngredient,
                editedIngredientIndex: action.payload
            }
        case ShoppingListActions.STOP_EDIT:
            return{
                ...state,
                editedIngredient: null,
                editedIngredientIndex: -1
            }
        default:
            return state;
    }
} 