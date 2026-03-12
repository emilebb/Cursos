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

// JavaScript Quizzes
export const javascriptQuizzes: CourseQuiz[] = [
  {
    id: "js-module1-quiz",
    title: "Quiz: Fundamentos de JavaScript",
    moduleId: 1,
    passingScore: 70,
    questions: [
      {
        id: "q1",
        question: "¿Cómo se declara una variable en JavaScript?",
        options: [
          "variable x = 5",
          "var x = 5",
          "x := 5",
          "declare x = 5"
        ],
        correct: 1,
        explanation: "En JavaScript se usa 'var', 'let' o 'const' para declarar variables."
      },
      {
        id: "q2",
        question: "¿Cuál es el resultado de: 3 + '3'?",
        options: ["6", "'33'", "Error", "NaN"],
        correct: 1,
        explanation: "JavaScript convierte el número a string y concatena: 3 + '3' = '33'."
      },
      {
        id: "q3",
        question: "¿Qué método se usa para imprimir en consola?",
        options: ["print()", "console.log()", "echo()", "log()"],
        correct: 1,
        explanation: "console.log() es el método estándar para imprimir en la consola de JavaScript."
      },
      {
        id: "q4",
        question: "¿Cuál es un tipo de dato primitivo en JavaScript?",
        options: ["Array", "Object", "String", "Function"],
        correct: 2,
        explanation: "String es un tipo de dato primitivo. Array, Object y Function son tipos de referencia."
      },
      {
        id: "q5",
        question: "¿Qué es 'undefined' en JavaScript?",
        options: [
          "Un valor nulo",
          "Una variable no declarada",
          "Una variable declarada sin valor",
          "Un error"
        ],
        correct: 2,
        explanation: "undefined es el valor que tienen las variables declaradas pero no inicializadas."
      }
    ]
  },
  {
    id: "js-module2-quiz",
    title: "Quiz: Estructuras de Datos",
    moduleId: 2,
    passingScore: 70,
    questions: [
      {
        id: "q1",
        question: "¿Cómo se accede al primer elemento de un array?",
        options: ["array.first()", "array[0]", "array[1]", "array.first"],
        correct: 1,
        explanation: "Los arrays en JavaScript son indexados desde 0, por lo que array[0] accede al primer elemento."
      },
      {
        id: "q2",
        question: "¿Qué método agrega un elemento al final de un array?",
        options: ["add()", "push()", "append()", "insert()"],
        correct: 1,
        explanation: "push() agrega uno o más elementos al final de un array."
      },
      {
        id: "q3",
        question: "¿Cómo se obtiene la longitud de un array?",
        options: ["array.length()", "array.length", "array.size()", "len(array)"],
        correct: 1,
        explanation: "array.length es una propiedad que devuelve la cantidad de elementos en el array."
      },
      {
        id: "q4",
        question: "¿Qué es un array asociativo en JavaScript?",
        options: [
          "Un array con índices numéricos",
          "Un objeto con propiedades clave-valor",
          "Un array multidimensional",
          "Un array ordenado"
        ],
        correct: 1,
        explanation: "JavaScript no tiene arrays asociativos nativos, se usan objetos para clave-valor."
      },
      {
        id: "q5",
        question: "¿Qué método elimina el último elemento de un array?",
        options: ["remove()", "delete()", "pop()", "shift()"],
        correct: 2,
        explanation: "pop() elimina y devuelve el último elemento de un array."
      }
    ]
  },
  {
    id: "js-module3-quiz",
    title: "Quiz: Manipulación del DOM",
    moduleId: 3,
    passingScore: 70,
    questions: [
      {
        id: "q1",
        question: "¿Qué significa DOM?",
        options: [
          "Document Object Model",
          "Data Object Management",
          "Dynamic Object Model",
          "Document Oriented Model"
        ],
        correct: 0,
        explanation: "DOM significa Document Object Model y representa la estructura HTML de una página."
      },
      {
        id: "q2",
        question: "¿Cómo se selecciona un elemento por su ID?",
        options: [
          "document.getElement('#id')",
          "document.getElementById('id')",
          "document.querySelector('#id')",
          "document.id('id')"
        ],
        correct: 2,
        explanation: "document.querySelector('#id') es el método moderno para seleccionar por ID."
      },
      {
        id: "q3",
        question: "¿Qué método se usa para agregar un event listener?",
        options: [
          "element.on('click', handler)",
          "element.addEventListener('click', handler)",
          "element.attachEvent('click', handler)",
          "element.click(handler)"
        ],
        correct: 1,
        explanation: "addEventListener() es el método estándar para agregar eventos en JavaScript moderno."
      },
      {
        id: "q4",
        question: "¿Qué propiedad se usa para cambiar el texto de un elemento?",
        options: [
          "element.text",
          "element.textContent",
          "element.innerHTML",
          "element.value"
        ],
        correct: 1,
        explanation: "textContent cambia solo el texto, mientras que innerHTML puede incluir HTML."
      },
      {
        id: "q5",
        question: "¿Cómo se previene el comportamiento por defecto de un evento?",
        options: [
          "event.stop()",
          "event.preventDefault()",
          "event.cancel()",
          "return false"
        ],
        correct: 1,
        explanation: "preventDefault() detiene el comportamiento por defecto del evento."
      }
    ]
  }
];

