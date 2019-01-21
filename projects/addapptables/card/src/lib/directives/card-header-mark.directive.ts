import { Directive } from '@angular/core';

@Directive({
  selector: 'addapptable-card-header-mark, [addapptable-card-header-mark], [addapptableCardHeaderMark]',
  host: {
    class: 'card-header-subtitle-mark'
  }
})
export class CardHeaderMarkDirective { }
