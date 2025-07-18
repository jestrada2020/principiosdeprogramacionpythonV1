// Module data for Python Interpreter
const interpreterModule = {
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
};