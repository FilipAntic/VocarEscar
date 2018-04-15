import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {

  menuArray: string[] = ["home", "about", "products", "production", "contact"];
  @HostListener('click') scrollTo() {
    // document.querySelector('this.el.nativeElement.hash').scrollIntoView({ behavior: 'smooth' });
    // setTimeout(document.getElementById("about").scrollIntoView({ behavior: 'smooth' }), 0);
    // console.log("Odradio");
    let hash = "";
    switch (this.el.nativeElement.id) {
      case "first":
        hash = this.menuArray[0];
        break;
      case "second":
        hash = this.menuArray[1];
        break;
      case "third":
        hash = this.menuArray[2];
        break;
      case "fourth":
        hash = this.menuArray[3];
        break;
      case "fifth":
        hash = this.menuArray[4];
        break;

    }
    let element = document.getElementById(hash);
    if (element === null) {
      return;
    }
    element.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }
  constructor(private el: ElementRef) {
  }

}
