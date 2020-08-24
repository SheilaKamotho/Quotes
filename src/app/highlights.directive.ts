import { Directive } from '@angular/core';

@Directive({
  selector: '[appHighlights]'
})
export class HighlightsDirective {

  constructor(elem:ElementRef) {
    elem.nativeElement.style.backgroundColor="#834c69"
   }

}
