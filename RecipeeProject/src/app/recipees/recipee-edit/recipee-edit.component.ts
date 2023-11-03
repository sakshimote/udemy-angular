import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeeService } from '../service/recipee.service';


@Component({
  selector: 'app-recipee-edit',
  templateUrl: './recipee-edit.component.html',
  styleUrls: ['./recipee-edit.component.css']
})
export class RecipeeEditComponent implements OnInit {
id:number;
editMode=false;
recipeeForm:FormGroup;




  constructor(private route:ActivatedRoute,
    private recipeeService:RecipeeService,
    private router:Router){


  }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{

this.id=+params['id'];
this.editMode=params['id']!=null;

this.initForm();
    });
  }


  private initForm(){
    
    let recipeeName='';
    let recipeeImgPath='';
    let recipeeDescription='';
    let recipeeIngredients=new FormArray([]);

if(this.editMode){
  const recipee=this.recipeeService.getRecipee(this.id);
  recipeeName=recipee.name;
  recipeeImgPath=recipee.imagePath;
  recipeeDescription=recipee.description;
  if(recipee['ingredients']){
    for(let ingredient of recipee.ingredients){
      recipeeIngredients.push(new FormGroup({
        'name':new FormControl(ingredient.name,Validators.required),
        'amount':new FormControl(ingredient.amount,[Validators.required,Validators.pattern(/^[0-9]+[1-9]*$/)])
      }))
    }
  }

}

    this.recipeeForm=new FormGroup({
      'name':new FormControl(recipeeName,Validators.required),
      'imagePath':new FormControl(recipeeImgPath,Validators.required),
      'description':new FormControl(recipeeDescription,Validators.required),
      'ingredients':recipeeIngredients

    });

  }

  onSubmit(){
    // const newRecipee=new Recipees(
    //   this.recipeeForm.value['name'],
    //   this.recipeeForm.value['description'],
    //   this.recipeeForm.value['imagePath'],
    //   this.recipeeForm.value['ingredients'],
    // );
   if(this.editMode){
    
    this.recipeeService.updateRecipee(this.id,this.recipeeForm.value);
   }else{
    this.recipeeService.addRecipee(this.recipeeForm.value);
   }

   this.onCancel();
  }

  get controls() { // a getter!
    return (<FormArray>this.recipeeForm.get('ingredients')).controls;
  }

  onAddIngredient(){
    (<FormArray>this.recipeeForm.get('ingredients')).push(
      new FormGroup({
        'name':new FormControl(null,Validators.required),
        'amount':new FormControl(null,[Validators.required,Validators.pattern(/^[0-9]+[1-9]*$/)])
      })
    )
  }


  onCancel(){
    this.router.navigate(['../'],{relativeTo:this.route});

  }


  onDeleteIngredient(index:number){
(<FormArray>this.recipeeForm.get('ingredients')).removeAt(index);
  }

}