// AI Quizzes
export const aiQuizzes: CourseQuiz[] = [
  {
    id: "ai-module1-quiz",
    title: "Quiz: ¿Qué es la IA?",
    moduleId: 1,
    passingScore: 70,
    questions: [
      {
        id: "q1",
        question: "¿Qué es la Inteligencia Artificial?",
        options: [
          "La capacidad de las máquinas para pensar como humanos",
          "Simulación de inteligencia humana en máquinas",
          "Programas que solo ejecutan tareas repetitivas",
          "Sistemas operativos avanzados"
        ],
        correct: 1,
        explanation: "La IA es la simulación de procesos de inteligencia humana en máquinas."
      },
      {
        id: "q2",
        question: "¿Cuál NO es un tipo de IA?",
        options: [
          "IA Débil",
          "IA Fuerte",
          "IA General",
          "IA Absoluta"
        ],
        correct: 3,
        explanation: "No existe el concepto de 'IA Absoluta'. Los tipos comunes son Débil, Fuerte y General."
      },
      {
        id: "q3",
        question: "¿Quién acuñó el término 'Inteligencia Artificial'?",
        options: [
          "Alan Turing",
          "John McCarthy",
          "Albert Einstein",
          "Steve Jobs"
        ],
        correct: 1,
        explanation: "John McCarthy acuñó el término en 1956 durante la Conferencia de Dartmouth."
      },
      {
        id: "q4",
        question: "¿Qué es el Test de Turing?",
        options: [
          "Un test de velocidad de procesamiento",
          "Una prueba para determinar si una máquina puede exhibir comportamiento inteligente",
          "Un examen de programación",
          "Una medida de memoria RAM"
        ],
        correct: 1,
        explanation: "El Test de Turing evalúa si una máquina puede conversar como un humano."
      },
      {
        id: "q5",
        question: "¿Cuál es una aplicación actual de IA?",
        options: [
          "Asistentes virtuales",
          "Reconocimiento facial",
          "Vehículos autónomos",
          "Todas las anteriores"
        ],
        correct: 3,
        explanation: "La IA tiene múltiples aplicaciones incluyendo asistentes, reconocimiento facial y vehículos autónomos."
      }
    ]
  },
  {
    id: "ai-module2-quiz",
    title: "Quiz: Machine Learning",
    moduleId: 2,
    passingScore: 70,
    questions: [
      {
        id: "q1",
        question: "¿Qué es Machine Learning?",
        options: [
          "Programación manual de reglas",
          "Algoritmos que mejoran con experiencia",
          "Hardware especializado",
          "Bases de datos relacionales"
        ],
        correct: 1,
        explanation: "Machine Learning son algoritmos que aprenden y mejoran automáticamente con la experiencia."
      },
      {
        id: "q2",
        question: "¿Cuál NO es un tipo de Machine Learning?",
        options: [
          "Supervisado",
          "No supervisado",
          "Por refuerzo",
          "Determinista"
        ],
        correct: 3,
        explanation: "Los tipos principales son supervisado, no supervisado y por refuerzo."
      },
      {
        id: "q3",
        question: "¿Qué es 'overfitting'?",
        options: [
          "Cuando un modelo aprende demasiado bien los datos de entrenamiento",
          "Cuando un modelo no aprende nada",
          "Cuando un modelo es demasiado rápido",
          "Cuando un modelo usa demasiada memoria"
        ],
        correct: 0,
        explanation: "Overfitting ocurre cuando el modelo memoriza los datos de entrenamiento pero no generaliza."
      },
      {
        id: "q4",
        question: "¿Qué es un dataset de entrenamiento?",
        options: [
          "Datos usados para probar el modelo",
          "Datos usados para enseñar al modelo",
          "Datos aleatorios",
          "Datos encriptados"
        ],
        correct: 1,
        explanation: "El dataset de entrenamiento se usa para enseñar patrones al modelo."
      },
      {
        id: "q5",
        question: "¿Qué es la validación cruzada?",
        options: [
          "Probar el modelo con datos nuevos",
          "Dividir datos para evaluar el modelo múltiples veces",
          "Encriptar los datos",
          "Comprimir los datos"
        ],
        correct: 1,
        explanation: "La validación cruzada divide los datos para evaluar el modelo de forma robusta."
      }
    ]
  },
  {
    id: "ai-module3-quiz",
    title: "Quiz: Perspectivas de la IA",
    moduleId: 3,
    passingScore: 70,
    questions: [
      {
        id: "q1",
        question: "¿Cuál es un riesgo ético de la IA?",
        options: [
          "Sesgo en los algoritmos",
          "Pérdida de empleos",
          "Privacidad",
          "Todas las anteriores"
        ],
        correct: 3,
        explanation: "La IA presenta múltiples riesgos éticos incluyendo sesgos, empleo y privacidad."
      },
      {
        id: "q2",
        question: "¿Qué es la 'explicabilidad' en IA?",
        options: [
          "Hacer que la IA hable",
          "Entender por qué la IA toma decisiones",
          "Velocidad de procesamiento",
          "Costo de implementación"
        ],
        correct: 1,
        explanation: "La explicabilidad se refiere a poder entender y justificar las decisiones de la IA."
      },
      {
        id: "q3",
        question: "¿Qué es la IA explicable (XAI)?",
        options: [
          "IA que puede explicar sus razonamientos",
          "IA muy rápida",
          "IA barata",
          "IA que solo funciona en línea"
        ],
        correct: 0,
        explanation: "XAI (Explainable AI) es IA que puede explicar por qué toma ciertas decisiones."
      },
      {
        id: "q4",
        question: "¿Cuál es un beneficio futuro de la IA?",
        options: [
          "Medicina personalizada",
          "Optimización energética",
          "Educación adaptativa",
          "Todas las anteriores"
        ],
        correct: 3,
        explanation: "La IA tiene potencial para mejorar medicina, energía, educación y muchos otros campos."
      },
      {
        id: "q5",
        question: "¿Qué es la 'singularidad tecnológica'?",
        options: [
          "Cuando la IA supera la inteligencia humana",
          "Cuando los robots dominan el mundo",
          "Cuando la IA deja de funcionar",
          "Cuando la IA se vuelve lenta"
        ],
        correct: 0,
        explanation: "La singularidad tecnológica es el punto hipotético donde la IA supera la inteligencia humana."
      }
    ]
  }
];

