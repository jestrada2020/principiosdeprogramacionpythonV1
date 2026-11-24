# Historial de cambios

## Versión 5.6 (noviembre de 2026) · Informe PDF por unidad y temas nuevos del libro del curso
- **Videos en los módulos nuevos** (comprobados el 23-nov-2026): Gestión de Memoria (4: copia superficial y profunda,
  generadores y recolector de basura), Agentes de IA con Nod (3: el video que cita el libro, la presentación oficial de n8n y
  una instalación paso a paso) y R con RStudio (4: instalación en Windows, curso desde cero, dplyr y ggplot2).
- **Botón «Informe PDF de la unidad»** en el encabezado de cada módulo (visible en Lección, Laboratorio, Retos y Quiz), junto a
  cada unidad del mapa, al final de cada unidad en la barra lateral, en la tarjeta «Informes por unidad» de «Mis logros» y en
  Ctrl+K (ruta `#/informe/<n>` o `#/informe/bonus`). Descarga `Informe_Unidad<n>_BioPython_<usuario>_<fecha>.pdf` con el
  resumen de la unidad (módulos, lecciones, laboratorio, retos, quizzes y promedio de 0 a 5) y, por cada módulo, los temas de
  la lección (títulos del contenido), la lección, el laboratorio, cada reto por su nombre, el quiz (preguntas, intentos, último y
  mejor resultado, nota) y el estado; luego el historial de la unidad y un recuadro «Para el docente» (observaciones, nota y
  firma). Sin internet abre la versión imprimible. Funciones nuevas `REPORTE.descargarUnidad` y `REPORTE.datosUnidad`.
- El progreso guarda ahora por módulo los programas ejecutados (`ejec`), los que fallaron (`err`), los intentos de quiz
  (`quizN`) y el último resultado (`quizUlt`). Empiezan a contar desde esta versión.
- **Temas nuevos tomados del Libro del curso** (`js/modulos-libro-temas.js`), cada uno con lección, 5 retos verificables y
  quiz de 10 preguntas:
  - **10. Gestión de Memoria** (Unidad 3): variables como etiquetas, `is` e `id()`, conteo de referencias y `del`, recolector
    de basura y ciclos (`gc`, `weakref`), generadores y `deque(maxlen=…)`, copia superficial y profunda.
  - **21. Agentes de IA con Nod** (Unidad 5): n8n frente a Nod, humano en el bucle, arquitectura local, «los datos no son
    órdenes», matriz para elegir el modelo, instalación en Windows (laptop paso a paso) y Linux, paneles e instrucción en cinco
    partes; los retos son los ejercicios del taller del libro (bitácora, vigilancia del 10 %, límite de gasto, memoria).
  - **R con RStudio** (Bonus, opcional): R y RStudio, instalación en Windows y Linux, vectores, indexación, estructuras,
    lectura de datos, funciones, dplyr, ggplot2 y tabla de equivalencias. Como el laboratorio ejecuta Python, los retos piden
    traducir cada idea de R a Python (vectorización, máscara lógica, `clasificar()`, `tryCatch()` y el resumen de dplyr en pandas).
  - Instalación revisada en las páginas oficiales el 23-nov-2026: CRAN (R 4.6.2, `R-4.6.2-win.exe`; comandos de Ubuntu),
    docs.posit.co (`RStudio-2026.11.0-203.exe` para Windows 11, `.deb` para Ubuntu/Debian), github.com/n8n-io/nod (v0.9.3,
    `nod-Setup-x64.exe`, Flatpak para Linux, Apache 2.0) y nod.n8n.io/docs (Windows 11 x64; WSL 2 y virtualización para un
    asistente local; comandos de PowerShell y Flatpak). Solo Windows y Linux.
- Títulos renumerados: Biblioteca Estándar pasa a 11 y Máquinas Virtuales a 20. El curso tiene 21 módulos (el diploma exige
  los 21) y 4 opcionales. Los bloques de código de R y de terminal llevan la clase `no-probar` para no mostrar el botón «Probar».
- Verificación: los 79 retos se probaron con el verificador real (77 aprueban con la solución y fallan con la plantilla;
  «Instala Cursor» y «Consulta Avanzada a la IA» se marcan con «Ya lo hice»), los 8 ejemplos con «Probar» de los módulos nuevos
  corren sin errores, los informes de las 5 unidades y del Bonus se descargan, y ninguna pestaña da errores de JavaScript.
