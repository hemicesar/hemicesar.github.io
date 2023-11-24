alert('Presiona aquí para continuar');

document.write("<h1>Hello World</h1>");

console.log("this is a string");

var nameuser = "cesin";
nameuser = "CesINN";

let lastname = "hdz";

console.log(lastname);

/* ESTO ES UNA SECCIÓN CON COMENTARIOS MULTILÍNEA EN JAVASCRIPT

PARA CONOCER MEJOR JAVASCRIPT, DEBEMOS SABER FUNCIONES, ALCANCE DE FUNCIONES Y OTRAS MUCHAS COSAS.

COMENCEMOS POR UNOS TUTORIALES Y VAMOS MEJORANDO POCO A POCO, 
REVIZAR ARTÍCULOS DE  LA MOZILLA WEB DEVELOPMENT.

const pi = 3.141592;  = establece un valor como constante / no cambia.

las variables NO pueden empezar con número.

camelCase = personName = 'gordon';

personName;
*/

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
    },
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



let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 


/*OPERADORES EN JAVASCRIPT

let numOne = 60;

let numTwo = 100;

let result = numOne + numTwo;

OPERADORES ARITMÉTICOS

console.log(result);

PODEMOS CONCATENAR STRINGS

PODEMOS COMPARAR VALORES [COMPARAR CONTRASEÑAS DE USUARIO]

!= DIFERENTE
== IGUAL
<= MENOR O IGUAL
>= MAYOR O IGUAL

*/

/* USO DE CONDICIONALES EN JS
PODEMOS APLICAR LO CONOCIDO COMO CONTROL DE FLUJO

IF

if(result == true) {

    console.log("login correcto");
} 

// PODEMOS UTILIZAR TRIPLE IGUAL ===

if(result === false) {

    console.log("login incorrecto");
} else if {
    console.log("contraseña incorrecta");
} else {
    console.log("introduzca una contraseña");
}

SWITCH
let typeCard = "Debid card";
switch(typeCard){
    case 'Debit card':
        console.log('This is a debit card');
        break;
    case 'Credit card':
        console-log('This is a credit card');
        break;
    default:
        console.log('No known card');
}
*/


/* ITERADORES O BUCLES EN JS
ESTE TIPODE HERRAMIENTAS NOS PEMRITEN REALIZAR UNA TAREA REPETITIVE, UNA GRAN CANTIDAD DE VECES.

POR EJEMPLO: MANDAR UN SALUDO A 50 USUARIOS.
OTRO EJEMPLO: MANDAR UN ARCHIVO O MENSAJE A 200 USUARIOS.

let count = 50;
while(count > 0){
    console.log('Hello');
    count = count - 1; = count-- | count++ | Operadores de incremento

}
EL WHILE NOS PERMITE APLICAR UNA TAREA A UNA ENORME CANTIDAD DE DATOS.
*******
CICLO FOR
*******
let names = ['user1', 'user2', 'user3', 'user4'];

LOS ARREGLOS EN JS TAMBIÉN TE PERMITEN ACCEDER A UN ITEM ESPECÍFICO O MOSTRAR 
O INDICAR EL NUMERO DE UN ITEM EN PARTICULAR SIMILAR A COMO LO TRABJAAMOS EN PYTHON.

console.log(names.length);

for (let index = 0; index < names.length; index++){
    console.log(names[index]);
}
*/

/*FUNCIONES EN JS

LAS FUNCIONES TIENEN EL OBJETIVO DE CREAR CÓDIGO REUTILIZABLE

FUNCIÓN SIN PARÁMETROS
function greeting(){
    console.log("hi");
}

greeting();   | LLAMAMOS LA FUNCIÓN.


FUNCIÓN CON PARÁMETROS
function greeting(name){
    console.log("hi "+name);
}

greeting("juan"); | LLAMAMOS LA FUNCIÓN E INDICAMOS PARÁMETROS.

PODEMOS IMPLEMENTAR FUNCIONES PARA REALIZAR OPERACIONES ARITMÉTICAS

*/

//TIPOS DE DATOS EN JS

//string "secuencia de caracteres"

//'string con comillas simples'

//"I'm" = String para inglés


//int = datos de numeros enteros.

//float = números con decimales

