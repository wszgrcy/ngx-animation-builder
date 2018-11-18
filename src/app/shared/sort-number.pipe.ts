import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortNumber'
})
export class SortNumberPipe implements PipeTransform {

  transform(value: any[], args?: any): any {
    return value.sort((a, b) => +a.key - +b.key);
  }

}
