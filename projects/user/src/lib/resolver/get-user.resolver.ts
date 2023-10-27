import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from '../modal/user';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class GetUserResolver implements Resolve<User> {
  constructor(private _userService: UserService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<User> {
    const id: number = parseInt(route.params['id']);
    const user = this._userService.getUser(id);
    return of(new User(user));
  }
}
