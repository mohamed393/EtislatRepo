import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary',
})
export class SummaryPipe implements PipeTransform {
  transform(
    value: string,
    length: number = 80
  ): { text: string; readMore: boolean } {
    if (value) {
      return {
        text: value.length > length ? value.substr(0, length) + '....' : value,
        readMore: value.length > length,
      };
    } else {
      return {
        text: '',
        readMore: false,
      };
    }
  }
}
