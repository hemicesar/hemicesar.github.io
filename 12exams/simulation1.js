
  function changeBackgroundColor() {
    // Cambiar el color de fondo
    var colors = ["blue", "green", "gray", "purple", "darkOrange"];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
  }

  // Definir el conjunto de preguntas y respuestas
  var questions = [

    {
      question: "¿Cuáles son los números que continúan la sucesión? \n -0.9, 0.08, -0.007, 0.0006, -0.00005, ...",
      choices: ["0.00004, -0.000003", "0.000004, -0.000003", "0.0000004, -0.00000003", "0.000004, -0.0000003", "-1.1,  1.0"],
      correctAnswer: 1
    },
    {
      question: "Un cambio físico se presenta cuando no se altera la naturaleza íntima de la materia; un ejemplo de esto se muestra cuando...",
      choices: ["se quema madera", "se oxida un clavo", "se estira un resorte", "se hierve agua", "se digieren alimentos"],
      correctAnswer: 1
    },
    {
      question: "¿Qué elemento tiene el símbolo Ne?",
      choices: ["Sodio", "Neodimio", "Litio", "Nitrógeno", "Neón"],
      correctAnswer: 4
    },
    {
      question: "¿Cuál es el río más caudaloso del mundo?",
      choices: ["Colorado", "Bravo", "Amazonas", "Nilo", "Yangtze",],
      correctAnswer: 2
    },
    {
      question: "¿En qué continente se encuentra el monte Everest?",
      choices: ["América", "Asia", "Africa", "Europa", "Oceanía"],
      correctAnswer: 1
    },
    {
      question: "¿Qué partículas orbitan en los orbitales átomicos?",
      choices: ["Neutrones", "Iones", "Isótopos", "Protones", "Electrones"],
      correctAnswer: 4
    },
    {
      question: "¿Cuál es el río de la frontera México - EUA?",
      choices: ["Colorado", "Amazonas", "Nilo", "Bravo", "Yangtze",],
      correctAnswer: 3
    },
    {
      question: "Un cambio físico se presenta cuando no se altera la naturaleza íntima de la materia; un ejemplo de esto se muestra cuando...",
      choices: ["se quema madera", "se oxida un clavo", "se estira un resorte", "se hierve agua", "se digieren alimentos"],
      correctAnswer: 1
    },
    {
      question: "¿Qué elemento tiene el símbolo Ne?",
      choices: ["Sodio", "Neodimio", "Litio", "Nitrógeno", "Neón"],
      correctAnswer: 4
    },
    {
      question: "¿Cuál es el río más caudaloso del mundo?",
      choices: ["Colorado", "Bravo", "Amazonas", "Nilo", "Yangtze",],
      correctAnswer: 2
    },
    {
      question: "¿En qué continente se encuentra el monte Everest?",
      choices: ["América", "Asia", "Africa", "Europa", "Oceanía"],
      correctAnswer: 1
    },
    {
      question: "¿Qué partículas orbitan en los orbitales átomicos?",
      choices: ["Neutrones", "Iones", "Isótopos", "Protones", "Electrones"],
      correctAnswer: 4
    },
    ///////////////////////TERMINAN LAS PREGUNTAS DISEÑADAS POR IA
    {
      question: "La _____________ es el estudio de las propiedades de los materiales y de los cambios que éstos sufren.",
      choices: ["Física", "Química", "Mecánica", "Biología", "Óptica"],
      correctAnswer: 1
    },
    {
      question: "Un cambio físico se presenta cuando no se altera la naturaleza íntima de la materia; un ejemplo de esto se muestra cuando...",
      choices: ["se quema madera", "se oxida un clavo", "se estira un resorte", "se hierve agua", "se digieren alimentos"],
      correctAnswer: 1
    },
    {
      question: "¿Qué elemento tiene el símbolo Ne?",
      choices: ["Sodio", "Neodimio", "Litio", "Nitrógeno", "Neón"],
      correctAnswer: 4
    },
    {
      question: "¿Cuál es el río más caudaloso del mundo?",
      choices: ["Colorado", "Bravo", "Amazonas", "Nilo", "Yangtze",],
      correctAnswer: 2
    },
    {
      question: "¿En qué continente se encuentra el monte Everest?",
      choices: ["América", "Asia", "Africa", "Europa", "Oceanía"],
      correctAnswer: 1
    },
    {
      question: "¿Qué partículas orbitan en los orbitales átomicos?",
      choices: ["Neutrones", "Iones", "Isótopos", "Protones", "Electrones"],
      correctAnswer: 4
    },
    {
      question: "¿Cuál es el río de la frontera México - EUA?",
      choices: ["Colorado", "Amazonas", "Nilo", "Bravo", "Yangtze",],
      correctAnswer: 3
    },
    {
      question: "Un cambio físico se presenta cuando no se altera la naturaleza íntima de la materia; un ejemplo de esto se muestra cuando...",
      choices: ["se quema madera", "se oxida un clavo", "se estira un resorte", "se hierve agua", "se digieren alimentos"],
      correctAnswer: 1
    },
    {
      question: "¿Qué elemento tiene el símbolo Ne?",
      choices: ["Sodio", "Neodimio", "Litio", "Nitrógeno", "Neón"],
      correctAnswer: 4
    },
    {
      question: "¿Cuál es el río más caudaloso del mundo?",
      choices: ["Colorado", "Bravo", "Amazonas", "Nilo", "Yangtze",],
      correctAnswer: 2
    },
    {
      question: "¿En qué continente se encuentra el monte Everest?",
      choices: ["América", "Asia", "Africa", "Europa", "Oceanía"],
      correctAnswer: 1
    },
    {
      question: "¿Qué partículas orbitan en los orbitales átomicos?",
      choices: ["Neutrones", "Iones", "Isótopos", "Protones", "Electrones"],
      correctAnswer: 4
    },
    ///////////////////////TERMINAN LAS PREGUNTAS DISEÑADAS POR IA
    {
      question: "La _____________ es el estudio de las propiedades de los materiales y de los cambios que éstos sufren.",
      choices: ["Física", "Química", "Mecánica", "Biología", "Óptica"],
      correctAnswer: 1
    },
    {
      question: "Un cambio físico se presenta cuando no se altera la naturaleza íntima de la materia; un ejemplo de esto se muestra cuando...",
      choices: ["se quema madera", "se oxida un clavo", "se estira un resorte", "se hierve agua", "se digieren alimentos"],
      correctAnswer: 1
    },
    {
      question: "¿Qué elemento tiene el símbolo Ne?",
      choices: ["Sodio", "Neodimio", "Litio", "Nitrógeno", "Neón"],
      correctAnswer: 4
    },
    {
      question: "¿Cuál es el río más caudaloso del mundo?",
      choices: ["Colorado", "Bravo", "Amazonas", "Nilo", "Yangtze",],
      correctAnswer: 2
    },
    {
      question: "¿En qué continente se encuentra el monte Everest?",
      choices: ["América", "Asia", "Africa", "Europa", "Oceanía"],
      correctAnswer: 1
    },
    {
      question: "¿Qué partículas orbitan en los orbitales átomicos?",
      choices: ["Neutrones", "Iones", "Isótopos", "Protones", "Electrones"],
      correctAnswer: 4
    },
    {
      question: "¿Cuál es el río de la frontera México - EUA?",
      choices: ["Colorado", "Amazonas", "Nilo", "Bravo", "Yangtze",],
      correctAnswer: 3
    },
    {
      question: "Un cambio físico se presenta cuando no se altera la naturaleza íntima de la materia; un ejemplo de esto se muestra cuando...",
      choices: ["se quema madera", "se oxida un clavo", "se estira un resorte", "se hierve agua", "se digieren alimentos"],
      correctAnswer: 1
    },
    {
      question: "¿Qué elemento tiene el símbolo Ne?",
      choices: ["Sodio", "Neodimio", "Litio", "Nitrógeno", "Neón"],
      correctAnswer: 4
    },
    {
      question: "¿Cuál es el río más caudaloso del mundo?",
      choices: ["Colorado", "Bravo", "Amazonas", "Nilo", "Yangtze",],
      correctAnswer: 2
    },
    {
      question: "¿En qué continente se encuentra el monte Everest?",
      choices: ["América", "Asia", "Africa", "Europa", "Oceanía"],
      correctAnswer: 1
    },
    {
      question: "¿Qué partículas orbitan en los orbitales átomicos?",
      choices: ["Neutrones", "Iones", "Isótopos", "Protones", "Electrones"],
      correctAnswer: 4
    },
    ///////////////////////TERMINAN LAS PREGUNTAS DISEÑADAS POR IA
    {
      question: "La _____________ es el estudio de las propiedades de los materiales y de los cambios que éstos sufren.",
      choices: ["Física", "Química", "Mecánica", "Biología", "Óptica"],
      correctAnswer: 1
    },
    {
      question: "Un cambio físico se presenta cuando no se altera la naturaleza íntima de la materia; un ejemplo de esto se muestra cuando...",
      choices: ["se quema madera", "se oxida un clavo", "se estira un resorte", "se hierve agua", "se digieren alimentos"],
      correctAnswer: 1
    },
    {
      question: "¿Qué elemento tiene el símbolo Ne?",
      choices: ["Sodio", "Neodimio", "Litio", "Nitrógeno", "Neón"],
      correctAnswer: 4
    },
    {
      question: "¿Cuál es el río más caudaloso del mundo?",
      choices: ["Colorado", "Bravo", "Amazonas", "Nilo", "Yangtze",],
      correctAnswer: 2
    },
    {
      question: "¿En qué continente se encuentra el monte Everest?",
      choices: ["América", "Asia", "Africa", "Europa", "Oceanía"],
      correctAnswer: 1
    },
    {
      question: "¿Qué partículas orbitan en los orbitales átomicos?",
      choices: ["Neutrones", "Iones", "Isótopos", "Protones", "Electrones"],
      correctAnswer: 4
    },
    {
      question: "¿Cuál es el río de la frontera México - EUA?",
      choices: ["Colorado", "Amazonas", "Nilo", "Bravo", "Yangtze",],
      correctAnswer: 3
    },
    {
      question: "Un cambio físico se presenta cuando no se altera la naturaleza íntima de la materia; un ejemplo de esto se muestra cuando...",
      choices: ["se quema madera", "se oxida un clavo", "se estira un resorte", "se hierve agua", "se digieren alimentos"],
      correctAnswer: 1
    },
    {
      question: "¿Qué elemento tiene el símbolo Ne?",
      choices: ["Sodio", "Neodimio", "Litio", "Nitrógeno", "Neón"],
      correctAnswer: 4
    },
    {
      question: "¿Cuál es el río más caudaloso del mundo?",
      choices: ["Colorado", "Bravo", "Amazonas", "Nilo", "Yangtze",],
      correctAnswer: 2
    },
    {
      question: "¿En qué continente se encuentra el monte Everest?",
      choices: ["América", "Asia", "Africa", "Europa", "Oceanía"],
      correctAnswer: 1
    },
    {
      question: "¿Qué partículas orbitan en los orbitales átomicos?",
      choices: ["Neutrones", "Iones", "Isótopos", "Protones", "Electrones"],
      correctAnswer: 4
    },
    ///////////////////////TERMINAN LAS PREGUNTAS DISEÑADAS POR IA
    {
      question: "La _____________ es el estudio de las propiedades de los materiales y de los cambios que éstos sufren.",
      choices: ["Física", "Química", "Mecánica", "Biología", "Óptica"],
      correctAnswer: 1
    },
    {
      question: "Un cambio físico se presenta cuando no se altera la naturaleza íntima de la materia; un ejemplo de esto se muestra cuando...",
      choices: ["se quema madera", "se oxida un clavo", "se estira un resorte", "se hierve agua", "se digieren alimentos"],
      correctAnswer: 1
    },
    {
      question: "¿Qué elemento tiene el símbolo Ne?",
      choices: ["Sodio", "Neodimio", "Litio", "Nitrógeno", "Neón"],
      correctAnswer: 4
    },
    {
      question: "¿Cuál es el río más caudaloso del mundo?",
      choices: ["Colorado", "Bravo", "Amazonas", "Nilo", "Yangtze",],
      correctAnswer: 2
    },
    {
      question: "¿En qué continente se encuentra el monte Everest?",
      choices: ["América", "Asia", "Africa", "Europa", "Oceanía"],
      correctAnswer: 1
    },
    {
      question: "¿Qué partículas orbitan en los orbitales átomicos?",
      choices: ["Neutrones", "Iones", "Isótopos", "Protones", "Electrones"],
      correctAnswer: 4
    },
    {
      question: "¿Cuál es el río de la frontera México - EUA?",
      choices: ["Colorado", "Amazonas", "Nilo", "Bravo", "Yangtze",],
      correctAnswer: 3
    },
    {
      question: "Un cambio físico se presenta cuando no se altera la naturaleza íntima de la materia; un ejemplo de esto se muestra cuando...",
      choices: ["se quema madera", "se oxida un clavo", "se estira un resorte", "se hierve agua", "se digieren alimentos"],
      correctAnswer: 1
    },
    {
      question: "¿Qué elemento tiene el símbolo Ne?",
      choices: ["Sodio", "Neodimio", "Litio", "Nitrógeno", "Neón"],
      correctAnswer: 4
    },
    {
      question: "¿Cuál es el río más caudaloso del mundo?",
      choices: ["Colorado", "Bravo", "Amazonas", "Nilo", "Yangtze",],
      correctAnswer: 2
    },
    {
      question: "¿En qué continente se encuentra el monte Everest?",
      choices: ["América", "Asia", "Africa", "Europa", "Oceanía"],
      correctAnswer: 1
    },
    {
      question: "¿Qué partículas orbitan en los orbitales átomicos?",
      choices: ["Neutrones", "Iones", "Isótopos", "Protones", "Electrones"],
      correctAnswer: 4
    },
    ///////////////////////TERMINAN LAS PREGUNTAS DISEÑADAS POR IA
    {
      question: "La _____________ es el estudio de las propiedades de los materiales y de los cambios que éstos sufren.",
      choices: ["Física", "Química", "Mecánica", "Biología", "Óptica"],
      correctAnswer: 1
    },
    {
      question: "Un cambio físico se presenta cuando no se altera la naturaleza íntima de la materia; un ejemplo de esto se muestra cuando...",
      choices: ["se quema madera", "se oxida un clavo", "se estira un resorte", "se hierve agua", "se digieren alimentos"],
      correctAnswer: 1
    },
    {
      question: "¿Qué elemento tiene el símbolo Ne?",
      choices: ["Sodio", "Neodimio", "Litio", "Nitrógeno", "Neón"],
      correctAnswer: 4
    },
    {
      question: "¿Cuál es el río más caudaloso del mundo?",
      choices: ["Colorado", "Bravo", "Amazonas", "Nilo", "Yangtze",],
      correctAnswer: 2
    },
    {
      question: "¿En qué continente se encuentra el monte Everest?",
      choices: ["América", "Asia", "Africa", "Europa", "Oceanía"],
      correctAnswer: 1
    },
    {
      question: "¿Qué partículas orbitan en los orbitales átomicos?",
      choices: ["Neutrones", "Iones", "Isótopos", "Protones", "Electrones"],
      correctAnswer: 4
    },
    {
      question: "¿Cuál es el río de la frontera México - EUA?",
      choices: ["Colorado", "Amazonas", "Nilo", "Bravo", "Yangtze",],
      correctAnswer: 3
    },
    {
      question: "Un cambio físico se presenta cuando no se altera la naturaleza íntima de la materia; un ejemplo de esto se muestra cuando...",
      choices: ["se quema madera", "se oxida un clavo", "se estira un resorte", "se hierve agua", "se digieren alimentos"],
      correctAnswer: 1
    },
    {
      question: "¿Qué elemento tiene el símbolo Ne?",
      choices: ["Sodio", "Neodimio", "Litio", "Nitrógeno", "Neón"],
      correctAnswer: 4
    },
    {
      question: "¿Cuál es el río más caudaloso del mundo?",
      choices: ["Colorado", "Bravo", "Amazonas", "Nilo", "Yangtze",],
      correctAnswer: 2
    },
    {
      question: "¿En qué continente se encuentra el monte Everest?",
      choices: ["América", "Asia", "Africa", "Europa", "Oceanía"],
      correctAnswer: 1
    },
    {
      question: "¿Qué partículas orbitan en los orbitales átomicos?",
      choices: ["Neutrones", "Iones", "Isótopos", "Protones", "Electrones"],
      correctAnswer: 4
    },
    ///////////////////////TERMINAN LAS PREGUNTAS DISEÑADAS POR IA
    {
      question: "La _____________ es el estudio de las propiedades de los materiales y de los cambios que éstos sufren.",
      choices: ["Física", "Química", "Mecánica", "Biología", "Óptica"],
      correctAnswer: 1
    },
    {
      question: "Un cambio físico se presenta cuando no se altera la naturaleza íntima de la materia; un ejemplo de esto se muestra cuando...",
      choices: ["se quema madera", "se oxida un clavo", "se estira un resorte", "se hierve agua", "se digieren alimentos"],
      correctAnswer: 1
    },
    {
      question: "¿Qué elemento tiene el símbolo Ne?",
      choices: ["Sodio", "Neodimio", "Litio", "Nitrógeno", "Neón"],
      correctAnswer: 4
    },
    {
      question: "¿Cuál es el río más caudaloso del mundo?",
      choices: ["Colorado", "Bravo", "Amazonas", "Nilo", "Yangtze",],
      correctAnswer: 2
    },
    {
      question: "¿En qué continente se encuentra el monte Everest?",
      choices: ["América", "Asia", "Africa", "Europa", "Oceanía"],
      correctAnswer: 1
    },
    {
      question: "¿Qué partículas orbitan en los orbitales átomicos?",
      choices: ["Neutrones", "Iones", "Isótopos", "Protones", "Electrones"],
      correctAnswer: 4
    },
    {
      question: "¿Cuál es el río de la frontera México - EUA?",
      choices: ["Colorado", "Amazonas", "Nilo", "Bravo", "Yangtze",],
      correctAnswer: 3
    },
    {
      question: "Un cambio físico se presenta cuando no se altera la naturaleza íntima de la materia; un ejemplo de esto se muestra cuando...",
      choices: ["se quema madera", "se oxida un clavo", "se estira un resorte", "se hierve agua", "se digieren alimentos"],
      correctAnswer: 1
    },
    {
      question: "¿Qué elemento tiene el símbolo Ne?",
      choices: ["Sodio", "Neodimio", "Litio", "Nitrógeno", "Neón"],
      correctAnswer: 4
    },
    {
      question: "¿Cuál es el río más caudaloso del mundo?",
      choices: ["Colorado", "Bravo", "Amazonas", "Nilo", "Yangtze",],
      correctAnswer: 2
    },
    {
      question: "¿En qué continente se encuentra el monte Everest?",
      choices: ["América", "Asia", "Africa", "Europa", "Oceanía"],
      correctAnswer: 1
    },
    {
      question: "¿Qué partículas orbitan en los orbitales átomicos?",
      choices: ["Neutrones", "Iones", "Isótopos", "Protones", "Electrones"],
      correctAnswer: 4
    },
    ///////////////////////TERMINAN LAS PREGUNTAS DISEÑADAS POR IA
    {
      question: "La _____________ es el estudio de las propiedades de los materiales y de los cambios que éstos sufren.",
      choices: ["Física", "Química", "Mecánica", "Biología", "Óptica"],
      correctAnswer: 1
    },
    {
      question: "Un cambio físico se presenta cuando no se altera la naturaleza íntima de la materia; un ejemplo de esto se muestra cuando...",
      choices: ["se quema madera", "se oxida un clavo", "se estira un resorte", "se hierve agua", "se digieren alimentos"],
      correctAnswer: 1
    },
    {
      question: "¿Qué elemento tiene el símbolo Ne?",
      choices: ["Sodio", "Neodimio", "Litio", "Nitrógeno", "Neón"],
      correctAnswer: 4
    },
    {
      question: "¿Cuál es el río más caudaloso del mundo?",
      choices: ["Colorado", "Bravo", "Amazonas", "Nilo", "Yangtze",],
      correctAnswer: 2
    },
    {
      question: "¿En qué continente se encuentra el monte Everest?",
      choices: ["América", "Asia", "Africa", "Europa", "Oceanía"],
      correctAnswer: 1
    },
    {
      question: "¿Qué partículas orbitan en los orbitales átomicos?",
      choices: ["Neutrones", "Iones", "Isótopos", "Protones", "Electrones"],
      correctAnswer: 4
    },
    {
      question: "¿Cuál es el río de la frontera México - EUA?",
      choices: ["Colorado", "Amazonas", "Nilo", "Bravo", "Yangtze",],
      correctAnswer: 3
    },
    {
      question: "Un cambio físico se presenta cuando no se altera la naturaleza íntima de la materia; un ejemplo de esto se muestra cuando...",
      choices: ["se quema madera", "se oxida un clavo", "se estira un resorte", "se hierve agua", "se digieren alimentos"],
      correctAnswer: 1
    },
    {
      question: "¿Qué elemento tiene el símbolo Ne?",
      choices: ["Sodio", "Neodimio", "Litio", "Nitrógeno", "Neón"],
      correctAnswer: 4
    },
    {
      question: "¿Cuál es el río más caudaloso del mundo?",
      choices: ["Colorado", "Bravo", "Amazonas", "Nilo", "Yangtze",],
      correctAnswer: 2
    },
    {
      question: "¿En qué continente se encuentra el monte Everest?",
      choices: ["América", "Asia", "Africa", "Europa", "Oceanía"],
      correctAnswer: 1
    },
    {
      question: "¿Qué partículas orbitan en los orbitales átomicos?",
      choices: ["Neutrones", "Iones", "Isótopos", "Protones", "Electrones"],
      correctAnswer: 4
    },
    ///////////////////////TERMINAN LAS PREGUNTAS DISEÑADAS POR IA
    {
      question: "La _____________ es el estudio de las propiedades de los materiales y de los cambios que éstos sufren.",
      choices: ["Física", "Química", "Mecánica", "Biología", "Óptica"],
      correctAnswer: 1
    },
    {
      question: "Un cambio físico se presenta cuando no se altera la naturaleza íntima de la materia; un ejemplo de esto se muestra cuando...",
      choices: ["se quema madera", "se oxida un clavo", "se estira un resorte", "se hierve agua", "se digieren alimentos"],
      correctAnswer: 1
    },
    {
      question: "¿Qué elemento tiene el símbolo Ne?",
      choices: ["Sodio", "Neodimio", "Litio", "Nitrógeno", "Neón"],
      correctAnswer: 4
    },
    {
      question: "¿Cuál es el río más caudaloso del mundo?",
      choices: ["Colorado", "Bravo", "Amazonas", "Nilo", "Yangtze",],
      correctAnswer: 2
    },
    {
      question: "¿En qué continente se encuentra el monte Everest?",
      choices: ["América", "Asia", "Africa", "Europa", "Oceanía"],
      correctAnswer: 1
    },
    {
      question: "¿Qué partículas orbitan en los orbitales átomicos?",
      choices: ["Neutrones", "Iones", "Isótopos", "Protones", "Electrones"],
      correctAnswer: 4
    },
    {
      question: "¿Cuál es el río de la frontera México - EUA?",
      choices: ["Colorado", "Amazonas", "Nilo", "Bravo", "Yangtze",],
      correctAnswer: 3
    },
    {
      question: "Un cambio físico se presenta cuando no se altera la naturaleza íntima de la materia; un ejemplo de esto se muestra cuando...",
      choices: ["se quema madera", "se oxida un clavo", "se estira un resorte", "se hierve agua", "se digieren alimentos"],
      correctAnswer: 1
    },
    {
      question: "¿Qué elemento tiene el símbolo Ne?",
      choices: ["Sodio", "Neodimio", "Litio", "Nitrógeno", "Neón"],
      correctAnswer: 4
    },
    {
      question: "¿Cuál es el río más caudaloso del mundo?",
      choices: ["Colorado", "Bravo", "Amazonas", "Nilo", "Yangtze",],
      correctAnswer: 2
    },
    {
      question: "¿En qué continente se encuentra el monte Everest?",
      choices: ["América", "Asia", "Africa", "Europa", "Oceanía"],
      correctAnswer: 1
    },
    {
      question: "¿Qué partículas orbitan en los orbitales átomicos?",
      choices: ["Neutrones", "Iones", "Isótopos", "Protones", "Electrones"],
      correctAnswer: 4
    },
    ///////////////////////TERMINAN LAS PREGUNTAS DISEÑADAS POR IA
    {
      question: "La _____________ es el estudio de las propiedades de los materiales y de los cambios que éstos sufren.",
      choices: ["Física", "Química", "Mecánica", "Biología", "Óptica"],
      correctAnswer: 1
    },
    {
      question: "Un cambio físico se presenta cuando no se altera la naturaleza íntima de la materia; un ejemplo de esto se muestra cuando...",
      choices: ["se quema madera", "se oxida un clavo", "se estira un resorte", "se hierve agua", "se digieren alimentos"],
      correctAnswer: 1
    },
    {
      question: "¿Qué elemento tiene el símbolo Ne?",
      choices: ["Sodio", "Neodimio", "Litio", "Nitrógeno", "Neón"],
      correctAnswer: 4
    },
    {
      question: "¿Cuál es el río más caudaloso del mundo?",
      choices: ["Colorado", "Bravo", "Amazonas", "Nilo", "Yangtze",],
      correctAnswer: 2
    },
    {
      question: "¿En qué continente se encuentra el monte Everest?",
      choices: ["América", "Asia", "Africa", "Europa", "Oceanía"],
      correctAnswer: 1
    },
    {
      question: "¿Qué partículas orbitan en los orbitales átomicos?",
      choices: ["Neutrones", "Iones", "Isótopos", "Protones", "Electrones"],
      correctAnswer: 4
    },
    {
      question: "¿Cuál es el río de la frontera México - EUA?",
      choices: ["Colorado", "Amazonas", "Nilo", "Bravo", "Yangtze",],
      correctAnswer: 3
    },
    {
      question: "Un cambio físico se presenta cuando no se altera la naturaleza íntima de la materia; un ejemplo de esto se muestra cuando...",
      choices: ["se quema madera", "se oxida un clavo", "se estira un resorte", "se hierve agua", "se digieren alimentos"],
      correctAnswer: 1
    },
    {
      question: "¿Qué elemento tiene el símbolo Ne?",
      choices: ["Sodio", "Neodimio", "Litio", "Nitrógeno", "Neón"],
      correctAnswer: 4
    },
    {
      question: "¿Cuál es el río más caudaloso del mundo?",
      choices: ["Colorado", "Bravo", "Amazonas", "Nilo", "Yangtze",],
      correctAnswer: 2
    },
    {
      question: "¿En qué continente se encuentra el monte Everest?",
      choices: ["América", "Asia", "Africa", "Europa", "Oceanía"],
      correctAnswer: 1
    },
    {
      question: "¿Qué partículas orbitan en los orbitales átomicos?",
      choices: ["Neutrones", "Iones", "Isótopos", "Protones", "Electrones"],
      correctAnswer: 4
    },
    ///////////////////////TERMINAN LAS PREGUNTAS DISEÑADAS POR IA
    {
      question: "La _____________ es el estudio de las propiedades de los materiales y de los cambios que éstos sufren.",
      choices: ["Física", "Química", "Mecánica", "Biología", "Óptica"],
      correctAnswer: 1
    },
    {
      question: "Un cambio físico se presenta cuando no se altera la naturaleza íntima de la materia; un ejemplo de esto se muestra cuando...",
      choices: ["se quema madera", "se oxida un clavo", "se estira un resorte", "se hierve agua", "se digieren alimentos"],
      correctAnswer: 1
    },
    {
      question: "¿Qué elemento tiene el símbolo Ne?",
      choices: ["Sodio", "Neodimio", "Litio", "Nitrógeno", "Neón"],
      correctAnswer: 4
    },
    {
      question: "¿Cuál es el río más caudaloso del mundo?",
      choices: ["Colorado", "Bravo", "Amazonas", "Nilo", "Yangtze",],
      correctAnswer: 2
    },
    {
      question: "¿En qué continente se encuentra el monte Everest?",
      choices: ["América", "Asia", "Africa", "Europa", "Oceanía"],
      correctAnswer: 1
    },
    {
      question: "¿Qué partículas orbitan en los orbitales átomicos?",
      choices: ["Neutrones", "Iones", "Isótopos", "Protones", "Electrones"],
      correctAnswer: 4
    },
    {
      question: "¿Cuál es el río de la frontera México - EUA?",
      choices: ["Colorado", "Amazonas", "Nilo", "Bravo", "Yangtze",],
      correctAnswer: 3
    },
    {
      question: "Un cambio físico se presenta cuando no se altera la naturaleza íntima de la materia; un ejemplo de esto se muestra cuando...",
      choices: ["se quema madera", "se oxida un clavo", "se estira un resorte", "se hierve agua", "se digieren alimentos"],
      correctAnswer: 1
    }


  ];
  