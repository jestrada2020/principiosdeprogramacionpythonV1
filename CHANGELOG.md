# Historial de cambios

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
