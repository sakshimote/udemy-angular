import { Component, OnInit } from '@angular/core';
import { Recipees } from './model/recipees.model';
import { RecipeeService } from './service/recipee.service';

@Component({
  selector: 'app-recipees',
  templateUrl: './recipees.component.html',
  styleUrls: ['./recipees.component.css'],
  providers:[ RecipeeService]
})
export class RecipeesComponent implements OnInit {
  selectedRecipee:Recipees;

  constructor(private recipeeService:RecipeeService){

  }

  ngOnInit(){
 

  }


}
