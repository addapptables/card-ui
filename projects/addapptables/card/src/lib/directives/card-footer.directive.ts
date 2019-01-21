import { Directive } from '@angular/core';

@Directive({
  selector: 'addapptable-card-footer, [addapptable-card-footer], [addapptableCardFooter]',
  host: { class: 'card-footer' }
})
export class CardFooterDirective { }
