import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {AuthService} from '../../core/services/auth.service';
import {User} from '../../core/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, Validators.required]
  });


  constructor(private fb: FormBuilder, private authService: AuthService) {
  }

  ngOnInit() {
  }

  login() {

    let user: User = this.loginForm.value;
    this.authService.authenticate(user);
  }

}
