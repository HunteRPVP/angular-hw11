import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-hw11';
  users;
  temp;
  searchStr: string;

  constructor(public usersService: UsersService) {
    usersService.loadUser();
  }

  filter(value: string) {
    this.usersService.users = this.usersService.temp;
    this.usersService.users = this.usersService.users as Object[];
    this.usersService.users = this.usersService.users.filter(user => {
      console.log(user);
      return user.name.includes(value) || user.username.includes(value) || user.email.includes(value) || user.address.includes(value);
    });
  }

  addUser(): void {
    this.usersService.postUser();
    this.usersService.users.push({
      id: 11,
      name: "Clementina DuBuque",
      username: "Moriah.Stanton",
      email: "Rey.Padberg@karina.biz",
      address: "31428-2261, Lebsackbury, Kattie Turnpike, Suite 198",
      phone: "024-648-3804",
      website: "ambrose.net",
      company: {
        name: "Hoeger LLC",
        catchPhrase: "Centralized empowering task-force",
        bs: "target end-to-end models"
      }
    });
  }

  changeUser(): void {
    this.usersService.putUser();
    this.usersService.users[4] = ({
      id: 11,
      name: "Clementina DuBuque",
      username: "Moriah.Stanton",
      email: "Rey.Padberg@karina.biz",
      address: "31428-2261, Lebsackbury, Kattie Turnpike, Suite 198",
      phone: "024-648-3804",
      website: "ambrose.net",
      company: {
        name: "Hoeger LLC",
        catchPhrase: "Centralized empowering task-force",
        bs: "target end-to-end models"
      }
    });
  }

    deleteUser(): void {
      this.usersService.deleteUser();
      this.usersService.users.splice(4,1);
  }
}
