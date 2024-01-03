import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { IContacto } from 'src/app/models/contact.interface';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit {

  // SP
  filtroSexo: string = 'todos';
  listaContactos: IContacto[] = [];

  // SP
  // active route para obtener los queryparams
  constructor(private router: Router,
              private route: ActivatedRoute,
              private contactService: ContactService){}

  // Ejemplo paso de inf entre component a traves del ESTADO
  volverAHome(contacto: IContacto){

    let navigationExtras: NavigationExtras = {
      state: {
        data: contacto
      }
    }

    this.router.navigate(['/home'], navigationExtras)
  }

  ngOnInit(): void{
    // SP
    // Obtenemos los datos de los contactos mediante su sexo, mediante queryParams

    this.route.queryParams.subscribe((params: any) => {
      console.log('QueryParam:', params.sexo)
      // definimos el filtrosexo que lo agregamos en la SP
      if(params.sexo){
      this.filtroSexo = params.sexo;
    }
      // Obtenemos la lista de contactos. SP
      this.contactService.obtenerContactos(this.filtroSexo)
      .then((lista) => this.listaContactos = lista)
      .catch((error) => console.error(`Ha habido un error al obtener contactos: ${error}`))
      .finally(() => console.log(`Peticion de contactos terminada`))

    })


  }

}
