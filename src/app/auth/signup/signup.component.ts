import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignup(form: NgForm){ // there is an issue with firebase version 4.8.1. If getting error with 'private' or something on server when trying to log in, change version to 4.8.0 and remove the '^' in the package.json file
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signupUser(email, password); 
  }

}
