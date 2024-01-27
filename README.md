# ASIGNACION DE TAREAS PARA EMPLEADOS

Proyecto con Angular 16.2.7

Resumen del proyecto~
Realice un proyecto el cual tiene la opcion de elegir un empleado a el cual se le asigna tareas a realizar.

Para este proyecto hice uso de:

🔸ROUTING Configuré las rutas de la aplicación para facilitar la navegación mediante el uso de Angular Router y RouterLinks. Por medio de routing hice uso del 🔹navigationExtras para pasar informacion de los empleados.
🔸GUARDS Implementé guards de ruta para proteger el acceso a ciertas áreas, garantizando que solo los usuarios con el token adecuado puedan acceder.
🔸PETICION HTTP Utilicé peticiones HTTP para obtener el token necesario durante el inicio de sesión y para recuperar datos de empleados desde una API externa.
🔸FORMULARIOS REACTIVOS Diseñé formularios que incluyen campos de correo electrónico y contraseña, aplicando validators para asegurar la entrada de datos correcta.
🔸CICLO DE VIDA Aproveché los ciclos de vida de los componentes para inicializar datos de manera eficiente y detectar cambios en tiempo real.
🔸SERVICES Centralicé la lógica de manejo de datos mediante servicios, facilitando las peticiones a la API y la manipulación de la información.
🔸DIRECTIVAS Implementé directivas para manipular datos de manera efectiva en los templates.
🔸RXJS Utilicé RxJS y Observables para gestionar el flujo de datos y abordar la asincronía de manera eficiente.
🔸PIPES Simplifiqué y transformé datos directamente en el template mediante el uso de pipes.
🔸ANGULAR MATERIAL Integré componentes de Angular Material y aproveché sus esquemas (schematics) para implementar funcionalidades como el drag and drop.

PRIMERA PARTE

Para empezar generamos los components los cuales van a tener la finalidad de hacernos navegar por diversas routes, como lo logramos? mediante routes las cuales declaramos en el routing.module los cuales mantienen un orden segun la route donde querramos navegar, tambien le dimos un valor default que seria el home. Donde tambien las rutas pueden tener elementos hijos los cuales son como direcciones acumulativas hablando de rutas.
No tuvimos que llamar a ningun componente en el principal como para que se muestren, sino que con el router-outlet ya muestra el contenido de las rutas.
Importamos los components al routing.module, tanto agregar su path como su component, para el notfound, usamos asteriscos en el caso de que no encuentre una ruta especifica.
Utilizamos el routerLink para los enlaces dentro de las etiquetas. Para hacer las conexiones de routes en los distintos components tuvimos que llamar desde el constructor al Router.
Controlamos a donde se podra navegar y donde no, usando el AuthGuard, que es lo que nos va a dar esa opcion que la vamos a declarar en en routing.module, ahora usamos el CanActivate(lo seleccionamos cuando generamos el guard). en el authGuard no nos dejo traer el constructor router asi que lo tuvimos que traer mediante un inject declarado.

SEGUNDA PARTE

Generamos el codigo para navegar entre rutas con las diversas secciones, que depende quien sea nos van a aparecer sus datos y tambien le agregamos diversos filtros. Agregamos tambien el boton para cerrar el login que nos redirrecciona a la pantalla de home.
Vamos navegando entre los diversos urls con el router.navigate.
Utilizamos los queryParams para hacer busqueda por orden, filtros, recordar usar navigationExtra para hacer uso de los queryParams o para state datam, el queryparams tambien se ve reflejado en el url ejemplo filter=sexo.
Creamos en la pagina de contactos una funcion de volverAHome, para realizar una navigationExtra, la cual al especificar el parametro contacto mediante un evento de click, nos va a parecer en el home el cual lo traimos con el ngOnInit para mostrar los datos una vez que seleccionemos a un amigo y hacemos uso del seleccionado llamando al nombre mediante una interpolacion.
Declaramos el token en la home para saber si esta el token en la sessionStorage, de ser asi no estara visible en sera visible en el home porque lo declaramos con un if en el html.
Para realizar el filtro de hombres y mujeres lo realizamos mediante un navigationExtras el cual nos va a permitir usar el queryParams y asi filtrar el sexo, en los contacts traemos el activatedRoute para poder hacer uso del queryParams asi no subcribimos y asi traer el sexo, asi mismo luego creamos una const para traer ese filtro mediante su sexo mediante un if en el ts.
Hasta aca realizamos un ngContainer para mostrar datos, como tambien utilizamos el queryParams.

