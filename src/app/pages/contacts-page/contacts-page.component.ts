import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { IContacto } from 'src/app/models/contact.interface';
import { ContactService } from '../../services/contact.service';
import { RandomUserService } from '../../services/random-user.service';
import { IRandomContact, Results } from 'src/app/models/randomuser';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit {

  // SP
  filtroSexo: string = 'todos';
  // listaContactos: IContacto[] = [];
  listaRandomContacts: IRandomContact[] = [];

  cargando: boolean = true;

  // SP
  // active route para obtener los queryparams
  constructor(private router: Router,
              private route: ActivatedRoute,
              // private contactService: ContactService,
              private randomUsersService: RandomUserService ){}

  // Ejemplo paso de inf entre component a traves del ESTADO
  volverAHome(contacto: IRandomContact){
    let navigationExtras: NavigationExtras = {
      state: {
        data: contacto
      } // con esto obtengo el contacto para luego...
    }   // para luego con el navigate, llevarlo al home
    this.router.navigate(['/dashboard'], navigationExtras)
  }

  ngOnInit(): void{


    // Obtenemos los datos de los contactos mediante su sexo, mediante queryParams
    this.route.queryParams.subscribe((params: any) => {
      console.log('QueryParam:', params.sexo)
      // definimos el filtrosexo que lo agregamos en la SP
      if(params.sexo){
      this.filtroSexo = params.sexo;

      // CLASE 12 HTTP
      if(params.sexo === 'female' || params.sexo === 'male'){
        // Implementacion para obtener la lista de contactos aleatorias
        this.randomUsersService.obtenerRandomContacts(4, params.sexo).subscribe(
          {
            next: (response: Results) => {
              // this.contact = response.results[0];
              response.results.forEach((randomContact: IRandomContact, index: number)=> {
                this.listaRandomContacts.push(randomContact)
              })
              console.log(this.listaRandomContacts);
              // AGREGAMOS PARA EL SPINNER
              this.cargando = false;
            },
            error: (error) => console.error(`${error}`),
            complete: () => {
              console.info('Peticion de random contacts terminada')
              // AGREGAMOS PARA EL SPINNER
              this.cargando = false;
            }
          });
      } else {
        // Implementacion para obtener la lista de contactos aleatorias
    this.randomUsersService.obtenerRandomContacts(4).subscribe(
      {
        next: (response: Results) => {
          // this.contact = response.results[0];
          response.results.forEach((randomContact: IRandomContact, index: number)=> {
            this.listaRandomContacts.push(randomContact)
          })
          console.log(this.listaRandomContacts);
          this.cargando = false;
        },
        error: (error) => console.error(`${error}`),
        complete: () => {
          console.info('Peticion de random contacts terminada')
          // AGREGAMOS PARA EL SPINNER
          this.cargando = false;
        }
      });
      }
    }

    // ACA OBTENEMOS LA SEPARACION ENTRE GENERO, HOMBRE Y MUJER
      // Obtenemos la lista de contactos. SP
      // this.contactService.obtenerContactos(this.filtroSexo)
      // // esta lista la traemos para hacer uso de ella para iterar sobre datos
      // .then((lista) => this.listaContactos = lista)
      // .catch((error) => console.error(`Ha habido un error al obtener contactos: ${error}`))
      // .finally(() => console.log(`Peticion de contactos terminada`))
    })



  }



}