- Manual de usuario (versión 5.6, 38 páginas): nueva sección **6.2 Informe PDF de cada unidad** con las figuras 17
  (`img/informe_boton.jpg`) y 18 (`img/informe_unidad.jpg`); figuras renumeradas (ahora 32); 21 módulos y 4 opcionales.

## Versión 5.5 (noviembre de 2026) · Más actividades y reporte en PDF para el docente
- **Botón «Reporte PDF para el docente»** en la barra lateral, en «Mis logros» y en el buscador (Ctrl+K): descarga
  `Reporte_BioPython_<usuario>_<fecha>.pdf` con el resumen (módulos completados, retos, quizzes y promedio de notas de 0 a 5),
  el progreso por módulo (lección, laboratorio, retos, mejor quiz, nota y estado), las medallas con fecha y el historial de
  actividades. Nuevo `js/reporte.js`; jsPDF 2.5.1 y jspdf-autotable 3.8.2 se cargan de cdnjs solo al pulsar el botón. Sin
  internet abre una versión imprimible («Guardar como PDF»).
- Historial con fecha y hora de cada actividad (`historial` en el progreso del usuario, máximo 400 registros), que se llena desde
  `REGISTRO.actividad` aunque los formularios de Google estén desactivados. Empieza a contar desde esta versión.
- **Z IA**: su reto estaba bajo la clave `practice` y la aplicación no lo mostraba; ahora tiene 2 retos verificables
  (decoradores y depuración con IA).
- **Antigravity** y **Máquinas virtuales**: 2 retos nuevos cada uno y quiz ampliado de 5 a 10 preguntas.
- **Actividades Extras**: 2 retos (línea de tiempo de la IA y traducción de ADN) y quiz de 10 preguntas. Ahora se completa con el
  quiz (70 %) en vez del botón «Marcar como completado».
- 2 retos nuevos en **Intérprete**, **Biblioteca estándar II**, **Entornos virtuales**, **DeepSeek** y **ChatGPT** (que tenían 1).
- Las 18 soluciones nuevas se probaron con el verificador real (Pyodide): todas aprueban con la solución y fallan con la plantilla.
- Manual de usuario (versión 5.5, 36 páginas): nueva sección **6.1 Reporte PDF para el docente** con dos figuras
  (`img/reporte_boton.jpg`, `img/reporte_pdf.jpg`), el reporte en la tabla de la interfaz, en «Solución de problemas» y en
  «Para el profesor». Figuras renumeradas (ahora 30).
- Capturas rehechas con el botón nuevo: `img/interfaz.jpg` (portada y figura 1), `img/celular.jpg` (figura 2) y
  `img/logros.jpg` (figura 14), con la misma estudiante de ejemplo y el mismo encuadre que las originales.
- `chatgptea` estaba definido dos veces en `js/modules-data.js`; la segunda (con video, 3 retos y 10 preguntas) anulaba a la
  primera (sin video, 1 reto, 5 preguntas). Se dejó solo la segunda, en el lugar de la primera (después de DeepSeek).
- Revisión completa de actividades: los 64 retos se ejecutaron con el verificador real (solución y plantilla). Se corrigieron
  4 retos que se aprobaban sin programar porque la plantilla ya traía la respuesta o la solución no imprimía nada:
  «Tu primer programa», «Verificar versión» (ahora pide «Python 3.11» con `sys.version_info`), «Tu primer notebook» y
  «Primeros pasos con IA» (ahora imprime 5! y 10!). Resultado: 62 retos aprueban con la solución y fallan con la plantilla;
  «Instala Cursor» y «Consulta Avanzada a la IA» (Flask) se marcan con «Ya lo hice», como está previsto. Los 19 ejemplos del
  laboratorio corren sin errores, los 20 quizzes tienen datos válidos y todas las pestañas abren sin errores de JavaScript.