Sistema de login
Para empezar importamos tanto el formsModule como el HttpClient y generamos el servicio para traer los datos del mismo, en este caso el token para acceder por login en el caso de que se encuentre presente el token en el service Auth, en el service llamamos al httpClient en el constructor.
Definimos la funcion Login para acceder a los datos que nos va a traer la peticion http, la cual la cual declaramos body la cual tiene email de tipo email y como password tipo password. Definimos el login con una Observable para luego hacer la suscripcion en el el loginTS, trayendo primero en el constructor el service y hacer la suscripcion.
Una vez llamado el servio creamos una funcion, la cual definimos email y password, para que?
para asi poder completar el input, en el caso de que el token coincida, va a entrar y nos va a mandar con el navigate al Home, en esa misma funcion definimos los error en el caso de que los haya y tambien terminamos con complete.
Recordar que utilizamos el canActivate para el AuthGuard y asi no se puede hacer a diferentes rutas sino ingresando por el login primero. tambien esta el canActivate para los hijos.

Contactos Service
Pasamos los datos a un mock donde los declaramos con un export const para hacerlos tipo IContacto donde colocamos su tipo, string, number. Para hacer uso de los contactos los declare en el service.
En el service creamos la funcion ObtenerContacto la cual nos va a devolver el sexo mediante una promesa la cual declaramos con una listaFiltrada, la cual se va a resolver como la promesa como listaFiltrada, en el caso de no devolver la lista va a traer 'todos' la cual nos va a traer toda la lista pero con la interpolacion vamos a especificar que queremos que tiene que traer y en el caso de no devolver un filtro que no hay nos va a espeficar con un reject que el filtro no es valido.
El que devuelve todos se coloco en el service y se declaro como 'todos' en el ts, en el queryParams de onInit pusimos el this.filtroSexo = params.sexo; para que luego sepa de donde tomar los datos con el filtroSexo que nos trae a todos pero vamos a tener que saber como separar de que si es hombre o mujer, como hacemos esto?ese datos lo sacamos del service con la promesa, traemos el serviceContact para mandarle como parametro filtroSexo con un if condicional si esta hombre o mujer entonces se va a hacer visible mediante un ngContainer.

<div routerLink="{{ contacto.id }}" [state]="{data: contacto, filtro: filtroSexo}">

para leer los datos que estan dentro del routerLink, los lee mediante el data que fue declarado con un history va traernos para mostrar el detail con los datos que pedimos por la interpolacion. el id fue traido por el parametro del onInit, la data mediante el history que hicimos con la interpolacion, data contacto va a mostrarse en el contacts/id y el filtro: filtroSexo, coloco en el ngContainer para hacer una condicional como para vincularse y mostrar el mensaje. Despues tenemos el filtro previo nos volveria a los contacts por medio del router y el filtroPrevio seria para volver a mostrar los datos por filtro si selecciono uno no, si entro a los detalles, cuando toco volver nos regresaria a la lista del sexo del el que elegi.

REHACIENDO EL EJERCICIO EXPLICANDO TODO

Para empezar declaramos las rutas mediante el path y los components, ya eso define las rutas por url.
Generamos los componentes con sus caracteristicas segun donde este posicionado y mediante el router link navego tanto como para ir y volver a las secciones mediante botones.
para iterar sobre la lista de contactos que cree mediante la interface la vamos a traer mediante una promesa, la cual vamos a crear una funcion para que la promesa sea resolve con una lista para luego hacer llamado de la lista mediante el constructor llamando al service y asi si poder iterar sobre los elementos de la promesa.
Luego para generar los urls segun el id seleccionado, esto lo hacemos mediante los params y el ActivatedRoute definido en el OnInit, dentro del parametro y nos suscribimos para obtener ese id que tambien lo declaramos como tipo any | undefined.

