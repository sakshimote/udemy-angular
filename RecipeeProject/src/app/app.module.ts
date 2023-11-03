import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeesComponent } from './recipees/recipees.component';

import { RecipeeDetailsComponent } from './recipees/recipee-details/recipee-details.component';
import { RecipeeListComponent } from './recipees/recipee-list/recipee-list.component';
import { RecipeeItemComponent } from './recipees/recipee-list/recipee-item/recipee-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownDirective } from './recipees/model/shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/service/shopping-list.service';
import { RecipeeStartComponent } from './recipees/recipee-start/recipee-start.component';
import { RecipeeEditComponent } from './recipees/recipee-edit/recipee-edit.component';
import { RecipeeService } from './recipees/service/recipee.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeesComponent,

    RecipeeDetailsComponent,
    RecipeeListComponent,
    RecipeeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeeStartComponent,
    RecipeeEditComponent
   
  ],
  imports: [
    BrowserModule,
   
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

    AppRoutingModule,
   
  ],
  providers: [ShoppingListService,RecipeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
