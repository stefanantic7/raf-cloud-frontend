import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    firstName: null,
    lastName: null,
    email: [null, [Validators.required, Validators.email]],
    message: [null, Validators.required]
  });


  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
  }

}
