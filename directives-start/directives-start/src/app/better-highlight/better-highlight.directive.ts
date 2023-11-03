import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor:string='transparent';
  @Input() highlightColor:string='blue';

  constructor(private eleRef:ElementRef, private renderer:Renderer2) { }


  @HostBinding('style.backgroundColor') backgooundColor:string;

  ngOnInit(){
    //this.renderer.setStyle(this.eleRef.nativeElement,'backgroundColor','blue');
    this.backgooundColor=this.defaultColor;
  }


  @HostListener('mouseenter') mouseover(eventData:Event){

  //  this.renderer.setStyle(this.eleRef.nativeElement,'backgroundColor','blue');
    this.backgooundColor=this.highlightColor;

  } 

  @HostListener('mouseleave') mouseleave(eventData:Event){
    //this.renderer.setStyle(this.eleRef.nativeElement,'backgroundColor','transparent');
    this.backgooundColor=this.defaultColor;
  }

}
