import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const router: Router = inject(Router)


  let token = sessionStorage.getItem('token');

  if(token){
    return true;
  } else {
    // en el caso del que el token no sea correcto, nos direcciona a /login
    router.navigate(['login']);
    return false;
  }

  // return true ---> Cargamos la ruta
  // return false ---> No cargamos la ruta

};
