import { NgFor } from '@angular/common';
import { Component,signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signal.component.html',
  standalone: true,
  imports: [NgFor],
})
export class SignalsComponent {
  actions: string[] = [];
  counter = signal(0);

  increment() {
   this.counter.update((oldvalue)=>oldvalue+1);
    this.actions.push('INCREMENT');
  }

  decrement() {
    this.counter.update((oldvalue)=>oldvalue-1);
    this.actions.push('DECREMENT');
  }
}
