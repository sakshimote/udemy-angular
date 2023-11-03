import {  Injectable } from "@angular/core";
import { Recipees } from "../model/recipees.model";
import { Ingredients } from "../model/ingredients.model";
import { ShoppingListService } from "src/app/shopping-list/service/shopping-list.service";
import {Subject} from 'rxjs';

@Injectable()
export class RecipeeService{

  recipeesChanged=new Subject<Recipees[]>();

    constructor(private shoppingListService:ShoppingListService){

    }

   // private recipees:Recipees[]=[];
  private recipees:Recipees[]=
  [
    new Recipees('chicken recipe','a test recipee',
  'https://www.averiecooks.com/wp-content/uploads/2021/01/garlicbutterchicken-5.jpg',
  [new Ingredients('chicken',1),new Ingredients('meat',1)]),
  new Recipees('another chicken recipe','a test recipee',
  'https://www.averiecooks.com/wp-content/uploads/2021/01/garlicbutterchicken-5.jpg',
  [new Ingredients('onion',1)])
];





  getRecipees(){
    return this.recipees.slice();
  }




  addIngredientsToShoppingList(ingredients:Ingredients[]){
    this.shoppingListService.addIngredinets(ingredients);
  }

  getRecipee(id: number){
    return this.recipees[id];
  }

  addRecipee(recipee:Recipees){
    this.recipees.push(recipee);
    this.recipeesChanged.next(this.recipees.slice());
  }

  updateRecipee(index:number,recipee:Recipees){
    this.recipees[index]=recipee;
    this.recipeesChanged.next(this.recipees.slice());
  }

  deleteRecipee(index:number){
    this.recipees.splice(index,1);
    this.recipeesChanged.next(this.recipees.slice())

  }


  setRecipees(newRecipees:Recipees[]){
    this.recipees=newRecipees;
    
    this.recipeesChanged.next(this.recipees.slice());
      }
    

}