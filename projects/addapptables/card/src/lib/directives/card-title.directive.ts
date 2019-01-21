import { Directive } from '@angular/core';

@Directive({
  selector: 'addapptable-card-title, [addapptable-card-title], [addapptableCardTitle]',
  host: { class: 'card-header-title' }
})
export class CardTitleDirective { }
