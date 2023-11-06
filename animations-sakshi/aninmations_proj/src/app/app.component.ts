import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations:[
    trigger('divState',[
      state('normal',style({
        'background-color': 'red',
        transform:'translateX(0)'
      })),
     state('highlighted',style({
      'background-color': 'blue',
      transform:'translateX(100px)'
     })),
     transition('normal=>highlighted',animate(300)),
     transition('highlighted=>normal',animate(300))
    ]),

    trigger('wildState',[
      
      state('shrunken',style({
        'background-color': 'green',
        transform:'translateX(0) scale(0.5)'
       })),
      state('normal',style({
        'background-color': 'red',
        transform:'translateX(0) scale(1)'
      })),
     state('highlighted',style({
      'background-color': 'blue',
      transform:'translateX(100px) scale(1)'
     })),
   

     transition('normal=>highlighted',animate(300)),
     transition('highlighted=>normal',animate(800))
    ])

  ]
})
export class AppComponent {
  wildState='normal';
  state='normal'
  list = ['Milk', 'Sugar', 'Bread'];

    onAdd(item: any) {
      this.list.push(item);
    }

    onDelete(item:any){
      this.list.splice(this.list.indexOf(item),1);

    }

    onAnimate(){
this.state=='normal'?this.state='highlighted':this.state='normal';
this.wildState=='normal'?this.wildState='highlighted':this.wildState='normal';
    }

    
    onShrink(){
      console.log('hello');
      this.wildState='shrunken';
    }

}