// Marketing Quizzes
export const marketingQuizzes: CourseQuiz[] = [
  {
    id: "marketing-module1-quiz",
    title: "Quiz: Introducción al Marketing Digital",
    moduleId: 1,
    passingScore: 70,
    questions: [
      {
        id: "q1",
        question: "¿Qué es el marketing digital?",
        options: [
          "Vender productos en tiendas físicas",
          "Promoción de productos a través de medios digitales",
          "Solo publicidad en TV",
          "Marketing tradicional"
        ],
        correct: 1,
        explanation: "El marketing digital utiliza canales online para promover productos y servicios."
      },
      {
        id: "q2",
        question: "¿Cuál NO es un canal de marketing digital?",
        options: [
          "Redes sociales",
          "Email marketing",
          "SEO",
          "Venta puerta a puerta"
        ],
        correct: 3,
        explanation: "La venta puerta a puerta es marketing tradicional, no digital."
      },
      {
        id: "q3",
        question: "¿Qué es un 'lead'?",
        options: [
          "Un cliente que ya compró",
          "Un potencial cliente interesado",
          "Un competidor",
          "Un producto"
        ],
        correct: 1,
        explanation: "Un lead es un contacto o potencial cliente que ha mostrado interés."
      },
      {
        id: "q4",
        question: "¿Qué significa CTA?",
        options: [
          "Customer Trust Action",
          "Call To Action",
          "Click Through Analytics",
          "Content Target Audience"
        ],
        correct: 1,
        explanation: "CTA (Call To Action) es una llamada a la acción para incentuar al usuario."
      },
      {
        id: "q5",
        question: "¿Qué es el 'funnel' de marketing?",
        options: [
          "Un tipo de publicidad",
          "El recorrido del cliente desde conocimiento hasta compra",
          "Un software de marketing",
          "Una métrica de ventas"
        ],
        correct: 1,
        explanation: "El funnel representa el viaje del cliente desde el descubrimiento hasta la conversión."
      }
    ]
  },
  {
    id: "marketing-module2-quiz",
    title: "Quiz: Tráfico Orgánico y Pago",
    moduleId: 2,
    passingScore: 70,
    questions: [
      {
        id: "q1",
        question: "¿Qué significa SEO?",
        options: [
          "Search Engine Optimization",
          "Social Engagement Optimization",
          "Sales Enhancement Operations",
          "Site Efficiency Optimization"
        ],
        correct: 0,
        explanation: "SEO significa Search Engine Optimization y ayuda a mejorar la visibilidad en buscadores."
      },
      {
        id: "q2",
        question: "¿Qué es tráfico orgánico?",
        options: [
          "Tráfico de publicidad pagada",
          "Tráfico que viene de buscadores naturalmente",
          "Tráfico de redes sociales",
          "Tráfico directo"
        ],
        correct: 1,
        explanation: "El tráfico orgánico proviene de resultados de búsqueda sin pagar por publicidad."
      },
      {
        id: "q3",
        question: "¿Qué es un keyword?",
        options: [
          "Una contraseña",
          "Una palabra o frase de búsqueda",
          "Un usuario",
          "Un producto"
        ],
        correct: 1,
        explanation: "Un keyword es una palabra o frase que los usuarios usan en búsquedas."
      },
      {
        id: "q4",
        question: "¿Qué es SEM?",
        options: [
          "Search Engine Marketing",
          "Social Email Marketing",
          "Sales Engagement Management",
          "Site Experience Management"
        ],
        correct: 0,
        explanation: "SEM incluye SEO y publicidad pagada en buscadores."
      },
      {
        id: "q5",
        question: "¿Qué es el CPC?",
        options: [
          "Cost Per Click",
          "Customer Personal Contact",
          "Content Performance Campaign",
          "Click Performance Count"
        ],
        correct: 0,
        explanation: "CPC (Cost Per Click) es el costo por cada clic en un anuncio."
      }
    ]
  },
  {
    id: "marketing-module3-quiz",
    title: "Quiz: Conversión",
    moduleId: 3,
    passingScore: 70,
    questions: [
      {
        id: "q1",
        question: "¿Qué es una conversión?",
        options: [
          "Cambiar de religión",
          "Cuando un usuario realiza una acción deseada",
          "Subir un video",
          "Crear una cuenta"
        ],
        correct: 1,
        explanation: "Una conversión ocurre cuando un usuario completa una acción deseada (compra, registro, etc.)."
      },
      {
        id: "q2",
        question: "¿Qué es la tasa de conversión?",
        options: [
          "El costo de conversión",
          "El porcentaje de visitantes que convierten",
          "El tiempo de conversión",
          "El número de conversiones"
        ],
        correct: 1,
        explanation: "La tasa de conversión es el porcentaje de visitantes que completan la acción deseada."
      },
      {
        id: "q3",
        question: "¿Qué es A/B testing?",
        options: [
          "Probar dos versiones para ver cuál funciona mejor",
          "Probar software antivirus",
          "Testear hardware",
          "Comprobar errores"
        ],
        correct: 0,
        explanation: "A/B testing compara dos versiones para determinar cuál tiene mejor rendimiento."
      },
      {
        id: "q4",
        question: "¿Qué es un landing page?",
        options: [
          "La página principal",
          "Una página diseñada para conversiones específicas",
          "Una página de errores",
          "Una página de contacto"
        ],
        correct: 1,
        explanation: "Un landing page está optimizado para una acción específica como venta o registro."
      },
      {
        id: "q5",
        question: "¿Qué es el ROI?",
        options: [
          "Return On Investment",
          "Rate Of Interest",
          "Reach Of Impact",
          "Revenue Online Index"
        ],
        correct: 0,
        explanation: "ROI (Return On Investment) mide la rentabilidad de una inversión."
      }
    ]
  }
];