TRAER CONTACTO SELECCIONADO AL HOME
contacts-page
Mediante el service traimos la funcion al contactsPage con los datos de la interface.
button de VolverAHome con evento de click que selecciona a un amigo lo declaramos con un state el cual hace su funcionamiento mediante el navigationExtras y asi darle un nombre data: contacto, ese data hay que llamarlo en el home-page para saber que contacto(nombre) tiene que traer.
home-page
traimos esos datos mediante un history.state, en un IF que va a estar en la variable contactoSeleccionado

VAMOS A TRAER LOS DATOS PARA DETAIL CONTACTS
mediante el el routerlink, defini tambien el [state]={datos: contacto} que mediante trayendolo en el history.state.datos definido en un variable contacto pude interpolar los valores en el contact-detail

SISTEMA DE LOGIN
primero vamos a importar los modulos para hacer las peticiones http en el module, tambien vamos a agregar el formsModule.
En el service hicimos la peticion haciendo llamado al httpClient para asi luego definir una funcion la cual si cumple esos parametros va a entrar a la cuenta.
Creamos la funcion definiendola como observable, declarando valores en el body de tipos email y password, la funcion nos va a devolver la respuesta del http por un post, le va a hacer la peticion al enlace de api/login tomando como parametro el body.

Por el observable que generamos en el service, nos suscribimos generando una funcion la cual loginUser va a traer la funcion del service para traer la respuesta del http, definimos variables las cuales iniciamos vacios, email, password, la cual si response con un token, si es la que esta en la api, entonces va a acceder, la respuesta la guardamos en la sessionStorage y con esto, accede y al estar todo correcto con el navigate nos va a acceder al 'home', como tambien el nombre de la funcion la llamamos con un evento de click y las variables vacias las llamamos mediante un ([ngModel])='email y password'.

DECLARAMOS EL TOKEN EN EL TS PRINCIPAL PARA LOGOUT
en el ts vamos a definir una variable token, para verificar si esta en la sessionStorage en ese caso, la leemos en el onInit y con la funcion del LOGOUT la sacamos de la sessionStorage con un removeItem, una vez pulsado mediante el router vamos a navegar a la pantalla de login

USO DEL AUTHGUARD
Para empezar declaramos una const router de tipo Router para hacer la inject(router).
Creamos un let token para saber si esta para saber si el token esta presente en el sessionStorage, de ser asi accede y de no ser asi nos regresa a login, con esto conseguimos el permiso de si navegar por la pagina si esta o no los datos del login que devuelve true si esta y podemos navegar.

Como hacemos uso de los parametros que nos van a dar la opcion de seleccionar el empleado o empleada, mediante un navigationExtras declaramos el parametro queryParams que va a tener el sexo el cual van a estar 'todos' pero el [queryParams] los definimos uno con 'male' y el otro 'female' en el index el navigationExtra lo generamos dentro de la funcion de navegarAContacts.
Como hacemos para obtener eso segun su sexo, esto ya lo habiamos definido en el service para hacer la busqueda, por medio del route: ActivatedRoute, en el ngOnInit hacemos uso del queryParams, nos suscribimos y creamos una funcion la cual if params.sexo se va a almacenar en filtroSexo la cual declare como 'todos' pero en el caso de no ser asi, va a traer los hombres o mujeres aunque creo que no era tampoco necesario poner 'todos' porque si lo saco y dejo el '' vacio, vuelve igual.
Una vez hecho eso en contactsPage, ahora mediante un ngIf dentro de un container vamos a seleccionar el sexo segun lo que hayamos seleccionado si amigo o amiga, si seleccione mujer o hombre por el filtroSexo, en el caso de haber seleccionado uno se mostrara como "has seleccionado a {{ filtroSexo }}, de no ser asi ngTemplate, estas viendo la lista completa.

==========================

PIPES
Aca generamos un pipe el cual nos va a traer el nombre completo de una persona de tipo IContacto. En este caso solo hicimos uso de el pipe para mostrarlo en el proyecto. Nos centramos mas en el estilo con AngularMaterial.

Creacion de nuevo componente para hacer uso de Angular Material
Donde dentro del hice uso de la etiqueta mat-card, donde coloque el card-title, card-subtitle, otra con el mat-content, dentro el form y lo acomode con scss.

==========================

HACEMOS EL LOGIN CON REACTIVE FORMS.

