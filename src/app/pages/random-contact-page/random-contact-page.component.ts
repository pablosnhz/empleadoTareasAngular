import { Component, OnInit } from '@angular/core';
import { IRandomContact, Results } from 'src/app/models/randomuser';
import { RandomUserService } from 'src/app/services/random-user.service';

@Component({
  selector: 'app-random-contact-page',
  templateUrl: './random-contact-page.component.html',
  styleUrls: ['./random-contact-page.component.scss']
})
export class RandomContactPageComponent implements OnInit{

  contact: IRandomContact | undefined;

  constructor( private randomUsersService: RandomUserService ){ }

  ngOnInit(): void {
    this.randomUsersService.obtenerRandomContact().subscribe(
      (response: Results) => {
        this.contact = response.results[0];
        // le pasamos esto al randomContact
        console.log(response);
      });
  }

  obtenerNuevoContacto(){
    // esto lo generamos para que recargue y nos traiga un nuevo contacto
    // this.randomUsersService.obtenerRandomContact().subscribe(
    //   (response: Results[]) => {
    //     // this.contact = response.results[0];
    //     console.log(response);
    //   },
    //   (error) => console.error(`${error}`)
    // );


    // PARA LAS BUENAS PRACTICAS RXJS MANEJO DE ERRORES
    this.randomUsersService.obtenerRandomContact().subscribe(
      {
        next: (response: Results) => {
          this.contact = response.results[0];
          console.log(response);
        },
        error: (error) => console.error(`${error}`),
        complete: ()=> console.info('Peticion de random contact terminada')
      }
    );
  }


  obtenerListaContactos(n: number){
    this.randomUsersService.obtenerRandomContacts(n).subscribe(
      {
        next: (response: Results[]) => {
          // this.contact = response.results[0];
          console.log(response);
        },
        error: (error) => console.error(`${error}`),
        complete: () => console.info('Peticion de random contacts terminada')
      }
    );
  }
}

