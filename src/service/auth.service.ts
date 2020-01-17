export class AuthService {
    private isLoggedIn = true;

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
