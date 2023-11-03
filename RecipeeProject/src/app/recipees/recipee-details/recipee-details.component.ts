import { Component, OnInit } from '@angular/core';
import { Recipees } from '../model/recipees.model';
import { RecipeeService } from '../service/recipee.service';
import { Ingredients } from '../model/ingredients.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipee-details',
  templateUrl: './recipee-details.component.html',
  styleUrls: ['./recipee-details.component.css']
})
export class RecipeeDetailsComponent implements OnInit {

  id:number;
  recipee:Recipees;

  constructor(private recipeeService:RecipeeService,
    private route:ActivatedRoute,
    private router:Router){

  }

  ngOnInit(){
    this.route.params.subscribe((params:Params)=>{
      this.id=+params['id'];
      this.recipee=this.recipeeService.getRecipee(this.id);
    });
  }




  OnAddShoppingList(){
    this.recipeeService.addIngredientsToShoppingList(this.recipee.ingredients);

  }

  onEditRecipee(){
    this.router.navigate(['edit'],{relativeTo:this.route});

  }

  deleteRecipee(){
    this.recipeeService.deleteRecipee(this.id);
    this.router.navigate(['/recipees']);
  }


}
