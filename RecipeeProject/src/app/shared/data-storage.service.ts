import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recipees } from "../recipees/model/recipees.model";
import { RecipeeService } from "../recipees/service/recipee.service";
import { map } from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class DataStorageService{

    constructor(private http:HttpClient,private recipeeService:RecipeeService){}

storeRecipees(){
const recipees= this.recipeeService.getRecipees();


  this.http.put('https://recipeeproject-default-rtdb.firebaseio.com/recipees.json',recipees)
  .subscribe(response=>{
    console.log(response);
  });


}


fetchRecipees(){

    let recipees= this.recipeeService.getRecipees();
    this.http.get<Recipees[]>('https://recipeeproject-default-rtdb.firebaseio.com/recipees.json')
    
    // .pipe(
    //     map(recipes => {
    //       return recipes.map(recipe => {
    //         return {
    //           ...recipe,
    //           ingredients: recipe.ingredients ? recipe.ingredients : []
    //         };
    //       });
    //     })
    //   )

    .subscribe(recipee=>{
      
        this.recipeeService.setRecipees(recipee);
        recipees=recipee;
        console.log(recipee);
    })
    
}




}