import { Directive, ElementRef, Renderer, HostBinding, HostListener, style } from '@angular/core';

@Directive({
  selector: '[appCcFurgoneHover]'
})
export class CcFurgoneHoverDirective {

  constructor(private el: ElementRef, private renderer: Renderer) {

  }
 @HostListener  ('mouseover') onmouseover() {
   const part = this.el.nativeElement.querySelector('.card-img');
   this.renderer.setElementAttribute(part, 'src', 'assets/img/furgone.jpg');
   this.renderer.setElementAttribute(part, 'style', 'width:10%');
 }
 @HostListener  ('mouseout') onmouseout() {
  const part = this.el.nativeElement.querySelector('.card-img');
  this.renderer.setElementAttribute(part, 'src', 'assets/img/furgone.jpg');
  this.renderer.setElementAttribute(part, 'style', 'width:5%');
}
}
