import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  users: [];
addForm: FormGroup;
id: string;
  user: any;
// get email() { return this.addForm.get('email').value }
// get password() { return this.addForm.get('password').value }
// get name() { return this.addForm.get('name').value }
// get lastname() { return this.addForm.get('lastname').value }

  constructor(private usersService: UsersService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.addForm= new FormGroup({
     
     email: new FormControl ('', [Validators.required]),
     password: new FormControl ('', [Validators.required]),
     name: new FormControl ('', [Validators.required]),
     lastname: new FormControl ('', [Validators.required])

    });
  }
  addUser(){
    // console.log(this.addForm.value);
    
  this.usersService.addUser(this.user).subscribe(
    res => {
     this.router.navigate(['/users']);
    },
  )
  }

}
