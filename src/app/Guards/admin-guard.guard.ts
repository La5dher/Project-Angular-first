import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthAdminService } from '../Services/auth-admin.service';


export const adminGuardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthAdminService);
  if (authService.isAuthenticated()) {
    return true;
  }
  else {
    router.navigate(['/login']);
    return false;
  }
  };
  