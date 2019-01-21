import { Directive } from '@angular/core';

@Directive({
  selector: 'addapptable-card-body, [addapptable-card-body], [addapptableCardBody]',
  host: { class: 'card-body' }
})
export class CardBodyDirective { }