Como venimos haciendo hacemos uso del formGroup, formBuilder, Validators. En el constructor llamamos a formBuilder y elegimos un nombre para llamar al formGroup y lo iniciamos vacio. Dentro del group dentro del on init, vamos a tener el email y password con validators, con required y email. mediante un get obtenemos lo que generamos dentro del group devolviendo los mismos.
Y un funcion para el boton submit, si el loginForm is valid, que fue el nombre del group, por consola podriamos traer los valores de los datos del login.
Vamos a crear un Output el cual va a tener un event emitter el cual lo vamos a llevar a la primer login, como sabemos que esto se trata del login, dentro del submit que generamos para el SUBMIT dentro de la funcion vamos a emitir el nombre del output y pasamos el nombre del group con su value.
Vamos a llamar al nuevo component con el que ya teniamos para mostrarlo en pantalla, dentro de esa etiqueta llamamos al output con el la funcion de login, en este caso loginUser de tipo event.
Dentro de la funcion declaramos un valor de tipo any el cual vamos a poner dentro de un let email y password = value para asi luego tener la respuesta del token.

===================

HTTP

Para pasar pasamos los datos del json de la api a formato interface lo hicimos con to json to typescript.
Vamos a crear un servicio randomUser para generar un get dentro de una funcion obtenerRandomContact mediante una observable de un results, donde va a estar la url de la api y con esto ya nos estaria devolviendo el resultado para manipularlo luego en el componente aparte randomUser.ts dentro de el definimos randomResults de tipo results para luego dentro del onInit llamando a la funcion del service, nos vamos a suscribir para obtener la function response de tipo results.
Definimos randomContact de tipo IRandomContact para que dentro del oninit definimos un let para llamarlo en el oninit y lo igualamos a response.results[0], ya con esto podemos ver los datos en pantalla haciendo su llamado con la definicion que hicimos randomContact en el html. Dentro de el para mostrar los datos lo hicimos por medio de un ngContainer y ngTemplate, dentro del MaterialModule importamos el spinner para usarlo en el ngTemplate.
Definimos randomContact en un input, el que habiamos hecho le agregamos el import y el servicion con la funcion que llame, lo voy a pasar al otro componente, llevando esa funcion cambiamos randomContact por contact de tipo IRandomContact | undefined. Pero si es lo mismo no se para que traigo el input... si lo usamos porque traimos todo el componente al otro por el html y definimos el input pero es como si fuera lo mismo, pusimos en practica el input, sirvio. Y comente el randomResults del primer componente porque solo lo usamos para hacer uso de la funcion que nos va a traer el resultado pero no, randomResults: Results eso lo usamos en la funcion el Results aunque podria haber venido sin la necesidad de haber puesto el randomResults.

Generamos un funcion de obtenerNuevoContact con el mismo contenido del que habiamos hecho para hacer un button y evento click para cuando lo presionamos nos genera un nuevo contacto.

Dentro del service generamos un handleError para manejar los errores donde se agrego error: HttpErrorResponse, como tambien se hizo uso de throwError de rxjs dentro de esta funcion.
Este handleError podria ir dentro de catchError que lo pusimos dentro de ObtenerRandomContact dentro del service, donde tambien le agregamos el uso del .pipe y retry(2) que sirve para si despues de dos veces que se intento obtenerRandomContact y no cargo nada entonces se va a mostrar el catchError(this.handleError).

PARA LAS BUENAS PRACTICAS RXJS MANEJO DE ERRORES
dentro de obtenerNuevoContacto vamos a hacer uso del next, error y complete.
Que dentro del next iria el response que obtuvimos cuando traimos el service.
Esto nos va a leer el error que viene del handleError.

Vamos a crear la funcion obtenerRandomContactos para obtener mas de 1 usuario, estoy lo hacemos mediante el httpParams que lo declaramos para empezar con una const y lo set con un "results"(este results es como aparece tal cual en la api como el "gender") y la n que declaramos dentro de la funcion del tipo n: number, esta funcion va a devolver el get con el url y el params: params, con el retry y el cacthError.
Creamos la funcion de ObtenerRandomContactsPorGenero que va a ser lo mismo pero cambiamos results por "gender", sexo que es como lo definimos nosotros en otras clases.

