import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryToString',
  standalone: true
})
export class CategoryToStringPipe implements PipeTransform {

  transform(value: number): string {
    const categoryStrings = [
      'Apetizer',
      'First course',
      'Second course',
      'Side',
      'Dessert',
      'Cocktail'
    ]
    return categoryStrings[value];
  }

}