// React Quizzes
export const reactQuizzes: CourseQuiz[] = [
  {
    id: "react-module1-quiz",
    title: "Quiz: Introducción a React",
    moduleId: 1,
    passingScore: 70,
    questions: [
      {
        id: "q1",
        question: "¿Qué es React?",
        options: [
          "Una base de datos",
          "Un lenguaje de programación",
          "Una librería JavaScript para construir UI",
          "Un framework backend"
        ],
        correct: 2,
        explanation: "React es una librería JavaScript creada por Facebook para construir interfaces de usuario."
      },
      {
        id: "q2",
        question: "¿Qué es JSX?",
        options: [
          "JavaScript XML",
          "Java Syntax Extension",
          "JSON Extended",
          "JavaScript Style Extension"
        ],
        correct: 0,
        explanation: "JSX es una extensión de sintaxis que permite escribir HTML en JavaScript."
      },
      {
        id: "q3",
        question: "¿Qué es un componente en React?",
        options: [
          "Una función HTML",
          "Una pieza reutilizable de UI",
          "Un estilo CSS",
          "Una base de datos"
        ],
        correct: 1,
        explanation: "Un componente es una pieza independiente y reutilizable de la interfaz."
      },
      {
        id: "q4",
        question: "¿Qué son las props?",
        options: [
          "Propiedades CSS",
          "Propiedades que pasan datos a componentes",
          "Propiedades del servidor",
          "Propiedades de la base de datos"
        ],
        correct: 1,
        explanation: "Las props son propiedades que pasan datos de un componente padre a un hijo."
      },
      {
        id: "q5",
        question: "¿Qué es el Virtual DOM?",
        options: [
          "Una copia del DOM real en memoria",
          "El DOM visible",
          "Una base de datos",
          "Un servidor"
        ],
        correct: 0,
        explanation: "El Virtual DOM es una representación virtual del DOM que optimiza las actualizaciones."
      }
    ]
  },
  {
    id: "react-module2-quiz",
    title: "Quiz: Estado y Efectos",
    moduleId: 2,
    passingScore: 70,
    questions: [
      {
        id: "q1",
        question: "¿Qué hook se usa para manejar estado?",
        options: [
          "useEffect",
          "useState",
          "useContext",
          "useReducer"
        ],
        correct: 1,
        explanation: "useState es el hook principal para manejar estado en componentes funcionales."
      },
      {
        id: "q2",
        question: "¿Qué hace useEffect?",
        options: [
          "Maneja eventos",
          "Ejecuta efectos secundarios",
          "Crea estilos",
          "Maneja rutas"
        ],
        correct: 1,
        explanation: "useEffect se usa para ejecutar efectos secundarios como peticiones API o suscripciones."
      },
      {
        id: "q3",
        question: "¿Cómo se actualiza el estado con useState?",
        options: [
          "estado = nuevoValor",
          "setEstado(nuevoValor)",
          "estado.update(nuevoValor)",
          "updateEstado(nuevoValor)"
        ],
        correct: 1,
        explanation: "useState retorna [estado, setEstado] donde setEstado actualiza el valor."
      },
      {
        id: "q4",
        question: "¿Qué es un efecto secundario?",
        options: [
          "Un error en el código",
          "Una interacción con el mundo exterior",
          "Un estilo CSS",
          "Un componente"
        ],
        correct: 1,
        explanation: "Los efectos secundarios son interacciones fuera de React como API calls o DOM manipulation."
      },
      {
        id: "q5",
        question: "¿Cuándo se ejecuta useEffect sin dependencias?",
        options: [
          "Nunca",
          "Solo una vez",
          "En cada render",
          "Solo al montar"
        ],
        correct: 2,
        explanation: "Sin array de dependencias, useEffect se ejecuta después de cada render."
      }
    ]
  }
];

