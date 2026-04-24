const io = {
    title: "7. Entrada y Salida",
    description: "Archivos y formateo",
    video: "https://www.youtube.com/embed/JkTEdzYD-as",
    additionalVideos: [
        { title: "Manejo de archivos", url: "https://www.youtube.com/embed/A5V8RLkgebY" }
    ],
    content: `
        <h2 class="text-2xl font-bold theme-text-primary mb-4">Entrada y Salida</h2>

        <!-- Videos de Google Colab — tabla 2 filas × 3 columnas -->
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:1rem;margin-bottom:1.5rem;">

          <!-- Fila 1 — Video 1 -->
          <div>
            <div class="theme-text-primary" style="font-weight:bold;font-size:0.82rem;margin-bottom:0.4rem;text-align:center;">Cargar datos CSV a Google Colab</div>
            <a href="https://www.youtube.com/watch?v=lm7MwqMPNJM" target="_blank" rel="noopener noreferrer"
               style="display:block;position:relative;padding-top:56.25%;width:100%;border-radius:0.75rem;overflow:hidden;background:#000;cursor:pointer;text-decoration:none;">
              <img src="https://img.youtube.com/vi/lm7MwqMPNJM/hqdefault.jpg" alt="Cargar datos CSV a Google Colab"
                   style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;">
              <div style="position:absolute;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.5rem;background:rgba(0,0,0,0.25);">
                <div style="width:56px;height:56px;border-radius:50%;background:rgba(255,0,0,0.92);display:flex;align-items:center;justify-content:center;box-shadow:0 4px 20px rgba(0,0,0,0.6);">
                  <div style="width:0;height:0;border-top:12px solid transparent;border-bottom:12px solid transparent;border-left:22px solid white;margin-left:5px;"></div>
                </div>
                <div style="background:rgba(0,0,0,0.65);color:white;font-size:0.75rem;font-weight:bold;padding:4px 12px;border-radius:999px;">▶ Ver en YouTube</div>
              </div>
            </a>
          </div>

          <!-- Fila 1 — Video 2 -->
          <div>
            <div class="theme-text-primary" style="font-weight:bold;font-size:0.82rem;margin-bottom:0.4rem;text-align:center;">Excel a CSV y subir a Colab</div>
            <a href="https://www.youtube.com/watch?v=A4FUP3M9ZDk" target="_blank" rel="noopener noreferrer"
               style="display:block;position:relative;padding-top:56.25%;width:100%;border-radius:0.75rem;overflow:hidden;background:#000;cursor:pointer;text-decoration:none;">
              <img src="https://img.youtube.com/vi/A4FUP3M9ZDk/hqdefault.jpg" alt="Excel a CSV y subir a Colab"
                   style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;">
              <div style="position:absolute;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.5rem;background:rgba(0,0,0,0.25);">
                <div style="width:56px;height:56px;border-radius:50%;background:rgba(255,0,0,0.92);display:flex;align-items:center;justify-content:center;box-shadow:0 4px 20px rgba(0,0,0,0.6);">
                  <div style="width:0;height:0;border-top:12px solid transparent;border-bottom:12px solid transparent;border-left:22px solid white;margin-left:5px;"></div>
                </div>
                <div style="background:rgba(0,0,0,0.65);color:white;font-size:0.75rem;font-weight:bold;padding:4px 12px;border-radius:999px;">▶ Ver en YouTube</div>
              </div>
            </a>
          </div>

          <!-- Fila 1 — Video 3 -->
          <div>
            <div class="theme-text-primary" style="font-weight:bold;font-size:0.82rem;margin-bottom:0.4rem;text-align:center;">Personalización de Google Colab</div>
            <a href="https://www.youtube.com/watch?v=5-Ded09PCKI" target="_blank" rel="noopener noreferrer"
               style="display:block;position:relative;padding-top:56.25%;width:100%;border-radius:0.75rem;overflow:hidden;background:#000;cursor:pointer;text-decoration:none;">
              <img src="https://img.youtube.com/vi/5-Ded09PCKI/hqdefault.jpg" alt="Personalización de Google Colab"
                   style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;">
              <div style="position:absolute;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.5rem;background:rgba(0,0,0,0.25);">
                <div style="width:56px;height:56px;border-radius:50%;background:rgba(255,0,0,0.92);display:flex;align-items:center;justify-content:center;box-shadow:0 4px 20px rgba(0,0,0,0.6);">
                  <div style="width:0;height:0;border-top:12px solid transparent;border-bottom:12px solid transparent;border-left:22px solid white;margin-left:5px;"></div>
                </div>
                <div style="background:rgba(0,0,0,0.65);color:white;font-size:0.75rem;font-weight:bold;padding:4px 12px;border-radius:999px;">▶ Ver en YouTube</div>
              </div>
            </a>
          </div>

          <!-- Fila 2 — Video 4 -->
          <div>
            <div class="theme-text-primary" style="font-weight:bold;font-size:0.82rem;margin-bottom:0.4rem;text-align:center;">Configuración Grupos de Trabajo (Parte 1)</div>
            <a href="https://www.youtube.com/watch?v=tw9FqCLlLqo" target="_blank" rel="noopener noreferrer"
               style="display:block;position:relative;padding-top:56.25%;width:100%;border-radius:0.75rem;overflow:hidden;background:#000;cursor:pointer;text-decoration:none;">
              <img src="https://img.youtube.com/vi/tw9FqCLlLqo/hqdefault.jpg" alt="Configuración Grupos de Trabajo"
                   style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;">
              <div style="position:absolute;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.5rem;background:rgba(0,0,0,0.25);">
                <div style="width:56px;height:56px;border-radius:50%;background:rgba(255,0,0,0.92);display:flex;align-items:center;justify-content:center;box-shadow:0 4px 20px rgba(0,0,0,0.6);">
                  <div style="width:0;height:0;border-top:12px solid transparent;border-bottom:12px solid transparent;border-left:22px solid white;margin-left:5px;"></div>
                </div>
                <div style="background:rgba(0,0,0,0.65);color:white;font-size:0.75rem;font-weight:bold;padding:4px 12px;border-radius:999px;">▶ Ver en YouTube</div>
              </div>
            </a>
          </div>

          <!-- Fila 2 — Video 5 -->
          <div>
            <div class="theme-text-primary" style="font-weight:bold;font-size:0.82rem;margin-bottom:0.4rem;text-align:center;">Manejo de Datos Colaborativos en Colab</div>
            <a href="https://www.youtube.com/watch?v=Ba7vJ1XW7M4" target="_blank" rel="noopener noreferrer"
               style="display:block;position:relative;padding-top:56.25%;width:100%;border-radius:0.75rem;overflow:hidden;background:#000;cursor:pointer;text-decoration:none;">
              <img src="https://img.youtube.com/vi/Ba7vJ1XW7M4/hqdefault.jpg" alt="Manejo de Datos Colaborativos en Colab"
                   style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;">
              <div style="position:absolute;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.5rem;background:rgba(0,0,0,0.25);">
                <div style="width:56px;height:56px;border-radius:50%;background:rgba(255,0,0,0.92);display:flex;align-items:center;justify-content:center;box-shadow:0 4px 20px rgba(0,0,0,0.6);">
                  <div style="width:0;height:0;border-top:12px solid transparent;border-bottom:12px solid transparent;border-left:22px solid white;margin-left:5px;"></div>
                </div>
                <div style="background:rgba(0,0,0,0.65);color:white;font-size:0.75rem;font-weight:bold;padding:4px 12px;border-radius:999px;">▶ Ver en YouTube</div>
              </div>
            </a>
          </div>

          <!-- Fila 2 — Celda vacía (3ª columna) -->
          <div></div>

        </div>
        <!-- Fin videos -->
        
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
        },
        {
            question: "¿Cuál es el modo correcto para abrir un archivo solo para lectura?",
            options: ["'r'", "'read'", "'rb'", "'open'"],
            correct: 0
        },
        {
            question: "¿Qué método se usa para leer todo el contenido de un archivo?",
            options: ["read()", "readall()", "getall()", "content()"],
            correct: 0
        },
        {
            question: "¿Cómo se lee un archivo línea por línea?",
            options: ["for line in file:", "file.readlines()", "file.readline()", "Todas las anteriores"],
            correct: 3
        },
        {
            question: "¿Qué modo se usa para escribir en un archivo (sobrescribir)?",
            options: ["'w'", "'write'", "'a'", "'overwrite'"],
            correct: 0
        },
        {
            question: "¿Cuál es la diferencia entre 'w' y 'a' al abrir archivos?",
            options: ["No hay diferencia", "'w' sobrescribe, 'a' añade al final", "'a' es más rápido", "'w' es para texto, 'a' para binario"],
            correct: 1
        },
        {
            question: "¿Cómo se verifica si un archivo existe antes de abrirlo?",
            options: ["os.path.exists()", "file.exists()", "os.file.check()", "path.isfile()"],
            correct: 0
        },
        {
            question: "¿Qué codificación se recomienda especificar al abrir archivos de texto?",
            options: ["ascii", "utf-8", "latin-1", "unicode"],
            correct: 1
        },
        {
            question: "¿Cómo se formatea una cadena usando f-strings?",
            options: ["f'Hola {nombre}'", "format('Hola {nombre}')", "'Hola %s' % nombre", "Todas las anteriores"],
            correct: 0
        },
        {
            question: "¿Qué método se usa para dividir una cadena en líneas?",
            options: ["split()", "splitlines()", "split('\\n')", "Opciones B y C son correctas"],
            correct: 3
        }
    ]
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = io;
}