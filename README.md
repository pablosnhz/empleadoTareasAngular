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
Vamos navegando entre los diversos urls con el router.navigate.
Utilizamos los queryParams para hacer busqueda por orden, filtros, recordar usar navigationExtra para hacer uso de los queryParams o para state datam, el queryparams tambien se ve reflejado en el url ejemplo filter=sexo.
Creamos en la pagina de contactos una funcion de volverAHome, para realizar una navigationExtra, la cual al especificar el parametro contacto mediante un evento de click, nos va a parecer en el home el cual lo traimos con el ngOnInit para mostrar los datos una vez que seleccionemos a un amigo y hacemos uso del seleccionado llamando al nombre mediante una interpolacion.
Declaramos el token en la home para saber si esta el token en la sessionStorage, de ser asi no estara visible en sera visible en el home porque lo declaramos con un if en el html.
Para realizar el filtro de hombres y mujeres lo realizamos mediante un navigationExtras el cual nos va a permitir usar el queryParams y asi filtrar el sexo, en los contacts traemos el activatedRoute para poder hacer uso del queryParams asi no subcribimos y asi traer el sexo, asi mismo luego creamos una const para traer ese filtro mediante su sexo mediante un if en el ts.
Hasta aca realizamos un ngContainer para mostrar datos, como tambien utilizamos el queryParams.

Sistema de login
Para empezar importamos tanto el formsModule como el HttpClient y generamos el servicio para traer los datos del mismo, en este caso el token para acceder por login en el caso de que se encuentre presente el token en el service Auth, en el service llamamos al httpClient en el constructor.
Definimos la funcion Login para acceder a los datos que nos va a traer la peticion http, la cual la cual declaramos body la cual tiene email de tipo email y como password tipo password. Definimos el login con una Observable para luego hacer la suscripcion en el el loginTS, trayendo primero en el constructor el service y hacer la suscripcion.
Una vez llamado el servio creamos una funcion, la cual definimos email y password varios para que?
para asi poder completar el input, en el caso de que el token coincida, va a entrar y nos va a mandar con el navigate al Home, en esa misma funcion definimos los error en el caso de que los haya y tambien terminamos con complete.
Recordar que utilizamos el canActivate para el AuthGuard y asi no se puede hacer a diferentes rutas sino ingresando por el login primero. tambien esta el canActivate para los hijos.

Contactos Service
Pasamos los datos a un mock donde los declaramos con un export const para hacerlos tipo IContacto donde colocamos su tipo, string, number. Para hacer uso de los contactos los declare en el service.
En el service creamos la funcion ObtenerContacto la cual nos va a devolver el sexo mediante una promesa la cual declaramos con una listaFiltrada, la cual se va a resolver como la promesa como listaFiltrada, en el caso de no devolver la lista va a traer 'todos' la cual nos va a traer toda la lista pero con la interpolacion vamos a especificar que queremos que tiene que traer y en el caso de no devolver un filtro que no hay nos va a espeficar con un reject que el filtro no es valido.
El que devuelve todos se coloco en el service y se declaro como 'todos' en el ts, en el queryParams de onInit pusimos el this.filtroSexo = params.sexo; para que luego sepa de donde tomar los datos con el filtroSexo que nos trae a todos pero vamos a tener que saber como separar de que si es hombre o mujer, como hacemos esto?ese datos lo sacamos del service con la promesa, traemos el serviceContact para mandarle como parametro filtroSexo con un if condicional si esta hombre o mujer entonces se va a hacer visible mediante un ngContainer.

<div routerLink="{{ contacto.id }}" [state]="{data: contacto, filtro: filtroSexo}">

para leer los datos que estan dentro del routerLink, los lee mediante el data que fue declarado con un history va traernos para mostrar el detail con los datos que pedimos por la interpolacion. el id fue traido por el parametro del onInit, la data mediante el history que hicimos con la interpolacion, data contacto va a mostrarse en el contacts/id y el filtro: filtroSexo, coloco en el ngContainer para hacer una condicional como para vincularse y mostrar el mensaje. Despues tenemos el filtro previo nos volveria a los contacts por medio del router y el filtroPrevio seria para volver a mostrar los datos por filtro si selecciono uno no, si entro a los detalles, cuando toco volver nos regresaria a la lista del sexo del el que elegi.
