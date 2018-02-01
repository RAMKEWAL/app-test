import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from './../user.service';
import {Md5} from 'ts-md5/dist/md5';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  signin: FormGroup;

  constructor(public userService: UserService) {
    //sigin form validators
    this.signin = new FormGroup({
      username: new FormControl(null, Validators.required),
      password_md5: new FormControl(null, Validators.required),
      captcha: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    this.signin.controls['password_md5'].setValue(Md5.hashStr(this.signin.get('password_md5')));
    this.userService.login(this.signin.value).subscribe(res => {
      console.log(res);
    }, error => {
      alert(error.error.request.error.message);
    })
  }

  ngOnInit() {
  }

}
