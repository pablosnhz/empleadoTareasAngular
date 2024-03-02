import { PreloadingStrategy, Route } from '@angular/router';
import { EMPTY, Observable, of, mergeMap } from 'rxjs';
import { Injectable } from '@angular/core';
import { PreloadingService, PreloadingOptions } from 'src/app/services/preloading.service';

@Injectable({
  providedIn: 'root'
})

export class OnDemandPreloadingStrategy implements PreloadingStrategy {

  private _preloadDemandOptions$: Observable<PreloadingOptions>

  constructor( private _preloadingService: PreloadingService ){
    // Inicializamos las opciones desde el Observable del servicio
    this._preloadDemandOptions$ = this._preloadingService.options$;
  }

  private decidirSiPrecargar(route: Route, preloadingOptions: PreloadingOptions): boolean {
    // SI:
    // 1. La ruta tiene una propiedad llamada "data"
    // 2. La ruta tiene dentro de "data" una clave llamada "preload" a true
    // 3. La ruta esta incluida en una lista de rutas que queremos precargar
    // 4. Si las opciones tienen "preload" a true
    // Podemos agregar mas condiciones totalmente personalizadas
    return (
      route.data &&
      route.data['preload'] &&
      // aca ponemos los modulos que queremos que se precarguen en este caso todos con el uso de "*"
      [route.path, '*'].includes(preloadingOptions.routePath) &&
      preloadingOptions.preload // true
    )
  }

  preload(route: Route, load: ()=> Observable<any>): Observable<any> {
    // escuchamos los valores de opciones de precarga emitidos por el next() del servicio
    // retornamos un observable por eso el return
    return this._preloadDemandOptions$.pipe(
      // mergeMap permite Iterar, iteramos por cada valor recibido desde el servicio con el next()
      mergeMap(( preloadingOptions: PreloadingOptions ) => {
      // comprobamos si se debe cargar o no bajo estas opciones
      const precargar: boolean = this.decidirSiPrecargar(route, preloadingOptions);
      // mostramos por consola si se precarga o no el modulo:
      console.log(`${precargar? '' : 'NO'} se precarga el modulo de la ruta ${route.path}`);
        // devolvemos la ejecucion del callback load() o nada
        return precargar ? load() : EMPTY
    }))
  }
}

// carga de rutas personalizada siempre y cuando reciba ciertos parametros
// y ademas eventos que lo lleve a cabo