// Excel Quizzes
export const excelQuizzes: CourseQuiz[] = [
  {
    id: "excel-module1-quiz",
    title: "Quiz: Interfaz y Datos Básicos",
    moduleId: 1,
    passingScore: 70,
    questions: [
      {
        id: "q1",
        question: "¿Qué es una celda en Excel?",
        options: [
          "Una fila completa",
          "La intersección de una fila y una columna",
          "Una columna completa",
          "Una hoja completa"
        ],
        correct: 1,
        explanation: "Una celda es la intersección de una fila y una columna, identificada por su coordenada (A1, B2, etc.)."
      },
      {
        id: "q2",
        question: "¿Cómo se inicia una fórmula en Excel?",
        options: [
          "Con =",
          "Con +",
          "Con -",
          "Todas las anteriores"
        ],
        correct: 3,
        explanation: "Las fórmulas pueden iniciar con =, + o - en Excel."
      },
      {
        id: "q3",
        question: "¿Qué es un rango en Excel?",
        options: [
          "Un tipo de gráfico",
          "Un grupo de celdas",
          "Una función",
          "Un formato"
        ],
        correct: 1,
        explanation: "Un rango es un grupo de celdas seleccionadas, como A1:A10."
      },
      {
        id: "q4",
        question: "¿Cuál es la función para sumar?",
        options: [
          "SUMAR()",
          "SUM()",
          "ADD()",
          "TOTAL()"
        ],
        correct: 1,
        explanation: "SUM() es la función estándar para sumar valores en Excel."
      },
      {
        id: "q5",
        question: "¿Qué significa A1:A10?",
        options: [
          "La celda A1 y A10",
          "Todas las celdas desde A1 hasta A10",
          "La columna A",
          "La fila 1"
        ],
        correct: 1,
        explanation: "A1:A10 representa todas las celdas desde A1 hasta A10 inclusive."
      }
    ]
  },
  {
    id: "excel-module2-quiz",
    title: "Quiz: Fórmulas y Análisis",
    moduleId: 2,
    passingScore: 70,
    questions: [
      {
        id: "q1",
        question: "¿Qué hace la función PROMEDIO()?",
        options: [
          "Cuenta valores",
          "Calcula el promedio",
          "Encuentra el máximo",
          "Suma valores"
        ],
        correct: 1,
        explanation: "PROMEDIO() calcula el valor promedio de un rango de celdas."
      },
      {
        id: "q2",
        question: "¿Qué es una referencia absoluta?",
        options: [
          "$A$1",
          "A1",
          "A$1",
          "$A1"
        ],
        correct: 0,
        explanation: "$A$1 es una referencia absoluta que no cambia al copiar la fórmula."
      },
      {
        id: "q3",
        question: "¿Qué función cuenta celdas con texto?",
        options: [
          "COUNT()",
          "COUNTA()",
          "COUNTBLANK()",
          "COUNTIF()"
        ],
        correct: 1,
        explanation: "COUNTA() cuenta todas las celdas no vacías, incluyendo texto."
      },
      {
        id: "q4",
        question: "¿Qué hace la función SI()?",
        options: [
          "Suma si cumple condición",
          "Cuenta si cumple condición",
          "Evalúa una condición y devuelve valores",
          "Busca un valor"
        ],
        correct: 2,
        explanation: "SI() evalúa una condición y devuelve un valor si es verdadera y otro si es falsa."
      },
      {
        id: "q5",
        question: "¿Qué es BUSCARV()?",
        options: [
          "Busca verticalmente un valor",
          "Busca horizontalmente un valor",
          "Busca y reemplaza",
          "Busca errores"
        ],
        correct: 0,
        explanation: "BUSCARV() busca un valor en la primera columna de una tabla y devuelve un valor de la misma fila."
      }
    ]
  },
  {
    id: "excel-module3-quiz",
    title: "Quiz: Tablas Dinámicas y Gráficos",
    moduleId: 3,
    passingScore: 70,
    questions: [
      {
        id: "q1",
        question: "¿Qué es una tabla dinámica?",
        options: [
          "Una tabla normal",
          "Una herramienta para resumir y analizar datos",
          "Un tipo de gráfico",
          "Una función"
        ],
        correct: 1,
        explanation: "Las tablas dinámicas permiten resumir grandes cantidades de datos de forma interactiva."
      },
      {
        id: "q2",
        question: "¿Cuántos campos puede tener una tabla dinámica?",
        options: [
          "2",
          "4",
          "6",
            "Ilimitados"
        ],
        correct: 1,
        explanation: "Las tablas dinámicas tienen 4 áreas: Filtros, Columnas, Filas y Valores."
      },
      {
        id: "q3",
        question: "¿Qué es un slicer?",
        options: [
          "Un tipo de gráfico",
          "Un filtro visual interactivo",
          "Una función",
          "Un formato"
        ],
        correct: 1,
        explanation: "Un slicer es un control visual para filtrar tablas dinámicas y tablas de Excel."
      },
      {
        id: "q4",
        question: "¿Qué tipo de gráfico es mejor para mostrar tendencias?",
        options: [
          "Circular",
          "De barras",
          "De líneas",
          "De dispersión"
        ],
        correct: 2,
        explanation: "Los gráficos de líneas son ideales para mostrar tendencias a lo largo del tiempo."
      },
      {
        id: "q5",
        question: "¿Qué es un dashboard?",
        options: [
          "Una única tabla",
          "Un gráfico",
          "Un conjunto visual de métricas",
          "Una fórmula"
        ],
        correct: 2,
        explanation: "Un dashboard es una visualización combinada de múltiples métricas y gráficos."
      }
    ]
  }
];

