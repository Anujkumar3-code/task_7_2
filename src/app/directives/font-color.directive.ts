import { Directive,SimpleChanges, ElementRef, OnChanges, Input } from '@angular/core';

@Directive({
  selector: '[appFontColor]'
})
export class FontColorDirective implements OnChanges {
  @Input('isDeleted') isDeleted: boolean = false;
  constructor(private el: ElementRef) {
  }
  ngOnChanges(changes: SimpleChanges): void {

    if (this.isDeleted) {
      this.el.nativeElement.style.color = 'red';
    }
    else {
      this.el.nativeElement.style.color = 'green';
    }
  }
}
