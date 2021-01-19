import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';
import { FormControl, FormGroup, Validators} from "@angular/forms";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  // id: number;
  // users: [];
  // user: {};
  userObj ={
    email:'',
    password:'',
    name:'',
    lastname:''
  };
 

  addForm: FormGroup;

  constructor(private usersService: UsersService,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient) { }

  ngOnInit(): void {
    // this.route.params.subscribe(params => {
    //   this.id = +params {'id'};
    // });
    // this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(
    //   (res: Response)=> {
    //   this.users = res.json{};
    //   for(var i=0; i<this.users.length; i++){
    //     if(parseInt(this.users{i}.id === this.id)) {
    //       this.user = this.users;
    //       break;
    //     }
    //   }

    //   })
    this.addForm= new FormGroup({
     
      email: new FormControl ('', [Validators.required]),
      password: new FormControl ('', [Validators.required]),
      name: new FormControl ('', [Validators.required]),
      lastname: new FormControl ('', [Validators.required])
 
     });
  }


  updateUser(user: any, id: any) {
  this.userObj = user;
    // console.log(this.addForm.value);
    // this.userObj = {
    //   email: user.email,
    //   password: user.password,
    //   name: user.name,
    //   lastname: user.lastname
    // };
    // .then(()=> {
    //   this.router.navigate(['/users']);
    // }
    // )
    // this.usersService.update(this.id, this.addForm.value);

  }
}
