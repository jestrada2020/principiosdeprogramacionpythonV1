# Academia Bio-Python · Principios de programación con Python

Aplicación web para aprender Python desde cero **jugando**: lecciones en video, un laboratorio con
Python real en el navegador, retos con verificación automática, quizzes interactivos, experiencia (XP),
niveles, rachas diarias y medallas.

## Cómo se aprende

Cada módulo es una **misión de cuatro pasos**:

| Paso | Qué hace el estudiante | Recompensa |
|---|---|---|
| 1. Lección | Ve el video y lee el contenido. Cada ejemplo de código tiene un botón **▶ Probar** | 15 XP |
| 2. Laboratorio | Ejecuta y modifica código (Ctrl+Enter). Los errores se explican en español («Profe Pitón») | 10 XP |
| 3. Retos | Escribe su solución y pulsa **Verificar**: se compara con la salida de la solución oficial | 25 XP (8 si vio la solución) |
| 4. Quiz | Una pregunta a la vez, con respuesta inmediata y combos. Con 70 % o más se completa el módulo | 8 XP por acierto nuevo + 100 XP |

Además: **reto del día** (XP doble), **meta diaria** de 60 XP, **racha** de días seguidos,
22 **medallas**, 11 **niveles** (de «Huevo de pitón» a «Gran Maestro Pythonista») y un **diploma**
imprimible al completar los 19 módulos.

## Secciones

- **Inicio · Mapa**: saludo, siguiente misión, reto del día, meta diaria, dato curioso y el mapa de 5 unidades.
- **Laboratorio libre**: editor con ejemplos de biología (ADN, ARN, IMC, gráficos de población…).
- **Mis logros**: estadísticas, medallas, niveles y diploma.
- **Evaluaciones**: los 4 quizzes y 4 parciales externos, con enlace directo y código QR.
- **Recursos del curso**: libro del curso (PDF), resumen clave, páginas recomendadas, Shiny for Python,
  conceptos de Shiny, Overleaf/LaTeX, guía de GitHub y HTML de entregas.
- **Bases de datos con pandas** (módulo opcional del bonus, como Actividades Extras; también en la barra lateral; da XP pero no cuenta para el diploma): 16 temas
  (crear DataFrames, cargar datos del PC, explorar, seleccionar, filtrar, ordenar, columnas, limpiar, agrupar, combinar,
  fechas y texto, gráficos, exportar), guía de Google Colab (crear notebooks y cinco formas de cargar datos desde el PC),
  10 retos verificados y un quiz de 12 preguntas, con datos de comercio, educación, meteorología, salud y biología.
- **Libro del curso (PDF)** (módulo opcional del bonus): el libro `principalCusoPython14Feb2024Mod1.pdf` en un visor, con
  «Ver en ventana emergente» y «Descargar PDF».
- **Aprendo con videos**: 22 videos del canal de YouTube del profesor (pandas, Colab, Shiny, `import`, modelos de biología),
  agrupados en 7 temas con botones a los módulos relacionados. También aparecen en la lección de esos módulos («Canal del profe»).
- **Manual de usuario**: el PDF del manual dentro de la aplicación, con «Ver en ventana emergente» y «Descargar PDF».
- **Buscador** (Ctrl+K): encuentra módulos, retos, quizzes y recursos por palabra.
- **Notas** por módulo, descargables en Markdown. **Tema claro/oscuro**.

## El laboratorio de Python

