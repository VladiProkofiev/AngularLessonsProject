import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ifRules]'
})
export class IfRulesDirective {

  constructor(private templateRef: TemplateRef<any>, 
    private viewContainer: ViewContainerRef) { }

@Input() set ifRules(confirmation: boolean) {
  if (confirmation) {
    this.viewContainer.createEmbeddedView(this.templateRef);
  } else {
    this.viewContainer.clear();
  }
}

}
