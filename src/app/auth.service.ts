import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class AuthService {

  constructor() { }
  
  // register

  addUser(user: any) {
    let users = [];
    if(localStorage.getItem('Users')) {
      users = JSON.parse(localStorage.getItem('Users'));
      users = [user, ...users]
    }else{
      users= [user];
    }
    localStorage.setItem('Users', JSON.stringify(users));
  }
    // login
    
  authUser(user: any){
    let UserArray = [];
    if(localStorage.getItem('Users')){
      UserArray = JSON.parse(localStorage.getItem('Usres'));
    }
    return UserArray.find(p => p.userName === user.userName && p.password === user.password);
  }
}
