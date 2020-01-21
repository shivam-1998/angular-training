export class AuthService {
  private isLoggedIn: boolean;

  isAuthenticated() {
    return this.isLoggedIn;
  }

  login() {
      this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }
}