//boolean = tipo de dato lógico "true / false"

//ARRAY

//['JOE', 'RYAN', 'MARTHA']

//pODEMOS TENER LISTAS DE CUALQUIER TIPO DE DATOS. 

//Listas de boolean.

// OBJECT 
//Objeto = Tipo de dato adicional.
//Objeto = usuario.

//Los objetos  los podemos crear a través de llaves.
//
//{
//    "username": 'ryan',
//    "score": 70.4,
//    "hours": 14,
//    "proffesional": true
//}
//
//Los objetos están conformados por pares clave : valor

/*SIGUIENTE PASO: ESTUDIAR EL DOM DEL NAVEGADOR*/

// PUEDES ESTUDIAR NODE JS  | CREAR UN API



/**IDEAS DE APPS
 * CALCULADORA
 * APP CLIMA 
 * APP TAREAS
 * GALERIA DE FOTOS
 * 
 * SUBIENDO NIVEL:  APP DE CHAT
 * MINI RED SOCIAL
 * E COMMERCE
 * 
 * 
 * 
 * 
 */

/**REQUERIMIENTOS DE CONOCIMIENTOS:
 * SERVICIOS EN LA NUBE
 * PARADIGMAS DE PROGRAMACIÓN
 * PATRONES DE DISEÑO
 * TESTEO DE APPS
 * 
 * EN ESTE PUNTO YA PUEDES BUSCAR TRABAJO COMO DESARROLLADOR MÓVIL.
 * DEBES CONSTRUIR UN PORTAFOLIO DE EVIDENCIAS
 * 
 * BUSCA CREAR SOLUCIONES EN DISTINTAS ÁREAS QUE SEAN DE TU INTERÉS
 * 
 * PROFUNDIZA EN UN LENGUAJE DE PROGRAMACIÓN DE BAJO NIVEL.
 * PRACTICA / PRACTICA / PRACTICA
 * 
 * ES MEJOR ESCRIBIR UN POCO DE CÓDIGO TODOS LOS DÍAS, QUE ESCRIBIR MUCHO CÓDIGO UNA VEZ A LA SEMANA.
 * 
 * 
 * 
 */


/**QUÉ SE PUEDE HACER CON JS??
 * 
 * SITIOS Y APPS WEB | REACT, ANGULAR, VUE, SVELTE
 * CREAR PRESENTACIONES | SLIDES.COM
 * REVEAL JS | FRAMEWORK PARA CREAR PRESENTACIONES 
 * NODE JS | 
 * EXPRESS / HAPI / LOOPBACK / NESTJS 
 * ELECTRON | FRAMEWORK PARA CREAR APPS DE ESCRITORIO
 * NWJS / NODEGUI
 * CLI = COMMAND LINE INTERFACE
 * COMMANDER.JS
 * 
 * BABYLONJS = VIDEOJUEGOS Y 3D / PIXIJS
 * PLAY CANVAS
 * 
 * ******************************************************************
 * WEBGL = HERRAMIENTA PARA PODER CREAR COSAS 3D DENTRO DEL NAVEGADOR
 * ¿QUÉ ES WEB GL?
 * ******************************************************************
 * THREEJS
 * 
 * AUDIO API, PARA CREAR MÚSICA DENTRO DEL NAVEGADOR
 * TONEJS
 * HOWLER.JS
 * 
 * ANIMACIONES
 * GREENSOCK.COM = REVISAR PÁGINA = VER SU SHOWCASE
 * 
 * 
 * JS TAMBIÉN SIVRE PARA PROGRAMAR Y CONFIGURAR TARJETAS DE HARDWARE
 * JOHNNY-FIVE
 * NODE RED = PERMITE COMUNICAR TARJETAS A TRAVÉS DE LA NUBE
 * 
 * IOT,JS = PROYECTO ABIERTO PARA INTERNET DE LAS COSAS CON JS
 * 
 * 
 * APLICACIONES MÓVILES CON IONIC / ANGULAR
 * REACT NATIVE / NATIVE SCRIPT
 * 
 * SE PUEDEN CREAR APLICACIONES SRC RENDERING CON NEXT
 * 
 * MACHINE ÑEARNING
 * TENSORFLOW.JS
 */