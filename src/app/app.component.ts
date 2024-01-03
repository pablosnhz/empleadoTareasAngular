import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngRouting';

  token: string | null = '';

  // llamamos al router para el navigate login
  constructor(private router: Router){}


  ngOnInit(): void {
    this.token = sessionStorage.getItem('token');
  }


  logout(){
    // NOS REDIRRECIONA A LOGIN SI NO HAY USUARIO, TOKEN
    sessionStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}

// SP paso de informacion entre components:
// 1: a traves de @Inputs y @Outputs
// 2: a traves de inyeccion de constructires de components hijos @viewChild, @ContentChild o @ContentChildren
// 3: a traves de servicios (promesas y observables) --> NGRX (gestion del estado de la aplicacion)
// 4: a traves de parametros entre rutas
