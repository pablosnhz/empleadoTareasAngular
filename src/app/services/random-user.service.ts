import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { IRandomContact, Results } from '../models/randomuser';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse){
    if(error.status === 0){
      console.log(`Ha ocurrido un error: ${error.error}`)
    } else {
      console.error(`Error en el backend: ${error.status}. El
      error de la respues es: ${error.error}`)
    }
    return throwError(() => new Error('Error en la peticion de contacto aleatorio')
    )
  }

  obtenerRandomContact(): Observable<Results[]>{
    // generenamos un pipe es luego de todo que es algo mas avanzado
    // si algo sale mal cuando estamos suscritos recibimos este error
    // el handleError.
    return this.http.get<Results[]>('https://randomuser.me/api').pipe(
      // retry de rxjs si lo buscamos dos veces y no aparece
      // nos va a aparecer el error si algo falla.
      retry(2),
      // si el retry falla aparece esto con el error
      catchError(this.handleError)
    )
  }
// en vez de any tambien podria poner Observer<Results[]> pero tambien
// lo tengo que poner en el get<Results[]>, hice una prueba de esto
// en la funcion de arriba ObtenerRandomContact.
  obtenerRandomContacts(n: number): Observable<Results[]>{
    const params: HttpParams = new HttpParams().set("results", n);

    return this.http.get<Results[]>('https://randomuser.me/api', {params: params}).pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  obtenerRandomContactsPorGenero(sexo:string): Observable<Results[]>{
    const params: HttpParams = new HttpParams().set("gender", sexo);

    return this.http.get<Results[]>('https://randomuser.me/api', {params: params}).pipe(
      retry(2),
      catchError(this.handleError)
    )
  }



}

