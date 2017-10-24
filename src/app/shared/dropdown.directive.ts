import { Directive, HostListener, HostBinding, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') isOpen: boolean = false;
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
    if (this.el) {
      if (this.isOpen === true) {
        // this.renderer.addClass(this.el.nativeElement, 'active');
      } else {
        // this.renderer.removeClass(this.el.nativeElement, 'active');
      }
    }

  }
  constructor(private el: ElementRef, private renderer: Renderer2) { }

}
