import { Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredients } from 'src/app/recipees/model/ingredients.model';
import { ShoppingListService } from '../service/shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {


  @ViewChild('f',{static:false}) slForm:NgForm ;


  subscription:Subscription;
  editMode=false;
  editedItemIndex:number;

  editedItem:Ingredients;



  //@Output() ingredientAdded=new EventEmitter<Ingredients>();

  constructor(private shoppingListService:ShoppingListService){

  }

ngOnInit(){

 this.subscription= this.shoppingListService.startedEditing.subscribe(
  (index:number)=>{
    this.editedItemIndex=index;
    this.editMode=true;
    this.editedItem= this.shoppingListService.getIngredient(index);
    this.slForm.setValue({
      'name':this.editedItem.name,
      'amount':this.editedItem.amount
    
    })
  }
 );

}


  onSubmit(form:NgForm){
    const value=form.value;
   
    const newIngredient=new Ingredients(value.name,value.amount);

    if(this.editMode){
      this.shoppingListService.upgradeIngredient(this.editedItemIndex,newIngredient);
    }else{
      this.shoppingListService.addIngredient(newIngredient);
    }

    this.editMode=false;
    form.reset();
 
  //  this.ingredientAdded.emit(newIngredient);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onClear(){
    this.slForm.reset();
    this.editMode=false;
  }
  onDelete(){
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClear();

  }

}
