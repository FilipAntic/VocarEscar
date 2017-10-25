import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMenuCollapse]'
})
export class MenuCollapseDirective {

  @HostListener('window:resize') collapse() {
    console.log(this.el);
  }
  constructor(private el: ElementRef) { }

}
