import { CourseQuiz } from "./courses";

export const pythonFullStackQuizzes: CourseQuiz[] = [
  // Módulo 1: Fundamentos de Python
  {
    id: "pyfs-module1-quiz",
    title: "Quiz: Fundamentos de Python",
    moduleId: 1,
    passingScore: 70,
    questions: [
      {
        id: "q1",
        question: "¿Qué es Python?",
        options: [
          "Un lenguaje de programación compilado",
          "Un lenguaje de programación interpretado y multipropósito",
          "Un sistema operativo",
          "Una base de datos"
        ],
        correct: 1,
        explanation: "Python es un lenguaje de programación interpretado, lo que significa que no necesita compilación previa y es multipropósito."
      },
      {
        id: "q2",
        question: "¿Cuál es la salida de: print(5 // 2)?",
        options: ["2.5", "2", "3", "Error"],
        correct: 1,
        explanation: "El operador // realiza división entera, por lo que 5 // 2 = 2."
      },
      {
        id: "q3",
        question: "¿Cómo se declara una variable en Python?",
        options: [
          "var nombre = 'Juan'",
          "nombre := 'Juan'",
          "nombre = 'Juan'",
          "declare nombre = 'Juan'"
        ],
        correct: 2,
        explanation: "En Python las variables se declaran simplemente asignando un valor con el operador =."
      },
      {
        id: "q4",
        question: "¿Cuál es el resultado de: 'Hola' + 'Mundo'?",
        options: ["'Hola Mundo'", "'HolaMundo'", "Error", "'Hola' 'Mundo'"],
        correct: 1,
        explanation: "El operador + concatena strings, por lo que 'Hola' + 'Mundo' = 'HolaMundo'."
      },
      {
        id: "q5",
        question: "¿Qué hace el siguiente código? x = [1, 2, 3]; print(len(x))",
        options: ["Imprime 3", "Imprime [1, 2, 3]", "Error", "Imprime 2"],
        correct: 0,
        explanation: "len() devuelve la longitud de una lista, por lo que len([1, 2, 3]) = 3."
      }
    ]
  },
  
  // Módulo 2: Desarrollo Web con Flask
  {
    id: "pyfs-module2-quiz",
    title: "Quiz: Desarrollo Web con Flask",
    moduleId: 2,
    passingScore: 70,
    questions: [
      {
        id: "q1",
        question: "¿Qué es Flask?",
        options: [
          "Una base de datos",
          "Un framework web micro para Python",
          "Un lenguaje de programación",
          "Un sistema operativo"
        ],
        correct: 1,
        explanation: "Flask es un framework web micro y minimalista para Python."
      },
      {
        id: "q2",
        question: "¿Cómo se define una ruta en Flask?",
        options: [
          "@route('/home')",
          "@app.route('/home')",
          "route('/home')",
          "def route('/home')"
        ],
        correct: 1,
        explanation: "Las rutas en Flask se definen con el decorador @app.route()."
      },
      {
        id: "q3",
        question: "¿Qué método HTTP se usa para enviar datos de formulario?",
        options: ["GET", "POST", "PUT", "DELETE"],
        correct: 1,
        explanation: "POST se usa para enviar datos al servidor, como en formularios."
      },
      {
        id: "q4",
        question: "¿Qué es Jinja2 en Flask?",
        options: [
          "Una base de datos",
          "Un motor de templates",
          "Un servidor web",
          "Un framework CSS"
        ],
        correct: 1,
        explanation: "Jinja2 es el motor de templates que usa Flask para renderizar HTML."
      },
      {
        id: "q5",
        question: "¿Cómo se accede a datos de formulario en Flask?",
        options: [
          "request.form['campo']",
          "form['campo']",
          "request.post['campo']",
          "data['campo']"
        ],
        correct: 0,
        explanation: "Se accede a los datos del formulario mediante request.form['nombre_campo']."
      }
    ]
  },

  // Módulo 3: Bases de Datos con SQL
  {
    id: "pyfs-module3-quiz",
    title: "Quiz: Bases de Datos con SQL",
    moduleId: 3,
    passingScore: 70,
    questions: [
      {
        id: "q1",
        question: "¿Qué significa SQL?",
        options: [
          "Structured Query Language",
          "Simple Query Language",
          "System Query Language",
          "Standard Query Language"
        ],
        correct: 0,
        explanation: "SQL significa Structured Query Language (Lenguaje de Consulta Estructurado)."
      },
      {
        id: "q2",
        question: "¿Cuál es el comando para obtener todos los registros de una tabla?",
        options: [
          "GET ALL FROM tabla",
          "SELECT * FROM tabla",
          "FETCH tabla",
          "SHOW ALL tabla"
        ],
        correct: 1,
        explanation: "SELECT * FROM tabla selecciona todas las columnas de todos los registros."
      },
      {
        id: "q3",
        question: "¿Qué es una primary key?",
        options: [
          "Una contraseña",
          "Un identificador único para cada registro",
          "Un tipo de dato",
          "Un índice"
        ],
        correct: 1,
        explanation: "La primary key es un campo que identifica únicamente cada registro en una tabla."
      },
      {
        id: "q4",
        question: "¿Qué hace SQLAlchemy?",
        options: [
          "Compila código Python",
          "Es un ORM para bases de datos",
          "Crea servidores web",
          "Diseña interfaces"
        ],
        correct: 1,
        explanation: "SQLAlchemy es un ORM (Object-Relational Mapping) que facilita trabajar con bases de datos."
      },
      {
        id: "q5",
        question: "¿Cuál es la operación CRUD para actualizar datos?",
        options: ["CREATE", "READ", "UPDATE", "DELETE"],
        correct: 2,
        explanation: "UPDATE es la operación del acrónimo CRUD para modificar datos existentes."
      }
    ]
  },

  // Módulo 4: Frontend Moderno
  {
    id: "pyfs-module4-quiz",
    title: "Quiz: Frontend Moderno",
    moduleId: 4,
    passingScore: 70,
    questions: [
      {
        id: "q1",
        question: "¿Qué significa HTML?",
        options: [
          "Hyper Text Markup Language",
          "High Tech Modern Language",
          "Home Tool Markup Language",
          "Hyperlink and Text Markup Language"
        ],
        correct: 0,
        explanation: "HTML significa Hyper Text Markup Language."
      },
      {
        id: "q2",
        question: "¿Qué es CSS?",
        options: [
          "Computer Style Sheets",
          "Creative Style Sheets",
          "Cascading Style Sheets",
          "Colorful Style Sheets"
        ],
        correct: 2,
        explanation: "CSS significa Cascading Style Sheets y se usa para estilizar páginas web."
      },
      {
        id: "q3",
        question: "¿Qué es Bootstrap?",
        options: [
          "Un lenguaje de programación",
          "Un framework CSS para diseño responsive",
          "Una base de datos",
          "Un servidor web"
        ],
        correct: 1,
        explanation: "Bootstrap es un framework CSS que facilita el diseño responsive y moderno."
      },
      {
        id: "q4",
        question: "¿Qué es el DOM?",
        options: [
          "Document Object Model",
          "Data Object Management",
          "Dynamic Object Model",
          "Document Oriented Model"
        ],
        correct: 0,
        explanation: "DOM significa Document Object Model y representa la estructura de una página web."
      },
      {
        id: "q5",
        question: "¿Cómo se declara una variable en JavaScript?",
        options: [
          "variable x = 5",
          "var x = 5",
          "x := 5",
          "declare x = 5"
        ],
        correct: 1,
        explanation: "En JavaScript se usa var, let o const para declarar variables."
      }
    ]
  },

  // Módulo 5: APIs REST
  {
    id: "pyfs-module5-quiz",
    title: "Quiz: APIs REST",
    moduleId: 5,
    passingScore: 70,
    questions: [
      {
        id: "q1",
        question: "¿Qué significa REST?",
        options: [
          "Representational State Transfer",
          "Remote State Transfer",
          "Representational Service Transfer",
          "Remote Service Transfer"
        ],
        correct: 0,
        explanation: "REST significa Representational State Transfer."
      },
      {
        id: "q2",
        question: "¿Cuál NO es un método HTTP REST?",
        options: ["GET", "POST", "SEND", "DELETE"],
        correct: 2,
        explanation: "SEND no es un método HTTP estándar. Los métodos comunes son GET, POST, PUT, DELETE."
      },
      {
        id: "q3",
        question: "¿Qué código HTTP indica éxito en una petición GET?",
        options: ["404", "500", "200", "301"],
        correct: 2,
        explanation: "200 OK indica que la petición GET fue exitosa."
      },
      {
        id: "q4",
        question: "¿Qué es JSON?",
        options: [
          "JavaScript Object Notation",
          "Java Standard Object Notation",
          "JavaScript Online Network",
          "Java Script Object Navigation"
        ],
        correct: 0,
        explanation: "JSON significa JavaScript Object Notation y es un formato de intercambio de datos."
      },
      {
        id: "q5",
        question: "¿Para qué sirve JWT?",
        options: [
          "Estilizar CSS",
          "Manejar bases de datos",
          "Autenticación y autorización",
          "Crear interfaces"
        ],
        correct: 2,
        explanation: "JWT (JSON Web Token) se usa para autenticación y autorización en APIs."
      }
    ]
  },

  // Módulo 6: Despliegue y Producción
  {
    id: "pyfs-module6-quiz",
    title: "Quiz: Despliegue y Producción",
    moduleId: 6,
    passingScore: 70,
    questions: [
      {
        id: "q1",
        question: "¿Qué es Docker?",
        options: [
          "Un lenguaje de programación",
          "Una plataforma de virtualización de contenedores",
          "Una base de datos",
          "Un framework web"
        ],
        correct: 1,
        explanation: "Docker es una plataforma que permite crear y gestionar contenedores."
      },
      {
        id: "q2",
        question: "¿Qué es CI/CD?",
        options: [
          "Continuous Integration/Continuous Deployment",
          "Code Integration/Code Development",
          "Continuous Installation/Continuous Delivery",
          "Code Integration/Continuous Deployment"
        ],
        correct: 0,
        explanation: "CI/CD significa Continuous Integration/Continuous Deployment."
      },
      {
        id: "q3",
        question: "¿Qué es un environment variable?",
        options: [
          "Una variable que cambia constantemente",
          "Una configuración externa al código",
          "Un tipo de dato especial",
          "Un error común"
        ],
        correct: 1,
        explanation: "Las variables de entorno son configuraciones que se establecen fuera del código."
      },
      {
        id: "q4",
        question: "¿Qué es Heroku?",
        options: [
          "Una base de datos",
          "Un framework de Python",
          "Una plataforma de nube para despliegue",
          "Un sistema operativo"
        ],
        correct: 2,
        explanation: "Heroku es una plataforma como servicio (PaaS) para desplegar aplicaciones."
      },
      {
        id: "q5",
        question: "¿Por qué es importante el logging en producción?",
        options: [
          "Hace el código más rápido",
          "Permite diagnosticar problemas y errores",
          "Reduce el tamaño de la aplicación",
          "Mejora el diseño visual"
        ],
        correct: 1,
        explanation: "El logging es crucial para monitorear y diagnosticar problemas en producción."
      }
    ]
  }
];

export const getQuizByModule = (courseId: string, moduleId: number): CourseQuiz | undefined => {
  if (courseId === "python_fullstack") {
    return pythonFullStackQuizzes.find(quiz => quiz.moduleId === moduleId);
  }
  return undefined;
};
