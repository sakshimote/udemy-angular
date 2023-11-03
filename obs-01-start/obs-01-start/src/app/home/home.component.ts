import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { Observable } from 'rxjs-compat';
import { map } from 'rxjs-compat/operator/map';
import { Pipe } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , OnDestroy{

  constructor() { }

  private firstObsSub:Subscription;

  ngOnInit() {
  //  this.firstObsSub= interval(1000).subscribe(count=>{
  //     console.log(count);
  //   })
  const customObs=Observable.create((observer)=>{
    let count=0;
    setInterval(()=>{
      observer.next(count);

      if(count==2){
        observer.complete();
      }
      if(count>3){
        observer.error(new Error('count greater than 3'));
        
      }
      count++;
    },1000)

  });



  this.firstObsSub=  customObs.subscribe((data)=>{
    console.log(data);
  },error=>{
    console.log(error);
    alert(error);
  },()=>{
    alert('completed')
  })

  }

  ngOnDestroy(){
    this.firstObsSub.unsubscribe();
    
  }

}
function data(value: unknown, index: number): unknown {
  throw new Error('Function not implemented.');
}

