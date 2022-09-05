import { CanActivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(
    private router: Router,
  ) {}

  public canActivate(): boolean {
    return LoginGuard.isLocalStorageSupported() && localStorage.getItem('loggedUserName') === 'Zen@sayollo.com';
  }

  private static isLocalStorageSupported() {
    let mod = 'modernizr';
    try {
      localStorage.setItem(mod, mod);
      localStorage.removeItem(mod);
      return true;
    } catch (e) {
      return false;
    }
  }
}
