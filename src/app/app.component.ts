import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAuthenticated = true;
  constructor(
    // private authService: AuthService
    ) {}

  ngOnInit() {
    // this.authService.userSub.subscribe((user) => {
    //   this.isAuthenticated = user ? true : false;
    // });
  }

  onLogout(event: Event) {
    event.preventDefault();
    // this.authService.logout();
  }
}