- **Antigravity**: la guía de instalación tenía comandos inventados (`antigravity_setup.exe`, `brew install google-antigravity`,
  `curl …/install | bash`, `antigravity login`, `antigravity --version`). Se reescribió con lo que publica antigravity.google
  (consultado el 23 de noviembre de 2026): requisitos de cada sistema; Windows `Antigravity-x64.exe`/`-arm64.exe`; macOS
  `Antigravity.dmg` arrastrado a Aplicaciones; Linux `Antigravity.tar.gz` con `tar -xzf` y `./Antigravity`; inicio de sesión con la
  cuenta de Google en el navegador, y la CLI opcional `agy` (`curl -fsSL https://antigravity.google/cli/install.sh | bash`,
  `agy --version`). El botón «Abrir Antigravity» abría gemini.google.com y ahora abre antigravity.google. Se corrigieron las
  preguntas del quiz sobre la instalación en macOS y la verificación (ahora `agy --version`), y se quitó el consejo de los
  «comandos de voz», que no está documentado.
- **Antigravity en Windows**: guía paso a paso para laptop (cómo saber en Configuración → Sistema → Información si el equipo es
  x64 o ARM, qué instalador bajar, asistente, inicio de sesión, elección de perfil), aviso de que las cuentas de Google Workspace
  (muchos correos institucionales) no incluyen Antigravity, y el comando de PowerShell de la CLI
  (`irm https://antigravity.google/cli/install.ps1 | iex`). macOS y Linux quedan en dos columnas debajo.
- **Gemini 3** en la descripción estaba desactualizado: Antigravity se presentó en noviembre de 2025 con Gemini 3 Pro, pero hoy
  ofrece varios modelos (versiones más recientes de Gemini, como Gemini 4, y Claude). Se corrigieron el párrafo y la tarjeta.
- **Cursor** (revisado con cursor.com el 23 de noviembre de 2026): el botón «Ejecutar Cursor» no tenía ninguna función conectada
  (no hacía nada) y prometía abrir el programa desde el navegador; se quitó junto con su código muerto en `js/recursos.js`.
  Guía nueva: laptop Windows paso a paso (x64/ARM, instalador «User» o «System», inicio de sesión, primera tarea con Ctrl+I),
  macOS 12+ (.dmg ARM64/x64/Universal), Linux (.deb, .rpm, AppImage) y la CLI opcional `agent`
  (`irm 'https://cursor.com/install?win32=true' | iex`). Atajos actualizados: Ctrl+I/L/K abren el panel del agente, Shift+Tab
  cambia de modo, Ctrl+/ cambia de modelo; ya no se documentan «Cmd+K editar» ni el comando `cursor .`. Se ajustaron los retos y
  4 preguntas del quiz.
- **VirtualBox** (revisado con virtualbox.org y el manual 7.2): laptop Windows paso a paso (solo x64; en ARM es experimental y
  solo corre sistemas ARM), enlaces actuales «macOS / Intel hosts» y «macOS / Apple Silicon hosts» (antes «OS X hosts»; se quitó
  el paso de «Seguridad y Privacidad», que no está en el manual), Linux con los paquetes oficiales de Linux_Downloads en lugar
  de los de la distribución, requisitos de compilación y Secure Boot, `vboxusers` solo para USB, y nota sobre la licencia del
  Extension Pack.
- **Solo Windows y Linux** en las guías de instalación (decisión del profesor): se quitaron las secciones de macOS de Antigravity,
  Cursor, VirtualBox e Intérprete (Homebrew), y las menciones a Mac en atajos, retos y quizzes (Cmd, «Linux/Mac»). La pregunta
  sobre instalar Antigravity en macOS ahora es sobre Linux. Verificado de nuevo: 62 retos OK y 2 manuales; sin errores de JavaScript.
- **Guía de instalación de Python** (módulo 2, revisada con python.org y la documentación oficial el 23 de noviembre de 2026):
  la instrucción «marca Add Python to PATH» correspondía al instalador `.exe` clásico, en desuso desde Python 3.14 y que deja de
  publicarse con 3.16. Guía nueva para laptop Windows con el **Python install manager** (Microsoft Store, `winget install
  9NQ7512CXL7T` o `.msix` de python.org; sirve para x64 y ARM), primer arranque con `python`, `py list`, `python -m pip install`,
  `py install --refresh` y solución de problemas (alias de ejecución de aplicaciones, lanzador `py` antiguo). Linux: Python
  preinstalado, `python3 --version` y `sudo apt install python3 python3-venv python3-pip` (paquetes comprobados en Ubuntu 24.04).
