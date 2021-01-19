import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

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

  constructor(private usersService: UsersService, private router: Router) { }

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
      // this.users = this.users.filter
      //   (user => user.id != id)
    })
  }

  updateUser(user: any, id: any) {
    this.router.navigate(['users/update/:id']);
  }
  
  addUser(user: any){
    this.router.navigate(['users/add']);
  }
}
