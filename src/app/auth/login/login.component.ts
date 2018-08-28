import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(
  ) {}

  onLogin(f: NgForm) {
    this.authService.login(f.value).subscribe(res => {
      console.log(res)
      this.router.navigate(['/customer'])
    })
  }
}
