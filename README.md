# NgRouting

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.7.

PRIMERA PARTE

Para empezar generamos los components los cuales van a tener la finalidad de hacernos navegar por diversas routes, como lo logramos? mediante routes las cuales declaramos en el routing.module los cuales mantienen un orden segun la route donde querramos navegar, tambien le dimos un valor default que seria el home. Donde tambien las rutas pueden tener elementos hijos los cuales son como direcciones acumulativas hablando de rutas.
Ya para empezar me parece raro que no tuve que poner ningun componente en el principal como para que se muestren, sino que con el router-outlet ya muestra el contenido de las rutas.
Importamos los components al routing.module, tanto agregar su path como su component, para el notfound, usamos asteriscos en el caso de que no encuentre una ruta especifica.
Utilizamos el routerLink para los enlaces dentro de las etiquetas. Para hacer las conexiones de routes en los distintos components tuvimos que llamar desde el constructor al Router.
ActivatedRoute nos va a decir el contenido que hay en la url, controlamos a donde se podra navegar y donde no, usando el AuthGuard, que es lo que nos va a dar esa opcion que la vamos a declarar en en routing.module, esencial las opciones de los opciones y cual vamos a usar, ahora usamos el CanActivate(lo seleccionamos cuando generamos el guard). en el authGuard no nos dejo traer el constructor router asi que lo tuvimos que traer mediante un inject declarado.

SEGUNDA PARTE

Generamos el codigo para navegar entre rutas como un amigo invisible, que depende quien sea nos van a aparecer sus datos y tambien le agregamos diversos filtros. Agregamos tambien el boton para cerrar el login que nos redirrecciona a la pantalla de home.
