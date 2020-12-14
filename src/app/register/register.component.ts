import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData = {};
  
  constructor() { }

  ngOnInit(): void {
  }

  registerUser(){
    console.log(this.registerUserData);
    
  }
}