Generamos una funcion ObtenerListaContactos para traer del service el ObtenerRandomContacts(n) para hagamos uso de el html podamos poner cuantos contactos queremos que traiga y que se muestren en consola con el response.

PARTE 2 ADAPTAMOS LO QUE HICIMOS EN LA PRIMERA PARTE AL NUESTRO CODE
llamamos al service RandomUserService al components de contacts-page, en el randomContact habiamos creado una funcion para obtener la listadeContacts, vamos a llevar esa funcion a nuestro codigo original que es contacts-page para vincularlo como datos reales, una vez traida dentro del next hicimos uso de un forEach con el response.results.foreach dentro de el creamos una funcion flecha de tipo IRandomContact la funcion va a tener dentro un push{this.listaRandomContacts.push(nombredelafuncion flecha)} para esta funcion pusheamos un randomContact. Que esta funcion nos va a devolver los 10 contactos tipo n:number que teniamos del principio de la funcion, esto va a venir en un array de strings.Estos 10 que nos va a devolver son los contactos, los datos de 10 contactos nos van a aparecer, donde tenia a messi henry y zidane, ahora van a venir 10 nuevos contactos de la api.

En el volverAHome de este componente cambiamos el tipo contacto a :IRandomContact estamos adaptando todo el codigo del randomService a este componente. Dejamos de iterar en el for html con el listaContactos ahora la hacemos con la nueva de tipo IRandomContact que la definimos de este tipo. contenido: IRandomContact[].
Tambien cambiamos los parametros que tenian hombre mujer a male female.

Arreglamos los valores del pipe para que se adapte a los nuevos cambios, le cambiamos el IContacto al nuevo I...
Donde definimos el pipe que creamos, nombreCompleto, nos salta el error que tambien hay que cambiar en el ts de tipo IRandomContact para que funcione.
Estamos cambiado todo tipo IRandomContact, como tambien lo hacemos en el contactoSeleccionado de las clases anteriores, tambien recordar el html su interpolacion.

Vamos a manejar los FILTROS por male y female que no me trae bien los datos
Dentro del onInit hacemos uso de un condicional IF si trae male or female segun los params.sexo.
Dentro del randomUser en la funcion de obtenerRandomContacts agregamos dentro de los parametros sexo?: string, si es que esta se va a mostrar.
Dentro del obtenerRandomContacts if sexo entonces, params = params.append('gender', sexo), para que esto? solo params.append lo toma sin error pero sigue devolviendo el results=10 que es lo que no queremos, por eso usamos el params = params.apend, para que nos devuelva segun su gender si gender existe dentro esa condicional que hicimos con el if.
Esta devolviendo por sexo pero traer variado y no segun el especificado, nos fijamos en el results del network y en vez de devolver resultsfemale o resultsmale nos muestra results=10 que seria que nos devuelve 10 de genero variado.
Esto lo solucione haciendo los cambios donde tenia, hombre mujer, lo cambie a male y female.

=================

APLICAMOS MATERIAL DESIGN, SCHEMATICS AL PROYECTO

Para empezar hicimos el install de angular material para poder generar los schematics que vamos a ir sacando de la pagina de angular, empezamos generando el nav el cual lo hicimos con el material:navigation, hacemos las importaciones como tambien la implementacion agregamos el componente dashboard al routing.
Sacamos de la pagina el dashboard viejo para implementar el nuevo, tuve problemas al especificar el dashboard porque tenia mas de un module y no lograba especificar bien los components para que se muestren, tener en cuenta eso cuando hay varios modulos.
Acomodamos en dashboard en la parte superior usando el style que teniamos el html principal, por este mismo tema tuve que importar modulos en el otro modulo para que me tome los routes.
Ordenamos los routerLinks para que se aplique a dashboard.
Algunos modulos de angular material no los traia de forma automatica a si que tuve que traerlos de forma manual.
Al seleccionar los contactos, le pusimos un spinner el cual va a aparecer cuando esten cargando lo usuarios, este lo declaramos en una condicional como en la parte del codigo ts.
Luego agregamos el angular material para el diseno de la seccion de tareas, modificamos los valores a acorde al gusto de cada uno.
Con esto ya finalizamos lo que seria la aplicacion y como vinculamos el angular material con las rutas.
