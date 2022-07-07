import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(firstName: string, lastName: string, ...args: unknown[]): unknown {
    return firstName + ' ' + lastName;
  }

}
