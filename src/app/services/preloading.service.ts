import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export class PreloadingOptions{
  constructor( public routePath: string, public preload: boolean = true ){}
}

@Injectable({
  providedIn: 'root'
})
export class PreloadingService {

  // un subject es un tipo de Observable que permite emitir valores a quien este suscrito al mismo.
  // atraves del metodo .next(nuevoValor)
  private _subject = new Subject<PreloadingOptions>

  // cualquier subject puede ser tratado como un observable y es el que tenemos que hacer publico.
  // con el vamos a ofrecer las opciones de la ruta que desea ser precargada como un Observable.
  public options$ = this._subject.asObservable();

  constructor() { }

  /**
   * Metodo encargado de iniciar una evaluacion de precarga
   * @param routePath Ruta que se desea precargar
   */
  comenzarPrecarga(routePath: string){
    // creamos una opciones de precarga
    const opcionesPrecarga: PreloadingOptions = new PreloadingOptions(routePath, true)

    // emitimos las opciones que desean ser precargadas
    // esta informacion la va a escuchar la ESTRATEGIA DE PRECARGA
    // * ON-DEMAND-PREALOADING-STRATEGY
    // Para asi evaluar si debe o no precargar la ruta
    this._subject.next(opcionesPrecarga);
  }

}