- **VirtualBox · nota de VT-x para laptops** (revisada con la ayuda de Microsoft «Habilitar la virtualización en Windows» y el
  manual de VirtualBox 7.2): qué hacer si la VM no arranca por VT-x/AMD-V (Configuración → Sistema → Recuperación → Inicio avanzado
  → Solucionar problemas → Opciones avanzadas → Configuración de UEFI), nombres de la opción según el fabricante, advertencia de
  cambiar solo esa opción, y qué significa la tortuga verde (Hyper-V activo; desactivarlo solo con ayuda del docente).
  Se agregó «SVM Mode (Secure Virtual Machine)», el nombre de la opción en laptops AMD (confirmado en el soporte de ASUS).
- **DeepSeek** (revisado con deepseek.com, su política de privacidad y sus términos de uso el 23 de noviembre de 2026): se aclaró
  quién lo ofrece (Hangzhou DeepSeek Artificial Intelligence, China), que su chat se usa gratis y lo que se paga es la API, y los
  botones DeepThink y Search. Nuevo «Cómo empezar en tu laptop (Windows o Linux)»: se usa desde el navegador, sin instalar nada.
  Nuevo recuadro «Cuida tus datos»: los datos se guardan en China, las conversaciones pueden usarse para entrenar (se puede
  desactivar con «Improve the model for everyone»), no compartir datos personales ni de pacientes, menores con permiso. La
  pregunta «Es completamente gratuito» pasó a «Su chat se puede usar gratis desde el navegador».
- **Z IA** (revisado con chat.z.ai, su política de privacidad y sus términos): su nombre oficial es Z.ai y funciona con modelos
  GLM (GLM-5.3); la opera Jingsheng Hengxing Technology, con sede en Singapur. Se quitó «plataforma china» y «soporte para
  español», que las páginas oficiales no confirman (también en el subtítulo del módulo en `js/app-core.js`). Mismos recuadros de
  «Cómo empezar» y «Cuida tus datos» (datos procesados en Singapur, uso del contenido para mejorar los modelos, menores con
  permiso). La pregunta sobre idiomas pasó a «¿Con qué familia de modelos funciona Z.ai?» (GLM). Se borró código sin uso del
  antiguo iframe de Z IA en `js/recursos.js`.

## Versión 5.4 (octubre de 2026) · Registro en Google Forms
- `docs/crear_formularios.gs`: script de Google Apps Script que crea en el Drive del profesor los formularios
  «Ingreso y salida» y «Notas y actividades» y la hoja «Academia Bio-Python · Registros», e imprime la configuración.
- `js/registro.js`: la academia envía sola el ingreso, la salida y la duración de cada sesión, y las lecciones, retos, quizzes
  (porcentaje y nota de 0 a 5) y módulos completados. Usa `sendBeacon` al salir y guarda los registros si no hay internet.
  No envía nada mientras `js/registro-config.js` esté vacío. Aviso para el estudiante en «Mis logros».
- **Activado**: formularios creados en el Drive del profesor y configurados en `js/registro-config.js`. Prueba real con la cuenta
  «todos»: llegaron a la hoja «Academia Bio-Python · Registros» el ingreso (00:28:01), la lección leída y la salida
  (00:28:06, mismo identificador de sesión).
- Script corregido: el cálculo de los identificadores fallaba («item.asTextItem is not a function») y las pestañas no se
  renombraban porque Google aún no las había vinculado; ahora reintenta. Nuevas funciones `generarConfiguracion(id1, id2)`
  (sin crear formularios nuevos).
- Probado con un servidor que imita a Google Forms: una sesión de 25 minutos produjo 1 ingreso, las actividades con su nota
  y la salida con duración 25.2 min; recargar la página no repite el ingreso.

## Versión 5.3 (octubre de 2026) · Libro del curso
- Módulo opcional nuevo **Libro del curso (PDF)** en el bonus, junto a Actividades Extras y Bases de datos con pandas: muestra
  `principalCusoPython14Feb2024Mod1.pdf` (98 páginas) en un visor, con **Ver en ventana emergente** (como en la versión anterior,
  y ahora avisa si el navegador bloquea la ventana) y **Descargar PDF**. No cuenta para el diploma.
- Manual: el libro en la sección de recursos, con figura.
- Título interno del PDF del libro: «Overleaf Example» → «Curso de programación» (es lo que muestran el visor y la pestaña
  del navegador). Se cambió con una actualización incremental: el contenido y las 98 páginas quedan idénticos.