// English Quizzes
export const inglesQuizzes: CourseQuiz[] = [
  {
    id: "ingles-module1-quiz",
    title: "Quiz: Comunicación Básica",
    moduleId: 1,
    passingScore: 70,
    questions: [
      {
        id: "q1",
        question: "¿Cómo se dice 'Hola' formalmente?",
        options: ["Hi", "Hello", "Hey", "Good morning"],
        correct: 1,
        explanation: "'Hello' es el saludo formal estándar, mientras que 'Hi' y 'Hey' son más informales."
      },
      {
        id: "q2",
        question: "¿Qué significa 'What's your name?'",
        options: [
          "¿Cómo estás?",
          "¿De dónde eres?",
          "¿Cuál es tu nombre?",
          "¿Qué edad tienes?"
        ],
        correct: 2,
        explanation: "'What's your name?' es la forma estándar de preguntar el nombre de alguien."
      },
      {
        id: "q3",
        question: "¿Cómo se responde 'Thank you'?",
        options: ["Please", "Sorry", "You're welcome", "Excuse me"],
        correct: 2,
        explanation: "'You're welcome' es la respuesta estándar a 'Thank you'."
      },
      {
        id: "q4",
        question: "¿Qué significa 'Nice to meet you'?",
        options: [
          "¿Cómo llegaste?",
          "Encantado de conocerte",
          "¿Dónde vives?",
          "¿Qué hora es?"
        ],
        correct: 1,
        explanation: "'Nice to meet you' se usa cuando conoces a alguien por primera vez."
      },
      {
        id: "q5",
        question: "¿Cómo se pregunta '¿Cómo estás?' formalmente?",
        options: ["How are you?", "How old are you?", "Where are you?", "What are you?"],
        correct: 0,
        explanation: "'How are you?' es la forma estándar de preguntar por el estado de alguien."
      }
    ]
  },
  {
    id: "ingles-module2-quiz",
    title: "Quiz: Conversación y Trabajo",
    moduleId: 2,
    passingScore: 70,
    questions: [
      {
        id: "q1",
        question: "¿Qué es 'small talk'?",
        options: [
          "Hablar en voz baja",
          "Conversación casual y ligera",
          "Hablar poco",
          "Un idioma extranjero"
        ],
        correct: 1,
        explanation: "'Small talk' es conversación ligera sobre temas generales para romper el hielo."
      },
      {
        id: "q2",
        question: "¿Cómo se dice 'Estoy ocupado'?",
        options: ["I'm busy", "I'm free", "I'm tired", "I'm happy"],
        correct: 0,
        explanation: "'I'm busy' significa que estás ocupado y no disponible."
      },
      {
        id: "q3",
        question: "¿Qué significa 'deadline'?",
        options: [
          "Una línea en un documento",
          "Fecha límite",
          "Una línea telefónica",
          "Un tipo de reunión"
        ],
        correct: 1,
        explanation: "'Deadline' es la fecha límite para completar una tarea o proyecto."
      },
      {
        id: "q4",
        question: "¿Cómo se pide ayuda en una reunión?",
        options: [
          "Can you help me?",
          "Help me now!",
          "I need help, please",
          "Could you help me, please?"
        ],
        correct: 3,
        explanation: "'Could you help me, please?' es la forma más educada de pedir ayuda."
      },
      {
        id: "q5",
        question: "¿Qué significa 'feedback'?",
        options: [
          "Alimentar",
          "Retroalimentación o comentario",
          "Retransmitir",
          "Forward"
        ],
        correct: 1,
        explanation: "'Feedback' son comentarios u opiniones sobre el rendimiento de alguien."
      }
    ]
  }
];

// UX/UI Quizzes
export const uxQuizzes: CourseQuiz[] = [
  {
    id: "ux-module1-quiz",
    title: "Quiz: Conceptos UX y UI",
    moduleId: 1,
    passingScore: 70,
    questions: [
      {
        id: "q1",
        question: "¿Qué significa UX?",
        options: [
          "User Experience",
          "User Interface",
          "User Exchange",
          "User Expert"
        ],
        correct: 0,
        explanation: "UX significa User Experience (Experiencia de Usuario)."
      },
      {
        id: "q2",
        question: "¿Qué significa UI?",
        options: [
          "User Experience",
          "User Interface",
          "User Interaction",
          "User Input"
        ],
        correct: 1,
        explanation: "UI significa User Interface (Interfaz de Usuario)."
      },
      {
        id: "q3",
        question: "¿Cuál es el objetivo principal de UX?",
        options: [
          "Hacer interfaces bonitas",
          "Mejorar la satisfacción del usuario",
          "Vender más productos",
          "Reducir costos"
        ],
        correct: 1,
        explanation: "El objetivo principal de UX es mejorar la satisfacción y facilidad de uso para el usuario."
      },
      {
        id: "q4",
        question: "¿Qué es usabilidad?",
        options: [
          "Lo bonito que es un diseño",
          "Qué tan fácil es usar un producto",
          "Cuánto cuesta un producto",
          "La tecnología usada"
        ],
        correct: 1,
        explanation: "La usabilidad se refiere a qué tan fácil y eficiente es usar un producto."
      },
      {
        id: "q5",
        question: "¿Quién es el 'user persona'?",
        options: [
          "Cualquier usuario",
          "Un representante ficticio del usuario ideal",
          "El diseñador",
          "El cliente"
        ],
        correct: 1,
        explanation: "Un user persona es un perfil ficticio basado en investigación que representa al usuario ideal."
      }
    ]
  },
  {
    id: "ux-module2-quiz",
    title: "Quiz: Diseño y Herramientas",
    moduleId: 2,
    passingScore: 70,
    questions: [
      {
        id: "q1",
        question: "¿Qué es un wireframe?",
        options: [
          "El diseño final",
          "Un esquema básico de la estructura",
          "Un código fuente",
          "Una base de datos"
        ],
        correct: 1,
        explanation: "Un wireframe es un esquema básico que muestra la estructura y layout de una interfaz."
      },
      {
        id: "q2",
        question: "¿Qué es un prototipo?",
        options: [
          "El producto final",
          "Una versión interactiva del diseño",
          "Un documento técnico",
          "Un presupuesto"
        ],
        correct: 1,
        explanation: "Un prototipo es una versión interactiva que simula el funcionamiento del producto final."
      },
      {
        id: "q3",
        question: "¿Qué es Figma?",
        options: [
          "Una base de datos",
          "Una herramienta de diseño colaborativo",
          "Un lenguaje de programación",
          "Un servidor"
        ],
        correct: 1,
        explanation: "Figma es una herramienta de diseño basada en la nube para crear interfaces y prototipos."
      },
      {
        id: "q4",
        question: "¿Qué significa 'responsive design'?",
        options: [
          "Diseño que responde rápido",
          "Diseño que se adapta a diferentes dispositivos",
          "Diseño interactivo",
          "Diseño con animaciones"
        ],
        correct: 1,
        explanation: "El responsive design se adapta automáticamente a diferentes tamaños de pantalla."
      },
      {
        id: "q5",
        question: "¿Qué es la jerarquía visual?",
        options: [
          "El orden de importancia visual de los elementos",
          "El tamaño de las imágenes",
          "Los colores usados",
          "Las fuentes tipográficas"
        ],
        correct: 0,
        explanation: "La jerarquía visual organiza los elementos según su importancia para guiar la atención del usuario."
      }
    ]
  }
];

