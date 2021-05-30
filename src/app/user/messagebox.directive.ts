import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMessagebox]'
})
export class MessageboxDirective {

  constructor(public ref:ElementRef ) {
    this.ref.nativeElement.style.color ="red";
   }

}
