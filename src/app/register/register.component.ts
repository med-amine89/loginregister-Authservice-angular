import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { FormControl, FormGroup, Validators, } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
 user: any = {};
  registrationForm: FormGroup;
  registration: any;
  submited: boolean = false;
  
  
  constructor(private authservice: AuthService) { }

  ngOnInit(): void {

    this.registrationForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password: new FormControl('', [Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%?&]).{0,8}$")]),
      name: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    this.submited = true;
    if (this.registrationForm.value.invalid) {
      return;
    }
   console.log(this.registrationForm.value);  
   this.user = Object.assign(this.user, this.registrationForm.value);
   this.authservice.addUser(this.user);
}
  
}
