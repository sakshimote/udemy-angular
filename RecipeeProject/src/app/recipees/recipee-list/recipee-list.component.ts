import { ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Recipees } from '../model/recipees.model';
import { RecipeeService } from '../service/recipee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-recipee-list',
  templateUrl: './recipee-list.component.html',
  styleUrls: ['./recipee-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeeListComponent implements OnInit ,OnDestroy{
subscriptions: Subscription;
recipees:Recipees[];

constructor(private recipeeService: RecipeeService,private router:Router,
  private route: ActivatedRoute){

}

//@Output() recipeeWasSelected=new EventEmitter<Recipees>();

  
  //=
  // [new Recipees('chicken recipe','a test recipee','https://www.averiecooks.com/wp-content/uploads/2021/01/garlicbutterchicken-5.jpg'),
  // new Recipees('another chicken recipe','a test recipee','https://www.averiecooks.com/wp-content/uploads/2021/01/garlicbutterchicken-5.jpg')];

  ngOnInit() {

   this.subscriptions= 
   this.recipeeService.recipeesChanged.subscribe(
    (newrecipees:Recipees[])=>{
this.recipees=newrecipees;

    }
    );

  //  this.recipeeService.recipeesChanged.next(this.recipeeService.getRecipee());

    this.recipees=this.recipeeService.getRecipees();
  

  }

  // onRecipeeSelected(recipee:Recipees){
  //   this.recipeeWasSelected.emit(recipee);
  // }

  onNewRecipee(){
    this.router.navigate(['new'], {relativeTo:this.route});


  }

  ngOnDestroy(){
    this.subscriptions.unsubscribe();
  }


}