// Photography Quizzes
export const fotografiaQuizzes: CourseQuiz[] = [
  {
    id: "foto-module1-quiz",
    title: "Quiz: Composición y Luz",
    moduleId: 1,
    passingScore: 70,
    questions: [
      {
        id: "q1",
        question: "¿Qué es la regla de los tercios?",
        options: [
          "Dividir la imagen en 3 partes iguales",
          "Colocar elementos importantes en las intersecciones de una cuadrícula 3x3",
          "Usar solo 3 colores",
          "Tomar 3 fotos seguidas"
        ],
        correct: 1,
        explanation: "La regla de los tercios divide la imagen en 9 partes iguales y coloca elementos en los puntos de intersección."
      },
      {
        id: "q2",
        question: "¿Qué es la exposición?",
        options: [
          "El tiempo que tarda en tomar la foto",
          "La cantidad de luz que llega al sensor",
          "El tamaño de la foto",
          "El tipo de cámara"
        ],
        correct: 1,
        explanation: "La exposición es la cantidad total de luz que llega al sensor de la cámara."
      },
      {
        id: "q3",
        question: "¿Qué significa ISO?",
        options: [
          "International Organization for Standardization",
          "International Sensor Organization",
          "Image Standard Output",
          "Internal Sensor Optimization"
        ],
        correct: 0,
        explanation: "ISO es la sensibilidad del sensor a la luz, establecida por la International Organization for Standardization."
      },
      {
        id: "q4",
        question: "¿Qué es la apertura (f-stop)?",
        options: [
          "El tamaño del diafragma",
          "La velocidad del obturador",
          "El tipo de lente",
          "El formato de archivo"
        ],
        correct: 0,
        explanation: "La apertura controla el tamaño del diafragma y cuánta luz entra a la cámara."
      },
      {
        id: "q5",
        question: "¿Qué es la velocidad de obturación?",
        options: [
          "Cuán rápido se mueve la cámara",
          "El tiempo que el sensor está expuesto a la luz",
          "La velocidad de enfoque",
          "El tiempo de procesamiento"
        ],
        correct: 1,
        explanation: "La velocidad de obturación determina cuánto tiempo el sensor está expuesto a la luz."
      }
    ]
  },
  {
    id: "foto-module2-quiz",
    title: "Quiz: Cámara y Edición",
    moduleId: 2,
    passingScore: 70,
    questions: [
      {
        id: "q1",
        question: "¿Qué es el modo manual?",
        options: [
          "La cámara hace todo automáticamente",
          "El fotógrafo controla todos los ajustes",
          "Solo se puede usar flash",
          "Solo toma fotos en blanco y negro"
        ],
        correct: 1,
        explanation: "En modo manual, el fotógrafo controla completamente apertura, velocidad e ISO."
      },
      {
        id: "q2",
        question: "¿Qué es el balance de blancos?",
        options: [
          "Hacer que las fotos sean blancas",
          "Ajustar los colores según la fuente de luz",
          "Balancear la cámara",
          "Un tipo de filtro"
        ],
        correct: 1,
        explanation: "El balance de blancos ajusta los colores para que aparezcan naturales bajo diferentes condiciones de luz."
      },
      {
        id: "q3",
        question: "¿Qué es RAW?",
        options: [
          "Un formato de imagen sin procesar",
          "Un tipo de cámara",
          "Un programa de edición",
          "Un estilo fotográfico"
        ],
        correct: 0,
        explanation: "RAW es un formato que guarda todos los datos del sensor sin procesar, permitiendo mayor flexibilidad en edición."
      },
      {
        id: "q4",
        question: "¿Qué es la profundidad de campo?",
        options: [
          "La distancia del objeto",
          "El rango de enfoque aceptable",
          "El tamaño de la foto",
          "El tipo de lente"
        ],
        correct: 1,
        explanation: "La profundidad de campo es el rango de distancia que aparece nítido en la fotografía."
      },
      {
        id: "q5",
        question: "¿Qué es la composición?",
        options: [
          "La calidad técnica de la foto",
          "Cómo se organizan los elementos en la imagen",
          "El equipo usado",
          "El lugar donde se toma la foto"
        ],
        correct: 1,
        explanation: "La composición es cómo se organizan y distribuyen los elementos dentro del encuadre."
      }
    ]
  }
];

