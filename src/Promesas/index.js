//PROMISE

/*
    - La estructura basica de una promesa surge de ECMAScript 6
    -Las promesas
        - las promesas, te prometen que algo puede pasar o no
        - vienen de los callback, y te prometian que esto no va a pasar mientras no se ejecuten algo
    - las promesas
        - pending
        - fuldiled
        - rejected
    - 
*/


/*  
    SINTAXIS DE UNA PROMESA 
        new Promise (function (resolve,reject)
            {
                -podemos tenes metodos de validación 
                    .then (valor=>) cuando todo funciona bien 
                    .catch (err=>) cuando hay errores
            })
*/






/*
    --------------------------------
        ESTRUCTURA DE UNA PROMESA
    --------------------------------
*/

//EmaScript 6


const QUE_PASARA = () => 
    {
        return new Promise((resolve, reject) =>
            {
                if (true)
                    {
                        resolve('Correcto.Bien echo!!!!');
                    }
                else
                    {
                        reject("Incorrecto. Mal hecho!!!!");
                    }
            });
    };



/*
    --------------------------------
        EJECUTAR ESTRUCTURA
    --------------------------------
*/

QUE_PASARA()
    .then((response) => console.log(response))
    .catch((err) => console.error(err));


// FUNCIONO LA EJECUCION al escribir "npm run promesa"





/*
    ----------------------------------------------
        DESCRIPCIÓN DE ESTRUCTURA DE UNA PROMESA
    ----------------------------------------------
*/


/* 
    - Estructura básica de lo que estariamos haciendo con una promesa.
        - Promesa "EmaScript 6" mejor estructura que "CALLBACK'S", viniendo a solucionar los callback's 
        sobre todo la parte de problemas  de los callback's y el poco entendmiento y la claridad de los "callback's" 
    - Creamos una constante "const" con nombre "QUE_PASARA" Y creamos ese arrow function " = () => " 
    con una función sin parametros.
*/ 

const QUE_PASARA2 = () => 
    {
        /*
            Promesa "Promise". Dentro de las promesas vamos a tener dos parametros que son:
                - "resolve" si se ejecutara de forma correcta
                - "reject" si es rechazada
            - "new Promise" es la sintaxis 
        */
        return new Promise((resolve, reject) =>
            {
                if (true)
                    /*Si es verdad "resolve" se pone en marcha. " */
                    {
                        resolve('Correcto.Bien echo!!!!');
                    }
                else
                    /*Si es falso "reject" se va a poner en marcha */
                    {
                        reject("Incorrecto. Mal hecho!!!!");
                    }
            });
    };



/*
    ----------------------------------------
        DESCRIPCIÓN DE EJECUTAR ESTRUCTURA
    ----------------------------------------
*/



/*
    -Ahora vamos a ejecutar. La Estructura de arriba. La ejecución tambien es con componentes nuevos
    con componentes de ayuda. Compontenes encadenados. 
    - Al llamar a la promesa "QUE_PASARA()", veremos que necesitamos a estos dos elementos,
    encadenados ".then" y ".catch"
    - No son obligatorios, sobre todo ".catch" por el tema  de los errores. 
    - ".catch" es un sistema de errores, es un planteamiento de control de errores. 
    
    - EJECUTAR
        - Al ejecutar una promesa hay unos elementos encadenados que son :
            .then
            .catch
*/

QUE_PASARA2()
    .then((response) => console.log(response))
    .catch((err) => console.error(err));











/****************************************************************************************************/

/*
    --------------------------------
        ESTRUCTURA DE DOS PROMESAS 
    --------------------------------
*/

//EmaScript 6


const PROMESA_UNO = () => 
    {
        return new Promise((resolve, reject) =>
            {
                if (true)
                    {
                        resolve("OwiDragonFenix Perfil Dios !!!!");
                    }
                else
                    {
                        reject("Incorrecto 1 . Mal hecho 1!!!!");
                    }
            });
    };


const PROMESA_DOS = () => 
    {
        return new Promise((resolve, reject) =>
            {
                if (true)
                    {
                        resolve("OwiDragonFenix Evolucionado !!!!");
                    }
                else
                    {
                        reject("Incorrecto 2 . Mal hecho 2!!!!");
                    }
            });
    };




/*
    --------------------------------
        EJECUTAR ESTRUCTURA
    --------------------------------
*/


/*
    - y Ahora ¿como llamamos a las dos promesas de una manera que no sea caotica como
    pasaba en callback's?
        - Utilizando "Promise.all"
*/





// No me funciona 
Promise.all([PROMESA_UNO(),PROMESA_DOS()])
    .then((response) => 
        {
            console.log("Resultados",response)
        })

    .catch((err) => 
        {
            console.error(err); 
        })




