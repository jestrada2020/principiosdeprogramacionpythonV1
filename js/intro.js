// Module data for Introduction to Python
const introModule = {
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
};