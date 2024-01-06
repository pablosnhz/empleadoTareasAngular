import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { IContacto } from 'src/app/models/contact.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private router: Router){}

  // SP
  contactoSeleccionado: IContacto | undefined;
  token: string | null = null;

  ngOnInit(): void {
    // SP
    // comprobar si existe el token en sessionStorage
    this.token = sessionStorage.getItem('token')
    // Leemos del estado del historial de navegacion, data o cualquier name
    if(history.state.data){
      // con esto traemos el dato seleccionado en contacts "Seleccionar un amigo invisible"
      console.log(history.state.data);
      this.contactoSeleccionado = history.state.data;
      }
  }

  navegarAContacts(): void {
    // sp
    let NavigationExtras: NavigationExtras = {
      // podemos buscar por orden, filtros y muchos mas
      queryParams: {
        sexo: 'todos'
      }
    }
    //
    this.router.navigate(['contacts'], NavigationExtras)
  }



}
