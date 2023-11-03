import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipees } from '../../model/recipees.model';
import { RecipeeService } from '../../service/recipee.service';

@Component({
  selector: 'app-recipee-item',
  templateUrl: './recipee-item.component.html',
  styleUrls: ['./recipee-item.component.css']
})
export class RecipeeItemComponent implements OnInit {

@Input()  recipee:Recipees;

@Input() index:number;

constructor(private recipeeService: RecipeeService){

}

//@Output() recipeeSelected=new EventEmitter<void>();

  ngOnInit() {
    
  }

   
  }


