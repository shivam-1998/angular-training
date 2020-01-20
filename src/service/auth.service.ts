export class AuthService {
  private isLoggedIn: boolean;

  isAuthenticated() {
    console.log(this.isLoggedIn);
    return this.isLoggedIn;
  }

  login() {
      this.isLoggedIn = true;
    // this.isLoggedIn = false;
  }

  logout() {
    this.isLoggedIn = false;
  }
}