// Finance Quizzes
export const finanzasQuizzes: CourseQuiz[] = [
  {
    id: "fin-module1-quiz",
    title: "Quiz: Presupuesto y Ahorro",
    moduleId: 1,
    passingScore: 70,
    questions: [
      {
        id: "q1",
        question: "¿Qué es un presupuesto personal?",
        options: [
          "Solo contar gastos",
          "Un plan para gestionar ingresos y gastos",
          "Guardar dinero sin más",
          "Un préstamo bancario"
        ],
        correct: 1,
        explanation: "Un presupuesto es un plan financiero que registra y gestiona ingresos y gastos."
      },
      {
        id: "q2",
        question: "¿Qué es la regla 50/30/20?",
        options: [
          "50% ahorro, 30% gastos, 20% deudas",
          "50% necesidades, 30% deseos, 20% ahorro",
          "50% deudas, 30% ahorro, 20% gastos",
          "50% ingresos, 30% impuestos, 20% ahorro"
        ],
        correct: 1,
        explanation: "La regla 50/30/20 sugiere: 50% para necesidades, 30% para deseos y 20% para ahorro."
      },
      {
        id: "q3",
        question: "¿Qué es el 'flujo de caja'?",
        options: [
          "El dinero en efectivo",
          "El movimiento de entrada y salida de dinero",
          "La cuenta bancaria",
          "La tarjeta de crédito"
        ],
        correct: 1,
        explanation: "El flujo de caja es el registro del movimiento real de dinero (entradas y salidas)."
      },
      {
        id: "q4",
        question: "¿Qué significa 'pagarse a uno mismo primero'?",
        options: [
          "Gastar primero en uno mismo",
          "Ahorrar/invertir antes de gastar",
          "Pagar deudas primero",
          "Comprar cosas para uno mismo"
        ],
        correct: 1,
        explanation: "Significa destinar dinero al ahorro/inversión antes de hacer otros gastos."
      },
      {
        id: "q5",
        question: "¿Qué es un gasto fijo?",
        options: [
          "Un gasto que varía cada mes",
          "Un gasto que es el mismo cada mes",
          "Un gasto innecesario",
          "Un gasto de emergencia"
        ],
        correct: 1,
        explanation: "Los gastos fijos son aquellos que permanecen constantes como renta, seguros, etc."
      }
    ]
  },
  {
    id: "fin-module2-quiz",
    title: "Quiz: Inversión y Seguridad",
    moduleId: 2,
    passingScore: 70,
    questions: [
      {
        id: "q1",
        question: "¿Qué es un fondo de emergencia?",
        options: [
          "Dinero para inversiones",
          "Ahorros para imprevistos o emergencias",
          "Un préstamo de emergencia",
          "Seguro médico"
        ],
        correct: 1,
        explanation: "Un fondo de emergencia es dinero reservado para cubrir gastos inesperados o pérdida de ingresos."
      },
      {
        id: "q2",
        question: "¿Cuántos meses de gastos se recomienda tener en fondo de emergencia?",
        options: ["1-2 meses", "3-6 meses", "12 meses", "24 meses"],
        correct: 1,
        explanation: "Se recomienda tener 3-6 meses de gastos cubiertos en el fondo de emergencia."
      },
      {
        id: "q3",
        question: "¿Qué es la diversificación?",
        options: [
          "Poner todo el dinero en una inversión",
          "Repartir el dinero en diferentes tipos de inversiones",
          "Cambiar de inversión frecuentemente",
          "No invertir nada"
        ],
        correct: 1,
        explanation: "La diversificación distribuye el riesgo al invertir en diferentes activos."
      },
      {
        id: "q4",
        question: "¿Qué significa 'interés compuesto'?",
        options: [
          "Interés simple sobre el principal",
          "Interés sobre el principal más intereses acumulados",
          "Sin intereses",
          "Intereses fijos"
        ],
        correct: 1,
        explanation: "El interés compuesto genera intereses sobre los intereses acumulados anteriormente."
      },
      {
        id: "q5",
        question: "¿Qué es la inflación?",
        options: [
          "El aumento de precios",
          "La disminución de precios",
          "El tipo de cambio",
          "La tasa de interés"
        ],
        correct: 0,
        explanation: "La inflación es el aumento generalizado y sostenido de los precios de bienes y servicios."
      }
    ]
  }
];

export const getQuizByModule = (courseId: string, moduleId: number): CourseQuiz | undefined => {
  const quizCollections: Record<string, CourseQuiz[]> = {
    python_fullstack: pythonFullStackQuizzes,
    javascript: javascriptQuizzes,
    ai: aiQuizzes,
    marketing: marketingQuizzes,
    react: reactQuizzes,
    excel: excelQuizzes,
    ingles: inglesQuizzes,
    ux: uxQuizzes,
    fotografia: fotografiaQuizzes,
    finanzas: finanzasQuizzes,
  };

  const quizzes = quizCollections[courseId];
  if (quizzes) {
    return quizzes.find(quiz => quiz.moduleId === moduleId);
  }
  return undefined;
};
