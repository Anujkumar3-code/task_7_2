import { FontColorDirective } from './font-color.directive';

describe('FontColorDirective', () => {
  it('should create an instance', () => {
    let elRefMock = {
      nativeElement: document.createElement('div')
    };
    const directive = new FontColorDirective(elRefMock);
    expect(directive).toBeTruthy();
  });
});