## Versión 5.2 (octubre de 2026) · Bases de datos con pandas
- Módulo nuevo y **opcional** **Bases de datos con pandas** (en el bonus junto a Actividades Extras, y botón «Bases de datos (pandas)»
  en la barra lateral; da XP y medallas pero no cuenta para el progreso ni el diploma, que siguen en 19 módulos):
  lección de 16 temas con índice, 25 ejemplos ejecutables, guía de **Google Colab** (crear notebooks; cargar datos desde el PC por el
  panel de archivos, `files.upload()`, Google Drive, URL y Google Sheets; descargar resultados), 10 retos con verificación automática
  y quiz de 12 preguntas. Los videos del canal sobre pandas, dataframes y CSV aparecen en su lección.
- **Datos de práctica** de varias disciplinas (`data/` y `js/datos-pandas.js`): ventas, productos, estudiantes, clima, pacientes
  (con faltantes y duplicados) y plantas. Ya están cargados en la plataforma y se descargan desde la lección.
- **Laboratorio**: botón **Subir** (CSV, Excel, JSON, TXT desde el PC) y botón de **archivos** (usar, descargar) en todos los
  laboratorios y retos; `mostrar(df)` para ver tablas; soporte de Excel (openpyxl, instalado desde PyPI si hace falta).
- Gráficos: cada `plt.show()` genera su propia imagen; antes, un histograma después de un gráfico de barras se dibujaba encima.
- Verificador de retos: ya no exige números pegados a letras (el «64» de `dtype: float64`), que rechazaban soluciones correctas.
- Buscador: con varias palabras («colab csv») busca cada una por separado.
- Íconos de los botones dentro de bloques de código y de la consola (se veían como un cuadro).
- Manual: sección 8 «Bases de datos con pandas» (5 figuras), filas nuevas en solución de problemas; 33 páginas, 27 figuras.

## Versión 5.1 (octubre de 2026) · Aprendo con videos
- Sección nueva **Aprendo con videos** (barra lateral, inicio, buscador) con **22 videos del canal del profesor**
  (john estrada, UCe_8YXWBojXgfgaiQODPWTg), cada uno verificado (canal y descripción), en 7 temas:
  importar módulos (1), dataframes con pandas (4), de la unidad de observación al dataframe (4, apoyo),
  Google Colab (3), cargar CSV en Colab (2), Shiny for Python (2) y modelos y simulaciones en biología (6, apoyo).
- Cada tema tiene botones «Ver en la aplicación» a los módulos y recursos relacionados (5. Estructuras de Datos,
  6. Módulos, 7. Entrada y Salida, 15. Google Colab, Shiny, Laboratorio libre). Los videos del canal también aparecen en la
  lección de esos módulos, marcados «Canal del profe».
- Se listan los 15 módulos que aún no tienen videos del canal (intro, intérprete, introducción informal, control de flujo,
  errores, clases, biblioteca estándar I y II, entornos virtuales y los de herramientas de IA y máquinas virtuales).
- Descartados: los videos de calculadora CASIO, cálculo, álgebra, bioestadística sin Python y matemática agropecuaria
  (no tratan temas de este curso).
- Reproductores con política de referencia y enlace «Abrir en YouTube» en cada lección (YouTube muestra «Error 153»
  si la aplicación se abre como archivo local). La lista de videos de la lección tiene altura máxima con desplazamiento.
- Actividades Extras: tres videos nuevos sobre inteligencia artificial («Historia de la inteligencia artificial», Tecnología 4.0;
  «Historia y evolución de la IA: de reglas a agentes», Latin AI Coder; «¿Cómo funciona por dentro un agente de IA?», Oliver Nabani).
  La cuadrícula de videos se adapta al ancho de la pantalla (antes eran 3 columnas fijas, incómodas en el celular).
- Manual: sección 8 «Aprendo con videos», fila nueva en solución de problemas, capturas actualizadas (28 páginas, 22 figuras).

## Versión 5 (octubre de 2026) · Rediseño completo «aprender jugando»

### Nueva experiencia
- **Mapa de aventura** en el inicio: 19 módulos en 5 unidades + bonus, con el progreso de cada paso y la
  «siguiente misión» resaltada. Saludo personalizado, reto del día (XP doble), meta diaria y dato curioso.
- **Módulos en 4 pasos** (Lección → Laboratorio → Retos → Quiz) en lugar de 21 pestañas mezcladas.
  Colab y Shiny quedan como pasos extra solo en los módulos que los tienen.
