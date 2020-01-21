import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private router: Router, private auth: AuthService) {
    this.loginForm = new FormGroup({
      username: new FormControl('Shivam', [Validators.required, Validators.minLength(4)]),
      password: new FormControl('test', [Validators.required, Validators.minLength(4)])
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    const data = this.loginForm.value;
    if (data.username === 'Shivam' && data.password === 'test') {
      this.auth.login();
      this.router.navigate(['/home']);
    }


  }

}
