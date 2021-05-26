import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBold]',
  host: {'(mouseenter)': 'onMouseEnter()'},
})
export class BoldDirective {

  @Input() selectSize = '20px';
  @Input() defaultSize= '16px';

  private fontSize: string;
  private fontWeight = 'normal';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.fontSize = this.defaultSize; 
    this.renderer.setStyle(this.elementRef.nativeElement, "cursor", "pointer");
  }

  @HostBinding("style.fontSize") get getFontSize(){
    return this.fontSize;
  }
 
  @HostBinding("style.fontWeight") get getFontWeight(){
    return this.fontWeight;
  }

  onMouseEnter() {
  this.setFontWeight("bold");
  this.fontSize = this.selectSize;
  }

  @HostListener("mouseleave") onMouseLeave() {
  this.setFontWeight("normal");
  this.fontSize = this.defaultSize;
  }

  private setFontWeight(value: string) {
  this.renderer.setStyle(this.elementRef.nativeElement, "font-weight", value);
}
}
