import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signin : FormGroup;

  constructor() { 
    //sigin form validators
    this.signin = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      captcha: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    console.log(this.signin.value);
  }

  ngOnInit() {
  }

}
