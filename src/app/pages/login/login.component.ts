import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.  loginFormGroup = this.fb.group({
      id: [0],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    this.loginFormGroup.markAllAsTouched();
    if (this.loginFormGroup.valid) {
      localStorage.setItem('currentUser', 'loggedIn');
      this.router.navigate(['/home']);
    }
  }

}
