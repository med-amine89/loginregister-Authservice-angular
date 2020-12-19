import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user;
  registrationForm: FormGroup;
  registration: any;
  submited: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

    this.registrationForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password: new FormControl('', [Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%?&]).{0,8}$")]),
    });
  }


  onSubmit() {
    this.submited = true;
    if (this.registrationForm.value.invalid) {
      return;
    }
    const userFound = this.authService.authUser(this.registrationForm.value);
    if(userFound !== undefined)
    {
      // redirect to  path dashboard
        this.router.navigate(['dashboard']);
    }
    else {
      // show alert worning (toster service)
    }
  }
 
}
