import { Pipe, PipeTransform } from '@angular/core';
import { AppComponent } from './app.component';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(users: AppComponent, value: string): AppComponent[] {
    return users.users[0].filter(user => {
      return user.name.includes(value);
    });
  }

}
