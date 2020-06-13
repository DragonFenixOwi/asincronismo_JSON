/*
    Autor : Osvaldo Mauricio Aquino Machuca
    nickname: Owi
    Documentación : Clase JSON con CALLBACK con API 
*/


/*
    - Para trabajar con Node.js y JSON
    - Nos dirigimos al "package.json" y cambiamos la ruta de script
        - Cambiamos esta ruta 
            - "callback": "node src/callback/index.js"
        - Por esta ruta
            - "callback:api": "node src/callback/api.js"
*/


/*
    - API 
        - "https://rickandmortyapi.com/api/character"
    - Utilizar esta libreria
        - Sin JQuery
    - Por lo que lo primero que necesitamos es traer una libreria
        - La podemos traer gracias a "npm "
        -"npm" ya sabemos que es un gestor de dependencias 
        - " npm install"
            - queremos que nos instales tal dependencia, tal libreria en nuestro proyecto
        - Traemos esta libreia que se llama "xmlhttprequest"
            - npm install xmlhttprequest --save
        - "--save" significa en su version de desarrollo
        - "xmlhttprequest" este es un Jquery que nos sirve de enlace. 
    
        - Se crea una carpeta "node_modules" donde se guardarando ahi todas las dependencias que 
    vayamos trayendo
        
        
*/









// Llamar o Instanciar la "dependencia" con "require"  
let XMLHttpRequest = require ("xmlhttprequest").XMLHttpRequest;
                             //archivo "js"    . Modulo (que es el que nos interesa)

//con lo de arriba. Ahora solo necesitamos recoger una "constante" de la API. 
const API = "https://rickandmortyapi.com/api/character"; 

/*
    - con las lineas "let XMLHttpRequest" y  "const API" hemos traido toda la información
    todo ese modulo completo de JavaScript para facilitarnos el uso de conectar con "https", 
    conectar con base de datos, para "api's" que estan en formatos "get"
*/



/*
    CONEXION + VALIDACIÓN   
        - La función "traer Datos" indica "voy a conectarme con la API" y "voy a saber si todo esta bien" 

*/
function traerDatos(url_api, callback)
    {
        /*
            - lo primero es instanciar.  la "xhttp" va a ser una INSTANCIA de "XMLHttpRequest"
            Es decir, hemos creado un objeto.
            - Este objeto es "xhttp" 
        */
        let xhttp = new XMLHttpRequest();

        /*
            - xhttp.open()  ".open" es un metodo de la libreria que hemos descargado
            - En ".open" vamos a estar consultando su "GET", su "url_api" y su "true"
            - El "true" es un sistema de activación de Asincronismo dentro de esta libreria
            - El metodo "GET" es la visualizacion del url que ves en "const API"
            */
        xhttp.open('GET',url_api,true);


        /*
            - con ".onreadystatechange" queremos estar leyendo cualquier tipo de cambio que suceda
                - Y atraves de una funcion de evento "function(event)" vamos a conseguir hacerlo.
            - Dentro de esta función vamos a tener dos condicionales 
                - Un "if" que se va a encargar del estado   que tengamos (hay 5 estados )
                nosotros nos vamos hacia el "4 estado" - "xhttp.readyState ===4"
                    - El cuarto estado indica si es que se ha completado ese request 
            -  Y siha sido completado el "request" entra al primer "if"
                - Luego tiene otro if "xhttp.status===200"   con el que nos aseguramos de que todo ese request
                esta correcto. Con el estado "200" nos aseguramos de que todo esta correcto
            - Existe lista.
                - Cuando pasamos por "GET" el navegador nos responde con un "ESTADO" (200,400,500) todos son 
                estados que existen. Hay listas en internet de estos estados.
                - Estas listas indican, del SERVIDOR que no responde.
            - y el "200" indica que todo esta correcto.  
        */
    //Manera de escuchar eventos. Es decir, nos preparamos para un cambio
        xhttp.onreadystatechange = function(event)
                    {  
                        // aqui creamos una validacion para ver si ejecutamos nuestro callback o no
                        //Hay diferentes estados. El estado 4 es que ha sido completado el request

                        // manera de verficar si es el estado 4. Si ha sido completado el "request" entra al "if"
                        if(xhttp.readyState ===4)
                            {
                                //validamos si es correcta la peticion del servidor
                                if(xhttp.status===200)
                                    {
                                        // Si todo esta correcto o si el "estado es 200" entra al "if"
                                        
                                        /*
                                            - Ahora. Al hacer dos validaciones (primer y segundo "if") ya podemos 
                                            trabajar con el CALLBACK
                                            - Donde el callback tendra dos parametros
                                                - Primer parametro "null"
                                                - Parseando con el segundo parametro "JSON.parse(xttp.responseText)"    
                                        ahora si esta todo bien. Parsear un JSON y lo mandamos a traves del callback
                                        */

                                        callback(null, JSON.parse(xhttp.responseText))

                                    }

                                /*
                                    - Las dos validaciones del "if" para trabajar con el CallBack. Es lo que nosotros queremos
                                    cuando todo sale BIEN, de la manera correcta

                                    - Pero sino es asi pasa al "else"
                                        - Si algo no ha salido bien, las comprobaciones no han ido bien. Algo ha fallado. Nos ha 
                                        dado otra respuesta. Pasa al "else" 
                                */
                                else  
                                    {
                                        // si algo sale mal, mandamos un error con nuestro callback
                                        // esto es para hacer un debbuger con mas sentido. Para saber que exactamente es el error
                                        let error = new Error("Error" + url_api); //nos da el "Error" + el tipo de error en la API 
                                        //o la url que ha fallado
                                        return callback(error,null); //que el callba en vez de que me devuelva algo positivo, algo 
                                        //correcto, que me devuelva el error                    
                                    }
                            }
                        // 
                    }
        // utilizar el metodo send
        xhttp.send();
    }

