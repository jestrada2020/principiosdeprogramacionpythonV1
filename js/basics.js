const basics = {
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
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = basics;
}