- Usa [Pyodide](https://pyodide.org) 0.24 (Python 3.11 compilado para el navegador). La primera carga
  descarga el intérprete (unos segundos); después queda listo (indicador verde «Python listo»).
- `input()` lee de la caja **Entradas** (una por línea); si se agotan, el navegador pregunta.
- `numpy`, `matplotlib`, `pandas`… se descargan automáticamente al importarlos; los gráficos se muestran en la consola.
- Si un programa ejecuta millones de pasos (bucle infinito) se detiene y se avisa.
- **Archivos**: el botón **Subir** de cada laboratorio carga archivos del PC (CSV, Excel, JSON, TXT) al Python del navegador;
  el botón de carpeta los lista, los inserta en el código («Usar») y descarga los que el programa cree (`to_csv`, `to_excel`).
  Los datos de práctica de pandas ya están cargados. Los archivos subidos se borran al recargar la página.
- `mostrar(df)` dibuja un DataFrame o una Serie de pandas como tabla en la consola.
- Cada `plt.show()` produce su propia imagen (varios gráficos seguidos no se superponen).
- No funcionan en el navegador: servidores web (Flask), hilos (`threading`) ni comandos de terminal.

## Usuarios y progreso

- Inicio de sesión en `login.html`; los usuarios se definen en `js/auth.js` (ver `_seguridadBasica.md`).
- El progreso (XP, medallas, código escrito, notas) se guarda **por usuario** en el navegador
  (`localStorage`, clave `bp_estado_<id>`). Cambiar de navegador o de computador empieza de cero.
- El progreso de versiones anteriores (`pythonProgress`) se importa automáticamente la primera vez.

## Estructura de archivos

```
index.html            Redirige a login.html
login.html            Inicio de sesión
admin.html            Panel del administrador (usuarios)
app.html              Aplicación (barra lateral, vistas y paneles de recursos/evaluaciones)
html-entregas.html    Página de entregas semanales
css/academia.css      Sistema visual (temas claro y oscuro, adaptación a celular)
js/auth.js            Usuarios y sesión
js/modules-data.js    CONTENIDO de los 20 módulos: videos, texto, guías, retos y quizzes
js/gamificacion.js    XP, niveles, racha, meta diaria, medallas y confeti
js/laboratorio.js     Ejecución de Python, explicación de errores y verificación de retos
js/recursos.js        Catálogo de evaluaciones (con QR) y recursos
js/modulo-libro.js    Módulo opcional «Libro del curso (PDF)»
js/modulo-pandas.js   Módulo «Bases de datos con pandas» (lección, guía de Colab, retos y quiz)
js/datos-pandas.js    Datos de práctica para pandas, copiados al Python del navegador al cargarlo
data/                 Los mismos datos de práctica en CSV (para Colab o Excel)
js/registro.js        Envío automático de ingresos, salidas y actividades a Google Forms
js/registro-config.js Direcciones de los formularios (las genera docs/crear_formularios.gs)
js/videos.js          «Aprendo con videos»: temas, videos verificados del canal y módulos sin videos
js/app-core.js        Navegación, mapa, módulos por pasos, quiz, logros, buscador y notas
*.pdf                 Libro del curso y resumen clave
docs/manual_usuario.html  Fuente del manual de usuario (estilo en docs/estilo_manual.css)
docs/manual_usuario.pdf   Manual de usuario (34 páginas)
docs/img/                 Capturas usadas en el manual
docs/historial/           Archivos de versiones anteriores que la aplicación ya no usa
```

## Actualizar el manual

Edite `docs/manual_usuario.html` y, desde la carpeta `docs`, genere el PDF con:

```
google-chrome --headless --no-pdf-header-footer --print-to-pdf=manual_usuario.pdf manual_usuario.html
```

## Cómo agregar o cambiar contenido

- **Un módulo**: edite su entrada en `js/modules-data.js` (`title`, `video`, `additionalVideos`, `content`,
  `practiceContent`, `colabContent`, `shinyContent`, `exercises`, `quiz`). Para que aparezca en el mapa,
  agregue su id a una unidad en `UNIDADES` (inicio de `js/app-core.js`) y un icono en `ICONOS`.
- **Un reto**: `{ title, description, template, solution }`. La verificación ejecuta `solution` con las
  mismas entradas que el estudiante y exige los mismos números (o palabras clave) en la salida.
- **Una pregunta**: `{ question, options: [4 opciones], correct: índice }`. Las opciones se barajan, salvo
  cuando una menciona a otras («Opciones A y B», «Todas las anteriores»).
- **Una evaluación o recurso**: agregue su panel en `app.html` (dentro de `#almacen`) y su tarjeta en
  `EVALUACIONES` o `RECURSOS` de `js/recursos.js`.

## Registro en Google Forms (ingreso, salida y notas)

La academia puede enviar automáticamente a dos formularios de Google del profesor:

- **Ingreso y salida**: un registro de *Ingreso* al abrir la academia (una vez por inicio de sesión) y uno de *Salida* al pulsar
  «Salir» o cerrar la pestaña, con la hora de ingreso, la de salida y la **duración en minutos**. Si una sesión tiene varias salidas
  (por ejemplo, porque se recargó la página), la última es la definitiva (columna «Identificador de la sesión»).
- **Notas y actividades**: lección leída, reto superado, cada intento de quiz (porcentaje y **nota de 0 a 5**) y módulo completado,
  con el XP, el nivel y los módulos completados del estudiante.

**Estado: activo.** Los formularios se crearon el 8 de octubre de 2026 en el Drive del profesor (proyecto de Apps Script
«Academia Bio-Python · Formularios») y `js/registro-config.js` ya tiene sus direcciones. Las respuestas llegan a la hoja
«Academia Bio-Python · Registros» (pestañas «Ingreso y salida» y «Notas y actividades»). Al autorizar el script, Google pide
**marcar la casilla de cada permiso** (hojas de cálculo y formularios); si no se marcan, aparece «Este proyecto necesita
acceder a tu cuenta de Google».

Para crearlos de nuevo en otra cuenta: ejecute `docs/crear_formularios.gs` en https://script.google.com (crea los dos formularios y la hoja de respuestas
en su Drive) y copie el bloque `REGISTRO_CONFIG` que imprime en `js/registro-config.js`. Sin esa configuración no se envía nada.
El administrador no se registra; sin internet, los registros se guardan y se reenvían al volver a abrir la academia. En «Mis logros»
el estudiante ve un aviso de que su actividad se registra para el profesor.

## Videos del canal

Para agregar un video, añada su id y título en `TITULOS` de `js/videos.js` y póngalo en el tema que corresponda
(`TEMAS`: nombre, destinos `#/modulo/<id>` o `#/recursos/<id>`, qué se aprende, ids). Si un módulo recibe su primer video,
quítelo de `SIN`. YouTube no reproduce videos incrustados cuando la aplicación se abre como archivo local (Error 153);
publicada en un sitio web (GitHub Pages) funcionan.

## Uso

Abra `index.html` en un navegador moderno (Chrome, Edge, Firefox) con conexión a internet, o publíquela
en GitHub Pages. No requiere instalar nada.

Versión 5 · octubre de 2026. Historial en `CHANGELOG.md`.
