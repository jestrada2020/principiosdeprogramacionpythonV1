// Consolidated modules data
const modules = {
    intro: {
        title: "1. Introducción a Python",
        description: "Abriendo el apetito",
        video: "https://www.youtube.com/embed/Kp4Mvapo5kc",
        additionalVideos: [
            { title: "Python en 10 minutos", url: "https://www.youtube.com/embed/_6N18g3ewnw" },
            { title: "Python desde cero", url: "https://www.youtube.com/embed/IimBRwHhW54" }
        ],
        content: `
            <h2 class="text-2xl font-bold theme-text-primary mb-4">¿Qué es Python?</h2>
            <p class="theme-text-secondary mb-4">Python es un lenguaje de programación interpretado, de alto nivel y de propósito general. Su filosofía de diseño enfatiza la legibilidad del código con el uso de espacios en blanco significativos.</p>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">¿Por qué Python?</h3>
            <ul class="list-disc list-inside theme-text-secondary space-y-2 mb-6">
                <li>Sintaxis simple y legible</li>
                <li>Gran comunidad y documentación</li>
                <li>Amplia biblioteca estándar</li>
                <li>Multiplataforma</li>
                <li>Ideal para principiantes</li>
            </ul>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Aplicaciones de Python</h3>
            <div class="grid md:grid-cols-2 gap-4">
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary">Desarrollo Web</h4>
                    <p class="text-sm theme-text-secondary">Django, Flask, FastAPI</p>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary">Ciencia de Datos</h4>
                    <p class="text-sm theme-text-secondary">Pandas, NumPy, Matplotlib</p>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary">Inteligencia Artificial</h4>
                    <p class="text-sm theme-text-secondary">TensorFlow, PyTorch, scikit-learn</p>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary">Automatización</h4>
                    <p class="text-sm theme-text-secondary">Selenium, Scrapy, Boto3</p>
                </div>
            </div>
        `,
        exercises: [
            {
                title: "Tu primer programa",
                description: "Escribe un programa que imprima 'Hola, mundo!'",
                template: "# Escribe tu código aquí\nprint('Hola, mundo!')",
                solution: "print('Hola, mundo!')"
            },
            {
                title: "Variables básicas",
                description: "Crea una variable con tu nombre y muéstrala",
                template: "# Crea una variable llamada 'nombre' con tu nombre\n# Luego imprímela\n",
                solution: "nombre = 'Tu nombre'\nprint(nombre)"
            }
        ],
        quiz: [
            {
                question: "¿Cuál es una característica principal de Python?",
                options: ["Sintaxis compleja", "Legibilidad del código", "Solo para web", "Difícil de aprender"],
                correct: 1
            },
            {
                question: "¿Python es un lenguaje interpretado?",
                options: ["Sí", "No", "A veces", "Depende del sistema"],
                correct: 0
            }
        ]
    },
    
    interpreter: {
        title: "2. Usando el Intérprete de Python",
        description: "Instalación y configuración",
        video: "https://www.youtube.com/embed/qmfbzgd5HWg",
        additionalVideos: [
            { title: "Instalación Python", url: "https://www.youtube.com/embed/6XbFEDPZ1P4" },
            { title: "Configurar PyCharm", url: "https://www.youtube.com/embed/2P1yPcNiSOg" }
        ],
        content: `
            <h2 class="text-2xl font-bold theme-text-primary mb-4">El Intérprete de Python</h2>
            <p class="theme-text-secondary mb-4">El intérprete de Python es el programa que ejecuta tu código Python línea por línea. Funciona de dos modos: interactivo y de script.</p>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Instalación</h3>
            <div class="space-y-4 mb-6">
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary mb-2">Windows</h4>
                    <p class="text-sm theme-text-secondary">Descarga desde python.org e instala. Asegúrate de marcar "Add Python to PATH"</p>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary mb-2">macOS</h4>
                    <p class="text-sm theme-text-secondary">Usa Homebrew: brew install python3</p>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary mb-2">Linux</h4>
                    <p class="text-sm theme-text-secondary">Usa el gestor de paquetes: sudo apt install python3</p>
                </div>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Modo Interactivo</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    $ python<br>
                    >>> print("Hola, mundo!")<br>
                    Hola, mundo!<br>
                    >>> 2 + 2<br>
                    4
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Ejecutar Scripts</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg">
                <code class="text-sm">
                    $ python mi_script.py
                </code>
            </div>
        `,
        exercises: [
            {
                title: "Verificar versión",
                description: "Usa el comando para verificar la versión de Python",
                template: "# Ejecuta este código para ver la versión de Python\nimport sys\nprint(sys.version)",
                solution: "import sys\nprint(sys.version)"
            }
        ],
        quiz: [
            {
                question: "¿Cómo se inicia el intérprete interactivo de Python?",
                options: ["python", "py", "python3", "Todas las anteriores"],
                correct: 3
            }
        ]
    },
    
    "control-flow": {
        title: "4. Control de Flujo",
        description: "if, for, while, funciones",
        video: "https://www.youtube.com/embed/9Os0o3wzS_I",
        additionalVideos: [
            { title: "Condicionales en Python", url: "https://www.youtube.com/embed/f79MRyMsjrQ" },
            { title: "Bucles en Python", url: "https://www.youtube.com/embed/6iF8Xb7Z3wQ" }
        ],
        content: `
            <h2 class="text-2xl font-bold theme-text-primary mb-4">Control de Flujo en Python</h2>
            <p class="theme-text-secondary mb-4">Las herramientas de control de flujo permiten controlar el orden en que se ejecutan las instrucciones de tu programa.</p>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Sentencias if</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    x = int(input("Por favor ingresa un entero: "))<br>
                    if x < 0:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;x = 0<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;print('Negativo cambiado a cero')<br>
                    elif x == 0:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;print('Cero')<br>
                    elif x == 1:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;print('Uno')<br>
                    else:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;print('Más')
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Sentencias for</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    # Midiendo strings<br>
                    palabras = ['gato', 'ventana', 'defenestrar']<br>
                    for w in palabras:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;print(w, len(w))<br><br>
                    
                    # La función range()<br>
                    for i in range(5):<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;print(i)
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Sentencias while</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    a, b = 0, 1<br>
                    while a < 10:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;print(a)<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;a, b = b, a+b
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Definiendo Funciones</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg">
                <code class="text-sm">
                    def fibonacci(n):<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;"""Escribe la serie de Fibonacci hasta n."""<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;a, b = 0, 1<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;while a < n:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(a, end=' ')<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a, b = b, a+b<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;print()<br><br>
                    
                    # Llamando la función<br>
                    fibonacci(100)
                </code>
            </div>
        `,
        exercises: [
            {
                title: "Número par o impar",
                description: "Escribe un programa que determine si un número es par o impar",
                template: "# Pide un número al usuario y determina si es par o impar\nnumero = int(input('Ingresa un número: '))\n# Tu código aquí",
                solution: "numero = int(input('Ingresa un número: '))\nif numero % 2 == 0:\n    print('El número es par')\nelse:\n    print('El número es impar')"
            },
            {
                title: "Tabla de multiplicar",
                description: "Crea una función que imprima la tabla de multiplicar de un número",
                template: "def tabla_multiplicar(numero):\n    # Tu código aquí\n    pass\n\n# Llama la función\ntabla_multiplicar(5)",
                solution: "def tabla_multiplicar(numero):\n    for i in range(1, 11):\n        print(f'{numero} x {i} = {numero * i}')\n\ntabla_multiplicar(5)"
            }
        ],
        quiz: [
            {
                question: "¿Cuál es la palabra clave para una condición alternativa en Python?",
                options: ["else", "elif", "elseif", "alternative"],
                correct: 1
            },
            {
                question: "¿Qué función usas para generar una secuencia de números?",
                options: ["sequence()", "range()", "numbers()", "generate()"],
                correct: 1
            }
        ]
    },
    
    "data-structures": {
        title: "5. Estructuras de Datos",
        description: "Listas, tuplas, diccionarios",
        video: "https://www.youtube.com/embed/R-HLU9Fl5ug",
        additionalVideos: [
            { title: "Listas en Python", url: "https://www.youtube.com/embed/ohCDWZgNIU0" },
            { title: "Diccionarios en Python", url: "https://www.youtube.com/embed/XCcpzWs-CI4" }
        ],
        content: `
            <h2 class="text-2xl font-bold theme-text-primary mb-4">Estructuras de Datos</h2>
            <p class="theme-text-secondary mb-4">Python incluye varias estructuras de datos built-in muy útiles: listas, tuplas, diccionarios y conjuntos.</p>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Listas</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    frutas = ['naranja', 'manzana', 'pera', 'banana', 'kiwi']<br>
                    frutas.append('uva')  # Agregar elemento<br>
                    frutas.insert(1, 'fresa')  # Insertar en posición<br>
                    frutas.remove('pera')  # Eliminar elemento<br>
                    print(frutas[0])  # Primer elemento<br>
                    print(frutas[-1])  # Último elemento
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Métodos de Listas</h3>
            <div class="grid md:grid-cols-2 gap-4 mb-6">
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary">Agregar elementos</h4>
                    <ul class="text-sm theme-text-secondary space-y-1">
                        <li>append() - Al final</li>
                        <li>insert() - En posición</li>
                        <li>extend() - Múltiples elementos</li>
                    </ul>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary">Eliminar elementos</h4>
                    <ul class="text-sm theme-text-secondary space-y-1">
                        <li>remove() - Por valor</li>
                        <li>pop() - Por índice</li>
                        <li>clear() - Todos</li>
                    </ul>
                </div>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Tuplas</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    t = 12345, 54321, 'hola!'<br>
                    print(t[0])  # 12345<br>
                    print(t)     # (12345, 54321, 'hola!')<br><br>
                    
                    # Las tuplas son inmutables<br>
                    x, y, z = t  # Desempaquetado
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Diccionarios</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    tel = {'jack': 4098, 'sape': 4139}<br>
                    tel['guido'] = 4127<br>
                    print(tel)  # {'jack': 4098, 'sape': 4139, 'guido': 4127}<br>
                    print(tel['jack'])  # 4098<br>
                    del tel['sape']<br>
                    print(list(tel.keys()))  # ['jack', 'guido']
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Conjuntos (Sets)</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg">
                <code class="text-sm">
                    cesta = {'manzana', 'naranja', 'manzana', 'pera', 'naranja', 'banana'}<br>
                    print(cesta)  # {'naranja', 'banana', 'pera', 'manzana'}<br><br>
                    
                    a = set('abracadabra')<br>
                    b = set('alacazam')<br>
                    print(a - b)  # Diferencia<br>
                    print(a | b)  # Unión
                </code>
            </div>
        `,
        exercises: [
            {
                title: "Operaciones con listas",
                description: "Crea una lista de números y realiza operaciones básicas",
                template: "# Crea una lista con los números del 1 al 10\nnumeros = []\n# Agrega los números\n# Imprime la suma de todos los números",
                solution: "numeros = list(range(1, 11))\nprint('Lista:', numeros)\nprint('Suma:', sum(numeros))\nprint('Máximo:', max(numeros))\nprint('Mínimo:', min(numeros))"
            },
            {
                title: "Diccionario de estudiantes",
                description: "Crea un diccionario para almacenar información de estudiantes",
                template: "# Crea un diccionario con nombre, edad y calificaciones\nestudiante = {}\n# Tu código aquí",
                solution: "estudiante = {\n    'nombre': 'Juan',\n    'edad': 20,\n    'calificaciones': [85, 90, 78, 92]\n}\nprint('Estudiante:', estudiante['nombre'])\nprint('Promedio:', sum(estudiante['calificaciones']) / len(estudiante['calificaciones']))"
            }
        ],
        quiz: [
            {
                question: "¿Cuál es la diferencia principal entre listas y tuplas?",
                options: ["Las listas son más rápidas", "Las tuplas son inmutables", "Las listas no pueden contener números", "No hay diferencia"],
                correct: 1
            },
            {
                question: "¿Cómo accedes al valor de una clave en un diccionario?",
                options: ["dict.get(key)", "dict[key]", "dict(key)", "Todas son correctas"],
                correct: 3
            }
        ]
    },
    
    basics: {
        title: "3. Introducción Informal a Python",
        description: "Números, texto y listas",
        video: "https://www.youtube.com/embed/4cW_HTsfO2s",
        additionalVideos: [
            { title: "Variables y tipos", url: "https://www.youtube.com/embed/uIYqLzM5yVM" },
            { title: "Strings en Python", url: "https://www.youtube.com/embed/CSGedJV6Yv8" }
        ],
        content: `
            <h2 class="text-2xl font-bold theme-text-primary mb-4">Usando Python como Calculadora</h2>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Números</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    >>> 2 + 2<br>
                    4<br>
                    >>> 50 - 5*6<br>
                    20<br>
                    >>> 8 / 5<br>
                    1.6
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Operadores Aritméticos</h3>
            <div class="grid md:grid-cols-2 gap-4 mb-6">
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary">Básicos</h4>
                    <ul class="text-sm theme-text-secondary space-y-1">
                        <li>+ (suma)</li>
                        <li>- (resta)</li>
                        <li>* (multiplicación)</li>
                        <li>/ (división)</li>
                    </ul>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary">Avanzados</h4>
                    <ul class="text-sm theme-text-secondary space-y-1">
                        <li>** (potencia)</li>
                        <li>// (división entera)</li>
                        <li>% (módulo)</li>
                    </ul>
                </div>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Strings (Cadenas)</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    >>> 'hola mundo'<br>
                    'hola mundo'<br>
                    >>> "Python es genial"<br>
                    'Python es genial'<br>
                    >>> 'Hola' + ' ' + 'mundo'<br>
                    'Hola mundo'
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Listas</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg">
                <code class="text-sm">
                    >>> cuadrados = [1, 4, 9, 16, 25]<br>
                    >>> cuadrados<br>
                    [1, 4, 9, 16, 25]<br>
                    >>> cuadrados[0]<br>
                    1<br>
                    >>> cuadrados[-1]<br>
                    25
                </code>
            </div>
        `,
        exercises: [
            {
                title: "Calculadora básica",
                description: "Realiza operaciones aritméticas básicas",
                template: "# Calcula 15 + 30 * 2\n# Calcula 100 / 4\n# Calcula 2 ** 8\n",
                solution: "print(15 + 30 * 2)\nprint(100 / 4)\nprint(2 ** 8)"
            },
            {
                title: "Trabajando con strings",
                description: "Crea y manipula cadenas de texto",
                template: "# Crea una variable con tu nombre\n# Crea otra con tu apellido\n# Únelas con un espacio\n",
                solution: "nombre = 'Juan'\napellido = 'Pérez'\ncompleto = nombre + ' ' + apellido\nprint(completo)"
            }
        ],
        quiz: [
            {
                question: "¿Cuál es el resultado de 2 ** 3?",
                options: ["6", "8", "9", "5"],
                correct: 1
            },
            {
                question: "¿Cómo se accede al primer elemento de una lista?",
                options: ["lista[1]", "lista[0]", "lista.first()", "lista.get(0)"],
                correct: 1
            }
        ]
    },
    
    modules: {
        title: "6. Módulos",
        description: "Importar y crear módulos",
        video: "https://www.youtube.com/embed/GkD6H_tmk9s",
        additionalVideos: [
            { title: "Crear módulos", url: "https://www.youtube.com/embed/GkD6H_tmk9s" }
        ],
        content: `
            <h2 class="text-2xl font-bold theme-text-primary mb-4">Módulos en Python</h2>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">¿Qué son los módulos?</h3>
            <p class="theme-text-secondary mb-4">Un módulo es un archivo que contiene código Python. Permite organizar el código en archivos separados y reutilizar funciones y clases.</p>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Importar módulos</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    import math<br>
                    print(math.pi)<br>
                    print(math.sqrt(16))<br><br>
                    # Importar funciones específicas<br>
                    from math import pi, sqrt<br>
                    print(pi)<br>
                    print(sqrt(25))<br><br>
                    # Importar con alias<br>
                    import math as m<br>
                    print(m.cos(0))
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Crear tu propio módulo</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    # archivo: mi_modulo.py<br>
                    def saludar(nombre):<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;return f"¡Hola {nombre}!"<br><br>
                    PI = 3.14159<br><br>
                    # En otro archivo:<br>
                    import mi_modulo<br>
                    print(mi_modulo.saludar("Ana"))<br>
                    print(mi_modulo.PI)
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Módulos útiles</h3>
            <div class="grid md:grid-cols-2 gap-4">
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary">math</h4>
                    <p class="text-sm theme-text-secondary">Funciones matemáticas</p>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary">random</h4>
                    <p class="text-sm theme-text-secondary">Números aleatorios</p>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary">datetime</h4>
                    <p class="text-sm theme-text-secondary">Fechas y horarios</p>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary">os</h4>
                    <p class="text-sm theme-text-secondary">Sistema operativo</p>
                </div>
            </div>
        `,
        exercises: [
            {
                title: "Usando math",
                description: "Importa el módulo math y usa sus funciones",
                template: "import math\n\n# Calcula la raíz cuadrada de 144\n# Calcula el seno de pi/2\n# Muestra el valor de e\n",
                solution: "import math\n\nprint(math.sqrt(144))\nprint(math.sin(math.pi/2))\nprint(math.e)"
            },
            {
                title: "Números aleatorios",
                description: "Genera números aleatorios usando random",
                template: "import random\n\n# Genera un número aleatorio entre 1 y 100\n# Elige un elemento aleatorio de una lista\n",
                solution: "import random\n\nprint(random.randint(1, 100))\nlista = ['a', 'b', 'c', 'd']\nprint(random.choice(lista))"
            }
        ],
        quiz: [
            {
                question: "¿Cuál es la forma correcta de importar solo la función sqrt del módulo math?",
                options: ["import math.sqrt", "from math import sqrt", "import sqrt from math", "math.import(sqrt)"],
                correct: 1
            }
        ]
    },
    
    io: {
        title: "7. Entrada y Salida",
        description: "Archivos y formateo",
        video: "https://www.youtube.com/embed/JkTEdzYD-as",
        additionalVideos: [
            { title: "Manejo de archivos", url: "https://www.youtube.com/embed/A5V8RLkgebY" }
        ],
        content: `
            <h2 class="text-2xl font-bold theme-text-primary mb-4">Entrada y Salida</h2>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Formateo de cadenas</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    # f-strings (Python 3.6+)<br>
                    nombre = "Ana"<br>
                    edad = 25<br>
                    print(f"Hola, soy {nombre} y tengo {edad} años")<br><br>
                    # Método format()<br>
                    print("Hola, soy {} y tengo {} años".format(nombre, edad))<br><br>
                    # Formateo con nombres<br>
                    print("Hola, soy {n} y tengo {e} años".format(n=nombre, e=edad))
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Leer archivos</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    # Leer archivo completo<br>
                    with open('archivo.txt', 'r') as f:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;contenido = f.read()<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;print(contenido)<br><br>
                    # Leer línea por línea<br>
                    with open('archivo.txt', 'r') as f:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;for linea in f:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(linea.strip())
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Escribir archivos</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    # Escribir texto<br>
                    with open('salida.txt', 'w') as f:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;f.write("Hola mundo\\n")<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;f.write("Segunda línea\\n")<br><br>
                    # Agregar al final<br>
                    with open('salida.txt', 'a') as f:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;f.write("Línea adicional\\n")
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Trabajar con JSON</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg">
                <code class="text-sm">
                    import json<br><br>
                    # Escribir JSON<br>
                    datos = {'nombre': 'Juan', 'edad': 30}<br>
                    with open('datos.json', 'w') as f:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;json.dump(datos, f)<br><br>
                    # Leer JSON<br>
                    with open('datos.json', 'r') as f:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;datos = json.load(f)<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;print(datos)
                </code>
            </div>
        `,
        exercises: [
            {
                title: "Formateo de strings",
                description: "Practica diferentes formas de formatear cadenas",
                template: "nombre = 'María'\nedad = 28\nprofesion = 'Doctora'\n\n# Usa f-strings para crear una oración\n# Usa .format() para lo mismo\n",
                solution: "nombre = 'María'\nedad = 28\nprofesion = 'Doctora'\n\nprint(f'{nombre} tiene {edad} años y es {profesion}')\nprint('{} tiene {} años y es {}'.format(nombre, edad, profesion))"
            },
            {
                title: "Simulación de archivos",
                description: "Simula el trabajo con archivos usando strings",
                template: "# Simula escribir y leer un archivo\ncontenido = \"Esta es una línea\\nEsta es otra línea\\n\"\n\n# Divide el contenido en líneas y procesalo\n",
                solution: "contenido = \"Esta es una línea\\nEsta es otra línea\\n\"\nlineas = contenido.split('\\n')\nfor linea in lineas:\n    if linea:\n        print(f'Procesando: {linea}')"
            }
        ],
        quiz: [
            {
                question: "¿Cuál es la ventaja de usar 'with' al abrir archivos?",
                options: ["Es más rápido", "Se cierra automáticamente", "Usa menos memoria", "Es más moderno"],
                correct: 1
            }
        ]
    },
    
    errors: {
        title: "8. Errores y Excepciones",
        description: "Manejo de errores",
        video: "https://www.youtube.com/embed/9D7ml-lCGsc",
        additionalVideos: [
            { title: "Try-Except Python", url: "https://www.youtube.com/embed/9D7ml-lCGsc" }
        ],
        content: `
            <h2 class="text-2xl font-bold theme-text-primary mb-4">Errores y Excepciones</h2>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Tipos de errores</h3>
            <div class="space-y-4 mb-6">
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary mb-2">Errores de sintaxis</h4>
                    <p class="text-sm theme-text-secondary">Errores en la estructura del código</p>
                    <code class="text-sm block mt-2">print("Hola"  # Falta el paréntesis de cierre</code>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary mb-2">Excepciones</h4>
                    <p class="text-sm theme-text-secondary">Errores durante la ejecución</p>
                    <code class="text-sm block mt-2">10 / 0  # ZeroDivisionError</code>
                </div>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Manejo de excepciones</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    try:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;numero = int(input("Introduce un número: "))<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;resultado = 10 / numero<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;print(f"Resultado: {resultado}")<br>
                    except ValueError:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;print("Por favor, introduce un número válido")<br>
                    except ZeroDivisionError:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;print("No se puede dividir por cero")<br>
                    except Exception as e:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;print(f"Error inesperado: {e}")<br>
                    finally:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;print("Fin del programa")
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Lanzar excepciones</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    def dividir(a, b):<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;if b == 0:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;raise ValueError("El divisor no puede ser cero")<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;return a / b<br><br>
                    try:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;resultado = dividir(10, 0)<br>
                    except ValueError as e:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;print(f"Error: {e}")
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Excepciones comunes</h3>
            <div class="grid md:grid-cols-2 gap-4">
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary">ValueError</h4>
                    <p class="text-sm theme-text-secondary">Valor inapropiado</p>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary">TypeError</h4>
                    <p class="text-sm theme-text-secondary">Tipo de dato incorrecto</p>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary">IndexError</h4>
                    <p class="text-sm theme-text-secondary">Índice fuera de rango</p>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary">KeyError</h4>
                    <p class="text-sm theme-text-secondary">Clave no encontrada</p>
                </div>
            </div>
        `,
        exercises: [
            {
                title: "Manejo básico de errores",
                description: "Crea un programa que maneje errores de conversión",
                template: "# Pide al usuario un número\n# Maneja el error si no introduce un número válido\n# Muestra el doble del número si es válido\n",
                solution: "try:\n    numero = int(input('Introduce un número: '))\n    print(f'El doble es: {numero * 2}')\nexcept ValueError:\n    print('Por favor, introduce un número válido')"
            },
            {
                title: "Función con validación",
                description: "Crea una función que valide la entrada",
                template: "def edad_valida(edad):\n    # Valida que la edad sea un número positivo\n    # Lanza una excepción si no es válida\n    pass\n\n# Prueba la función\n",
                solution: "def edad_valida(edad):\n    if not isinstance(edad, int):\n        raise TypeError('La edad debe ser un número entero')\n    if edad < 0:\n        raise ValueError('La edad no puede ser negativa')\n    return True\n\ntry:\n    edad_valida(25)\n    print('Edad válida')\nexcept (TypeError, ValueError) as e:\n    print(f'Error: {e}')"
            }
        ],
        quiz: [
            {
                question: "¿Cuál es la diferencia entre try-except y try-finally?",
                options: ["No hay diferencia", "finally siempre se ejecuta", "except es opcional", "finally maneja errores"],
                correct: 1
            }
        ]
    },
    
    classes: {
        title: "9. Clases",
        description: "Programación orientada a objetos",
        video: "https://www.youtube.com/embed/HtKqSJX7VoM",
        additionalVideos: [
            { title: "POO en Python", url: "https://www.youtube.com/embed/HtKqSJX7VoM" }
        ],
        content: `
            <h2 class="text-2xl font-bold theme-text-primary mb-4">Clases y Objetos</h2>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Definir una clase</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    class Persona:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;def __init__(self, nombre, edad):<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.nombre = nombre<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.edad = edad<br><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;def saludar(self):<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return f"Hola, soy {self.nombre}"<br><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;def cumplir_anos(self):<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.edad += 1<br><br>
                    # Crear una instancia<br>
                    persona1 = Persona("Juan", 30)<br>
                    print(persona1.saludar())
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Herencia</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    class Estudiante(Persona):<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;def __init__(self, nombre, edad, carrera):<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;super().__init__(nombre, edad)<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.carrera = carrera<br><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;def estudiar(self):<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return f"{self.nombre} está estudiando {self.carrera}"<br><br>
                    estudiante = Estudiante("Ana", 20, "Informática")<br>
                    print(estudiante.saludar())<br>
                    print(estudiante.estudiar())
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Métodos especiales</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    class Punto:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;def __init__(self, x, y):<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.x = x<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.y = y<br><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;def __str__(self):<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return f"Punto({self.x}, {self.y})"<br><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;def __add__(self, otro):<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return Punto(self.x + otro.x, self.y + otro.y)<br><br>
                    p1 = Punto(1, 2)<br>
                    p2 = Punto(3, 4)<br>
                    p3 = p1 + p2<br>
                    print(p3)  # Punto(4, 6)
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Propiedades</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg">
                <code class="text-sm">
                    class Circulo:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;def __init__(self, radio):<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self._radio = radio<br><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;@property<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;def radio(self):<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return self._radio<br><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;@radio.setter<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;def radio(self, valor):<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if valor > 0:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self._radio = valor<br><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;@property<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;def area(self):<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return 3.14159 * self._radio ** 2
                </code>
            </div>
        `,
        exercises: [
            {
                title: "Clase básica",
                description: "Crea una clase Coche con propiedades básicas",
                template: "class Coche:\n    # Define el constructor con marca, modelo y año\n    # Crea un método para mostrar información\n    pass\n\n# Crea una instancia y prueba el método\n",
                solution: "class Coche:\n    def __init__(self, marca, modelo, año):\n        self.marca = marca\n        self.modelo = modelo\n        self.año = año\n    \n    def info(self):\n        return f'{self.marca} {self.modelo} ({self.año})'\n\ncoche = Coche('Toyota', 'Corolla', 2020)\nprint(coche.info())"
            },
            {
                title: "Herencia práctica",
                description: "Crea una clase Animal y una subclase Perro",
                template: "class Animal:\n    def __init__(self, nombre):\n        self.nombre = nombre\n    \n    def hacer_sonido(self):\n        pass\n\nclass Perro(Animal):\n    # Completa la clase Perro\n    pass\n",
                solution: "class Animal:\n    def __init__(self, nombre):\n        self.nombre = nombre\n    \n    def hacer_sonido(self):\n        pass\n\nclass Perro(Animal):\n    def hacer_sonido(self):\n        return f'{self.nombre} dice: Guau!'\n\nperro = Perro('Rex')\nprint(perro.hacer_sonido())"
            }
        ],
        quiz: [
            {
                question: "¿Qué es self en Python?",
                options: ["Una palabra reservada", "Referencia al objeto actual", "Un tipo de dato", "Una función especial"],
                correct: 1
            }
        ]
    },
    
    stdlib: {
        title: "10. Biblioteca Estándar",
        description: "Módulos más importantes",
        video: "https://www.youtube.com/embed/ekzgmwbads0",
        additionalVideos: [
            { title: "Módulos útiles", url: "https://www.youtube.com/embed/ekzgmwbads0" }
        ],
        content: `
            <h2 class="text-2xl font-bold theme-text-primary mb-4">Biblioteca Estándar de Python</h2>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Módulos más útiles</h3>
            
            <h4 class="text-lg font-semibold theme-text-primary mb-2">os - Sistema Operativo</h4>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    import os<br><br>
                    # Directorio actual<br>
                    print(os.getcwd())<br><br>
                    # Listar archivos<br>
                    print(os.listdir('.'))<br><br>
                    # Variables de entorno<br>
                    print(os.environ.get('HOME'))
                </code>
            </div>
            
            <h4 class="text-lg font-semibold theme-text-primary mb-2">datetime - Fechas y Horas</h4>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    from datetime import datetime, date, timedelta<br><br>
                    # Fecha actual<br>
                    hoy = date.today()<br>
                    print(hoy)<br><br>
                    # Fecha y hora actual<br>
                    ahora = datetime.now()<br>
                    print(ahora)<br><br>
                    # Operaciones con fechas<br>
                    mañana = hoy + timedelta(days=1)<br>
                    print(mañana)
                </code>
            </div>
            
            <h4 class="text-lg font-semibold theme-text-primary mb-2">collections - Estructuras de Datos</h4>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    from collections import Counter, defaultdict<br><br>
                    # Contador<br>
                    palabras = ['python', 'es', 'genial', 'python', 'es']<br>
                    contador = Counter(palabras)<br>
                    print(contador)  # Counter({'python': 2, 'es': 2, 'genial': 1})<br><br>
                    # Diccionario con valor por defecto<br>
                    dd = defaultdict(list)<br>
                    dd['frutas'].append('manzana')<br>
                    print(dd)
                </code>
            </div>
            
            <h4 class="text-lg font-semibold theme-text-primary mb-2">itertools - Iteradores</h4>
            <div class="p-4 theme-bg-tertiary rounded-lg">
                <code class="text-sm">
                    import itertools<br><br>
                    # Combinaciones<br>
                    for combo in itertools.combinations(['A', 'B', 'C'], 2):<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;print(combo)<br><br>
                    # Ciclo infinito<br>
                    colores = itertools.cycle(['rojo', 'verde', 'azul'])<br>
                    for i, color in enumerate(colores):<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;if i > 5:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;print(color)
                </code>
            </div>
        `,
        exercises: [
            {
                title: "Trabajando con fechas",
                description: "Calcula tu edad en días",
                template: "from datetime import date\n\n# Tu fecha de nacimiento (año, mes, día)\nnacimiento = date(2000, 1, 1)\nhoy = date.today()\n\n# Calcula la diferencia\n",
                solution: "from datetime import date\n\nnacimiento = date(2000, 1, 1)\nhoy = date.today()\ndiferencia = hoy - nacimiento\nprint(f'Has vivido {diferencia.days} días')"
            },
            {
                title: "Contador de palabras",
                description: "Cuenta las palabras en un texto",
                template: "from collections import Counter\n\ntexto = \"python es genial python es fácil\"\npalabras = texto.split()\n\n# Usa Counter para contar las palabras\n",
                solution: "from collections import Counter\n\ntexto = \"python es genial python es fácil\"\npalabras = texto.split()\ncontador = Counter(palabras)\nprint(contador)\nprint(f'La palabra más común es: {contador.most_common(1)[0]}')"
            }
        ],
        quiz: [
            {
                question: "¿Qué módulo usarías para trabajar con fechas?",
                options: ["time", "datetime", "date", "calendar"],
                correct: 1
            }
        ]
    },
    
    stdlib2: {
        title: "11. Biblioteca Estándar II",
        description: "Temas avanzados",
        video: "https://www.youtube.com/embed/ekzgmwbads0",
        additionalVideos: [],
        content: `
            <h2 class="text-2xl font-bold theme-text-primary mb-4">Biblioteca Estándar - Parte II</h2>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Módulos Avanzados</h3>
            
            <h4 class="text-lg font-semibold theme-text-primary mb-2">threading - Hilos</h4>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    import threading<br>
                    import time<br><br>
                    def tarea(nombre):<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;for i in range(5):<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(f"{nombre}: {i}")<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;time.sleep(1)<br><br>
                    # Crear hilos<br>
                    hilo1 = threading.Thread(target=tarea, args=("Hilo-1",))<br>
                    hilo2 = threading.Thread(target=tarea, args=("Hilo-2",))<br><br>
                    hilo1.start()<br>
                    hilo2.start()
                </code>
            </div>
            
            <h4 class="text-lg font-semibold theme-text-primary mb-2">logging - Registro de eventos</h4>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    import logging<br><br>
                    # Configurar logging<br>
                    logging.basicConfig(level=logging.INFO)<br><br>
                    # Diferentes niveles<br>
                    logging.debug("Mensaje de depuración")<br>
                    logging.info("Información general")<br>
                    logging.warning("Advertencia")<br>
                    logging.error("Error")<br>
                    logging.critical("Error crítico")
                </code>
            </div>
            
            <h4 class="text-lg font-semibold theme-text-primary mb-2">decimal - Aritmética decimal</h4>
            <div class="p-4 theme-bg-tertiary rounded-lg">
                <code class="text-sm">
                    from decimal import Decimal<br><br>
                    # Problemas con float<br>
                    print(0.1 + 0.2)  # 0.30000000000000004<br><br>
                    # Solución con Decimal<br>
                    a = Decimal('0.1')<br>
                    b = Decimal('0.2')<br>
                    print(a + b)  # 0.3
                </code>
            </div>
        `,
        exercises: [
            {
                title: "Logging básico",
                description: "Configura y usa logging en tu código",
                template: "import logging\n\n# Configura logging\n# Registra mensajes de diferentes niveles\n",
                solution: "import logging\n\nlogging.basicConfig(level=logging.INFO, format='%(levelname)s: %(message)s')\n\nlogging.info('Programa iniciado')\nlogging.warning('Esto es una advertencia')\nlogging.error('Esto es un error')\nlogging.info('Programa terminado')"
            }
        ],
        quiz: [
            {
                question: "¿Cuál es la ventaja de usar Decimal sobre float?",
                options: ["Es más rápido", "Más preciso para decimales", "Ocupa menos memoria", "Es más fácil de usar"],
                correct: 1
            }
        ]
    },
    
    venv: {
        title: "12. Entornos Virtuales",
        description: "Gestión de paquetes",
        video: "https://www.youtube.com/embed/Kp4Mvapo5kc",
        additionalVideos: [],
        content: `
            <h2 class="text-2xl font-bold theme-text-primary mb-4">Entornos Virtuales y Paquetes</h2>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">¿Qué son los entornos virtuales?</h3>
            <p class="theme-text-secondary mb-4">Los entornos virtuales permiten tener instalaciones separadas de Python para diferentes proyectos, evitando conflictos entre versiones de paquetes.</p>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Crear un entorno virtual</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    # Crear entorno virtual<br>
                    python -m venv mi_entorno<br><br>
                    # Activar (Windows)<br>
                    mi_entorno\\Scripts\\activate<br><br>
                    # Activar (macOS/Linux)<br>
                    source mi_entorno/bin/activate<br><br>
                    # Desactivar<br>
                    deactivate
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Gestión de paquetes con pip</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    # Instalar paquete<br>
                    pip install requests<br><br>
                    # Instalar versión específica<br>
                    pip install requests==2.25.1<br><br>
                    # Listar paquetes instalados<br>
                    pip list<br><br>
                    # Guardar dependencias<br>
                    pip freeze > requirements.txt<br><br>
                    # Instalar desde requirements.txt<br>
                    pip install -r requirements.txt
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Buenas prácticas</h3>
            <div class="space-y-4">
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary">1. Un entorno por proyecto</h4>
                    <p class="text-sm theme-text-secondary">Cada proyecto debería tener su propio entorno virtual</p>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary">2. Documentar dependencias</h4>
                    <p class="text-sm theme-text-secondary">Mantén actualizado el archivo requirements.txt</p>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary">3. No versionar el entorno</h4>
                    <p class="text-sm theme-text-secondary">Agrega la carpeta del entorno virtual al .gitignore</p>
                </div>
            </div>
        `,
        exercises: [
            {
                title: "Simulación de pip",
                description: "Simula el uso de pip para instalar paquetes",
                template: "# Simula los comandos que usarías para:\n# 1. Crear un entorno virtual\n# 2. Activarlo\n# 3. Instalar requests\n# 4. Guardar dependencias\n\nprint('Comandos para gestionar entornos virtuales:')",
                solution: "print('Comandos para gestionar entornos virtuales:')\nprint('1. python -m venv mi_proyecto')\nprint('2. source mi_proyecto/bin/activate (Linux/Mac)')\nprint('   mi_proyecto\\\\Scripts\\\\activate (Windows)')\nprint('3. pip install requests')\nprint('4. pip freeze > requirements.txt')\nprint('5. deactivate')"
            }
        ],
        quiz: [
            {
                question: "¿Cuál es la ventaja principal de usar entornos virtuales?",
                options: ["Son más rápidos", "Aíslan las dependencias", "Ocupan menos espacio", "Son más seguros"],
                correct: 1
            }
        ]
    },
    
    deepseek: {
        title: "13. DeepSeek IA",
        description: "Asistente IA gratuito",
        video: "",
        additionalVideos: [],
        content: `
            <h2 class="text-2xl font-bold theme-text-primary mb-4">DeepSeek IA - Tu Asistente de Programación</h2>
            <p class="theme-text-secondary mb-6">DeepSeek es un asistente de inteligencia artificial gratuito que puede ayudarte con programación en Python, resolver dudas, explicar código y mucho más.</p>
            
            <div class="grid md:grid-cols-2 gap-6 mb-8">
                <div class="p-6 theme-bg-tertiary rounded-xl">
                    <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-code text-white text-xl"></i>
                    </div>
                    <h3 class="text-lg font-semibold theme-text-primary mb-2 text-center">Ayuda con Código</h3>
                    <p class="text-sm theme-text-secondary text-center">Obtén ayuda para escribir, depurar y optimizar tu código Python</p>
                </div>
                
                <div class="p-6 theme-bg-tertiary rounded-xl">
                    <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-question-circle text-white text-xl"></i>
                    </div>
                    <h3 class="text-lg font-semibold theme-text-primary mb-2 text-center">Explicaciones</h3>
                    <p class="text-sm theme-text-secondary text-center">Recibe explicaciones detalladas de conceptos de programación</p>
                </div>
                
                <div class="p-6 theme-bg-tertiary rounded-xl">
                    <div class="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-lightbulb text-white text-xl"></i>
                    </div>
                    <h3 class="text-lg font-semibold theme-text-primary mb-2 text-center">Ideas de Proyectos</h3>
                    <p class="text-sm theme-text-secondary text-center">Descubre nuevas ideas para proyectos y ejercicios</p>
                </div>
                
                <div class="p-6 theme-bg-tertiary rounded-xl">
                    <div class="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-graduation-cap text-white text-xl"></i>
                    </div>
                    <h3 class="text-lg font-semibold theme-text-primary mb-2 text-center">Aprendizaje</h3>
                    <p class="text-sm theme-text-secondary text-center">Aprende nuevos conceptos y mejores prácticas</p>
                </div>
            </div>
            
            <div class="mb-6">
                <h3 class="text-xl font-semibold theme-text-primary mb-4">Chat DeepSeek IA</h3>
                <div class="theme-bg-tertiary rounded-xl overflow-hidden" style="height: 600px;">
                    <iframe 
                        src="https://www.ChatStream.org/embed" 
                        width="100%" 
                        height="100%" 
                        frameborder="0"
                        style="border-radius: 12px;">
                    </iframe>
                </div>
            </div>
            
            <div class="p-4 theme-bg-tertiary rounded-lg">
                <h4 class="font-semibold theme-text-primary mb-2">💡 Consejos para usar DeepSeek:</h4>
                <ul class="text-sm theme-text-secondary space-y-1 ml-4">
                    <li>• Sé específico en tus preguntas sobre Python</li>
                    <li>• Comparte tu código para obtener ayuda personalizada</li>
                    <li>• Pregunta sobre mejores prácticas y optimizaciones</li>
                    <li>• Solicita explicaciones paso a paso de algoritmos</li>
                    <li>• Pide ideas para proyectos de práctica</li>
                </ul>
            </div>
        `,
        exercises: [
            {
                title: "Pregunta a la IA",
                description: "Usa DeepSeek para obtener ayuda con un concepto de Python que no entiendas",
                template: "# Ejemplo de pregunta para DeepSeek:\n# '¿Puedes explicarme cómo funcionan las list comprehensions en Python con ejemplos?'\n\n# Tu código de práctica aquí",
                solution: "# Ejemplo de respuesta que podrías obtener:\n# List comprehensions son una forma concisa de crear listas\nlist_comp = [x**2 for x in range(10) if x % 2 == 0]\nprint(list_comp)  # [0, 4, 16, 36, 64]"
            }
        ],
        quiz: [
            {
                question: "¿Para qué puedes usar DeepSeek IA en tu aprendizaje de Python?",
                options: ["Solo para escribir código", "Solo para explicaciones", "Para código, explicaciones, depuración y proyectos", "Solo para proyectos"],
                correct: 2
            }
        ]
    },
    
    "google-colab": {
        title: "14. Google Colab",
        description: "Notebook en la nube",
        video: "https://www.youtube.com/embed/inN8seMm7UI",
        additionalVideos: [
            { title: "Introducción a Google Colab", url: "https://www.youtube.com/embed/2QqvFa_27J4" },
            { title: "Google Colab Tips", url: "https://www.youtube.com/embed/Zwg8c0RIP7g" }
        ],
        content: `
            <h2 class="text-2xl font-bold theme-text-primary mb-4">Google Colab - Tu Laboratorio Python en la Nube</h2>
            <p class="theme-text-secondary mb-6">Google Colaboratory es un entorno de Jupyter notebook gratuito que se ejecuta completamente en la nube. Perfecto para practicar Python sin instalaciones.</p>
            
            <div class="grid md:grid-cols-2 gap-6 mb-8">
                <div class="p-6 theme-bg-tertiary rounded-xl">
                    <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-cloud text-white text-xl"></i>
                    </div>
                    <h3 class="text-lg font-semibold theme-text-primary mb-2 text-center">Gratis y en la Nube</h3>
                    <p class="text-sm theme-text-secondary text-center">Sin instalaciones, ejecuta Python directamente en tu navegador</p>
                </div>
                
                <div class="p-6 theme-bg-tertiary rounded-xl">
                    <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-save text-white text-xl"></i>
                    </div>
                    <h3 class="text-lg font-semibold theme-text-primary mb-2 text-center">Auto-guardado</h3>
                    <p class="text-sm theme-text-secondary text-center">Tus notebooks se guardan automáticamente en Google Drive</p>
                </div>
                
                <div class="p-6 theme-bg-tertiary rounded-xl">
                    <div class="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-share-alt text-white text-xl"></i>
                    </div>
                    <h3 class="text-lg font-semibold theme-text-primary mb-2 text-center">Colaborativo</h3>
                    <p class="text-sm theme-text-secondary text-center">Comparte y colabora en tiempo real con otros</p>
                </div>
                
                <div class="p-6 theme-bg-tertiary rounded-xl">
                    <div class="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-rocket text-white text-xl"></i>
                    </div>
                    <h3 class="text-lg font-semibold theme-text-primary mb-2 text-center">GPU Gratuita</h3>
                    <p class="text-sm theme-text-secondary text-center">Acceso gratuito a GPU para proyectos de IA</p>
                </div>
            </div>
            
            <div class="mb-8">
                <h3 class="text-xl font-semibold theme-text-primary mb-4">🚀 Crear Nuevo Notebook</h3>
                <div class="space-y-4">
                    <div class="p-6 theme-bg-tertiary rounded-xl border-2 border-blue-500">
                        <div class="text-center">
                            <h4 class="text-lg font-semibold theme-text-primary mb-3">¡Comienza a programar ahora!</h4>
                            <p class="theme-text-secondary mb-4">Cada vez que hagas clic, se abrirá un nuevo notebook en Google Colab listo para usar.</p>
                            <button id="newColabBtn" class="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                                <i class="fab fa-google mr-2"></i>Abrir Nuevo Notebook
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="grid md:grid-cols-2 gap-6 mb-8">
                <div class="p-6 theme-bg-tertiary rounded-xl">
                    <h4 class="text-lg font-semibold theme-text-primary mb-3">📝 Características</h4>
                    <ul class="text-sm theme-text-secondary space-y-2">
                        <li>• Jupyter Notebooks en la nube</li>
                        <li>• Python 3.x preinstalado</li>
                        <li>• Bibliotecas populares incluidas</li>
                        <li>• Visualización de datos integrada</li>
                        <li>• Markdown y LaTeX soportados</li>
                    </ul>
                </div>
                
                <div class="p-6 theme-bg-tertiary rounded-xl">
                    <h4 class="text-lg font-semibold theme-text-primary mb-3">📚 Bibliotecas Incluidas</h4>
                    <ul class="text-sm theme-text-secondary space-y-2">
                        <li>• NumPy - Computación numérica</li>
                        <li>• Pandas - Análisis de datos</li>
                        <li>• Matplotlib - Visualización</li>
                        <li>• TensorFlow - Machine Learning</li>
                        <li>• Y muchas más...</li>
                    </ul>
                </div>
            </div>
            
            <div class="p-4 theme-bg-tertiary rounded-lg mb-6">
                <h4 class="font-semibold theme-text-primary mb-3">🎯 Primeros Pasos en Colab:</h4>
                <ol class="text-sm theme-text-secondary space-y-2 ml-4">
                    <li>1. Haz clic en "Abrir Nuevo Notebook" arriba</li>
                    <li>2. Inicia sesión con tu cuenta de Google</li>
                    <li>3. ¡Empieza a escribir código Python!</li>
                    <li>4. Presiona Shift+Enter para ejecutar celdas</li>
                    <li>5. Tu trabajo se guarda automáticamente</li>
                </ol>
            </div>
            
            <div class="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
                <h4 class="font-semibold text-blue-800 dark:text-blue-200 mb-2">💡 Consejo Pro:</h4>
                <p class="text-sm text-blue-700 dark:text-blue-300">
                    Usa Google Colab para experimentar con el código de los ejercicios de esta academia. 
                    Es perfecto para proyectos de ciencia de datos y machine learning.
                </p>
            </div>
        `,
        exercises: [
            {
                title: "Tu primer notebook",
                description: "Abre Google Colab y crea tu primer programa",
                template: "# En Google Colab, escribe este código:\nprint('¡Hola desde Google Colab!')\n\n# Luego presiona Shift+Enter para ejecutar",
                solution: "print('¡Hola desde Google Colab!')\n# ¡Así de fácil! Colab ejecuta el código en la nube"
            },
            {
                title: "Explora las bibliotecas",
                description: "Prueba algunas bibliotecas preinstaladas en Colab",
                template: "# Prueba estas bibliotecas en Colab:\nimport numpy as np\nimport pandas as pd\nimport matplotlib.pyplot as plt\n\n# Crea un gráfico simple\n# Tu código aquí",
                solution: "import numpy as np\nimport matplotlib.pyplot as plt\n\nx = np.linspace(0, 10, 100)\ny = np.sin(x)\n\nplt.plot(x, y)\nplt.title('Función Seno')\nplt.show()"
            }
        ],
        quiz: [
            {
                question: "¿Cuál es la principal ventaja de Google Colab?",
                options: ["Es más rápido que Python local", "No requiere instalación y es gratuito", "Solo funciona con Google", "Es mejor para principiantes"],
                correct: 1
            },
            {
                question: "¿Cómo ejecutas una celda de código en Google Colab?",
                options: ["Ctrl+Enter", "Shift+Enter", "Alt+Enter", "F5"],
                correct: 1
            }
        ]
    },
    
    cursor: {
        title: "15. Cursor IDE",
        description: "Editor con IA integrada",
        video: "https://www.youtube.com/embed/tp1yrfYnLR8",
        additionalVideos: [
            { title: "Cursor AI Setup", url: "https://www.youtube.com/embed/yk5lkEKlp6I" },
            { title: "Cursor vs VS Code", url: "https://www.youtube.com/embed/XLF-tZqD--o" }
        ],
        content: `
            <h2 class="text-2xl font-bold theme-text-primary mb-4">Cursor IDE - Editor de Código con IA</h2>
            <p class="theme-text-secondary mb-6">Cursor es un editor de código revolucionario que integra inteligencia artificial directamente en tu flujo de trabajo de programación. Basado en VS Code pero potenciado con IA.</p>
            
            <div class="grid md:grid-cols-2 gap-6 mb-8">
                <div class="p-6 theme-bg-tertiary rounded-xl">
                    <div class="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-brain text-white text-xl"></i>
                    </div>
                    <h3 class="text-lg font-semibold theme-text-primary mb-2 text-center">IA Integrada</h3>
                    <p class="text-sm theme-text-secondary text-center">Autocompletado inteligente y generación de código con IA</p>
                </div>
                
                <div class="p-6 theme-bg-tertiary rounded-xl">
                    <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-code text-white text-xl"></i>
                    </div>
                    <h3 class="text-lg font-semibold theme-text-primary mb-2 text-center">Compatible con VS Code</h3>
                    <p class="text-sm theme-text-secondary text-center">Todas tus extensiones y configuraciones funcionan</p>
                </div>
                
                <div class="p-6 theme-bg-tertiary rounded-xl">
                    <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-comments text-white text-xl"></i>
                    </div>
                    <h3 class="text-lg font-semibold theme-text-primary mb-2 text-center">Chat con IA</h3>
                    <p class="text-sm theme-text-secondary text-center">Pregunta directamente sobre tu código y proyectos</p>
                </div>
                
                <div class="p-6 theme-bg-tertiary rounded-xl">
                    <div class="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-magic text-white text-xl"></i>
                    </div>
                    <h3 class="text-lg font-semibold theme-text-primary mb-2 text-center">Refactoring IA</h3>
                    <p class="text-sm theme-text-secondary text-center">Mejora automática y refactorización de código</p>
                </div>
            </div>
            
            <div class="mb-8">
                <h3 class="text-xl font-semibold theme-text-primary mb-4">🚀 Abrir Cursor IDE</h3>
                <div class="space-y-4">
                    <div class="p-6 theme-bg-tertiary rounded-xl border-2 border-purple-500">
                        <div class="text-center">
                            <h4 class="text-lg font-semibold theme-text-primary mb-3">¡Lanza Cursor desde tu sistema!</h4>
                            <p class="theme-text-secondary mb-4">Detectaremos tu sistema operativo y ejecutaremos el comando apropiado para abrir Cursor IDE.</p>
                            <button id="launchCursorBtn" class="px-8 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                                <i class="fas fa-terminal mr-2"></i>Ejecutar Cursor
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="grid md:grid-cols-3 gap-4 mb-8">
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary mb-2">🖥️ Windows</h4>
                    <code class="text-xs theme-text-secondary">cursor</code>
                    <p class="text-xs theme-text-secondary mt-1">Comando desde PowerShell/CMD</p>
                </div>
                
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary mb-2">🍎 macOS</h4>
                    <code class="text-xs theme-text-secondary">cursor</code>
                    <p class="text-xs theme-text-secondary mt-1">Comando desde Terminal</p>
                </div>
                
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary mb-2">🐧 Linux</h4>
                    <code class="text-xs theme-text-secondary">cursor</code>
                    <p class="text-xs theme-text-secondary mt-1">Comando desde Terminal</p>
                </div>
            </div>
            
            <div class="grid md:grid-cols-2 gap-6 mb-8">
                <div class="p-6 theme-bg-tertiary rounded-xl">
                    <h4 class="text-lg font-semibold theme-text-primary mb-3">⚡ Características IA</h4>
                    <ul class="text-sm theme-text-secondary space-y-2">
                        <li>• Tab para autocompletado inteligente</li>
                        <li>• Cmd+K para editar con IA</li>
                        <li>• Cmd+L para chat con IA</li>
                        <li>• Generación de código completo</li>
                        <li>• Explicación de errores automática</li>
                    </ul>
                </div>
                
                <div class="p-6 theme-bg-tertiary rounded-xl">
                    <h4 class="text-lg font-semibold theme-text-primary mb-3">🔧 Instalación</h4>
                    <ul class="text-sm theme-text-secondary space-y-2">
                        <li>• Descargar desde cursor.com</li>
                        <li>• Instalar como aplicación normal</li>
                        <li>• Configurar comando en terminal</li>
                        <li>• Importar configuración de VS Code</li>
                        <li>• ¡Listo para programar con IA!</li>
                    </ul>
                </div>
            </div>
            
            <div class="p-4 theme-bg-tertiary rounded-lg mb-6">
                <h4 class="font-semibold theme-text-primary mb-3">🎯 Cómo usar Cursor:</h4>
                <ol class="text-sm theme-text-secondary space-y-2 ml-4">
                    <li>1. Descarga e instala Cursor desde cursor.com</li>
                    <li>2. Configura el comando en terminal (Ver → Command Palette → "Install cursor command")</li>
                    <li>3. Abre un proyecto: <code>cursor .</code> en tu directorio</li>
                    <li>4. Usa Tab para autocompletado IA</li>
                    <li>5. Usa Cmd+L para chatear con la IA sobre tu código</li>
                </ol>
            </div>
            
            <div class="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-700">
                <h4 class="font-semibold text-purple-800 dark:text-purple-200 mb-2">⚠️ Nota importante:</h4>
                <p class="text-sm text-purple-700 dark:text-purple-300">
                    Para que el botón funcione, necesitas tener Cursor IDE instalado y configurado en tu sistema. 
                    Si no lo tienes, el botón te mostrará instrucciones de instalación.
                </p>
            </div>
        `,
        exercises: [
            {
                title: "Instala Cursor",
                description: "Descarga e instala Cursor IDE en tu sistema",
                template: "# Pasos para instalar Cursor:\n# 1. Ir a cursor.com\n# 2. Descargar para tu OS\n# 3. Instalar normalmente\n# 4. Configurar comando terminal\n\n# Una vez instalado, puedes usar:\n# cursor . (para abrir directorio actual)",
                solution: "# Cursor instalado correctamente!\n# Ahora puedes usar:\ncursor .  # Abre directorio actual\ncursor archivo.py  # Abre archivo específico\n# ¡Disfruta programando con IA!"
            },
            {
                title: "Primeros pasos con IA",
                description: "Experimenta con las funciones de IA de Cursor",
                template: "# En Cursor, prueba estos comandos:\n# 1. Tab - Autocompletado IA\n# 2. Cmd+K (Ctrl+K) - Editar con IA\n# 3. Cmd+L (Ctrl+L) - Chat con IA\n\n# Escribe un comentario describiendo qué quieres hacer\n# y presiona Tab para ver la magia",
                solution: "# Ejemplo de uso:\n# Escribes: \"función que calcule factorial\"\n# Presionas Tab y Cursor genera:\ndef factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n - 1)"
            }
        ],
        quiz: [
            {
                question: "¿Cuál es la principal ventaja de Cursor sobre VS Code?",
                options: ["Es más rápido", "Tiene IA integrada", "Es gratis", "Tiene mejor interfaz"],
                correct: 1
            },
            {
                question: "¿Qué comando usas para abrir el directorio actual en Cursor?",
                options: ["cursor .", "cursor open", "cursor start", "cursor run"],
                correct: 0
            }
        ]
    }
};