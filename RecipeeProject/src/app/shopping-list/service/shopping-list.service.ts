import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredients } from "src/app/recipees/model/ingredients.model";

export class ShoppingListService{

    ingredientsChanged=new Subject<Ingredients[]>();
    startedEditing=new Subject<number>();

   private ingredients:Ingredients[]=[new Ingredients("meat", 2)];

   getIngredients(){
    return this.ingredients.slice();
   }

   addIngredient(ingredient:Ingredients){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
   }

   addIngredinets(ingredients:Ingredients[]){
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());

   }

   getIngredient(index:number){
    return this.ingredients[index];
   }

   upgradeIngredient(index:number,newIngredient:Ingredients){
    this.ingredients[index]=newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());

   }

   deleteIngredient(index:number){
    this.ingredients.splice(index,1);
    this.ingredientsChanged.next(this.ingredients.slice());
   }

}