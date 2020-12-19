import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  createUser: any;
  delete: any;

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')

  }

  addUser(user: any) {
    return this.http.post('https://jsonplaceholder.typicode.com/users', user)
  }

  getUserById(id: any) {
    return this.http.get('https://jsonplaceholder.typicode.com/users'+ id)
  }

  updateUser(user: any, id: any) {
    return this.http.put('https://jsonplaceholder.typicode.com/users/' + id, user)
  }

  deleteUser(id: any) {
    return this.http.delete('https://jsonplaceholder.typicode.com/users/' + id)
  }
}
