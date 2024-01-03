import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  // SP
  email: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService){}

  ngOnInit(): void {
    // SI ESTE ES TRUE ENTONCES NOS MANDA A HOME, SI ESTA LOGUEADO VA A HOME
    let token = sessionStorage.getItem('token');

    if(token){
      this.router.navigate(['home'])
    }
  }

  loginUser(){

    // SP
      this.authService.login(this.email, this.password).subscribe(
        (response) => {
          if(response.token){
            // primera parte
            sessionStorage.setItem('token', response.token);
            // una vez que responde bien nos va a redirreccionar al home
            this.router.navigate(['home'])
            // primera parte cierra aca
          }
        },
        (error) => console.error(`Ha habido un error al hacer login ${error}`),
        () => console.info(`Peticion de login terminada!`)
      )
    //

  }

}
