const modules_data = {
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
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = modules_data;
}