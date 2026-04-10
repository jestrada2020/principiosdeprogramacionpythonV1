// Consolidated modules data
const modules = {
    intro: {
        title: "1. Introducción a Python",
        description: "Abriendo el apetito",
        video: "https://www.youtube.com/embed/nKPbfIU442g",
        additionalVideos: [
            { title: "Python curso completo", url: "https://www.youtube.com/embed/0ftxmhe323g" },
            { title: "Python desde cero", url: "https://www.youtube.com/embed/IimBRwHhW54" },
            { title: "Introducción a Python", url: "https://www.youtube.com/embed/Kp4Mvapo5kc" }
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
            <div class="grid md:grid-cols-2 gap-4 mb-8">
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
            
            <div class="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-xl mb-6">
                <h3 class="text-xl font-semibold theme-text-primary mb-4">🚀 Empieza a Programar Ahora</h3>
                <p class="theme-text-secondary mb-6">¿Listo para escribir tu primer código Python? Elige una de estas herramientas online gratuitas:</p>
                
                <div class="flex flex-wrap gap-4">
                    <button onclick="window.open('https://colab.research.google.com/', '_blank')" class="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                        <i class="fab fa-google mr-2"></i>Google Colab
                    </button>
                    <button onclick="window.open('https://vscode.dev/?vscode-lang=es-es', '_blank')" class="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                        <i class="fas fa-code mr-2"></i>Visual Studio Code
                    </button>
                    <button onclick="window.open('https://shinylive.io/py/editor/', '_blank')" class="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                        <i class="fas fa-star mr-2"></i>Shiny Live
                    </button>
                </div>
                
                <div class="mt-4 p-4 theme-bg-secondary rounded-lg">
                    <p class="text-sm theme-text-secondary">
                        <i class="fas fa-lightbulb mr-2 text-yellow-500"></i>
                        <strong>Consejo:</strong> Ambas herramientas son gratuitas y funcionan directamente en tu navegador. No necesitas instalar nada.
                    </p>
                </div>
            </div>
        `,
        colabContent: `
            <div class="mb-6">
                <h4 class="text-lg font-semibold theme-text-primary mb-3">🚀 Práctica Interactiva</h4>
                <p class="theme-text-secondary mb-4">Experimenta con estos ejercicios prácticos usando las herramientas online disponibles. Cada bloque de código está diseñado para ayudarte a entender mejor Python.</p>
                
                <div class="mb-6 flex flex-wrap gap-3">
                    <button onclick="window.open('https://colab.research.google.com/', '_blank')" class="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                        <i class="fab fa-google mr-2"></i>Abrir Google Colab
                    </button>
                    <button onclick="window.open('https://vscode.dev/?vscode-lang=es-es', '_blank')" class="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                        <i class="fas fa-code mr-2"></i>Abrir Visual Studio Code
                    </button>
                </div>
                
                <div class="space-y-6">
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">📝 Ejercicio 1: Tu primer programa</h5>
                        <p class="text-sm theme-text-secondary mb-3">Copia y pega este código en Google Colab:</p>
                        <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                            <code># Mi primer programa en Python<br>
print("¡Hola, mundo desde Google Colab!")<br>
print("Python es increíble")<br>
print("¡Estoy aprendiendo a programar!")</code>
                        </div>
                        <p class="text-sm theme-text-secondary">Presiona <kbd>Shift + Enter</kbd> para ejecutar</p>
                    </div>
                    
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">🎯 Ejercicio 2: Variables y personalización</h5>
                        <p class="text-sm theme-text-secondary mb-3">Personaliza este código con tu información:</p>
                        <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                            <code># Personaliza tu información<br>
nombre = "Tu nombre aquí"<br>
edad = 20<br>
ciudad = "Tu ciudad"<br>
lenguaje_favorito = "Python"<br><br>
print(f"Hola, soy {nombre}")<br>
print(f"Tengo {edad} años")<br>
print(f"Vivo en {ciudad}")<br>
print(f"Mi lenguaje favorito es {lenguaje_favorito}")</code>
                        </div>
                    </div>
                    
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">🎨 Ejercicio 3: Python como calculadora</h5>
                        <p class="text-sm theme-text-secondary mb-3">Explora las operaciones matemáticas básicas:</p>
                        <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                            <code># Python como calculadora<br>
print("=== Operaciones Básicas ===")<br>
print(f"2 + 3 = {2 + 3}")<br>
print(f"10 - 4 = {10 - 4}")<br>
print(f"6 * 7 = {6 * 7}")<br>
print(f"15 / 3 = {15 / 3}")<br>
print(f"2 ** 8 = {2 ** 8}")<br>
print(f"17 % 5 = {17 % 5}")</code>
                        </div>
                    </div>
                    
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">💻 Ejercicio 4: Prueba en Visual Studio Code Online</h5>
                        <p class="text-sm theme-text-secondary mb-3">También puedes probar estos ejercicios en Visual Studio Code Online:</p>
                        <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                            <code># Crear un archivo Python en VS Code<br>
# 1. Haz clic en "Abrir Visual Studio Code" arriba<br>
# 2. Crea un nuevo archivo: archivo.py<br>
# 3. Copia cualquiera de los ejercicios anteriores<br>
# 4. Guarda el archivo y ejecútalo<br><br>
print("¡Hola desde Visual Studio Code!")<br>
nombre = input("¿Cuál es tu nombre? ")<br>
print(f"¡Bienvenido a Python, {nombre}!")</code>
                        </div>
                        <p class="text-sm theme-text-secondary">
                            <i class="fas fa-info-circle mr-1"></i>
                            VS Code Online te permite programar Python directamente en el navegador sin instalar nada.
                        </p>
                    </div>
                </div>
            </div>
        `,
        shinyContent: `
            <div class="mb-8">
                <div class="grid lg:grid-cols-3 gap-6 mb-6">
                    <div class="lg:col-span-2">
                        <h4 class="text-lg font-semibold theme-text-primary mb-4">¿Qué es Shiny for Python?</h4>
                        <p class="theme-text-secondary mb-4">
                            Shiny for Python es un framework de desarrollo de aplicaciones web reactivas que permite crear dashboards, 
                            aplicaciones de datos y soluciones de inteligencia artificial utilizando únicamente Python.
                        </p>
                        
                        <h5 class="text-md font-semibold theme-text-primary mb-3">Características Principales:</h5>
                        <ul class="list-disc list-inside theme-text-secondary space-y-2 mb-4">
                            <li><strong>Reactivo:</strong> Gestiona automáticamente el estado sin callbacks complejos</li>
                            <li><strong>Eficiente:</strong> Renderiza outputs solo cuando los componentes cambian</li>
                            <li><strong>Robusto:</strong> Construido sobre Starlette y asyncio</li>
                            <li><strong>Simple:</strong> Código Python limpio y directo</li>
                        </ul>
                        
                        <h5 class="text-md font-semibold theme-text-primary mb-3">Casos de Uso:</h5>
                        <div class="grid md:grid-cols-2 gap-3 mb-4">
                            <div class="p-3 theme-bg-tertiary rounded-lg">
                                <span class="text-sm theme-text-secondary">• Dashboards interactivos</span>
                            </div>
                            <div class="p-3 theme-bg-tertiary rounded-lg">
                                <span class="text-sm theme-text-secondary">• Visualizaciones de datos</span>
                            </div>
                            <div class="p-3 theme-bg-tertiary rounded-lg">
                                <span class="text-sm theme-text-secondary">• Simulaciones científicas</span>
                            </div>
                            <div class="p-3 theme-bg-tertiary rounded-lg">
                                <span class="text-sm theme-text-secondary">• Apps con IA</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="lg:col-span-1">
                        <div class="theme-bg-tertiary rounded-lg p-4 mb-4">
                            <h5 class="text-md font-semibold theme-text-primary mb-3">Instalación</h5>
                            <div class="bg-black text-green-400 p-3 rounded font-mono text-sm">
                                pip install shiny
                            </div>
                        </div>
                        
                        <div class="theme-bg-tertiary rounded-lg p-4">
                            <h5 class="text-md font-semibold theme-text-primary mb-3">Ventajas</h5>
                            <ul class="text-sm theme-text-secondary space-y-1">
                                <li>✓ Sin JavaScript necesario</li>
                                <li>✓ Integración con pandas/plotly</li>
                                <li>✓ CSS personalizable</li>
                                <li>✓ Despliegue fácil</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Sección de ejemplos -->
            <div class="text-center border-t theme-border pt-6">
                <div class="mb-6">
                    <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-star text-white text-2xl"></i>
                    </div>
                    <h4 class="text-lg font-semibold theme-text-primary mb-3">Explorar Ejemplos Interactivos</h4>
                    <p class="theme-text-secondary mb-6">Descubre aplicaciones web completas creadas con Shiny for Python.</p>
                </div>
                
                <div class="mb-6">
                    <button onclick="window.open('https://shinylive.io/py/examples/', '_blank')" class="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                        <i class="fas fa-external-link-alt mr-2"></i>Abrir Shiny Examples
                    </button>
                    <p class="text-sm theme-text-secondary mt-2">Se abrirá en una nueva ventana</p>
                </div>
            </div>
            
            <!-- Ejemplo completo de Shiny for Python -->
            <div class="border-t theme-border pt-6">
                <div class="mb-6">
                    <h4 class="text-2xl font-semibold theme-text-primary mb-4">📊 Ejemplo Completo: Calculadora de Ecuaciones Cúbicas</h4>
                    <p class="theme-text-secondary mb-6">
                        A continuación encontrarás un ejemplo completo de una aplicación Shiny for Python que demuestra 
                        conceptos básicos de la interfaz de usuario (UI) y la lógica del servidor (Server).
                    </p>
                </div>
                
                <div class="grid lg:grid-cols-2 gap-6 mb-6">
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-3">🎛️ Componentes UI Utilizados</h5>
                        <ul class="text-sm theme-text-secondary space-y-2">
                            <li><strong>ui.page_fluid():</strong> Layout responsivo principal</li>
                            <li><strong>ui.navset_tab():</strong> Sistema de pestañas</li>
                            <li><strong>ui.input_numeric():</strong> Campos de entrada numéricos</li>
                            <li><strong>ui.input_action_button():</strong> Botón de acción</li>
                            <li><strong>ui.output_ui():</strong> Salida dinámica de contenido</li>
                        </ul>
                    </div>
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-3">⚙️ Funcionalidad del Servidor</h5>
                        <ul class="text-sm theme-text-secondary space-y-2">
                            <li><strong>@reactive.event():</strong> Reactividad basada en eventos</li>
                            <li><strong>@render.ui:</strong> Renderizado dinámico de interfaz</li>
                            <li><strong>input/output:</strong> Comunicación entre UI y servidor</li>
                            <li><strong>Validación:</strong> Control de errores y límites</li>
                        </ul>
                    </div>
                </div>
                
                <div class="mb-6">
                    <h5 class="text-lg font-semibold theme-text-primary mb-3">📝 Código Completo</h5>
                    <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-xs overflow-x-auto" style="text-align: left;">
                        <pre style="text-align: left;"><code>from shiny import App, render, ui, reactive
import math

# Definir la interfaz de usuario
app_ui = ui.page_fluid(
    ui.tags.head(
        ui.tags.style("""
            .card-header {
                font-weight: bold;
                font-size: 16px;
                background-color: #007bff;
                color: white;
            }
            .step-box {
                background-color: #f0f8ff;
                border-left: 5px solid #4b9fc9;
                border-radius: 5px;
                padding: 15px;
                margin: 10px 0;
            }
            .math-equation {
                font-size: 16px;
                margin: 10px 0;
                padding: 10px;
                background-color: #f8f9fa;
                border-radius: 5px;
                text-align: center;
            }
            .result-section {
                margin: 15px 0;
                padding: 10px;
                border-left: 3px solid #007bff;
                background-color: #f8f9fa;
            }
        """)
    ),
    
    ui.navset_tab(
        ui.nav_panel(
            "Calculadora",
            ui.div(
                {"style": "max-width: 1200px; margin: 0 auto; padding: 20px;"},
                ui.h2("Resolución de Ecuaciones Cúbicas Generales"),
                ui.p("Esta aplicación calcula las raíces de ecuaciones cúbicas de la forma:"),
                ui.div(
                    {"style": "text-align: center; font-size: 18px; margin: 15px 0; padding: 10px; background-color: #f8f9fa; border-radius: 5px;"},
                    "ax³ + bx² + cx + d = 0"
                ),
                
                ui.row(
                    ui.column(
                        4,
                        ui.card( # a = -2; b = 16; c = 61; d = 16 otra opción a = -2; b = 16; c = 111; d = 16
                            ui.card_header("Coeficientes"),
                            ui.input_numeric("a", "Coeficiente a (a ≠ 0)", value=1, step=0.1),
                            ui.input_numeric("b", "Coeficiente b", value=-6, step=0.1), 
                            ui.input_numeric("c", "Coeficiente c", value=11, step=0.1),
                            ui.input_numeric("d", "Coeficiente d", value=-6, step=0.1),
                            ui.input_action_button("calculate", "Calcular Raíces", class_="btn btn-primary mt-3")
                        )
                    ),
                    ui.column(
                        8,
                        ui.card(
                            ui.card_header("Resultados"),
                            ui.div(
                                {"style": "background-color: #f9f9f9; border-radius: 5px; padding: 15px; margin-top: 10px;"},
                                ui.output_ui("results")
                            )
                        )
                    )
                )
            )
        ),
        
        ui.nav_panel(
            "Instrucciones",
            ui.div(
                {"style": "max-width: 800px; margin: 0 auto; padding: 20px;"},
                ui.h2("Instrucciones de uso"),
                ui.p("Esta aplicación resuelve ecuaciones cúbicas de la forma general:"),
                ui.div(
                    {"style": "text-align: center; font-size: 18px; margin: 15px 0; padding: 10px; background-color: #f8f9fa; border-radius: 5px;"},
                    "ax³ + bx² + cx + d = 0"
                ),
                ui.p("Donde a ≠ 0."),
                
                ui.h3("Pasos del método:"),
                ui.tags.ol(
                    ui.tags.li("Convertir la ecuación a forma reducida y³ + py + q = 0 mediante la sustitución x = y - b/(3a)"),
                    ui.tags.li("Calcular los parámetros Q = (3ac - b²)/(9a²) y R = (9abc - 27a²d - 2b³)/(54a³)"),
                    ui.tags.li("Calcular el discriminante D = Q³ + R²"),
                    ui.tags.li("Determinar el tipo de raíces según el valor de D"),
                    ui.tags.li("Calcular las raíces según el caso correspondiente")
                ),
                
                ui.h3("Interpretación del discriminante:"),
                ui.tags.ul(
                    ui.tags.li(
                        ui.span("D > 0: ", {"style": "color: #e74c3c; font-weight: bold;"}),
                        "Una raíz real y dos complejas conjugadas"
                    ),
                    ui.tags.li(
                        ui.span("D = 0: ", {"style": "color: #f39c12; font-weight: bold;"}),
                        "Todas las raíces reales y al menos dos iguales"
                    ),
                    ui.tags.li(
                        ui.span("D < 0: ", {"style": "color: #27ae60; font-weight: bold;"}),
                        "Tres raíces reales distintas"
                    )
                )
            )
        )
    ),
    
    title="Solver Ecuación Cúbica General"
)

def server(input, output, session):
    
    def cube_root(x):
        """Función para calcular raíces cúbicas de números reales (incluyendo negativos)"""
        if x >= 0:
            return x**(1/3)
        else:
            return -(abs(x)**(1/3))
    
    @render.ui
    @reactive.event(input.calculate)
    def results():
        a = input.a()
        b = input.b()
        c_val = input.c()
        d = input.d()
        
        # Validar que a no sea cero
        if a == 0:
            return ui.div(
                {"style": "color: red; font-weight: bold;"},
                "Error: El coeficiente 'a' no puede ser cero"
            )
        
        # Validar límites numéricos
        if any(abs(coef) > 1e10 for coef in [a, b, c_val, d]):
            return ui.div(
                {"style": "color: red; font-weight: bold;"},
                "Error: Los coeficientes son demasiado grandes (máximo 1e10)"
            )
        
        # Paso 1: Conversión a forma reducida
        # x = y - b/(3a) => y³ + py + q = 0
        p = (3*a*c_val - b**2) / (3*a**2)
        q = (2*b**3 - 9*a*b*c_val + 27*a**2*d) / (27*a**3)
        
        # Paso 2: Cálculo de Q y R
        try:
            Q = (3*a*c_val - b**2) / (9*a**2)
            R = (9*a*b*c_val - 27*a**2*d - 2*b**3) / (54*a**3)
            
            # Paso 3: Cálculo del discriminante
            D = Q**3 + R**2
            
            # Verificar que no hay overflow o valores extremos
            if not all(math.isfinite(val) for val in [Q, R, D]):
                raise OverflowError("Valores numéricos extremos")
                
        except (OverflowError, ZeroDivisionError) as e:
            return ui.div(
                {"style": "color: red; font-weight: bold;"},
                f"Error en el cálculo: {str(e)}. Use valores más pequeños."
            )
        
        # Generar la salida HTML
        results_html = []
        
        # Mostrar ecuación original
        results_html.append(ui.h4("Ecuación ingresada:"))
        equation_text = f"{a:.2f}x³ + {b:.2f}x² + {c_val:.2f}x + {d:.2f} = 0"
        results_html.append(ui.div({"class": "math-equation"}, equation_text))
        
        # Paso 1: Conversión a forma reducida
        results_html.append(ui.div(
            {"class": "result-section"},
            ui.h4("Paso 1: Conversión a forma reducida"),
            ui.p("Realizamos la sustitución:"),
            ui.div({"class": "math-equation"}, f"x = y - b/(3a) = y - {b:.2f}/(3×{a:.2f}) = y - {b/(3*a):.4f}"),
            ui.p("Obteniendo la ecuación reducida:"),
            ui.div({"class": "math-equation"}, f"y³ + {p:.4f}y + {q:.4f} = 0")
        ))
        
        # Paso 2: Cálculo de Q y R
        results_html.append(ui.div(
            {"class": "result-section"},
            ui.h4("Paso 2: Cálculo de Q y R"),
            ui.p("Calculamos los parámetros Q y R:"),
            ui.div({"class": "math-equation"}, 
                   f"Q = (3ac - b²)/(9a²) = (3×{a:.2f}×{c_val:.2f} - ({b:.2f})²)/(9×({a:.2f})²) = {Q:.6f}"),
            ui.div({"class": "math-equation"}, 
                   f"R = (9abc - 27a²d - 2b³)/(54a³) = {R:.6f}")
        ))
        
        # Paso 3: Cálculo del discriminante
        color = "#e74c3c" if D > 0 else "#f39c12" if D == 0 else "#27ae60"
        results_html.append(ui.div(
            {"class": "result-section"},
            ui.h4("Paso 3: Cálculo del discriminante"),
            ui.p("Calculamos el discriminante D:"),
            ui.div({"class": "math-equation"}, f"D = Q³ + R² = ({Q:.6f})³ + ({R:.6f})² = {D:.6f}"),
            ui.div({"style": f"color: {color}; font-weight: bold;"}, 
                   f"D = {D:.6f}")
        ))
        
        # Paso 4: Tipo de raíces
        if D > 0:
            type_text = "Una raíz real y dos complejas conjugadas"
            type_color = "#e74c3c"
        elif D == 0:
            type_text = "Todas las raíces reales y al menos dos iguales"
            type_color = "#f39c12"
        else:
            type_text = "Tres raíces reales distintas"
            type_color = "#27ae60"
        
        results_html.append(ui.div(
            {"class": "result-section"},
            ui.h4("Paso 4: Determinación del tipo de raíces"),
            ui.p("Según el valor del discriminante, determinamos que las raíces son:"),
            ui.div({"style": f"color: {type_color}; font-weight: bold;"}, type_text)
        ))
        
        # Paso 5: Cálculo de las raíces
        x_offset = b/(3*a)
        
        if D > 0:
            # Caso 1: Una raíz real y dos complejas
            S1 = cube_root(R + math.sqrt(D))
            S2 = cube_root(R - math.sqrt(D))
            
            y1 = S1 + S2
            y2 = -(S1 + S2)/2 + (math.sqrt(3)/2)*(S1 - S2)*1j
            y3 = -(S1 + S2)/2 - (math.sqrt(3)/2)*(S1 - S2)*1j
            
            x1 = y1 - x_offset
            x2 = y2 - x_offset
            x3 = y3 - x_offset
            
            results_html.append(ui.div(
                {"class": "result-section"},
                ui.h4("Paso 5: Cálculo de las raíces"),
                ui.p("Para D > 0, usamos el método algebraico:"),
                ui.div({"class": "math-equation"}, f"S₁ = ∛(R + √D) = ∛({R:.6f} + √{D:.6f}) = {S1:.6f}"),
                ui.div({"class": "math-equation"}, f"S₂ = ∛(R - √D) = ∛({R:.6f} - √{D:.6f}) = {S2:.6f}"),
                ui.p("Las raíces son:"),
                ui.div({"class": "math-equation"}, f"x₁ = {x1:.6f}"),
                ui.div({"class": "math-equation"}, f"x₂ = {x2.real:.6f} {'+' if x2.imag >= 0 else ''} {x2.imag:.6f}i"),
                ui.div({"class": "math-equation"}, f"x₃ = {x3.real:.6f} {'+' if x3.imag >= 0 else ''} {x3.imag:.6f}i")
            ))
            
        elif D == 0:
            # Caso 2: Todas reales, al menos dos iguales
            S = cube_root(R)
            
            y1 = 2*S
            y2 = -S
            y3 = -S
            
            x1 = y1 - x_offset
            x2 = y2 - x_offset
            x3 = y3 - x_offset
            
            results_html.append(ui.div(
                {"class": "result-section"},
                ui.h4("Paso 5: Cálculo de las raíces"),
                ui.p("Para D = 0, usamos el método algebraico simplificado:"),
                ui.div({"class": "math-equation"}, f"S = ∛R = ∛{R:.6f} = {S:.6f}"),
                ui.p("Las raíces son:"),
                ui.div({"class": "math-equation"}, f"x₁ = {x1:.6f}"),
                ui.div({"class": "math-equation"}, f"x₂ = x₃ = {x2:.6f}")
            ))
            
        else:
            # Caso 3: Tres raíces reales distintas (método trigonométrico)
            # Validar que el argumento de arccos esté en [-1, 1]
            arg = R/math.sqrt(-Q**3)
            if arg > 1:
                arg = 1
            elif arg < -1:
                arg = -1
            theta = math.acos(arg)
            
            y1 = 2*math.sqrt(-Q)*math.cos(theta/3)
            y2 = 2*math.sqrt(-Q)*math.cos((theta + 2*math.pi)/3)
            y3 = 2*math.sqrt(-Q)*math.cos((theta + 4*math.pi)/3)
            
            x1 = y1 - x_offset
            x2 = y2 - x_offset
            x3 = y3 - x_offset
            
            results_html.append(ui.div(
                {"class": "result-section"},
                ui.h4("Paso 5: Cálculo de las raíces"),
                ui.p("Para D < 0, usamos el método trigonométrico:"),
                ui.div({"class": "math-equation"}, f"θ = arccos(R/√(-Q³)) = arccos({R:.6f}/√(-{Q:.6f}³)) = {theta:.6f}"),
                ui.p("Las raíces son:"),
                ui.div({"class": "math-equation"}, f"x₁ = {x1:.6f}"),
                ui.div({"class": "math-equation"}, f"x₂ = {x2:.6f}"),
                ui.div({"class": "math-equation"}, f"x₃ = {x3:.6f}")
            ))
        
        return ui.div(*results_html)

# Crear la aplicación
app = App(app_ui, server)
</code></pre>
                    </div>
                </div>
                
                <div class="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl">
                    <h5 class="text-md font-semibold theme-text-primary mb-3">🚀 Prueba el Código</h5>
                    <p class="text-sm theme-text-secondary mb-4">
                        Copia este código completo y pégalo en Shiny Live para ver cómo funciona una aplicación web interactiva real.
                    </p>
                    <button onclick="window.open('https://shinylive.io/py/editor/', '_blank')" class="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                        <i class="fas fa-star mr-2"></i>Abrir en Shiny Live
                    </button>
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
            },
            {
                title: "Separadores en print()",
                description: "Practica con diferentes separadores en la función print().",
                template: "print(\"=== SEPARADORES EN PRINT() ===\")\n    \n    nombre = \"Juan\"\n    \n    # Separador por defecto (espacio)\n    print(\"Separador por defecto:\")\n    print(\"Hola\", nombre, \"!\")\n    print(\"Por defecto, print() usa un espacio como separador\")\n    \n    print(\"\n\" + \"-\" * 40)\n    \n    # Sin separador (cadena vacía)\n    print(\"Sin separador (sep=''):\")\n    print(\"Hola\", nombre, \"!\", sep=\"\")\n    print(\"Al usar sep='', las palabras se pegan sin espacio\")\n    \n    print(\"\n\" + \"-\" * 40)\n    \n    # Separador personalizado con asteriscos\n    print(\"Separador personalizado (sep='***'):\")\n    print(\"Hola\", nombre, \"!\", sep=\"***\")\n    print(\"Podemos usar cualquier cadena como separador\")\n    \n    print(\"\n\" + \"-\" * 40)\n    \n    # Más ejemplos de separadores creativos\n    print(\"Otros separadores creativos:\")\n    print(\"Python\", \"es\", \"genial\", sep=\" -> \" )\n    print(\"A\", \"B\", \"C\", sep=\" | \" )\n    print(\"1\", \"2\", \"3\", sep=\"-\")\n    print(\"Palabra1\", \"Palabra2\", \"Palabra3\", sep=\"___\")",
                solution: "print(\"=== SEPARADORES EN PRINT() ===\")\n    \n    nombre = \"Juan\"\n    \n    # Separador por defecto (espacio)\n    print(\"Separador por defecto:\")\n    print(\"Hola\", nombre, \"!\")\n    print(\"Por defecto, print() usa un espacio como separador\")\n    \n    print(\"\n\" + \"-\" * 40)\n    \n    # Sin separador (cadena vacía)\n    print(\"Sin separador (sep=''):\")\n    print(\"Hola\", nombre, \"!\", sep=\"\")\n    print(\"Al usar sep='', las palabras se pegan sin espacio\")\n    \n    print(\"\n\" + \"-\" * 40)\n    \n    # Separador personalizado con asteriscos\n    print(\"Separador personalizado (sep='***'):\")\n    print(\"Hola\", nombre, \"!\", sep=\"***\")\n    print(\"Podemos usar cualquier cadena como separador\")\n    \n    print(\"\n\" + \"-\" * 40)\n    \n    # Más ejemplos de separadores creativos\n    print(\"Otros separadores creativos:\")\n    print(\"Python\", \"es\", \"genial\", sep=\" -> \" )\n    print(\"A\", \"B\", \"C\", sep=\" | \" )\n    print(\"1\", \"2\", \"3\", sep=\"-\")\n    print(\"Palabra1\", \"Palabra2\", \"Palabra3\", sep=\"___\")"
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
            },
            {
                question: "¿Quién creó el lenguaje Python?",
                options: ["James Gosling", "Guido van Rossum", "Brendan Eich", "Dennis Ritchie"],
                correct: 1
            },
            {
                question: "¿En qué año fue lanzado por primera vez Python?",
                options: ["1989", "1991", "1995", "2000"],
                correct: 1
            },
            {
                question: "¿Cuál es la extensión de archivo para scripts de Python?",
                options: [".py", ".python", ".pt", ".pyt"],
                correct: 0
            },
            {
                question: "¿Python es sensible a mayúsculas y minúsculas?",
                options: ["Sí", "No", "Solo en funciones", "Solo en variables"],
                correct: 0
            },
            {
                question: "¿Cuál de estos NO es un tipo de dato básico en Python?",
                options: ["int", "float", "string", "char"],
                correct: 3
            },
            {
                question: "¿Qué significa que Python sea multiplataforma?",
                options: ["Solo funciona en Windows", "Funciona en diferentes sistemas operativos", "Solo funciona en Linux", "Necesita compilación específica"],
                correct: 1
            },
            {
                question: "¿Cuál es el paradigma principal de programación que soporta Python?",
                options: ["Solo orientado a objetos", "Solo funcional", "Multiparadigma", "Solo procedural"],
                correct: 2
            },
            {
                question: "¿Python utiliza llaves {} para delimitar bloques de código?",
                options: ["Sí, siempre", "No, usa indentación", "Solo en funciones", "Solo en clases"],
                correct: 1
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
        colabContent: `
            <div class="mb-6">
                <h4 class="text-lg font-semibold theme-text-primary mb-3">🐍 Intérprete de Python en Google Colab</h4>
                <p class="theme-text-secondary mb-4">Explora las características del intérprete de Python directamente en Colab.</p>
                
                <div class="mb-6">
                    <button onclick="window.open('https://colab.research.google.com/', '_blank')" class="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                        <i class="fab fa-google mr-2"></i>Abrir Google Colab
                    </button>
                </div>
                
                <div class="space-y-6">
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">🔍 Ejercicio 1: Información del intérprete</h5>
                        <p class="text-sm theme-text-secondary mb-3">Descubre detalles sobre el intérprete de Python:</p>
                        <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                            <code>import sys<br>
import platform<br>
<br>
print("🐍 INFORMACIÓN DEL INTÉRPRETE DE PYTHON")<br>
print("=" * 45)<br>
print(f"Versión de Python: {sys.version}")<br>
print(f"Versión corta: {sys.version_info}")<br>
print(f"Plataforma: {platform.platform()}")<br>
print(f"Arquitectura: {platform.architecture()}")<br>
print(f"Directorio ejecutable: {sys.executable}")<br>
print(f"Path de Python: {sys.path[:3]}...")  # Primeros 3 elementos<br>
<br>
# Información del sistema<br>
print(f"\\nSistema operativo: {platform.system()}")<br>
print(f"Nombre del equipo: {platform.node()}")<br>
print(f"Procesador: {platform.processor()}")</code>
                        </div>
                    </div>
                    
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">⚙️ Ejercicio 2: Configuración del intérprete</h5>
                        <p class="text-sm theme-text-secondary mb-3">Explora la configuración y módulos disponibles:</p>
                        <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                            <code># Módulos incorporados<br>
import sys<br>
<br>
print("📦 MÓDULOS INCORPORADOS")<br>
print("=" * 30)<br>
builtin_modules = sorted(sys.builtin_module_names)<br>
print(f"Total de módulos incorporados: {len(builtin_modules)}")<br>
print("\\nPrimeros 10 módulos:")<br>
for i, module in enumerate(builtin_modules[:10]):<br>
&nbsp;&nbsp;&nbsp;&nbsp;print(f"{i+1:2d}. {module}")<br>
<br>
# Configuración de codificación<br>
print(f"\\n🔤 CODIFICACIÓN")<br>
print("=" * 20)<br>
print(f"Codificación por defecto: {sys.getdefaultencoding()}")<br>
print(f"Codificación del sistema: {sys.getfilesystemencoding()}")<br>
<br>
# Límites del sistema<br>
print(f"\\n📊 LÍMITES DEL SISTEMA")<br>
print("=" * 25)<br>
print(f"Recursión máxima: {sys.getrecursionlimit()}")<br>
print(f"Tamaño máximo de int: {sys.maxsize}")</code>
                        </div>
                    </div>
                </div>
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
            },
            {
                question: "¿Qué comando se usa para salir del intérprete de Python?",
                options: ["exit", "quit()", "exit()", "Todas las anteriores"],
                correct: 3
            },
            {
                question: "¿Cómo se ejecuta un archivo Python desde la línea de comandos?",
                options: ["python archivo.py", "run archivo.py", "exec archivo.py", "start archivo.py"],
                correct: 0
            },
            {
                question: "¿Qué son los prompts >>> y ... en el intérprete?",
                options: ["Errores de sintaxis", "Indicadores de entrada primaria y secundaria", "Comandos especiales", "Decoradores"],
                correct: 1
            },
            {
                question: "¿Cómo se verifica la versión de Python instalada?",
                options: ["python --version", "python -V", "python --v", "Opciones A y B son correctas"],
                correct: 3
            },
            {
                question: "¿Qué variable contiene la ruta donde está instalado Python?",
                options: ["sys.path", "sys.executable", "os.path", "python.path"],
                correct: 1
            },
            {
                question: "¿Cómo se accede al historial de comandos en el intérprete?",
                options: ["Flechas arriba/abajo", "history()", "Ctrl+H", "No es posible"],
                correct: 0
            },
            {
                question: "¿Qué hace el comando help() en el intérprete?",
                options: ["Cierra Python", "Muestra ayuda interactiva", "Lista archivos", "Limpia pantalla"],
                correct: 1
            },
            {
                question: "¿Qué variable especial contiene el resultado de la última expresión en el intérprete?",
                options: ["_last", "_", "__result__", "result"],
                correct: 1
            },
            {
                question: "¿Cómo se ejecuta código Python de forma interactiva desde un archivo?",
                options: ["python -i archivo.py", "python -interactive archivo.py", "python archivo.py -i", "interactive archivo.py"],
                correct: 0
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
        colabContent: `
            <div class="mb-6">
                <h4 class="text-lg font-semibold theme-text-primary mb-3">🔀 Control de Flujo en Google Colab</h4>
                <p class="theme-text-secondary mb-4">Domina if, for, while y funciones con ejemplos prácticos y ejercicios interactivos.</p>
                
                <div class="mb-6">
                    <button onclick="window.open('https://colab.research.google.com/', '_blank')" class="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                        <i class="fab fa-google mr-2"></i>Abrir Google Colab
                    </button>
                </div>
                
                <div class="space-y-6">
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">🤔 Ejercicio 1: Condicionales avanzadas</h5>
                        <p class="text-sm theme-text-secondary mb-3">Practica con if, elif y else:</p>
                        <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                            <code># Clasificador de edades<br>
def clasificar_edad(edad):<br>
&nbsp;&nbsp;&nbsp;&nbsp;if edad < 0:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return "Edad inválida"<br>
&nbsp;&nbsp;&nbsp;&nbsp;elif edad < 13:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return "Niño"<br>
&nbsp;&nbsp;&nbsp;&nbsp;elif edad < 18:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return "Adolescente"<br>
&nbsp;&nbsp;&nbsp;&nbsp;elif edad < 65:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return "Adulto"<br>
&nbsp;&nbsp;&nbsp;&nbsp;else:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return "Adulto mayor"<br>
<br>
# Probar diferentes edades<br>
edades = [5, 15, 25, 70, -5]<br>
for edad in edades:<br>
&nbsp;&nbsp;&nbsp;&nbsp;print(f"Edad {edad}: {clasificar_edad(edad)}")<br>
<br>
# Calculadora de notas<br>
def calcular_nota(puntos):<br>
&nbsp;&nbsp;&nbsp;&nbsp;if puntos >= 90:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return "A"<br>
&nbsp;&nbsp;&nbsp;&nbsp;elif puntos >= 80:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return "B"<br>
&nbsp;&nbsp;&nbsp;&nbsp;elif puntos >= 70:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return "C"<br>
&nbsp;&nbsp;&nbsp;&nbsp;elif puntos >= 60:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return "D"<br>
&nbsp;&nbsp;&nbsp;&nbsp;else:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return "F"<br>
<br>
puntuaciones = [95, 87, 73, 65, 45]<br>
for puntos in puntuaciones:<br>
&nbsp;&nbsp;&nbsp;&nbsp;print(f"{puntos} puntos = Nota {calcular_nota(puntos)}")</code>
                        </div>
                    </div>
                    
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">🔄 Ejercicio 2: Bucles y patrones</h5>
                        <p class="text-sm theme-text-secondary mb-3">Crea patrones y secuencias con bucles:</p>
                        <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                            <code># Patrones con bucles<br>
print("=== Patrón de estrellas ===")<br>
for i in range(1, 6):<br>
&nbsp;&nbsp;&nbsp;&nbsp;print("*" * i)<br>
<br>
print("\\n=== Tabla de multiplicar ===")<br>
numero = 7<br>
for i in range(1, 11):<br>
&nbsp;&nbsp;&nbsp;&nbsp;print(f"{numero} x {i} = {numero * i}")<br>
<br>
print("\\n=== Números pares del 1 al 20 ===")<br>
pares = []<br>
for i in range(1, 21):<br>
&nbsp;&nbsp;&nbsp;&nbsp;if i % 2 == 0:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pares.append(i)<br>
print(f"Números pares: {pares}")<br>
<br>
print("\\n=== Countdown ===")<br>
for i in range(10, 0, -1):<br>
&nbsp;&nbsp;&nbsp;&nbsp;print(f"Faltan {i} segundos")<br>
print("¡Tiempo!")</code>
                        </div>
                    </div>
                    
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">🎯 Ejercicio 3: Funciones prácticas</h5>
                        <p class="text-sm theme-text-secondary mb-3">Crea funciones útiles para resolver problemas:</p>
                        <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                            <code># Funciones útiles<br>
def es_primo(n):<br>
&nbsp;&nbsp;&nbsp;&nbsp;"""Verifica si un número es primo"""<br>
&nbsp;&nbsp;&nbsp;&nbsp;if n < 2:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return False<br>
&nbsp;&nbsp;&nbsp;&nbsp;for i in range(2, int(n**0.5) + 1):<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if n % i == 0:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return False<br>
&nbsp;&nbsp;&nbsp;&nbsp;return True<br>
<br>
def factorial(n):<br>
&nbsp;&nbsp;&nbsp;&nbsp;"""Calcula el factorial de un número"""<br>
&nbsp;&nbsp;&nbsp;&nbsp;if n <= 1:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return 1<br>
&nbsp;&nbsp;&nbsp;&nbsp;return n * factorial(n - 1)<br>
<br>
def fibonacci(n):<br>
&nbsp;&nbsp;&nbsp;&nbsp;"""Genera los primeros n números de Fibonacci"""<br>
&nbsp;&nbsp;&nbsp;&nbsp;if n <= 0:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return []<br>
&nbsp;&nbsp;&nbsp;&nbsp;elif n == 1:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return [0]<br>
&nbsp;&nbsp;&nbsp;&nbsp;elif n == 2:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return [0, 1]<br>
&nbsp;&nbsp;&nbsp;&nbsp;<br>
&nbsp;&nbsp;&nbsp;&nbsp;fib = [0, 1]<br>
&nbsp;&nbsp;&nbsp;&nbsp;for i in range(2, n):<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fib.append(fib[i-1] + fib[i-2])<br>
&nbsp;&nbsp;&nbsp;&nbsp;return fib<br>
<br>
# Probar las funciones<br>
print("Números primos del 1 al 20:")<br>
primos = [i for i in range(1, 21) if es_primo(i)]<br>
print(primos)<br>
<br>
print(f"\\nFactorial de 5: {factorial(5)}")<br>
print(f"Primeros 10 números de Fibonacci: {fibonacci(10)}")</code>
                        </div>
                    </div>
                </div>
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
            },
            {
                question: "¿Cómo se define una función en Python?",
                options: ["function nombre():", "def nombre():", "func nombre():", "define nombre():"],
                correct: 1
            },
            {
                question: "¿Cuál es la diferencia entre while y for en Python?",
                options: ["No hay diferencia", "while es para condiciones, for para iteraciones", "for es más rápido", "while solo acepta números"],
                correct: 1
            },
            {
                question: "¿Qué hace la palabra clave 'break' en un bucle?",
                options: ["Pausa el bucle", "Termina el bucle completamente", "Salta a la siguiente iteración", "Imprime un mensaje"],
                correct: 1
            },
            {
                question: "¿Qué hace la palabra clave 'continue' en un bucle?",
                options: ["Termina el bucle", "Salta a la siguiente iteración", "Pausa por un segundo", "Reinicia el bucle"],
                correct: 1
            },
            {
                question: "¿Cómo se define un parámetro por defecto en una función?",
                options: ["def func(param default value):", "def func(param = value):", "def func(param: value):", "def func(param -> value):"],
                correct: 1
            },
            {
                question: "¿Qué devuelve una función que no tiene return explícito?",
                options: ["0", "''", "None", "Error"],
                correct: 2
            },
            {
                question: "¿Cuál es la sintaxis correcta para un if anidado?",
                options: ["if-then-else", "if: elif: else:", "if-elseif-else", "Todas son correctas"],
                correct: 1
            },
            {
                question: "¿Cómo se itera sobre los índices y valores de una lista?",
                options: ["for i, v in list:", "for i, v in enumerate(list):", "for i, v in index(list):", "for i, v in range(list):"],
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

            <!-- Grid 2x2 de videos de pandas/dataframes -->
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1.5rem;">

              <div>
                <div style="color:#93c5fd;font-weight:bold;font-size:0.85rem;margin-bottom:0.4rem;text-align:center;">Dataframes y pandas</div>
                <a href="https://www.youtube.com/watch?v=U_Yp9cA7hH4" target="_blank" rel="noopener noreferrer"
                   style="display:block;position:relative;padding-top:56.25%;width:100%;margin-bottom:0;border-radius:0.75rem;overflow:hidden;background:#000;cursor:pointer;text-decoration:none;">
                  <img src="https://img.youtube.com/vi/U_Yp9cA7hH4/hqdefault.jpg" alt="Dataframes y pandas"
                       style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;">
                  <div style="position:absolute;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.5rem;background:rgba(0,0,0,0.25);">
                    <div style="width:56px;height:56px;border-radius:50%;background:rgba(255,0,0,0.92);display:flex;align-items:center;justify-content:center;box-shadow:0 4px 24px rgba(0,0,0,0.6);">
                      <div style="width:0;height:0;border-top:13px solid transparent;border-bottom:13px solid transparent;border-left:22px solid white;margin-left:5px;"></div>
                    </div>
                    <div style="background:rgba(0,0,0,0.65);color:white;font-size:0.75rem;font-weight:bold;padding:4px 12px;border-radius:999px;">▶ Ver en YouTube</div>
                  </div>
                </a>
              </div>

              <div>
                <div style="color:#93c5fd;font-weight:bold;font-size:0.85rem;margin-bottom:0.4rem;text-align:center;">Operaciones entre filas o columnas</div>
                <a href="https://www.youtube.com/watch?v=A9X0-QJSV2Q" target="_blank" rel="noopener noreferrer"
                   style="display:block;position:relative;padding-top:56.25%;width:100%;margin-bottom:0;border-radius:0.75rem;overflow:hidden;background:#000;cursor:pointer;text-decoration:none;">
                  <img src="https://img.youtube.com/vi/A9X0-QJSV2Q/hqdefault.jpg" alt="Operaciones entre filas o columnas"
                       style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;">
                  <div style="position:absolute;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.5rem;background:rgba(0,0,0,0.25);">
                    <div style="width:56px;height:56px;border-radius:50%;background:rgba(255,0,0,0.92);display:flex;align-items:center;justify-content:center;box-shadow:0 4px 24px rgba(0,0,0,0.6);">
                      <div style="width:0;height:0;border-top:13px solid transparent;border-bottom:13px solid transparent;border-left:22px solid white;margin-left:5px;"></div>
                    </div>
                    <div style="background:rgba(0,0,0,0.65);color:white;font-size:0.75rem;font-weight:bold;padding:4px 12px;border-radius:999px;">▶ Ver en YouTube</div>
                  </div>
                </a>
              </div>

              <div>
                <div style="color:#93c5fd;font-weight:bold;font-size:0.85rem;margin-bottom:0.4rem;text-align:center;">Filtros lógicos para búsquedas en dataframes</div>
                <a href="https://www.youtube.com/watch?v=eT1nRAJGDNg" target="_blank" rel="noopener noreferrer"
                   style="display:block;position:relative;padding-top:56.25%;width:100%;margin-bottom:0;border-radius:0.75rem;overflow:hidden;background:#000;cursor:pointer;text-decoration:none;">
                  <img src="https://img.youtube.com/vi/eT1nRAJGDNg/hqdefault.jpg" alt="Filtros lógicos para búsquedas en dataframes"
                       style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;">
                  <div style="position:absolute;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.5rem;background:rgba(0,0,0,0.25);">
                    <div style="width:56px;height:56px;border-radius:50%;background:rgba(255,0,0,0.92);display:flex;align-items:center;justify-content:center;box-shadow:0 4px 24px rgba(0,0,0,0.6);">
                      <div style="width:0;height:0;border-top:13px solid transparent;border-bottom:13px solid transparent;border-left:22px solid white;margin-left:5px;"></div>
                    </div>
                    <div style="background:rgba(0,0,0,0.65);color:white;font-size:0.75rem;font-weight:bold;padding:4px 12px;border-radius:999px;">▶ Ver en YouTube</div>
                  </div>
                </a>
              </div>

              <div>
                <div style="color:#93c5fd;font-weight:bold;font-size:0.85rem;margin-bottom:0.4rem;text-align:center;">Filtrado con desigualdades en dataframes</div>
                <a href="https://www.youtube.com/watch?v=gzN7VTDyWPw" target="_blank" rel="noopener noreferrer"
                   style="display:block;position:relative;padding-top:56.25%;width:100%;margin-bottom:0;border-radius:0.75rem;overflow:hidden;background:#000;cursor:pointer;text-decoration:none;">
                  <img src="https://img.youtube.com/vi/gzN7VTDyWPw/hqdefault.jpg" alt="Filtrado con desigualdades en dataframes"
                       style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;">
                  <div style="position:absolute;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.5rem;background:rgba(0,0,0,0.25);">
                    <div style="width:56px;height:56px;border-radius:50%;background:rgba(255,0,0,0.92);display:flex;align-items:center;justify-content:center;box-shadow:0 4px 24px rgba(0,0,0,0.6);">
                      <div style="width:0;height:0;border-top:13px solid transparent;border-bottom:13px solid transparent;border-left:22px solid white;margin-left:5px;"></div>
                    </div>
                    <div style="background:rgba(0,0,0,0.65);color:white;font-size:0.75rem;font-weight:bold;padding:4px 12px;border-radius:999px;">▶ Ver en YouTube</div>
                  </div>
                </a>
              </div>

            </div>
            <!-- Fin grid de videos -->

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
        colabContent: `
            <div class="mb-6">
                <h4 class="text-lg font-semibold theme-text-primary mb-3">📊 Estructuras de Datos en Google Colab</h4>
                <p class="theme-text-secondary mb-4">Domina listas, tuplas, diccionarios y conjuntos con ejercicios prácticos inspirados en casos reales.</p>
                
                <div class="mb-6">
                    <button onclick="window.open('https://colab.research.google.com/', '_blank')" class="px-6 py-3 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                        <i class="fab fa-google mr-2"></i>Abrir Google Colab
                    </button>
                </div>
                
                <div class="space-y-6">
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">📝 Ejercicio 1: Sistema de gestión de estudiantes</h5>
                        <p class="text-sm theme-text-secondary mb-3">Crea un sistema para gestionar información de estudiantes:</p>
                        <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                            <code># Sistema de gestión de estudiantes<br>
estudiantes = []<br>
<br>
# Agregar estudiantes<br>
estudiantes.append({<br>
&nbsp;&nbsp;&nbsp;&nbsp;"nombre": "Ana García",<br>
&nbsp;&nbsp;&nbsp;&nbsp;"edad": 20,<br>
&nbsp;&nbsp;&nbsp;&nbsp;"carrera": "Ingeniería",<br>
&nbsp;&nbsp;&nbsp;&nbsp;"calificaciones": [85, 92, 78, 88, 90]<br>
})<br>
<br>
estudiantes.append({<br>
&nbsp;&nbsp;&nbsp;&nbsp;"nombre": "Carlos López",<br>
&nbsp;&nbsp;&nbsp;&nbsp;"edad": 19,<br>
&nbsp;&nbsp;&nbsp;&nbsp;"carrera": "Medicina",<br>
&nbsp;&nbsp;&nbsp;&nbsp;"calificaciones": [92, 87, 95, 89, 91]<br>
})<br>
<br>
# Funciones de análisis<br>
def calcular_promedio(calificaciones):<br>
&nbsp;&nbsp;&nbsp;&nbsp;return sum(calificaciones) / len(calificaciones)<br>
<br>
def obtener_mejor_estudiante(estudiantes):<br>
&nbsp;&nbsp;&nbsp;&nbsp;mejor = None<br>
&nbsp;&nbsp;&nbsp;&nbsp;mejor_promedio = 0<br>
&nbsp;&nbsp;&nbsp;&nbsp;for estudiante in estudiantes:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;promedio = calcular_promedio(estudiante["calificaciones"])<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if promedio > mejor_promedio:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mejor_promedio = promedio<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mejor = estudiante<br>
&nbsp;&nbsp;&nbsp;&nbsp;return mejor, mejor_promedio<br>
<br>
# Mostrar resultados<br>
for estudiante in estudiantes:<br>
&nbsp;&nbsp;&nbsp;&nbsp;promedio = calcular_promedio(estudiante["calificaciones"])<br>
&nbsp;&nbsp;&nbsp;&nbsp;print(f"Estudiante: {estudiante['nombre']}")<br>
&nbsp;&nbsp;&nbsp;&nbsp;print(f"Promedio: {promedio:.2f}")<br>
&nbsp;&nbsp;&nbsp;&nbsp;print("-" * 30)<br>
<br>
mejor, promedio = obtener_mejor_estudiante(estudiantes)<br>
print(f"\\nMejor estudiante: {mejor['nombre']} ({promedio:.2f})")</code>
                        </div>
                    </div>
                    
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">🛒 Ejercicio 2: Carrito de compras</h5>
                        <p class="text-sm theme-text-secondary mb-3">Simula un carrito de compras con productos:</p>
                        <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                            <code># Carrito de compras<br>
productos = {<br>
&nbsp;&nbsp;&nbsp;&nbsp;"laptop": {"precio": 1200, "stock": 5},<br>
&nbsp;&nbsp;&nbsp;&nbsp;"mouse": {"precio": 25, "stock": 20},<br>
&nbsp;&nbsp;&nbsp;&nbsp;"teclado": {"precio": 80, "stock": 15},<br>
&nbsp;&nbsp;&nbsp;&nbsp;"monitor": {"precio": 300, "stock": 8},<br>
&nbsp;&nbsp;&nbsp;&nbsp;"auriculares": {"precio": 150, "stock": 12}<br>
}<br>
<br>
carrito = []<br>
<br>
def agregar_al_carrito(producto, cantidad):<br>
&nbsp;&nbsp;&nbsp;&nbsp;if producto in productos:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if productos[producto]["stock"] >= cantidad:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;carrito.append({<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"producto": producto,<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"cantidad": cantidad,<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"precio_unitario": productos[producto]["precio"]<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;})<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;productos[producto]["stock"] -= cantidad<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(f"✅ {cantidad} {producto}(s) agregado(s) al carrito")<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(f"❌ Stock insuficiente para {producto}")<br>
&nbsp;&nbsp;&nbsp;&nbsp;else:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(f"❌ Producto {producto} no encontrado")<br>
<br>
def calcular_total():<br>
&nbsp;&nbsp;&nbsp;&nbsp;total = sum(item["cantidad"] * item["precio_unitario"] for item in carrito)<br>
&nbsp;&nbsp;&nbsp;&nbsp;return total<br>
<br>
def mostrar_carrito():<br>
&nbsp;&nbsp;&nbsp;&nbsp;print("\\n🛒 CARRITO DE COMPRAS")<br>
&nbsp;&nbsp;&nbsp;&nbsp;print("=" * 40)<br>
&nbsp;&nbsp;&nbsp;&nbsp;for item in carrito:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;subtotal = item["cantidad"] * item["precio_unitario"]<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(f"{item['producto']} x{item['cantidad']} = \${subtotal}")<br>
&nbsp;&nbsp;&nbsp;&nbsp;print(f"\\nTOTAL: \${calcular_total()}")<br>
<br>
# Simular compras<br>
agregar_al_carrito("laptop", 1)<br>
agregar_al_carrito("mouse", 2)<br>
agregar_al_carrito("teclado", 1)<br>
agregar_al_carrito("laptop", 10)  # Debe fallar por stock<br>
<br>
mostrar_carrito()</code>
                        </div>
                    </div>
                    
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">📈 Ejercicio 3: Análisis de datos con conjuntos</h5>
                        <p class="text-sm theme-text-secondary mb-3">Analiza datos usando conjuntos y operaciones:</p>
                        <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                            <code># Análisis de preferencias de usuarios<br>
usuarios_python = {"Ana", "Carlos", "Luis", "María", "Pedro", "Sofia"}<br>
usuarios_javascript = {"Carlos", "Elena", "Luis", "Roberto", "Sofia", "Diego"}<br>
usuarios_java = {"Ana", "Elena", "Miguel", "Pedro", "Roberto", "Carlos"}<br>
<br>
print("👥 ANÁLISIS DE PREFERENCIAS DE LENGUAJES")<br>
print("=" * 50)<br>
<br>
# Usuarios que programan en Python<br>
print(f"Python: {len(usuarios_python)} usuarios")<br>
print(f"Lista: {sorted(usuarios_python)}")<br>
<br>
# Usuarios que programan en JavaScript<br>
print(f"\\nJavaScript: {len(usuarios_javascript)} usuarios")<br>
print(f"Lista: {sorted(usuarios_javascript)}")<br>
<br>
# Usuarios que programan en Java<br>
print(f"\\nJava: {len(usuarios_java)} usuarios")<br>
print(f"Lista: {sorted(usuarios_java)}")<br>
<br>
# Operaciones con conjuntos<br>
print("\\n🔍 ANÁLISIS CRUZADO")<br>
print("=" * 30)<br>
<br>
# Usuarios que programan en Python Y JavaScript<br>
python_js = usuarios_python & usuarios_javascript<br>
print(f"Python ∩ JavaScript: {sorted(python_js)}")<br>
<br>
# Usuarios que programan en los 3 lenguajes<br>
todos_lenguajes = usuarios_python & usuarios_javascript & usuarios_java<br>
print(f"Los 3 lenguajes: {sorted(todos_lenguajes)}")<br>
<br>
# Usuarios que solo programan en Python<br>
solo_python = usuarios_python - usuarios_javascript - usuarios_java<br>
print(f"Solo Python: {sorted(solo_python)}")<br>
<br>
# Total de usuarios únicos<br>
todos_usuarios = usuarios_python | usuarios_javascript | usuarios_java<br>
print(f"\\nTotal usuarios únicos: {len(todos_usuarios)}")<br>
print(f"Lista completa: {sorted(todos_usuarios)}")</code>
                        </div>
                    </div>
                </div>
            </div>
        `,
        shinyContent: `
            <div class="mb-6">
                <h4 class="text-lg font-semibold theme-text-primary mb-4">📊 Estructuras de Datos en Shiny for Python</h4>
                <p class="theme-text-secondary mb-4">
                    Las estructuras de datos de Python son fundamentales para crear aplicaciones interactivas con Shiny. 
                    Aprende cómo usar listas, diccionarios y DataFrames para construir dashboards dinámicos.
                </p>
                
                <div class="grid md:grid-cols-2 gap-6 mb-6">
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-3">🗃️ Datos para Shiny</h5>
                        <ul class="text-sm theme-text-secondary space-y-2">
                            <li><strong>Listas:</strong> Para widgets de selección múltiple</li>
                            <li><strong>Diccionarios:</strong> Para mapeo de datos</li>
                            <li><strong>DataFrames:</strong> Para tablas y gráficos</li>
                            <li><strong>Sets:</strong> Para filtros únicos</li>
                        </ul>
                    </div>
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-3">⚡ Casos Prácticos</h5>
                        <ul class="text-sm theme-text-secondary space-y-2">
                            <li>Dashboard de ventas con diccionarios</li>
                            <li>Filtros dinámicos con listas</li>
                            <li>Tablas interactivas con DataFrames</li>
                            <li>Visualizaciones con datos estructurados</li>
                        </ul>
                    </div>
                </div>
                
                <div class="p-4 theme-bg-tertiary rounded-lg mb-6">
                    <h5 class="font-semibold theme-text-primary mb-3">🚀 Ejemplo: Dashboard con Datos</h5>
                    <div class="bg-black text-green-400 p-3 rounded font-mono text-xs mb-3">
                        <code>
# Ejemplo de datos para Shiny<br>
datos_ventas = {<br>
&nbsp;&nbsp;"productos": ["Laptop", "Mouse", "Teclado"],<br>
&nbsp;&nbsp;"ventas": [1200, 25, 75],<br>
&nbsp;&nbsp;"regiones": ["Norte", "Sur", "Centro"]<br>
}<br><br>
# En Shiny, estos datos se convierten en<br>
# gráficos y tablas interactivas
                        </code>
                    </div>
                </div>
                
                <div class="text-center">
                    <button onclick="window.open('https://shinylive.io/py/examples/', '_blank')" class="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                        <i class="fas fa-external-link-alt mr-2"></i>Ver Ejemplos con Datos
                    </button>
                    <p class="text-sm theme-text-secondary mt-2">Explora dashboards con estructuras de datos</p>
                </div>
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
            },
            {
                question: "¿Cuál es la sintaxis correcta para crear un conjunto (set)?",
                options: ["set = []", "set = {}", "set = {1, 2, 3}", "set = (1, 2, 3)"],
                correct: 2
            },
            {
                question: "¿Qué método se usa para eliminar un elemento de una lista por valor?",
                options: ["delete()", "remove()", "erase()", "pop()"],
                correct: 1
            },
            {
                question: "¿Cómo se agrega un elemento a un conjunto?",
                options: ["set.append()", "set.add()", "set.insert()", "set.push()"],
                correct: 1
            },
            {
                question: "¿Cuál es la principal característica de los conjuntos (sets)?",
                options: ["Permiten duplicados", "No permiten duplicados", "Son ordenados", "Son inmutables"],
                correct: 1
            },
            {
                question: "¿Cómo se accede al último elemento de una lista?",
                options: ["lista[last]", "lista[-1]", "lista[end]", "lista.last()"],
                correct: 1
            },
            {
                question: "¿Qué devuelve dict.keys()?",
                options: ["Una lista", "Un conjunto", "Una vista de las claves", "Un string"],
                correct: 2
            },
            {
                question: "¿Cómo se concatenan dos listas?",
                options: ["lista1 + lista2", "lista1.concat(lista2)", "lista1.join(lista2)", "lista1.merge(lista2)"],
                correct: 0
            },
            {
                question: "¿Cuál es la forma correcta de crear un diccionario vacío?",
                options: ["dict = []", "dict = {}", "dict = ()", "dict = set()"],
                correct: 1
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
        colabContent: `
            <div class="mb-6">
                <h4 class="text-lg font-semibold theme-text-primary mb-3">🧮 Práctica de Fundamentos en Google Colab</h4>
                <p class="theme-text-secondary mb-4">Domina los conceptos básicos de Python: números, strings y listas con ejercicios prácticos.</p>
                
                <div class="mb-6">
                    <button onclick="window.open('https://colab.research.google.com/', '_blank')" class="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                        <i class="fab fa-google mr-2"></i>Abrir Google Colab
                    </button>
                </div>
                
                <div class="space-y-6">
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">🔢 Ejercicio 1: Operaciones matemáticas</h5>
                        <p class="text-sm theme-text-secondary mb-3">Explora todos los operadores matemáticos:</p>
                        <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                            <code># Operadores matemáticos en Python<br>
print("=== Operadores Básicos ===")<br>
print(f"Suma: 25 + 15 = {25 + 15}")<br>
print(f"Resta: 50 - 30 = {50 - 30}")<br>
print(f"Multiplicación: 7 * 8 = {7 * 8}")<br>
print(f"División: 84 / 4 = {84 / 4}")<br>
print(f"División entera: 17 // 5 = {17 // 5}")<br>
print(f"Módulo: 17 % 5 = {17 % 5}")<br>
print(f"Potencia: 3 ** 4 = {3 ** 4}")<br><br>
# Orden de operaciones<br>
resultado = 2 + 3 * 4<br>
print(f"2 + 3 * 4 = {resultado}")<br>
resultado_con_parentesis = (2 + 3) * 4<br>
print(f"(2 + 3) * 4 = {resultado_con_parentesis}")</code>
                        </div>
                    </div>
                    
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">📝 Ejercicio 2: Manipulación de strings</h5>
                        <p class="text-sm theme-text-secondary mb-3">Aprende a trabajar con cadenas de texto:</p>
                        <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                            <code># Trabajando con strings<br>
nombre = "Python"<br>
apellido = "Programming"<br>
<br>
# Concatenación<br>
nombre_completo = nombre + " " + apellido<br>
print(f"Nombre completo: {nombre_completo}")<br>
<br>
# Repetición<br>
print("¡" * 5)<br>
<br>
# Métodos de string<br>
texto = "Hola mundo python"<br>
print(f"Mayúsculas: {texto.upper()}")<br>
print(f"Minúsculas: {texto.lower()}")<br>
print(f"Título: {texto.title()}")<br>
print(f"Longitud: {len(texto)}")<br>
print(f"Reemplazar: {texto.replace('mundo', 'universo')}")</code>
                        </div>
                    </div>
                    
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">📋 Ejercicio 3: Listas básicas</h5>
                        <p class="text-sm theme-text-secondary mb-3">Descubre el poder de las listas:</p>
                        <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                            <code># Trabajando con listas<br>
# Crear listas<br>
numeros = [1, 2, 3, 4, 5]<br>
frutas = ["manzana", "banana", "naranja"]<br>
mixta = [1, "Python", 3.14, True]<br>
<br>
print(f"Números: {numeros}")<br>
print(f"Frutas: {frutas}")<br>
print(f"Lista mixta: {mixta}")<br>
<br>
# Acceder a elementos<br>
print(f"Primer número: {numeros[0]}")<br>
print(f"Última fruta: {frutas[-1]}")<br>
<br>
# Slicing<br>
print(f"Primeros 3 números: {numeros[:3]}")<br>
print(f"Últimos 2 números: {numeros[-2:]}")<br>
<br>
# Agregar elementos<br>
frutas.append("uva")<br>
print(f"Frutas después de agregar: {frutas}")</code>
                        </div>
                    </div>
                </div>
            </div>
        `,
        shinyContent: `
            <div class="mb-6">
                <h4 class="text-lg font-semibold theme-text-primary mb-4">🧮 Fundamentos Python en Shiny</h4>
                <p class="theme-text-secondary mb-4">
                    Los conceptos básicos de Python (números, strings y listas) son la base para crear aplicaciones 
                    web interactivas con Shiny. Aprende cómo estos elementos se transforman en interfaces de usuario dinámicas.
                </p>
                
                <div class="grid md:grid-cols-2 gap-6 mb-6">
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-3">🔢 De Variables a Widgets</h5>
                        <ul class="text-sm theme-text-secondary space-y-2">
                            <li><strong>Números:</strong> Sliders y inputs numéricos</li>
                            <li><strong>Strings:</strong> Inputs de texto y etiquetas</li>
                            <li><strong>Listas:</strong> Selectores y checkboxes</li>
                            <li><strong>Booleanos:</strong> Switches y botones</li>
                        </ul>
                    </div>
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-3">🎯 Ejemplos Prácticos</h5>
                        <ul class="text-sm theme-text-secondary space-y-2">
                            <li>Calculadora interactiva</li>
                            <li>Generador de texto dinámico</li>
                            <li>Selector de opciones múltiples</li>
                            <li>Contador de elementos</li>
                        </ul>
                    </div>
                </div>
                
                <div class="p-4 theme-bg-tertiary rounded-lg mb-6">
                    <h5 class="font-semibold theme-text-primary mb-3">💡 Ejemplo: Calculadora Shiny</h5>
                    <div class="bg-black text-green-400 p-3 rounded font-mono text-xs mb-3">
                        <code>
# Variables Python básicas en Shiny<br>
numero1 = 15  # → Input numérico<br>
numero2 = 30  # → Slider<br>
operacion = "+"  # → Selector dropdown<br><br>
# Resultado interactivo<br>
resultado = numero1 + numero2<br>
# Se actualiza automáticamente en la interfaz
                        </code>
                    </div>
                </div>
                
                <div class="text-center">
                    <button onclick="window.open('https://shinylive.io/py/examples/', '_blank')" class="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                        <i class="fas fa-external-link-alt mr-2"></i>Ver Apps Básicas
                    </button>
                    <p class="text-sm theme-text-secondary mt-2">Descubre aplicaciones simples pero poderosas</p>
                </div>
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
            },
            {
                question: "¿Cuál es el operador para la división entera en Python?",
                options: ["/", "//", "%", "div"],
                correct: 1
            },
            {
                question: "¿Qué resultado devuelve el operador % en Python?",
                options: ["División", "Multiplicación", "Módulo (resto)", "Potencia"],
                correct: 2
            },
            {
                question: "¿Cómo se define una cadena de texto multilínea en Python?",
                options: ["'texto'", "\"texto\"", "'''texto'''", "Todas las anteriores son correctas para multilínea"],
                correct: 2
            },
            {
                question: "¿Cuál es el método correcto para agregar un elemento al final de una lista?",
                options: ["lista.add()", "lista.append()", "lista.insert()", "lista.push()"],
                correct: 1
            },
            {
                question: "¿Qué devuelve len([1, 2, 3, 4])?",
                options: ["3", "4", "5", "Error"],
                correct: 1
            },
            {
                question: "¿Cómo se verifica el tipo de una variable en Python?",
                options: ["typeof(variable)", "type(variable)", "variable.type()", "gettype(variable)"],
                correct: 1
            },
            {
                question: "¿Cuál es la forma correcta de crear una lista vacía?",
                options: ["lista = []", "lista = list()", "lista = new List()", "Opciones A y B son correctas"],
                correct: 3
            },
            {
                question: "¿Qué operador se usa para verificar si un elemento está en una lista?",
                options: ["is", "in", "contains", "has"],
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
            },
            {
                question: "¿Cómo se importa un módulo con un alias?",
                options: ["import math as m", "import math alias m", "from math import as m", "import m from math"],
                correct: 0
            },
            {
                question: "¿Qué variable contiene el nombre del módulo actual?",
                options: ["__module__", "__name__", "__file__", "__self__"],
                correct: 1
            },
            {
                question: "¿Cómo se importan todas las funciones de un módulo?",
                options: ["import *", "from módulo import *", "import módulo.*", "from * import módulo"],
                correct: 1
            },
            {
                question: "¿Dónde busca Python los módulos para importar?",
                options: ["En sys.path", "En os.path", "En PYTHONPATH solamente", "Solo en el directorio actual"],
                correct: 0
            },
            {
                question: "¿Cuál es la diferencia entre un módulo y un paquete?",
                options: ["No hay diferencia", "Un paquete contiene múltiples módulos", "Un módulo es más grande", "Un paquete es solo para librerías"],
                correct: 1
            },
            {
                question: "¿Qué archivo indica que un directorio es un paquete Python?",
                options: ["__init__.py", "__package__.py", "package.py", "__main__.py"],
                correct: 0
            },
            {
                question: "¿Cómo se ejecuta un módulo como script?",
                options: ["python -m módulo", "python módulo.py", "run módulo", "Opciones A y B son correctas"],
                correct: 3
            },
            {
                question: "¿Qué sucede cuando Python importa un módulo por primera vez?",
                options: ["Solo se lee", "Se ejecuta todo el código del módulo", "Solo se cargan las funciones", "Se compila únicamente"],
                correct: 1
            },
            {
                question: "¿Cómo se evita que cierto código se ejecute al importar un módulo?",
                options: ["Usando if __main__:", "Usando if __name__ == '__main__':", "Usando if import:", "No es posible"],
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
            },
            {
                question: "¿Cuál es la excepción más común al acceder a un índice que no existe?",
                options: ["ValueError", "IndexError", "KeyError", "AttributeError"],
                correct: 1
            },
            {
                question: "¿Cómo se capturan múltiples tipos de excepciones?",
                options: ["except ValueError, TypeError:", "except (ValueError, TypeError):", "except ValueError or TypeError:", "except ValueError and TypeError:"],
                correct: 1
            },
            {
                question: "¿Qué palabra clave se usa para lanzar una excepción manualmente?",
                options: ["throw", "raise", "error", "exception"],
                correct: 1
            },
            {
                question: "¿Cuál es la excepción que se lanza al dividir por cero?",
                options: ["ValueError", "ArithmeticError", "ZeroDivisionError", "MathError"],
                correct: 2
            },
            {
                question: "¿Qué hace la cláusula else en un bloque try-except?",
                options: ["Se ejecuta si hay error", "Se ejecuta si no hay error", "Se ejecuta siempre", "No existe else en try-except"],
                correct: 1
            },
            {
                question: "¿Cuál es la excepción base de todas las excepciones en Python?",
                options: ["Error", "Exception", "BaseException", "RuntimeError"],
                correct: 2
            },
            {
                question: "¿Cómo se accede al mensaje de error de una excepción?",
                options: ["error.message", "str(error)", "error.text", "error.details"],
                correct: 1
            },
            {
                question: "¿Cuál es la excepción que se lanza al intentar acceder a una clave inexistente en un diccionario?",
                options: ["ValueError", "IndexError", "KeyError", "AttributeError"],
                correct: 2
            },
            {
                question: "¿Cómo se crea una excepción personalizada en Python?",
                options: ["Heredando de Error", "Heredando de Exception", "Heredando de BaseException", "Usando def exception"],
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
            },
            {
                question: "¿Cuál es el método especial que se ejecuta al crear un objeto?",
                options: ["__init__", "__new__", "__create__", "__start__"],
                correct: 0
            },
            {
                question: "¿Cómo se define herencia en Python?",
                options: ["class Hijo extends Padre:", "class Hijo(Padre):", "class Hijo inherits Padre:", "class Hijo -> Padre:"],
                correct: 1
            },
            {
                question: "¿Qué es el encapsulamiento en programación orientada a objetos?",
                options: ["Ocultar detalles internos", "Crear múltiples objetos", "Heredar de otras clases", "Usar métodos estáticos"],
                correct: 0
            },
            {
                question: "¿Cómo se define un atributo privado en Python?",
                options: ["private atributo", "_atributo", "__atributo", "private __atributo"],
                correct: 2
            },
            {
                question: "¿Qué método se llama cuando se usa print() en un objeto?",
                options: ["__print__", "__str__", "__display__", "__show__"],
                correct: 1
            },
            {
                question: "¿Cuál es la diferencia entre método de clase y método de instancia?",
                options: ["No hay diferencia", "Los métodos de clase usan @classmethod", "Los métodos de instancia son más rápidos", "Los métodos de clase no pueden acceder a self"],
                correct: 1
            },
            {
                question: "¿Qué permite el polimorfismo en Python?",
                options: ["Crear objetos múltiples", "Usar el mismo método en diferentes clases", "Heredar de múltiples clases", "Encapsular datos"],
                correct: 1
            },
            {
                question: "¿Qué método se usa para comparar si dos objetos son iguales?",
                options: ["__equal__", "__eq__", "__compare__", "__same__"],
                correct: 1
            },
            {
                question: "¿Python soporta herencia múltiple?",
                options: ["No", "Sí", "Solo con interfaces", "Solo en Python 3"],
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
            },
            {
                question: "¿Qué función del módulo os usarías para listar archivos?",
                options: ["os.list()", "os.listdir()", "os.files()", "os.dir()"],
                correct: 1
            },
            {
                question: "¿Cómo se obtiene el directorio actual de trabajo?",
                options: ["os.getcwd()", "os.pwd()", "os.currentdir()", "sys.path[0]"],
                correct: 0
            },
            {
                question: "¿Qué clase de collections es útil para contar elementos?",
                options: ["Counter", "OrderedDict", "defaultdict", "deque"],
                correct: 0
            },
            {
                question: "¿Cómo se genera un número aleatorio entre 0 y 1?",
                options: ["random.random()", "random.uniform(0,1)", "random.float()", "Opciones A y B son correctas"],
                correct: 3
            },
            {
                question: "¿Qué módulo se usa para expresiones regulares?",
                options: ["regex", "re", "regexp", "pattern"],
                correct: 1
            },
            {
                question: "¿Cómo se crea una fecha de hoy con datetime?",
                options: ["datetime.now()", "datetime.today()", "datetime.date.today()", "Todas las anteriores"],
                correct: 2
            },
            {
                question: "¿Qué función de sys contiene los argumentos de línea de comandos?",
                options: ["sys.args", "sys.argv", "sys.arguments", "sys.params"],
                correct: 1
            },
            {
                question: "¿Cómo se formatea un número decimal con 2 decimales usando format?",
                options: ["'{:.2f}'.format(num)", "'{:2f}'.format(num)", "'{:f2}'.format(num)", "'{f:.2}'.format(num)"],
                correct: 0
            },
            {
                question: "¿Qué módulo permite crear números complejos y trabajar con matemática avanzada?",
                options: ["math", "cmath", "numbers", "complex"],
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
            },
            {
                question: "¿Qué niveles de logging existen en Python (de menor a mayor severidad)?",
                options: ["DEBUG, INFO, WARNING, ERROR, CRITICAL", "LOW, MEDIUM, HIGH, CRITICAL", "TRACE, DEBUG, INFO, WARN, ERROR", "ALL, INFO, WARNING, ERROR, NONE"],
                correct: 0
            },
            {
                question: "¿Cómo se configura el formato de los mensajes de logging?",
                options: ["logging.format()", "logging.basicConfig(format=...)", "logging.setFormat()", "logging.config()"],
                correct: 1
            },
            {
                question: "¿Qué módulo se usa para trabajar con datos JSON en Python?",
                options: ["json", "simplejson", "jsonlib", "data"],
                correct: 0
            },
            {
                question: "¿Cómo se convierte un diccionario Python a JSON?",
                options: ["json.dumps()", "json.loads()", "json.encode()", "json.parse()"],
                correct: 0
            },
            {
                question: "¿Qué módulo permite hacer peticiones HTTP en Python?",
                options: ["http", "requests (externa)", "urllib", "Opciones B y C son correctas"],
                correct: 3
            },
            {
                question: "¿Para qué sirve el módulo itertools?",
                options: ["Trabajar con archivos", "Crear iteradores eficientes", "Manejar fechas", "Procesar JSON"],
                correct: 1
            },
            {
                question: "¿Qué función de itertools combina múltiples iterables?",
                options: ["itertools.combine()", "itertools.chain()", "itertools.merge()", "itertools.join()"],
                correct: 1
            },
            {
                question: "¿Cómo se convierte una cadena JSON a un objeto Python?",
                options: ["json.loads()", "json.dumps()", "json.parse()", "json.decode()"],
                correct: 0
            },
            {
                question: "¿Qué módulo se usa para trabajar con archivos CSV?",
                options: ["csv", "file", "data", "table"],
                correct: 0
            }
        ]
    },

    venv: {
        title: "12. Entornos Virtuales",
        description: "Gestión de paquetes",
        video: "https://www.youtube.com/embed/TNtrAvNNxTY",
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
            },
            {
                question: "¿Cómo se crea un entorno virtual con venv?",
                options: ["python -m venv nombre", "venv create nombre", "python venv nombre", "create venv nombre"],
                correct: 0
            },
            {
                question: "¿Cómo se activa un entorno virtual en Linux/Mac?",
                options: ["activate nombre", "source nombre/bin/activate", "nombre/activate", "./nombre/activate"],
                correct: 1
            },
            {
                question: "¿Cómo se desactiva un entorno virtual?",
                options: ["exit", "deactivate", "stop", "quit"],
                correct: 1
            },
            {
                question: "¿Qué archivo contiene las dependencias de un proyecto?",
                options: ["dependencies.txt", "packages.txt", "requirements.txt", "libs.txt"],
                correct: 2
            },
            {
                question: "¿Cómo se instalan las dependencias desde requirements.txt?",
                options: ["pip install requirements.txt", "pip install -r requirements.txt", "pip -r requirements.txt", "pip requirements.txt"],
                correct: 1
            },
            {
                question: "¿Cómo se genera el archivo requirements.txt?",
                options: ["pip freeze > requirements.txt", "pip list > requirements.txt", "pip save requirements.txt", "pip export requirements.txt"],
                correct: 0
            },
            {
                question: "¿Dónde se almacenan los paquetes en un entorno virtual?",
                options: ["En /usr/local/lib", "En el directorio del entorno virtual", "En ~/.python", "En el directorio del proyecto"],
                correct: 1
            },
            {
                question: "¿Cómo se actualiza pip en un entorno virtual?",
                options: ["pip update", "pip upgrade", "pip install --upgrade pip", "update pip"],
                correct: 2
            },
            {
                question: "¿Cuál es la diferencia entre virtualenv y venv?",
                options: ["No hay diferencia", "venv está incluido en Python 3.3+", "virtualenv es más rápido", "venv solo funciona en Linux"],
                correct: 1
            }
        ]
    },

    deepseek: {
        title: "13. DeepSeek IA",
        description: "Asistente IA gratuito",
        video: "https://www.youtube.com/embed/Fuzzpcog7tQ",
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
                <div class="theme-bg-tertiary rounded-xl p-8 text-center">
                    <div class="mb-6">
                        <i class="fas fa-robot text-6xl text-blue-500 mb-4"></i>
                        <h4 class="text-2xl font-bold theme-text-primary mb-2">Accede a DeepSeek IA</h4>
                        <p class="theme-text-secondary max-w-lg mx-auto">
                            Para una mejor experiencia, usa DeepSeek directamente en su plataforma oficial. 
                            Obtendrás respuestas más rápidas y acceso a todas sus funciones.
                        </p>
                    </div>
                    
                    <button onclick="window.open('https://chat.deepseek.com/', '_blank')" class="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                        <i class="fas fa-external-link-alt mr-2"></i>Abrir DeepSeek IA
                    </button>
                    
                    <p class="text-sm theme-text-secondary mt-4">
                        <i class="fas fa-info-circle mr-1"></i>
                        Se abrirá en una nueva pestaña del navegador
                    </p>
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
            },
            {
                question: "¿Cuál es la principal ventaja de DeepSeek IA para estudiantes?",
                options: ["Es muy caro", "Es completamente gratuito", "Solo funciona en inglés", "Requiere instalación"],
                correct: 1
            },
            {
                question: "¿Qué tipo de asistencia puede proporcionar DeepSeek con el código Python?",
                options: ["Solo sintaxis básica", "Explicaciones, correcciones y optimizaciones", "Solo errores simples", "Solo comentarios"],
                correct: 1
            },
            {
                question: "¿DeepSeek puede ayudar con proyectos completos de Python?",
                options: ["No, solo líneas individuales", "Sí, puede asistir en proyectos completos", "Solo con funciones simples", "Solo con variables"],
                correct: 1
            },
            {
                question: "¿Cómo puede DeepSeek ayudar en la depuración de código?",
                options: ["No puede ayudar con errores", "Identifica errores y sugiere soluciones", "Solo muestra errores de sintaxis", "Solo funciona con print()"],
                correct: 1
            },
            {
                question: "¿Qué ventaja tiene usar IA para aprender Python?",
                options: ["Reemplaza completamente a los profesores", "Proporciona asistencia personalizada 24/7", "Solo funciona para expertos", "Es más lento que los libros"],
                correct: 1
            },
            {
                question: "¿DeepSeek puede explicar conceptos complejos de Python?",
                options: ["Solo conceptos básicos", "Sí, desde básicos hasta avanzados", "Solo sintaxis", "Solo errores"],
                correct: 1
            },
            {
                question: "¿Cómo puede DeepSeek ayudar con las mejores prácticas de Python?",
                options: ["No conoce mejores prácticas", "Sugiere mejoras y optimizaciones", "Solo corrige errores", "Solo da ejemplos básicos"],
                correct: 1
            },
            {
                question: "¿Qué tipo de preguntas puedes hacer a DeepSeek sobre Python?",
                options: ["Solo preguntas muy básicas", "Cualquier pregunta relacionada con Python", "Solo sobre errores", "Solo sobre sintaxis"],
                correct: 1
            },
            {
                question: "¿DeepSeek puede ayudar a generar código Python desde descripciones?",
                options: ["No puede generar código", "Sí, puede convertir descripciones en código", "Solo copia código existente", "Solo modifica código existente"],
                correct: 1
            }
        ]
    },

    chatgptea: {
        title: "14. ChatGPT IA",
        description: "IA norteamericana avanzada",
        video: "",
        additionalVideos: [],
        content: `
            <h2 class="text-2xl font-bold theme-text-primary mb-4">ChatGPT IA - Asistente IA Norteamericano</h2>
            <p class="theme-text-secondary mb-6">ChatGPT IA es un asistente de inteligencia artificial norteamericano desarrollado por OpenAI que puede ayudarte con programación en Python, resolver dudas, explicar código y mucho más.</p>
            
            <div class="grid md:grid-cols-2 gap-6 mb-8">
                <div class="p-6 theme-bg-tertiary rounded-xl">
                    <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-code text-white text-xl"></i>
                    </div>
                    <h3 class="text-lg font-semibold theme-text-primary mb-2 text-center">Programación Avanzada</h3>
                    <p class="text-sm theme-text-secondary text-center">Ayuda experta en Python, debugging y arquitectura de software</p>
                </div>
                
                <div class="p-6 theme-bg-tertiary rounded-xl">
                    <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-brain text-white text-xl"></i>
                    </div>
                    <h3 class="text-lg font-semibold theme-text-primary mb-2 text-center">IA Conversacional</h3>
                    <p class="text-sm theme-text-secondary text-center">Conversaciones naturales y explicaciones detalladas</p>
                </div>
                
                <div class="p-6 theme-bg-tertiary rounded-xl">
                    <div class="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-project-diagram text-white text-xl"></i>
                    </div>
                    <h3 class="text-lg font-semibold theme-text-primary mb-2 text-center">Proyectos Complejos</h3>
                    <p class="text-sm theme-text-secondary text-center">Asistencia en proyectos de gran escala y arquitectura</p>
                </div>
                
                <div class="p-6 theme-bg-tertiary rounded-xl">
                    <div class="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-graduation-cap text-white text-xl"></i>
                    </div>
                    <h3 class="text-lg font-semibold theme-text-primary mb-2 text-center">Aprendizaje Personalizado</h3>
                    <p class="text-sm theme-text-secondary text-center">Adaptado a tu nivel y estilo de aprendizaje</p>
                </div>
            </div>
            
            <div class="mb-6">
                <h3 class="text-xl font-semibold theme-text-primary mb-4">ChatGPT IA - Acceso Directo</h3>
                <div class="theme-bg-tertiary rounded-xl p-8 text-center">
                    <div class="mb-6">
                        <i class="fas fa-brain text-6xl text-green-500 mb-4"></i>
                        <h4 class="text-2xl font-bold theme-text-primary mb-2">Accede a ChatGPT IA</h4>
                        <p class="theme-text-secondary max-w-lg mx-auto">
                            Para una mejor experiencia, usa ChatGPT directamente en su plataforma oficial. 
                            Obtendrás respuestas más rápidas, historial de chats y acceso a todas sus funciones.
                        </p>
                    </div>
                    
                    <button onclick="window.open('https://chatgpt.com/', '_blank')" class="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                        <i class="fas fa-external-link-alt mr-2"></i>Abrir ChatGPT
                    </button>
                    
                    <p class="text-sm theme-text-secondary mt-4">
                        <i class="fas fa-info-circle mr-1"></i>
                        Se abrirá en una nueva pestaña del navegador
                    </p>
                </div>
            </div>
            
            <div class="mb-6">
                <h3 class="text-xl font-semibold theme-text-primary mb-4">🚀 Acceso Rápido a ChatGPT</h3>
                <div class="space-y-4">
                    <div class="p-6 theme-bg-tertiary rounded-xl border-2 border-green-500">
                        <div class="text-center">
                            <h4 class="text-lg font-semibold theme-text-primary mb-3">¡Accede a ChatGPT ahora!</h4>
                            <p class="theme-text-secondary mb-4">Haz clic para abrir ChatGPT en una nueva pestaña y comenzar a programar con IA.</p>
                            <button onclick="window.open('https://chatgpt.com/', '_blank')" class="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                                <i class="fas fa-external-link-alt mr-2"></i>Abrir ChatGPT
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="p-4 theme-bg-tertiary rounded-lg">
                <h4 class="font-semibold theme-text-primary mb-2">💡 Consejos para usar ChatGPT IA:</h4>
                <ul class="text-sm theme-text-secondary space-y-1 ml-4">
                    <li>• Formula preguntas específicas sobre Python y programación</li>
                    <li>• Comparte tu código completo para obtener ayuda contextual</li>
                    <li>• Pregunta sobre patrones de diseño y mejores prácticas</li>
                    <li>• Solicita revisión de código y sugerencias de optimización</li>
                    <li>• Pide explicaciones paso a paso de algoritmos complejos</li>
                    <li>• Explora ideas para proyectos y aplicaciones</li>
                </ul>
            </div>
        `,
        exercises: [
            {
                title: "Consulta con ChatGPT IA",
                description: "Usa ChatGPT IA para obtener ayuda con un problema de programación avanzado",
                template: "# Ejemplo de consulta para ChatGPT IA:\n# 'Ayúdame a optimizar este algoritmo de ordenamiento y explica la complejidad temporal'\n\n# Tu código para revisar aquí",
                solution: "# ChatGPT IA puede ayudarte a:\n# - Analizar complejidad algorítmica\n# - Sugerir optimizaciones\n# - Explicar patrones de diseño\n# - Revisar arquitectura de código"
            }
        ],
        quiz: [
            {
                question: "¿Cuál es la principal característica de ChatGPT IA?",
                options: ["Solo genera código", "IA conversacional avanzada para programación", "Solo corrige errores", "Solo traduce lenguajes"],
                correct: 1
            },
            {
                question: "¿ChatGPT EA puede ayudar con proyectos complejos?",
                options: ["No, solo código básico", "Sí, incluyendo arquitectura y diseño", "Solo sintaxis", "Solo documentación"],
                correct: 1
            },
            {
                question: "¿Qué tipo de asistencia proporciona ChatGPT EA en Python?",
                options: ["Solo corrección de errores", "Programación, debugging, optimización y diseño", "Solo explicaciones básicas", "Solo instalación"],
                correct: 1
            },
            {
                question: "¿ChatGPT EA puede adaptarse a diferentes niveles de programación?",
                options: ["No, solo para expertos", "Sí, desde principiante hasta avanzado", "Solo nivel intermedio", "Solo profesionales"],
                correct: 1
            },
            {
                question: "¿Qué ventaja tiene usar ChatGPT EA para aprender Python?",
                options: ["Es más lento que otros métodos", "Proporciona explicaciones personalizadas e interactivas", "Solo funciona en inglés", "Requiere pago obligatorio"],
                correct: 1
            }
        ]
    },

    "google-colab": {
        title: "15. Google Colab",
        description: "Notebook en la nube",
        video: "https://www.youtube.com/embed/Iq6k1hlz4NQ",
        additionalVideos: [
            { title: "Google Colab Tutorial 1", url: "https://www.youtube.com/embed/5pf0_bpNbkw" },
            { title: "Google Colab Tutorial 2", url: "https://www.youtube.com/embed/agj3AxNPDWU" }
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
            },
            {
                question: "¿Qué bibliotecas vienen preinstaladas en Google Colab?",
                options: ["Solo NumPy", "NumPy, Pandas, Matplotlib y muchas más", "Solo bibliotecas básicas", "Ninguna"],
                correct: 1
            },
            {
                question: "¿Dónde se ejecuta el código en Google Colab?",
                options: ["En tu computadora local", "En los servidores de Google", "En tu navegador", "En tu teléfono"],
                correct: 1
            },
            {
                question: "¿Necesitas una cuenta de Google para usar Colab?",
                options: ["No", "Sí", "Solo para proyectos grandes", "Solo para guardar archivos"],
                correct: 1
            },
            {
                question: "¿Qué tipo de archivos puedes crear en Google Colab?",
                options: ["Solo .py", "Solo .txt", "Notebooks .ipynb", "Solo .html"],
                correct: 2
            },
            {
                question: "¿Cómo compartes un notebook de Colab con otros?",
                options: ["No se puede compartir", "Mediante un enlace compartible", "Solo por email", "Solo descargando el archivo"],
                correct: 1
            },
            {
                question: "¿Google Colab ofrece GPU gratuita?",
                options: ["No", "Sí, con limitaciones", "Solo para universidades", "Solo para empresas"],
                correct: 1
            },
            {
                question: "¿Cómo instalas nuevas bibliotecas en Colab?",
                options: ["pip install en una celda", "No se pueden instalar", "Solo desde configuración", "Descargando manualmente"],
                correct: 0
            },
            {
                question: "¿Los archivos en Colab se guardan permanentemente?",
                options: ["Sí, siempre", "No, se eliminan después de inactividad", "Solo los importantes", "Solo si los descargas"],
                correct: 1
            }
        ]
    },

    cursor: {
        title: "16. Cursor IDE",
        description: "Editor con IA integrada",
        video: "https://www.youtube.com/embed/9ofd5bgtGHw",
        additionalVideos: [
            { title: "Cursor Tutorial 1", url: "https://www.youtube.com/embed/V20yEr1doa8" },
            { title: "Cursor Tutorial 2", url: "https://www.youtube.com/embed/bMmVZFd7HA4" },
            { title: "Cursor Tutorial 3", url: "https://www.youtube.com/embed/_t-CExoj8lM" }
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
            },
            {
                question: "¿Qué tecla usas para activar el autocompletado IA en Cursor?",
                options: ["Enter", "Tab", "Space", "Ctrl"],
                correct: 1
            },
            {
                question: "¿Qué combinación de teclas abre el chat IA en Cursor?",
                options: ["Ctrl+C", "Cmd+L (Ctrl+L)", "Alt+A", "Shift+I"],
                correct: 1
            },
            {
                question: "¿Cursor está basado en qué editor?",
                options: ["Atom", "VS Code", "Sublime Text", "IntelliJ"],
                correct: 1
            },
            {
                question: "¿Qué comando usas para editar código con IA en Cursor?",
                options: ["Cmd+E", "Cmd+K (Ctrl+K)", "Cmd+I", "Cmd+A"],
                correct: 1
            },
            {
                question: "¿Cursor requiere una suscripción para usar todas sus funciones?",
                options: ["Sí, siempre", "No, es completamente gratis", "Tiene versión gratuita con limitaciones", "Solo para estudiantes"],
                correct: 2
            },
            {
                question: "¿Qué tipo de archivos puede manejar Cursor?",
                options: ["Solo Python", "Solo JavaScript", "Cualquier lenguaje de programación", "Solo archivos de texto"],
                correct: 2
            },
            {
                question: "¿Cómo instalas Cursor en tu sistema?",
                options: ["npm install cursor", "Desde cursor.com", "pip install cursor", "apt install cursor"],
                correct: 1
            },
            {
                question: "¿La IA de Cursor puede entender el contexto de todo tu proyecto?",
                options: ["No, solo líneas individuales", "Sí, puede analizar todo el proyecto", "Solo archivos abiertos", "Solo comentarios"],
                correct: 1
            }
        ]
    },

    zai: {
        title: "17. Z IA",
        description: "IA China Avanzada",
        video: "https://www.youtube.com/embed/7qyoYDiP-8A",
        additionalVideos: [
            { title: "Z IA Tutorial 1", url: "https://www.youtube.com/embed/83Z0NyOGAKg" },
            { title: "Z IA Tutorial 2", url: "https://www.youtube.com/embed/QnSbauHZDGE" },
            { title: "Z IA Tutorial 3", url: "https://www.youtube.com/embed/1Q7Z9pUYksE" }
        ],
        content: `
            <h2 class="text-2xl font-bold theme-text-primary mb-4">Z IA - Asistente de Inteligencia Artificial Avanzada</h2>
            <p class="theme-text-secondary mb-6">Z IA es una plataforma de inteligencia artificial china de última generación que ofrece capacidades avanzadas de conversación, programación y análisis. Ideal para estudiantes y desarrolladores que buscan asistencia inteligente en sus proyectos.</p>
            
            <div class="grid md:grid-cols-2 gap-6 mb-8">
                <div class="p-6 theme-bg-tertiary rounded-xl">
                    <div class="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-code text-white text-xl"></i>
                    </div>
                    <h3 class="text-lg font-semibold theme-text-primary mb-2 text-center">Programación Avanzada</h3>
                    <p class="text-sm theme-text-secondary text-center">Asistencia especializada en múltiples lenguajes de programación</p>
                </div>
                
                <div class="p-6 theme-bg-tertiary rounded-xl">
                    <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-brain text-white text-xl"></i>
                    </div>
                    <h3 class="text-lg font-semibold theme-text-primary mb-2 text-center">IA Conversacional</h3>
                    <p class="text-sm theme-text-secondary text-center">Conversaciones naturales y contextuales avanzadas</p>
                </div>
                
                <div class="p-6 theme-bg-tertiary rounded-xl">
                    <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-chart-line text-white text-xl"></i>
                    </div>
                    <h3 class="text-lg font-semibold theme-text-primary mb-2 text-center">Análisis de Datos</h3>
                    <p class="text-sm theme-text-secondary text-center">Procesamiento y análisis inteligente de información</p>
                </div>
                
                <div class="p-6 theme-bg-tertiary rounded-xl">
                    <div class="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-language text-white text-xl"></i>
                    </div>
                    <h3 class="text-lg font-semibold theme-text-primary mb-2 text-center">Multiidioma</h3>
                    <p class="text-sm theme-text-secondary text-center">Soporte para múltiples idiomas incluyendo español</p>
                </div>
            </div>
            

            
            <div class="mb-6">
                <h3 class="text-xl font-semibold theme-text-primary mb-4">Z IA - Acceso Directo</h3>
                <div class="theme-bg-tertiary rounded-xl p-8 text-center">
                    <div class="mb-6">
                        <i class="fas fa-brain text-6xl text-purple-600 mb-4"></i>
                        <h4 class="text-2xl font-bold theme-text-primary mb-2">Accede a Z IA</h4>
                        <p class="theme-text-secondary max-w-lg mx-auto">
                            Interactúa directamente con Z IA en su plataforma oficial para obtener asistencia avanzada en tus proyectos.
                        </p>
                    </div>
                    
                    <button onclick="window.open('https://chat.z.ai/', '_blank')" class="px-8 py-4 bg-gradient-to-r from-red-500 to-purple-600 text-white rounded-xl font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                        <i class="fas fa-rocket mr-2"></i>Abrir Z IA
                    </button>
                    
                    <p class="text-sm theme-text-secondary mt-4">
                        <i class="fas fa-info-circle mr-1"></i>
                        Se abrirá en una nueva pestaña del navegador
                    </p>
                </div>
            </div>

            <div class="p-4 theme-bg-tertiary rounded-lg">
                <h4 class="font-semibold theme-text-primary mb-2">💡 Consejos para usar Z IA:</h4>
                <ul class="text-sm theme-text-secondary space-y-1 ml-4">
                    <li>• Sé específico en tus preguntas sobre programación en Python</li>
                    <li>• Comparte el código completo para obtener mejores sugerencias</li>
                    <li>• Pregunta sobre mejores prácticas y optimización de código</li>
                    <li>• Solicita explicaciones paso a paso de algoritmos complejos</li>
                    <li>• Pide ejemplos prácticos y casos de uso reales</li>
                    <li>• Usa Z IA para revisar y mejorar tu código existente</li>
                </ul>
            </div>
        `,
        practice: {
            description: "Usa Z IA para obtener ayuda con un concepto de Python que no entiendas",
            template: "# Ejemplo de pregunta para Z IA:\\n# '¿Puedes explicarme cómo funcionan los decoradores en Python con ejemplos prácticos?'\\n\\n# Tu código de práctica aquí",
            solution: "# Z IA puede ayudarte con:\\n# - Explicaciones detalladas de conceptos\\n# - Ejemplos de código prácticos\\n# - Depuración y optimización\\n# - Mejores prácticas de programación"
        },
        quiz: [
            {
                question: "¿Para qué puedes usar Z IA en tu aprendizaje de Python?",
                options: ["Solo para chatear casualmente", "Ayuda con código, explicaciones y depuración", "Solo para traducciones", "Solo para matemáticas"],
                correct: 1
            },
            {
                question: "¿Cuál es una ventaja de Z IA para programadores?",
                options: ["Solo funciona en chino", "Asistencia avanzada en múltiples lenguajes", "Solo para principiantes", "No entiende código"],
                correct: 1
            },
            {
                question: "¿Qué tipo de asistencia puede proporcionar Z IA con el código Python?",
                options: ["Solo comentarios simples", "Análisis, mejoras y explicaciones detalladas", "Solo corrección de sintaxis", "Solo traducciones"],
                correct: 1
            },
            {
                question: "¿Z IA puede ayudar con proyectos completos de Python?",
                options: ["No, solo líneas individuales", "Sí, puede analizar y sugerir mejoras en proyectos", "Solo con funciones básicas", "Solo con variables"],
                correct: 1
            },
            {
                question: "¿Cómo puede Z IA ayudar en el aprendizaje de algoritmos?",
                options: ["No puede ayudar", "Explicaciones paso a paso y ejemplos prácticos", "Solo definiciones", "Solo pseudocódigo"],
                correct: 1
            },
            {
                question: "¿Qué idiomas soporta Z IA?",
                options: ["Solo chino", "Múltiples idiomas incluyendo español", "Solo inglés", "Solo idiomas asiáticos"],
                correct: 1
            },
            {
                question: "¿Z IA puede explicar conceptos complejos de Python?",
                options: ["No, solo conceptos básicos", "Sí, con explicaciones detalladas y ejemplos", "Solo con documentación", "Solo con enlaces"],
                correct: 1
            },
            {
                question: "¿Cómo puede Z IA ayudar con las mejores prácticas de Python?",
                options: ["No puede ayudar", "Sugerencias y explicaciones de código limpio", "Solo corrección básica", "Solo comentarios"],
                correct: 1
            },
            {
                question: "¿Qué tipo de análisis puede hacer Z IA en tu código?",
                options: ["Solo errores de sintaxis", "Análisis profundo, optimización y mejoras", "Solo formato", "Solo comentarios"],
                correct: 1
            },
            {
                question: "¿Z IA puede ayudar a generar código Python desde descripciones?",
                options: ["No, solo revisa código", "Sí, puede generar código funcional", "Solo pseudocódigo", "Solo comentarios"],
                correct: 1
            }
        ]
    },

    chatgptea: {
        title: "14. ChatGPT IA",
        description: "Asistente IA Norteamericano",
        video: "https://www.youtube.com/embed/dKKe1PL2Stk",
        additionalVideos: [],
        content: `
            <h2 class="text-2xl font-bold theme-text-primary mb-4">ChatGPT IA - Tu Asistente de Programación Avanzado</h2>
            <p class="theme-text-secondary mb-6">ChatGPT IA es un asistente de inteligencia artificial norteamericano que puede ayudarte con programación en Python, resolver dudas complejas, explicar código, generar aplicaciones y mucho más.</p>
            
            <div class="grid md:grid-cols-2 gap-6 mb-8">
                <div class="p-6 theme-bg-tertiary rounded-xl">
                    <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-code text-white text-xl"></i>
                    </div>
                    <h3 class="text-lg font-semibold theme-text-primary text-center mb-2">Programación Avanzada</h3>
                    <p class="text-sm theme-text-secondary text-center">Asistencia completa en desarrollo Python</p>
                </div>
                <div class="p-6 theme-bg-tertiary rounded-xl">
                    <div class="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-robot text-white text-xl"></i>
                    </div>
                    <h3 class="text-lg font-semibold theme-text-primary text-center mb-2">IA Conversacional</h3>
                    <p class="text-sm theme-text-secondary text-center">Explicaciones detalladas y personalizadas</p>
                </div>
                <div class="p-6 theme-bg-tertiary rounded-xl">
                    <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-project-diagram text-white text-xl"></i>
                    </div>
                    <h3 class="text-lg font-semibold theme-text-primary text-center mb-2">Proyectos Completos</h3>
                    <p class="text-sm theme-text-secondary text-center">Desarrollo de aplicaciones desde cero</p>
                </div>
                <div class="p-6 theme-bg-tertiary rounded-xl">
                    <div class="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-graduation-cap text-white text-xl"></i>
                    </div>
                    <h3 class="text-lg font-semibold theme-text-primary text-center mb-2">Aprendizaje Guiado</h3>
                    <p class="text-sm theme-text-secondary text-center">Aprende nuevos conceptos paso a paso</p>
                </div>
            </div>
            

            
            <div class="mb-6">
                <h3 class="text-xl font-semibold theme-text-primary mb-4">Enlace Directo a la Aplicación</h3>
                <div class="p-4 theme-bg-tertiary rounded-lg text-center">
                    <a href="https://chatgpt.com/" target="_blank" class="inline-flex items-center px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-semibold">
                        <i class="fas fa-external-link-alt mr-2"></i>
                        Abrir ChatGPT IA en Nueva Pestaña
                    </a>
                </div>
            </div>
            
            <div class="p-4 theme-bg-tertiary rounded-lg">
                <h4 class="font-semibold theme-text-primary mb-2">💡 Consejos para usar ChatGPT IA:</h4>
                <ul class="text-sm theme-text-secondary space-y-1 ml-4">
                    <li>• Describe detalladamente lo que quieres lograr en Python</li>
                    <li>• Comparte tu código para obtener mejoras específicas</li>
                    <li>• Solicita explicaciones paso a paso de algoritmos complejos</li>
                    <li>• Pide ayuda con proyectos completos y arquitectura de aplicaciones</li>
                    <li>• Aprovecha su capacidad para generar código desde descripciones</li>
                    <li>• Pregunta sobre mejores prácticas y patrones de diseño</li>
                </ul>
            </div>
        `,
        exercises: [
            {
                title: "Consulta Avanzada a la IA",
                description: "Usa ChatGPT IA para obtener ayuda con un proyecto completo de Python",
                template: "# Ejemplo de consulta avanzada para ChatGPT IA:\n# 'Ayúdame a crear una aplicación web en Python con Flask que maneje un CRUD de usuarios'\n\n# Tu código de proyecto aquí",
                solution: "# Ejemplo de respuesta que podrías obtener:\nfrom flask import Flask, request, jsonify\nfrom flask_sqlalchemy import SQLAlchemy\n\napp = Flask(__name__)\napp.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'\ndb = SQLAlchemy(app)\n\nclass User(db.Model):\n    id = db.Column(db.Integer, primary_key=True)\n    name = db.Column(db.String(100), nullable=False)\n    email = db.Column(db.String(100), unique=True, nullable=False)\n\n# Rutas CRUD aquí..."
            }
        ],
        quiz: [
            {
                question: "¿Cuál es la principal fortaleza de ChatGPT IA para programadores Python?",
                options: ["Solo corrección de sintaxis", "Asistencia completa en desarrollo avanzado", "Solo documentación básica", "Solo ejemplos simples"],
                correct: 1
            },
            {
                question: "¿ChatGPT IA puede ayudar con arquitectura de aplicaciones Python?",
                options: ["No, solo código simple", "Sí, puede ayudar con diseño completo", "Solo con funciones básicas", "Solo con variables"],
                correct: 1
            },
            {
                question: "¿Qué tipo de proyectos puede ayudar a desarrollar ChatGPT IA?",
                options: ["Solo scripts básicos", "Aplicaciones web, APIs, automatización y más", "Solo calculadoras", "Solo juegos simples"],
                correct: 1
            },
            {
                question: "¿ChatGPT IA puede explicar patrones de diseño en Python?",
                options: ["No conoce patrones", "Sí, explica patrones con ejemplos prácticos", "Solo teoría básica", "Solo nombres de patrones"],
                correct: 1
            },
            {
                question: "¿Cómo puede ChatGPT IA ayudar con el aprendizaje de Python?",
                options: ["Solo respuestas cortas", "Explicaciones detalladas y ejercicios personalizados", "Solo enlaces externos", "Solo definiciones"],
                correct: 1
            },
            {
                question: "¿ChatGPT IA puede ayudar con debugging avanzado?",
                options: ["Solo errores de sintaxis", "Sí, análisis completo y soluciones", "Solo mensajes de error", "Solo sugerencias básicas"],
                correct: 1
            },
            {
                question: "¿Qué ventaja tiene ChatGPT IA para proyectos profesionales?",
                options: ["Es gratuito siempre", "Conocimiento actualizado y mejores prácticas", "Solo para estudiantes", "Solo código básico"],
                correct: 1
            },
            {
                question: "¿ChatGPT IA puede generar código Python desde descripciones en español?",
                options: ["Solo entiende inglés", "Sí, multiidioma incluido español", "Solo código simple", "Solo comentarios"],
                correct: 1
            },
            {
                question: "¿Cómo puede ChatGPT IA mejorar tu código Python existente?",
                options: ["No puede mejorar código", "Optimización, refactoring y mejores prácticas", "Solo formato", "Solo comentarios"],
                correct: 1
            },
            {
                question: "¿ChatGPT IA puede ayudar con librerías específicas de Python como Django o Pandas?",
                options: ["Solo librerías básicas", "Sí, conoce amplia gama de librerías", "Solo sintaxis básica", "Solo instalación"],
                correct: 1
            }
        ]
    },

    antigravity: {
        title: "18. Antigravity Google",
        description: "Asistente de codificación avanzado de Google",
        video: "https://www.youtube.com/embed/p36n_wHEShs",
        additionalVideos: [
            { title: "Intro a Google Antigravity", url: "https://www.youtube.com/embed/liqfwPC4FmA" },
            { title: "Tutorial Avanzado", url: "https://www.youtube.com/embed/fwh85bYmMU8" },
            { title: "Trucos y Consejos", url: "https://www.youtube.com/embed/MS5hEUFpW-s" }
        ],
        content: `
            <h2 class="text-2xl font-bold theme-text-primary mb-4">Antigravity Google - Asistente de Codificación Superior</h2>
            <p class="theme-text-secondary mb-6">Antigravity es la última innovación de Google para desarrolladores. Combina el poder de Gemini Ultra con herramientas agenticas avanzadas para escribir, depurar y desplegar código de manera autónoma y eficiente.</p>
            
            <div class="grid md:grid-cols-2 gap-6 mb-8">
                <div class="p-6 theme-bg-tertiary rounded-xl">
                    <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-rocket text-white text-xl"></i>
                    </div>
                    <h3 class="text-lg font-semibold theme-text-primary mb-2 text-center">Codificación Agentica</h3>
                    <p class="text-sm theme-text-secondary text-center">Permite que Antigravity tome el control para realizar tareas complejas de principio a fin</p>
                </div>
                
                <div class="p-6 theme-bg-tertiary rounded-xl">
                    <div class="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fab fa-google text-white text-xl"></i>
                    </div>
                    <h3 class="text-lg font-semibold theme-text-primary mb-2 text-center">Gemini Ultra</h3>
                    <p class="text-sm theme-text-secondary text-center">Impulsado por el modelo más capaz de Google para razonamiento y codificación</p>
                </div>
            </div>
            
            <div class="mb-8">
                <h3 class="text-xl font-semibold theme-text-primary mb-4">🛠️ Guía de Instalación</h3>
                <div class="theme-bg-tertiary rounded-xl p-6">
                    <div class="grid md:grid-cols-3 gap-6">
                        <!-- Windows -->
                        <div class="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                            <div class="flex items-center mb-3">
                                <i class="fab fa-windows text-blue-500 text-2xl mr-2"></i>
                                <h4 class="font-bold theme-text-primary">Windows</h4>
                            </div>
                            <ol class="text-sm theme-text-secondary space-y-2 list-decimal list-inside">
                                <li>Descarga el instalador desde el sitio oficial.</li>
                                <li>Ejecuta <code>antigravity_setup.exe</code>.</li>
                                <li>Sigue las instrucciones en pantalla.</li>
                                <li>Abre tu terminal y escribe <code>antigravity login</code>.</li>
                            </ol>
                        </div>
                        
                        <!-- Mac -->
                        <div class="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                            <div class="flex items-center mb-3">
                                <i class="fab fa-apple text-gray-500 text-2xl mr-2"></i>
                                <h4 class="font-bold theme-text-primary">macOS</h4>
                            </div>
                            <ol class="text-sm theme-text-secondary space-y-2 list-decimal list-inside">
                                <li>Abre tu terminal.</li>
                                <li>Ejecuta: <code>brew install google-antigravity</code></li>
                                <li>O descarga el .dmg oficial.</li>
                                <li>Autentícate con <code>antigravity login</code>.</li>
                            </ol>
                        </div>
                        
                        <!-- Linux -->
                        <div class="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                            <div class="flex items-center mb-3">
                                <i class="fab fa-linux text-yellow-500 text-2xl mr-2"></i>
                                <h4 class="font-bold theme-text-primary">Linux</h4>
                            </div>
                            <ol class="text-sm theme-text-secondary space-y-2 list-decimal list-inside">
                                <li>Usa curl: <code>curl -sL https://antigravity.google/install | bash</code></li>
                                <li>O usa apt: <code>sudo apt install antigravity</code></li>
                                <li>Verifica con <code>antigravity --version</code>.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="mb-6">
                <h3 class="text-xl font-semibold theme-text-primary mb-4">Antigravity - Acceso Directo</h3>
                <div class="theme-bg-tertiary rounded-xl p-8 text-center">
                    <div class="mb-6">
                        <i class="fas fa-rocket text-6xl text-blue-600 mb-4"></i>
                        <h4 class="text-2xl font-bold theme-text-primary mb-2">Accede a Antigravity</h4>
                        <p class="theme-text-secondary max-w-lg mx-auto">
                            Explora la documentación completa y las herramientas web de Antigravity Google.
                        </p>
                    </div>
                    
                    <button onclick="window.open('https://gemini.google.com/', '_blank')" class="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                        <i class="fas fa-external-link-alt mr-2"></i>Abrir Antigravity
                    </button>
                </div>
            </div>
            
            <div class="p-4 theme-bg-tertiary rounded-lg">
                <h4 class="font-semibold theme-text-primary mb-2">💡 Consejos para usar Antigravity:</h4>
                <ul class="text-sm theme-text-secondary space-y-1 ml-4">
                    <li>• Usa el modo "Agentic" para tareas de múltiples pasos</li>
                    <li>• Conecta Antigravity a tu repositorio para contexto completo</li>
                    <li>• Pide explicaciones de arquitectura, no solo de código</li>
                    <li>• Utiliza los comandos de voz si están disponibles en tu versión</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "¿Qué es Antigravity Google?",
                options: ["Un juego de física", "Un asistente de codificación avanzado", "Un nuevo navegador", "Un sistema operativo"],
                correct: 1
            },
            {
                question: "¿Qué modelo impulsa a Antigravity?",
                options: ["GPT-4", "Llama 3", "Gemini Ultra", "Claude 3"],
                correct: 2
            },
            {
                question: "¿Cómo se instala Antigravity en macOS?",
                options: ["Solo compilando desde fuente", "Brew install o .dmg", "No está disponible en Mac", "Solo vía App Store"],
                correct: 1
            },
            {
                question: "¿Qué característica distingue a Antigravity?",
                options: ["Capacidades agenticas autónomas", "Solo funciona offline", "Es de pago solamente", "Solo soporta Python"],
                correct: 0
            },
            {
                question: "¿Cómo verificas la instalación en Linux?",
                options: ["linux check", "antigravity --version", "google status", "ver install"],
                correct: 1
            }
        ]
    },

    vm: {
        title: "19. Maquinas Virtuales",
        description: "Aprende a virtualizar sistemas operativos",
        video: "https://www.youtube.com/embed/mzo2OjcSxag",
        additionalVideos: [
            { title: "Instalación VirtualBox", url: "https://www.youtube.com/embed/uiFZUfmFAus" },
            { title: "Crear Máquina Virtual", url: "https://www.youtube.com/embed/jfdAiVgHuDs" },
            { title: "Configuración Avanzada", url: "https://www.youtube.com/embed/mOuKtZVMwbw" },
            { title: "Instalar Ubuntu en VB", url: "https://www.youtube.com/embed/Uq74kKd1CAg" },
            { title: "Guest Additions", url: "https://www.youtube.com/embed/Qy44XLpiChc" },
            { title: "Carpetas Compartidas", url: "https://www.youtube.com/embed/wnv73xmyRr0" }
        ],
        content: `
            <h2 class="text-2xl font-bold theme-text-primary mb-4">Máquinas Virtuales - Tu Laboratorio Seguro</h2>
            <p class="theme-text-secondary mb-6">Una máquina virtual (VM) te permite ejecutar un sistema operativo completo dentro de otro. Es ideal para probar Linux sin borrar Windows, o experimentar con configuraciones sin riesgo.</p>
            
            <div class="mb-8 theme-bg-tertiary rounded-xl p-6">
                <h3 class="text-xl font-semibold theme-text-primary mb-4">🚀 Instalación de VirtualBox</h3>
                <p class="theme-text-secondary mb-4">Usaremos VirtualBox, una herramienta gratuita y potente para virtualización.</p>
                
                <div class="grid md:grid-cols-3 gap-6">
                    <!-- Windows -->
                    <div class="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                        <div class="flex items-center mb-3">
                            <i class="fab fa-windows text-blue-500 text-2xl mr-2"></i>
                            <h4 class="font-bold theme-text-primary">Windows</h4>
                        </div>
                        <ol class="text-sm theme-text-secondary space-y-2 list-decimal list-inside">
                            <li>Ve a <a href="https://www.virtualbox.org/" target="_blank" class="text-blue-500 underline">virtualbox.org</a>.</li>
                            <li>Descarga "Windows hosts".</li>
                            <li>Ejecuta el instalador <code>.exe</code>.</li>
                            <li>Acepta todas las opciones por defecto (instalará drivers de red).</li>
                            <li>Reinicia si es necesario.</li>
                        </ol>
                    </div>
                    
                    <!-- Mac -->
                    <div class="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                        <div class="flex items-center mb-3">
                            <i class="fab fa-apple text-gray-500 text-2xl mr-2"></i>
                            <h4 class="font-bold theme-text-primary">macOS</h4>
                        </div>
                        <ol class="text-sm theme-text-secondary space-y-2 list-decimal list-inside">
                            <li>Ve a <a href="https://www.virtualbox.org/" target="_blank" class="text-blue-500 underline">virtualbox.org</a>.</li>
                            <li>Descarga "OS X hosts".</li>
                            <li>Abre el <code>.dmg</code> y ejecuta <code>VirtualBox.pkg</code>.</li>
                            <li>Permite la extensión del sistema en "Seguridad y Privacidad".</li>
                        </ol>
                    </div>
                    
                    <!-- Linux -->
                    <div class="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                        <div class="flex items-center mb-3">
                            <i class="fab fa-linux text-yellow-500 text-2xl mr-2"></i>
                            <h4 class="font-bold theme-text-primary">Linux</h4>
                        </div>
                        <ol class="text-sm theme-text-secondary space-y-2 list-decimal list-inside">
                            <li>Abre la terminal.</li>
                            <li>Ubuntu/Debian: <code>sudo apt install virtualbox</code></li>
                            <li>Fedora: <code>sudo dnf install virtualbox</code></li>
                            <li>Agrega tu usuario al grupo vboxusers: <code>sudo usermod -aG vboxusers $USER</code></li>
                        </ol>
                    </div>
                </div>
            </div>

            <div class="mb-8">
                <h3 class="text-xl font-semibold theme-text-primary mb-4">⚙️ Configuración Básica</h3>
                <div class="theme-bg-tertiary rounded-xl p-6">
                    <ol class="space-y-4 theme-text-secondary">
                        <li class="flex items-start">
                            <span class="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 text-sm flex-shrink-0">1</span>
                            <div>
                                <span class="font-bold theme-text-primary">Nueva Máquina:</span> Haz clic en el botón "Nueva" (New). Asigna un nombre (ej. "Ubuntu 22.04") y selecciona el tipo "Linux" y versión "Ubuntu (64-bit)".
                            </div>
                        </li>
                        <li class="flex items-start">
                            <span class="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 text-sm flex-shrink-0">2</span>
                            <div>
                                <span class="font-bold theme-text-primary">Memoria RAM:</span> Asigna al menos 4 GB (4096 MB) si tu PC tiene 8GB o más. Nunca asignes más del 50% de tu RAM real no entres a la zona roja.
                            </div>
                        </li>
                        <li class="flex items-start">
                            <span class="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 text-sm flex-shrink-0">3</span>
                            <div>
                                <span class="font-bold theme-text-primary">Disco Duro:</span> Crea un disco virtual ahora (VDI). Reservado dinámicamente es mejor para ahorrar espacio. Asigna al menos 25 GB.
                            </div>
                        </li>
                        <li class="flex items-start">
                            <span class="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 text-sm flex-shrink-0">4</span>
                            <div>
                                <span class="font-bold theme-text-primary">Imagen ISO:</span> Antes de iniciar, ve a Configuración > Almacenamiento. En el icono de CD "Vacío", selecciona tu archivo .iso descargado (ej. Ubuntu).
                            </div>
                        </li>
                    </ol>
                </div>
            </div>
            
            <div class="p-4 theme-bg-tertiary rounded-lg">
                <h4 class="font-semibold theme-text-primary mb-2">💡 Consejos Pro:</h4>
                <ul class="text-sm theme-text-secondary space-y-1 ml-4">
                    <li>• Instala las "Guest Additions" después de instalar el SO para pantalla completa y compartir portapapeles.</li>
                    <li>• Usa "Snapshots" (Instantáneas) antes de hacer cambios peligrosos para poder volver atrás.</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "¿Qué es una Máquina Virtual?",
                options: ["Un juego de realidad virtual", "Un ordenador simulado por software", "Un robot físico", "Un virus"],
                correct: 1
            },
            {
                question: "¿Qué software gratuito recomendamos para virtualizar?",
                options: ["Photoshop", "Excel", "VirtualBox", "Chrome"],
                correct: 2
            },
            {
                question: "¿Qué necesitas descargar para instalar un sistema operativo en la VM?",
                options: ["Una imagen ISO", "Un archivo MP3", "Un documento PDF", "Una foto JPG"],
                correct: 0
            },
            {
                question: "¿Cuánta RAM debes asignar a tu VM?",
                options: ["Toda la que tengas", "Menos del 50% de tu RAM total", "Solo 1 MB", "Nada"],
                correct: 1
            },
            {
                question: "¿Para qué sirven los Snapshots?",
                options: ["Para sacar fotos", "Para guardar el estado de la VM y restaurarlo", "Para imprimir", "Para acelerar internet"],
                correct: 1
            }
        ]
    }
};