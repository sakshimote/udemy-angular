import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredients } from '../recipees/model/ingredients.model';
import { ShoppingListService } from './service/shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {

  constructor(private shoppingListService: ShoppingListService){}

  ingredients:Ingredients[];
  //=[new Ingredients("meat", 2)];

  private igChangeSub:Subscription;

  ngOnInit(){
    this.ingredients=this.shoppingListService.getIngredients();
   this.igChangeSub= this.shoppingListService.ingredientsChanged.subscribe((ingredients:Ingredients[])=>{
      this.ingredients=ingredients;

    });
  
  }

  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }

  onIngredientAdded(ingredient:Ingredients){
    this.ingredients.push(ingredient);

  }

  onEditItem(index:number){
    this.shoppingListService.startedEditing.next(index)

  }

}
