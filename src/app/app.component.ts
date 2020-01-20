import { Component, Output, EventEmitter, Input } from '@angular/core';
import { AuthService } from 'src/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @Output data = new EventEmitter<any>();
  data;
  title = 'SA kitchen';
  navbarOpen = false;
  constructor(private auth: AuthService) {
  }
  displayRecipe(event: any) {
    this.data = event;
    // console.log(this.data);
  }
  logout() {
    this.auth.logout();
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
