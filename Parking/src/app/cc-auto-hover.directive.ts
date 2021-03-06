import { Directive, ElementRef, Renderer, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCcAutoHover]'
})
export class CcAutoHoverDirective {

  constructor(private el: ElementRef, private renderer: Renderer) {

  }
 @HostListener  ('mouseover') onmouseover() {
   const part = this.el.nativeElement.querySelector('.card-img');
   this.renderer.setElementAttribute(part, 'src', 'assets/img/5Porte.jpg');
   this.renderer.setElementAttribute(part, 'style', 'width:10%');
 }
 @HostListener  ('mouseout') onmouseout() {
  const part = this.el.nativeElement.querySelector('.card-img');
  this.renderer.setElementAttribute(part, 'src', 'assets/img/5Porte.jpg');
  this.renderer.setElementAttribute(part, 'style', 'width:5%');
}
}
