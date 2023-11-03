import { NgFor } from '@angular/common';
import { Component,computed,signal,effect } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signal.component.html',
  standalone: true,
  imports: [NgFor],
})
export class SignalsComponent {

  constructor(){
    effect(()=>console.log(this.counter()));
  }
  actions = signal<string[]>([]);
  counter = signal(0);

  doubleCounter=computed(()=>this.counter()*2);

  increment() {
  // this.counter.update((oldvalue)=>oldvalue+1);
 this.counter.set(this.counter()+1)
this.actions.mutate((oldvalue)=>{oldvalue.push('INCREMENT')})
    //this.actions.push('INCREMENT');
  }

  decrement() {
    this.counter.update((oldvalue)=>oldvalue-1);
    //this.actions.push('DECREMENT');
    this.actions.update((oldvalue)=>[...oldvalue,'DECREMENT'])
  }
}
