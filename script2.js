/* COMENTARIO EN JAVASCRIPT */
const contenedor = document.getElementById("test");

/* DEBEMOS CONSIDERAR LA PREGUNTA QUE QUEREMOS REALIZAR
    POSIBLES RESPUESTAS
    RESPUESTA CORRECTA  */

const = preguntas [
    {
        pregunta: "1. ¿Cuál es la capital de China?",
        respuestas: {
            a: "Tokio",
            b: "Shangai",
            c: "Pekín"
        },
        respuestaCorrecta: "c"
    }
   /* {
        pregunta: "2. ¿Cuál es la capital de China?",
        respuestas: {
            a: "Tokio",
            b: "Shangai",
            c: "Pekín"
        },
        respuestaCorrecta: "c"
    },
    {
        pregunta: "3. ¿Cuál es la capital de China?",
        respuestas: {
            a: "Tokio",
            b: "Shangai",
            c: "Pekín"
        },
        respuestaCorrecta: "c"
    },*/
];

function mostrarTest(){
    const preguntasRespuestas = [];

    preguntas.forEach((preguntaActual, numberQuestion) => {
        const respuestas = [];
        for(letraRespuesta in preguntaActual.respuestas){
            respuestas.push(
                `<label>
                    <input type="radio" name="${numberQuestion}" value="${letraRespuesta}">
                    ${letraRespuesta} : ${preguntaActual.respuestas[letraRespuesta]}

                </label> `

            );
        }
        preguntasRespuestas.push(
            `<div class="cuestion"> ${preguntaActual} </div>
            <div class= "respuestas"> ${respuestas.join('')} </div>
            `
        );
    });

    contenedor.innerHTML = preguntasRespuestas.join('');
}

mostrarTest();