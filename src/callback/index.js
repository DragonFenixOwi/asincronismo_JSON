/*
    Autor : Osvaldo Mauricio Aquino Machuca
    nickname: Owi
    Documentación : Clase JSON con CALLBACK' 
*/




// función que hace de callback
function sumar(numero1, numero2)
    {
        return numero1 + numero2;
    }
    
/*
    - La comunidad de desarrolladores se puso de acuerdo en llamar al "callback" por su propio nombre
    Asi no hay confunsiones. Porque cualquier función puede ser un callback.
        - Porque si cualquier función puede ser un callback. Tendrias que documentar siempre y aclarar 
        muy bien, donde esta  ese "callback" y que función va a representar ese "callback"
*/
function calcular (numero1, numero2, callback)
    {
        // Aqui devolvemos simplemente al "callback" el numero1 y el numero2
        return callback(numero1, numero2);
    }


/*
    - hacemos un console.log
    - haciendo uso de la funcion calcular. Llamaos a la función calcular
    - como argumentos nos pide
        - numero1= y le introducimos un numero "40"
        - numero2= y le introducimos un nuermo "20" 
        - y nos pide el "callback"
            - ¿cual es la funcion que vamos a introducir como argumento? 
                - y es la funcion "sumar"
*/
console.log(calcular(40,20,sumar)); 


/*
    - Ahora para hacer uso del npm. Nos debemos dirigir a JSON
    -Y escribimos la ruta del script. Eliminando esta ruta que se crea por defecto
        -//"test": "echo \"Error: no test specified\" && exit 1" y cambiando por
        - por "callback": "node src/callback/index.js" 
*/


// LISTO me imprimio "60"



/*
    --------------
        TIEMPO
    --------------
*/

/*
    - Ahora abajo haremos un ejemplo, de ese callback en "tiempo"
    - El tiempo se incluye, para representar un poco lo que pasaria con un servidor
    ese retardo, etc. etc. 
    - Pero vamos a seguir trabajando con el callback
*/


function fecha(callback)
    {
        //Quiero sacar la fecha por consola con el new Date
        //gracias a new Date la fecha  salir automatica. 
        console.log(new Date());

        // pero quiero que despues de 3 segundos
        setTimeout(function()
            {
                let date = new Date();
                callback(date);
            }, 3000);
    }



// función que hace de callback
function imprimir_fecha(dateNow)
    {
        console.log(dateNow);
    }


fecha(imprimir_fecha); 









