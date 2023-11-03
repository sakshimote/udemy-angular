import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from './user/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  constructor(private userService:UserService) {}


  userActivated=false;
  private activatedSub:Subscription;

  ngOnInit() {
   this.activatedSub= this.userService.activatedEmitter.subscribe(didActivate=>{
      this.userActivated=didActivate;
    })

  }
  ngOnDestroy() {

    this.activatedSub.unsubscribe();
  }
}
