import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users;
  temp;

  constructor(private http: HttpClient) { }

  loadUser(): void {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((data) => {
      this.users = data;
    });
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((data) => {
      this.temp = data;
    });
  }

  postUser() {
    return this.http
      .post('https://jsonplaceholder.typicode.com/users', {
        id: 11,
        name: "Clementina DuBuque",
        username: "Moriah.Stanton",
        email: "Rey.Padberg@karina.biz",
        address: {
          street: "Kattie Turnpike",
          suite: "Suite 198",
          city: "Lebsackbury",
          zipcode: "31428-2261",
          geo: {
            lat: "-38.2386",
            lng: "57.2232"
          }
        },
        phone: "024-648-3804",
        website: "ambrose.net",
        company: {
          name: "Hoeger LLC",
          catchPhrase: "Centralized empowering task-force",
          bs: "target end-to-end models"
        }
      })
      .pipe(
        map((data) => {
          return data;
        })
      ).subscribe((data) => {console.log("post", data)});
  }

  putUser() {
    return this.http
      .put('https://jsonplaceholder.typicode.com/users/4', {
        id: 11,
        name: "Clementina DuBuque",
        username: "Moriah.Stanton",
        email: "Rey.Padberg@karina.biz",
        address: {
          street: "Kattie Turnpike",
          suite: "Suite 198",
          city: "Lebsackbury",
          zipcode: "31428-2261",
          geo: {
            lat: "-38.2386",
            lng: "57.2232"
          }
        },
        phone: "024-648-3804",
        website: "ambrose.net",
        company: {
          name: "Hoeger LLC",
          catchPhrase: "Centralized empowering task-force",
          bs: "target end-to-end models"
        }
      })
      .pipe(
        map((data) => {
          return data;
        })
      ).subscribe((data) => {console.log("put", data)});
  }

  deleteUser() {
    return this.http
      .delete('https://jsonplaceholder.typicode.com/users/4')
      .pipe(
        map((data) => {
          return data;
        })
      ).subscribe((data) => {console.log("delete", data)});
  }
}
