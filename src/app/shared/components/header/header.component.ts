import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationGuard } from 'src/app/authentication.guard';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean;
  constructor(private router: Router, private auth: AuthenticationGuard) { }

  ngOnInit() {
    this.auth.isLoggedIn.subscribe(lIn => {
      this.isLoggedIn = lIn;
    });
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/']);
    this.isLoggedIn = false;
  }

}
