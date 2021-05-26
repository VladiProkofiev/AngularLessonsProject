import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBold]',
  host: {'(mouseenter)': 'onMouseEnter()'},
})
export class BoldDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { 
    this.renderer.setStyle(this.elementRef.nativeElement, "cursor", "pointer")
  }
onMouseEnter() {
  this.setFontWeight("bold");
}
@HostListener("mouseleave") onMouseLeave() {
  this.setFontWeight("normal");
}
private setFontWeight(value: string) {
  this.renderer.setStyle(this.elementRef.nativeElement, "font-weight", value);
}
}