- **Gamificación**: XP, 11 niveles, racha de días, meta diaria, 22 medallas, celebraciones con confeti y
  diploma imprimible al terminar el curso.
- **Quiz interactivo**: una pregunta a la vez, respuesta inmediata (muestra la correcta), combos,
  mejor puntaje guardado y preguntas barajadas en cada intento.
- **Retos con verificación automática** y pistas generadas a partir de la solución; ver la solución pide
  confirmación y reduce el premio.
- **Laboratorio** con editor de código real (CodeMirror: colores, números de línea, Ctrl+Enter, Tab),
  caja de entradas para `input()`, gráficos de matplotlib, detección de bucles infinitos y explicación
  de errores en español («Profe Pitón»). El código se guarda solo.
- Botón **▶ Probar** en los ejemplos de las lecciones (81 de 86 se ejecutan tal cual).
- **Laboratorio libre** con experimentos de biología. **Buscador** Ctrl+K. Notas descargables.
- Secciones **Evaluaciones** y **Recursos del curso** con tarjetas; se conservan sin cambios los
  contenidos, enlaces y códigos QR del profesor.
- Diseño nuevo con colores de Python, tema claro/oscuro (sigue al sistema) y adaptación a celular.
- Videos con miniatura: solo se cargan al pulsar ▶ (la página abre más rápido). Los PDF de recursos
  se cargan al abrirlos.

### Manual y orden de archivos
- **Manual de usuario** nuevo (`docs/manual_usuario.pdf`, 26 páginas, 21 figuras): interfaz, inicio, los cuatro pasos de un
  módulo, puntos y medallas, laboratorio libre, evaluaciones, buscador y notas, guía de errores de Python, solución de
  problemas y una sección para el profesor. Se abre desde la barra lateral y desde Recursos del curso.
- Los archivos que ya no se usaban (`js/intro.js`, `js/basics.js`… — 12 en total —, `css/styles.css` y la carpeta `CSS/`)
  se movieron a `docs/historial/`. `js/intro.js` tenía además un error de sintaxis.

### Correcciones
- El progreso era el mismo para todos los usuarios de un navegador; ahora es por usuario
  (se importa el progreso anterior).
- La salida del programa se insertaba como HTML (`print("<b>x</b>")` se veía en negrita); ahora se
  muestra como texto.
- La plantilla de los ejercicios estaba solo como texto de fondo (había que copiarla a mano); ahora se
  carga en el editor.
- `input()` no tenía forma de recibir datos de forma práctica; ahora usa la caja de entradas.
- Un bucle infinito congelaba la página; ahora se detiene.
- Reto «Separadores en print()»: la plantilla y la solución tenían error de sintaxis (sangría y salto
  de línea dentro de una cadena) y eran idénticas; se corrigieron y la plantilla deja la tarea al estudiante.
- Quiz de Estructuras de datos: «Todas son correctas» incluía `dict(key)`, que no funciona; ahora
  «Opciones A y B son correctas».
- Preguntas ambiguas reformuladas: «if anidado» (era sobre if/elif/else), «método que se ejecuta al crear
  un objeto» (`__new__` también lo hace; ahora «inicializa los atributos»), atajo de Colab (Ctrl+Enter
  también ejecuta; ahora «ejecuta y pasa a la siguiente»), tipo `string` → `str`.
- Antigravity: el modelo que lo impulsa es Gemini 3, no «Gemini Ultra» (contenido y quiz).
- Las preguntas con «Opciones A y B…» ya no se barajan (las letras dejarían de coincidir).
- La barra lateral tenía el HTML mal cerrado (dos `</nav>`; los módulos 18 y 19 quedaban fuera del menú).
- Se quitó «Certificado incluido», que no existía (ahora hay diploma real).
- El botón de Cursor intentaba abrir la tienda de Windows; ahora muestra instrucciones claras.
- El buscador ahora también busca en las guías prácticas, el material de Colab y las preguntas de los quizzes.
- Al superar un reto, la etiqueta «Superado» reemplazaba el tiempo de la consola en vez del «+25 XP» del encabezado.
- Se eliminó Chart.js, que se cargaba sin usarse, y la pantalla de carga fija de 2 segundos.

## Versiones anteriores
- Versión 4: inicio de sesión con usuarios precargados en `js/auth.js` y panel de administración.
