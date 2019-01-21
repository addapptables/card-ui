import { Directive } from '@angular/core';

@Directive({
  selector: 'addapptable-card-header-subtitle, [addapptable-card-header-subtitle], [addapptableCardHeaderSubtitle]',
  host: {
    class: 'card-header-subtitle-h3'
  }
})
export class CardHeaderSubtitleDirective { }
