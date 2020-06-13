
/****************************************************************************************************/

/*
    ---------------------------------
        OTRO EJEMPLO DE ESTRUCTURA
    --------------------------------
*/




const QUE_PASARA_AHORA = () => 
    {
        return new Promise((resolve, reject) => 
            {
                if (true)
                    {
                        setTimeout(() => 
                            {
                                resolve("Verdadero");

                            },3000);
                    }
                else 
                {
                    const ERROR = new Error("Vamos Mal !!");
                }
            });
    };
















QUE_PASARA_AHORA()
        .then((response) => console.log(response));
        //.catch((err) => console.error(err));



/*
    Aqui vamos a solucionar el RUIDO CODIGO
        - Utilizando "Promise.all"
*/

// poder ejecutar  VARIAS Promesas a la vez
// con esto avanzamos mucho en la historia
//Evolucion del CallBack
Promise.all([QUE_PASARA_AHORA(), QUE_PASARA_AHORA()])
    .then((response) => 
        {   
            console.log("Resultados", response);
        });
    // .catch(err) => 
    //     {
    //         console.error(err);
    //     };
