import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IContacto } from 'src/app/models/contact.interface';
import { IRandomContact } from 'src/app/models/randomuser';

@Component({
  selector: 'app-contact-detail-page',
  templateUrl: './contact-detail-page.component.html',
  styleUrls: ['./contact-detail-page.component.scss']
})
export class ContactDetailPageComponent implements OnInit {

  id: any | undefined;
  contacto: IRandomContact | undefined;
  filtroPrevio: string | undefined;

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    // vamos a leer los parametros
     // llame al activatedRoute para hacer uso del PARAMS
    this.route.params.subscribe(
      (params: any) => {
        if(params.id){
          this.id = params.id;
        }
      }
    )
      // vamos a leer el STATE el contacto
      // history para leer
      // SIN ESTO DECLARADO EN EL CON EL [STATE] en contactsPage
      // los datos no se muestran en el detail
    if(history.state.data){
      this.contacto = history.state.data;
    }
    // lo declaramos en este html para luego llevarlo al otro html, con el [state]
    if(history.state.filtro){
      this.filtroPrevio = history.state.filtro;
    }
  };
}
