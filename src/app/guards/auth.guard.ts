import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

export const authGuard: CanActivateFn = (route, state) => {
  const authenticationService = inject(AuthenticationService);
  const router = inject(Router);

  return authenticationService.currentUser.pipe(
    map(user => {
      if (user) {
        if (route.data['roles'] && route.data['roles'].indexOf(user.role) === -1) {
          router.navigate(['/401']);
          return false;
        }
        return true;
      }
      router.navigate(['/login']);
      return false;
    })
  );
};
