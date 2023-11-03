import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeesComponent } from './recipees/recipees.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeeStartComponent } from './recipees/recipee-start/recipee-start.component';
import { RecipeeDetailsComponent } from './recipees/recipee-details/recipee-details.component';
import { RecipeeEditComponent } from './recipees/recipee-edit/recipee-edit.component';

const routes: Routes = [
  {path:'',redirectTo:'/recipees', pathMatch:'full'},
  {path:'recipees',component:RecipeesComponent, children:[
    {path:'',component:RecipeeStartComponent},
    {path:'new',component:RecipeeEditComponent},
    {path:':id',component:RecipeeDetailsComponent},
    {path:':id/edit',component:RecipeeEditComponent}
  ]},
  {path:'shopping-list',component:ShoppingListComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
