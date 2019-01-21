import { Directive } from '@angular/core';

@Directive({
  selector: 'addapptable-card-divider, [addapptable-card-divider], [addapptableCardDivider]',
  host: {
    class: 'card-divider'
  }
})
export class CardDividerDirective { }
