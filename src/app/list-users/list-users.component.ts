import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  users = [];
  // isupdate= true;
  userObj = {
    id: '',
    email: '',
    password: '',
    name: '',
    lastname: '',
  }

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.getUsers();

  }

  getUsers() {
    this.usersService.getUsers().subscribe((response: any) => {
      this.users = response;
    })
  }

  deleteUser(id: any) {
    this.usersService.deleteUser(id).subscribe(() => {
      this.users = this.users.filter
        (user => user.id != id)
    })
  }

  // updateUser(user: any, id: any) {
  //   this.userObj = user
  // }

}