/*
    Estas 12 lineas de la funcion "traerDatos" suplen a lo que es la integración de JQuery
    y esto realmente da que pensar. 
*/







/*
    ENVIO DE DATOS 
    RECUPERACION DE DATOS 
    "siempre se hace con validacion de datos"
*/




/*
    - ¿como llamamos a la API de arriba atraves de un CALLBACK?
    - el callback sigue siendo una funcion como argumento de otra funcion
    -Callback HELL
    
    -El codigo de abajo es lo que hacia peor JQuery pero pero   
        -peor porque no es tu coigo
        - era muy pesado
*/

/*
    - llamamos a la unica function
        - vamor a traer los datos  llamando a la función
        - Con argumentos "API" y un "CallBack" 
        - Este callback tiene dos parametros o propiedades "error1", "data1"
    */


//traer datos a la consola despues de manejo de errores
traerDatos(API,function(error1,data1)
    {
        // con estas propiedades vamos a definir que si "error1" es verdadero. Si realmente esta
        // Me devuelva por consola "error1"
        if(error1) return console.error(error1);

        //otro callbak. Todo esto "API + data1.result[0].id" es porque mire  que tipos de datos-nombres 
        //tienen los arrays y como poder recurrir a ellos. No me puedo inventar los nombres 
        traerDatos(API + data1.result[0].id, function(error2,data2)
            {
                if (error2) return console.error(error2);

                traerDatos(data2.origin.url, function(error3,data3)
                    {
                        if (error3) return console.error(error3);

                        // aqui hacemos las tres peticiones a la API. Porque la API no me deja hacer todo de una vez.
                        //asi como vimos en otros ejemplos podemos encadenar los callback para hacer solo 3 petiiciones a la api
                        // tres peticiones estaria "ok", pero no llegar a muchas mas sino entrariamos en el callBackNELL
                    
                    
                    console.log(data1.info.count); // aqui decie cuantame cuando "id" hay "info.count"
                    console.log(data2.name);       //
                    console.log(data3.dimension);
                    
                    });
            });
    })