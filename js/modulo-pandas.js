/**
 * Academia Bio-Python · Módulo «Bases de datos con pandas»
 * Manejo de datos con pandas en la plataforma (Python en el navegador) y en Google Colab:
 * crear DataFrames, cargar datos desde el computador, explorar, filtrar, limpiar, agrupar, combinar,
 * fechas, gráficos y exportar. Los ejemplos usan datos de varias disciplinas (js/datos-pandas.js).
 */
(() => {
    const e = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const C = codigo => `<pre class="pd-codigo">${e(codigo.trim())}</pre>`;
    const T = (id, titulo, cuerpo) => `<section class="pd-tema" id="pd-${id}"><h3 class="pd-titulo">${titulo}</h3>${cuerpo}</section>`;
    const nota = (tipo, html) => `<div class="pd-nota ${tipo}">${html}</div>`;
    const ir = id => `document.getElementById('pd-${id}').scrollIntoView({behavior:'smooth',block:'start'})`;

    const INDICE = [
        ['que-es', '¿Qué es pandas?'], ['donde', 'Plataforma o Colab'], ['crear', 'Crear DataFrames'], ['cargar', 'Cargar datos del PC'],
        ['explorar', 'Explorar'], ['seleccionar', 'Seleccionar'], ['filtrar', 'Filtrar'], ['ordenar', 'Ordenar'],
        ['columnas', 'Nuevas columnas'], ['limpiar', 'Limpiar datos'], ['agrupar', 'Agrupar y resumir'], ['combinar', 'Combinar tablas'],
        ['fechas', 'Fechas y texto'], ['graficos', 'Gráficos'], ['exportar', 'Exportar'], ['chuleta', 'Resumen rápido']
    ];

    const tablaDatos = () => `<table class="pd-tabla"><tr><th>Archivo</th><th>Disciplina</th><th>Contenido</th><th></th></tr>
        ${Object.entries(INFO_DATOS_PANDAS).map(([n, [d, c]]) => `<tr><td><code>${n}</code></td><td>${d}</td><td>${c}</td>
        <td><button class="boton peq" onclick="descargarDatoPractica('${n}')"><i class="fas fa-download"></i>CSV</button></td></tr>`).join('')}</table>`;

    const contenido = () => `
<div class="pd">
<h2 class="text-2xl font-bold theme-text-primary mb-2">Bases de datos con pandas</h2>
<p class="theme-text-secondary mb-4">Aprende a crear, cargar, limpiar, analizar y graficar tablas de datos con <b>pandas</b>, la librería
de Python más usada para manejar datos en cualquier disciplina: comercio, educación, salud, clima, biología, ingeniería, economía…
Todos los ejemplos tienen el botón <b>▶ Probar</b> y funcionan aquí mismo, en la plataforma.</p>
<div class="pd-indice">${INDICE.map(([id, t], i) => `<button class="boton peq" onclick="${ir(id)}">${i + 1}. ${t}</button>`).join('')}</div>

${T('que-es', '1. ¿Qué es pandas y qué es un DataFrame?', `
<p>Un <b>DataFrame</b> es una tabla: filas (cada registro: un estudiante, una venta, un paciente) y columnas (cada variable: nombre, nota,
precio, edad). Es como una hoja de Excel o una tabla de una base de datos, pero manejada con código, lo que permite repetir el análisis
con miles o millones de filas en segundos. Cada columna sola es una <b>Series</b>.</p>
<table class="pd-tabla"><tr><th>Concepto</th><th>En pandas</th><th>Equivale a</th></tr>
<tr><td>Tabla</td><td><code>DataFrame</code></td><td>Hoja de cálculo, tabla SQL</td></tr>
<tr><td>Columna</td><td><code>Series</code> (<code>df["nota1"]</code>)</td><td>Una variable</td></tr>
<tr><td>Fila</td><td>Un registro (<code>df.loc[0]</code>)</td><td>Una observación</td></tr>
<tr><td>Índice</td><td><code>df.index</code></td><td>Número o etiqueta de cada fila</td></tr></table>
${C(`import pandas as pd          # la forma estándar de importarlo

df = pd.read_csv("estudiantes.csv")
mostrar(df.head())           # mostrar() dibuja la tabla en la consola de la academia
print(df.shape)              # (filas, columnas)`)}
${nota('info', '<b>mostrar(df)</b> es una ayuda de esta plataforma para ver tablas bonitas. En Google Colab basta con escribir <code>df</code> en la última línea de la celda (o <code>display(df)</code>). <code>print(df)</code> funciona en ambos.')}`)}

${T('donde', '2. ¿Dónde trabajar: en la plataforma o en Google Colab?', `
<table class="pd-tabla"><tr><th></th><th>Plataforma Bio-Python</th><th>Google Colab</th></tr>
<tr><td>Qué es</td><td>Python dentro de tu navegador (Pyodide)</td><td>Python en servidores de Google, en «notebooks»</td></tr>
<tr><td>Cuenta</td><td>La de la academia</td><td>Cuenta de Google</td></tr>
<tr><td>Crear</td><td>Paso <b>Laboratorio</b> de este módulo o <b>Laboratorio libre</b></td><td><code>colab.new</code> o Drive → Nuevo → Google Colaboratory</td></tr>
<tr><td>Cargar archivos</td><td>Botón <b><i class="fas fa-upload"></i> Subir</b> del laboratorio</td><td>Panel de archivos, <code>files.upload()</code>, Google Drive o una URL</td></tr>
<tr><td>Datos de práctica</td><td>Ya cargados: <code>pd.read_csv("ventas.csv")</code></td><td>Descárgalos (tabla de abajo) y súbelos</td></tr>
<tr><td>¿Se guardan?</td><td>El código sí; los archivos subidos se borran al recargar la página</td><td>El notebook sí (en Drive); los archivos subidos se borran al cerrar la sesión</td></tr>
<tr><td>Ideal para</td><td>Practicar rápido, retos, sin instalar nada</td><td>Proyectos grandes, trabajo en grupo, archivos pesados</td></tr></table>
${nota('consejo', 'Todo el código de pandas de este módulo funciona igual en las dos plataformas. Lo único que cambia es <b>cómo llega el archivo</b> a Python. La guía completa de Colab está en el paso <b><i class="fab fa-google"></i> Colab</b> de este módulo.')}`)}

${T('crear', '3. Crear DataFrames desde cero', `
<p><b>Desde un diccionario</b> (cada clave es una columna):</p>
${C(`import pandas as pd

datos = {
    "producto": ["Café", "Té", "Chocolate", "Agua"],
    "precio": [3500, 2800, 4200, 2000],
    "stock": [12, 30, 8, 50]
}
df = pd.DataFrame(datos)
mostrar(df)
print("Columnas:", list(df.columns))`)}
<p><b>Desde una lista de filas</b> (cada lista interna es una fila):</p>
${C(`import pandas as pd

filas = [
    ["Medellín", 2.6, 1495],
    ["Bogotá", 7.9, 2640],
    ["Cali", 2.3, 1018],
]
ciudades = pd.DataFrame(filas, columns=["ciudad", "millones_hab", "altitud_m"])
mostrar(ciudades)`)}
<p><b>Una Series</b> (una sola columna) y una tabla con fechas:</p>
${C(`import pandas as pd

notas = pd.Series([4.5, 3.2, 2.8], index=["Ana", "Luis", "Sara"], name="nota")
print(notas)
print("Promedio:", notas.mean())

dias = pd.DataFrame({"fecha": pd.date_range("2026-01-01", periods=5, freq="D"),
                     "pasos": [5200, 7300, 6100, 9800, 4300]})
mostrar(dias)`)}`)}

${T('cargar', '4. Cargar datos desde tu PC o laptop', `
<h4>En la plataforma</h4>
<ol class="pd-pasos">
<li>Ve al paso <b>Laboratorio</b> (o al Laboratorio libre).</li>
<li>Pulsa <b><i class="fas fa-upload"></i> Subir</b> y elige tu archivo (<code>.csv</code>, <code>.xlsx</code>, <code>.json</code>, <code>.txt</code>). Puedes elegir varios.</li>
<li>La consola te muestra la línea exacta para leerlo, por ejemplo <code>df = pd.read_csv("mis_datos.csv")</code>, y el botón <b>Usar</b> la escribe en el editor.</li>
<li>Con <b><i class="fas fa-folder-open"></i> Archivos</b> ves todos los archivos disponibles y descargas los que tu programa cree.</li>
</ol>
${nota('atencion', 'Los archivos que subes viven en la memoria del navegador: si recargas la página, súbelos otra vez. Tus datos no salen de tu computador.')}
<h4>En Google Colab (resumen)</h4>
${C(`# Celda 1: elegir el archivo desde tu PC
from google.colab import files
subidos = files.upload()          # abre la ventana para escoger el archivo

# Celda 2: leerlo
import pandas as pd
df = pd.read_csv("mis_datos.csv")   # el mismo nombre del archivo subido
df.head()`)}
<p>Otras formas (panel de archivos, Google Drive, URL, Google Sheets) en el paso <b>Colab</b>.</p>
<h4>Formatos y opciones frecuentes</h4>
<table class="pd-tabla"><tr><th>Situación</th><th>Código</th></tr>
<tr><td>CSV normal (separado por comas)</td><td><code>pd.read_csv("datos.csv")</code></td></tr>
<tr><td>CSV de Excel en español (punto y coma, coma decimal)</td><td><code>pd.read_csv("datos.csv", sep=";", decimal=",")</code></td></tr>
<tr><td>Tildes o «ñ» se ven mal</td><td><code>pd.read_csv("datos.csv", encoding="latin-1")</code></td></tr>
<tr><td>Excel</td><td><code>pd.read_excel("datos.xlsx", sheet_name="Hoja1")</code></td></tr>
<tr><td>JSON</td><td><code>pd.read_json("datos.json")</code></td></tr>
<tr><td>Solo algunas columnas</td><td><code>pd.read_csv("datos.csv", usecols=["fecha", "total"])</code></td></tr>
<tr><td>Fechas como fechas</td><td><code>pd.read_csv("datos.csv", parse_dates=["fecha"])</code></td></tr></table>
<h4>Datos de práctica</h4>
<p>Estos archivos ya están cargados en la plataforma. Descárgalos para usarlos en Colab o en Excel:</p>
${tablaDatos()}
${C(`import pandas as pd

for archivo in ["ventas.csv", "estudiantes.csv", "clima.csv", "pacientes.csv", "plantas.csv", "productos.csv"]:
    tabla = pd.read_csv(archivo)
    print(f"{archivo:16} {tabla.shape[0]:4} filas  {tabla.shape[1]} columnas")`)}`)}

${T('explorar', '5. Explorar: conocer la tabla antes de analizar', `
${C(`import pandas as pd
df = pd.read_csv("ventas.csv")

mostrar(df.head(3))     # primeras filas (df.tail() para las últimas)
print(df.shape)         # (filas, columnas)
print(df.dtypes)        # tipo de cada columna
df.info()               # resumen: tipos y valores no nulos`)}
${C(`import pandas as pd
df = pd.read_csv("estudiantes.csv")

mostrar(df.describe())                 # estadística de las columnas numéricas
print(df["programa"].value_counts())   # frecuencia de cada categoría
print(df["programa"].unique())         # valores distintos
print("Programas distintos:", df["programa"].nunique())`)}
${nota('consejo', '<b>describe()</b> da conteo, media, desviación estándar, mínimo, cuartiles y máximo de cada columna numérica en una sola línea.')}`)}

${T('seleccionar', '6. Seleccionar columnas y filas', `
${C(`import pandas as pd
df = pd.read_csv("estudiantes.csv")

print(df["nombre"].head(3))                    # una columna → Series
mostrar(df[["nombre", "programa", "nota1"]].head(3))  # varias columnas → DataFrame

print(df.loc[0])                                # fila con etiqueta 0
mostrar(df.loc[0:4, ["nombre", "nota1"]])        # filas 0 a 4 (incluida) y columnas por nombre
mostrar(df.iloc[0:3, 0:2])                       # por posición: filas 0-2, columnas 0-1
print(df.loc[2, "nota3"])                       # un solo valor`)}
${nota('info', '<b>loc</b> usa etiquetas (nombres de filas y columnas) e incluye el final; <b>iloc</b> usa posiciones numéricas y no incluye el final, igual que las listas de Python.')}`)}

${T('filtrar', '7. Filtrar filas con condiciones', `
${C(`import pandas as pd
df = pd.read_csv("estudiantes.csv")

aprobados = df[df["nota1"] >= 3.0]
print("Aprobaron el primer parcial:", len(aprobados))

# Varias condiciones: & (y), | (o), ~ (no). ¡Cada condición entre paréntesis!
bio_buenos = df[(df["programa"] == "Biología") & (df["nota1"] >= 4.0)]
mostrar(bio_buenos[["nombre", "nota1"]])

salud = df[df["programa"].isin(["Medicina", "Psicología"])]
print("Medicina o Psicología:", len(salud))

medios = df[df["asistencia"].between(70, 85)]
print("Asistencia entre 70 y 85:", len(medios))`)}
${C(`import pandas as pd
clima = pd.read_csv("clima.csv")

# query(): la misma idea escrita como texto
calurosos = clima.query("ciudad == 'Cali' and temp_max > 31")
mostrar(calurosos)

# Filtrar texto
v = pd.read_csv("ventas.csv")
con_a = v[v["producto"].str.contains("a")]
print(con_a["producto"].unique())`)}`)}

${T('ordenar', '8. Ordenar y encontrar los mayores', `
${C(`import pandas as pd
df = pd.read_csv("estudiantes.csv")

mostrar(df.sort_values("nota1", ascending=False).head(5))          # de mayor a menor
mostrar(df.sort_values(["programa", "nota1"], ascending=[True, False]).head(6))
mostrar(df.nlargest(3, "asistencia")[["nombre", "asistencia"]])     # los 3 mayores
mostrar(df.nsmallest(3, "nota2")[["nombre", "nota2"]])              # los 3 menores`)}`)}

${T('columnas', '9. Crear y transformar columnas', `
${C(`import pandas as pd
v = pd.read_csv("ventas.csv")

v["total"] = v["cantidad"] * v["precio_unitario"]          # operación entre columnas
v["iva"] = (v["total"] * 0.19).round(0)
v["tamaño"] = v["cantidad"].apply(lambda c: "grande" if c >= 15 else "normal")
mostrar(v.head())`)}
${C(`import pandas as pd
import numpy as np
e = pd.read_csv("estudiantes.csv")

e["promedio"] = e[["nota1", "nota2", "nota3"]].mean(axis=1).round(2)   # promedio por fila
e["estado"] = np.where(e["promedio"] >= 3.0, "Aprobó", "Reprobó")
e = e.rename(columns={"asistencia": "asistencia_%"})
e = e.drop(columns=["semestre"])                                     # quitar una columna
mostrar(e.head())
print(e["estado"].value_counts())`)}`)}

${T('limpiar', '10. Limpiar datos: faltantes, duplicados y tipos', `
<p>Los datos reales casi nunca vienen perfectos. <code>pacientes.csv</code> tiene celdas vacías y filas repetidas a propósito.</p>
${C(`import pandas as pd
p = pd.read_csv("pacientes.csv")

print(p.isna().sum())                    # faltantes por columna
print("Filas duplicadas:", p.duplicated().sum())

p = p.drop_duplicates()                  # quitar duplicados
mediana = p["edad"].median()
p["edad"] = p["edad"].fillna(mediana)    # rellenar con la mediana
p = p.dropna(subset=["presion_sistolica"])   # o eliminar las filas sin ese dato
print("Filas finales:", len(p), "| mediana usada:", mediana)`)}
${C(`import pandas as pd

sucio = pd.DataFrame({"ciudad": [" medellín", "BOGOTÁ ", "Cali"], "valor": ["10", "20,5", "n/d"]})
sucio["ciudad"] = sucio["ciudad"].str.strip().str.title()          # espacios y mayúsculas
sucio["valor"] = pd.to_numeric(sucio["valor"].str.replace(",", "."), errors="coerce")  # texto → número
mostrar(sucio)
print(sucio.dtypes)`)}
${nota('consejo', '<code>errors="coerce"</code> convierte en <code>NaN</code> (faltante) lo que no se puede leer como número, en vez de dar error.')}`)}

${T('agrupar', '11. Agrupar y resumir (groupby, tablas dinámicas)', `
${C(`import pandas as pd
c = pd.read_csv("clima.csv")

print(c.groupby("ciudad")["temp_max"].mean().round(1))      # promedio por grupo
resumen = c.groupby("ciudad").agg(
    maxima=("temp_max", "max"),
    minima=("temp_min", "min"),
    lluvia_total=("lluvia_mm", "sum"),
    dias=("fecha", "count"))
mostrar(resumen)`)}
${C(`import pandas as pd
v = pd.read_csv("ventas.csv")
v["total"] = v["cantidad"] * v["precio_unitario"]

tabla = pd.pivot_table(v, values="total", index="region", columns="producto", aggfunc="sum", fill_value=0)
mostrar(tabla)                                   # tabla dinámica, como en Excel
print(pd.crosstab(v["region"], v["producto"]))   # cuántas ventas por combinación`)}
${C(`import pandas as pd
pl = pd.read_csv("plantas.csv")
mostrar(pl.groupby("especie").mean().round(2))   # biología: medidas promedio por especie`)}`)}

${T('combinar', '12. Combinar tablas (merge y concat)', `
${C(`import pandas as pd
v = pd.read_csv("ventas.csv")
prod = pd.read_csv("productos.csv")

unida = v.merge(prod[["producto", "categoria"]], on="producto", how="left")   # como BUSCARV
unida["total"] = unida["cantidad"] * unida["precio_unitario"]
print(unida.groupby("categoria")["total"].sum().sort_values(ascending=False))`)}
${C(`import pandas as pd

enero = pd.DataFrame({"mes": ["ene"] * 2, "ventas": [100, 150]})
febrero = pd.DataFrame({"mes": ["feb"] * 2, "ventas": [120, 90]})
juntas = pd.concat([enero, febrero], ignore_index=True)    # una tabla debajo de la otra
mostrar(juntas)`)}
${nota('info', '<b>how</b> en <code>merge</code>: <code>"inner"</code> (solo coincidencias), <code>"left"</code> (todas las filas de la izquierda), <code>"right"</code>, <code>"outer"</code> (todas).')}`)}

${T('fechas', '13. Fechas y texto', `
${C(`import pandas as pd
v = pd.read_csv("ventas.csv", parse_dates=["fecha"])
v["total"] = v["cantidad"] * v["precio_unitario"]

v["mes"] = v["fecha"].dt.month
v["dia_semana"] = v["fecha"].dt.day_name()
print(v.groupby("mes")["total"].sum())                 # ventas por mes
print(v[v["fecha"] >= "2025-06-01"].shape[0], "ventas desde junio")`)}
${C(`import pandas as pd
e = pd.read_csv("estudiantes.csv")

e["apellido"] = e["nombre"].str.split(" ").str[1]
e["inicial"] = e["nombre"].str[0]
e["programa_may"] = e["programa"].str.upper()
mostrar(e[["nombre", "apellido", "inicial", "programa_may"]].head())`)}`)}

${T('graficos', '14. Gráficos con pandas', `
${C(`import pandas as pd
import matplotlib.pyplot as plt
c = pd.read_csv("clima.csv", parse_dates=["fecha"])

tabla = c.pivot_table(values="temp_max", index="fecha", columns="ciudad")
tabla.plot(figsize=(8, 4), title="Temperatura máxima en marzo")
plt.ylabel("°C")
plt.show()`)}
${C(`import pandas as pd
import matplotlib.pyplot as plt
v = pd.read_csv("ventas.csv")
v["total"] = v["cantidad"] * v["precio_unitario"]

v.groupby("region")["total"].sum().plot(kind="bar", color="#3776ab", title="Ventas por región")
plt.show()
pd.read_csv("estudiantes.csv")["nota1"].plot(kind="hist", bins=10, title="Distribución de notas")
plt.show()
pd.read_csv("plantas.csv").plot(kind="scatter", x="largo_petalo", y="ancho_petalo", title="Pétalos")
plt.show()`)}
${nota('info', 'Tipos de <code>kind</code>: <code>"line"</code>, <code>"bar"</code>, <code>"barh"</code>, <code>"hist"</code>, <code>"box"</code>, <code>"scatter"</code>, <code>"pie"</code>.')}`)}

${T('exportar', '15. Guardar y exportar resultados', `
${C(`import pandas as pd
e = pd.read_csv("estudiantes.csv")
e["promedio"] = e[["nota1", "nota2", "nota3"]].mean(axis=1).round(2)

resumen = e.groupby("programa")["promedio"].mean().round(2).reset_index()
resumen.to_csv("resumen_programas.csv", index=False)        # CSV
resumen.to_excel("resumen_programas.xlsx", index=False)     # Excel
print("Archivos creados. Descárgalos con el botón Archivos del laboratorio.")`)}
<p>En la plataforma: botón <b><i class="fas fa-folder-open"></i> Archivos</b> → <b>Descargar</b>. En Colab:
<code>from google.colab import files; files.download("resumen_programas.csv")</code>.</p>`)}

${T('chuleta', '16. Resumen rápido de pandas', `
<table class="pd-tabla"><tr><th>Quiero…</th><th>Código</th></tr>
<tr><td>Leer un CSV / Excel</td><td><code>pd.read_csv("a.csv")</code> · <code>pd.read_excel("a.xlsx")</code></td></tr>
<tr><td>Ver el inicio, tamaño, tipos</td><td><code>df.head()</code> · <code>df.shape</code> · <code>df.info()</code></td></tr>
<tr><td>Estadística rápida</td><td><code>df.describe()</code> · <code>df["col"].mean()</code></td></tr>
<tr><td>Contar categorías</td><td><code>df["col"].value_counts()</code></td></tr>
<tr><td>Elegir columnas / filas</td><td><code>df[["a", "b"]]</code> · <code>df.loc[filas, cols]</code> · <code>df.iloc[0:5]</code></td></tr>
<tr><td>Filtrar</td><td><code>df[(df["a"] > 3) &amp; (df["b"] == "x")]</code></td></tr>
<tr><td>Ordenar</td><td><code>df.sort_values("a", ascending=False)</code></td></tr>
<tr><td>Nueva columna</td><td><code>df["c"] = df["a"] * df["b"]</code></td></tr>
<tr><td>Faltantes</td><td><code>df.isna().sum()</code> · <code>df.fillna(0)</code> · <code>df.dropna()</code></td></tr>
<tr><td>Duplicados</td><td><code>df.drop_duplicates()</code></td></tr>
<tr><td>Agrupar</td><td><code>df.groupby("g")["a"].mean()</code></td></tr>
<tr><td>Tabla dinámica</td><td><code>pd.pivot_table(df, values="a", index="f", columns="c", aggfunc="sum")</code></td></tr>
<tr><td>Unir tablas</td><td><code>df1.merge(df2, on="clave")</code> · <code>pd.concat([df1, df2])</code></td></tr>
<tr><td>Graficar</td><td><code>df.plot(kind="bar")</code></td></tr>
<tr><td>Guardar</td><td><code>df.to_csv("salida.csv", index=False)</code></td></tr></table>`)}
</div>`;

    const colab = `
<div class="pd">
<h3 class="text-xl font-semibold theme-text-primary mb-2"><i class="fab fa-google"></i> pandas en Google Colab, paso a paso</h3>
<p class="theme-text-secondary mb-4">Colab es un cuaderno (notebook) de Python en la nube de Google: no instalas nada, ya trae pandas, numpy y matplotlib, y
guarda tu trabajo en Google Drive. Necesitas una cuenta de Google.</p>
<div class="flex flex-wrap gap-3 mb-4">
<button class="boton primario" onclick="window.open('https://colab.research.google.com/#create=true', '_blank')"><i class="fab fa-google"></i>Crear un notebook nuevo</button>
<a class="boton" href="#/videos"><i class="fab fa-youtube" style="color:#ef4444"></i>Videos del profe sobre Colab y CSV</a>
</div>

<h4 class="pd-titulo">1. Crear el notebook</h4>
<ol class="pd-pasos">
<li>Entra a <b>colab.research.google.com</b> (o escribe <code>colab.new</code> en el navegador) e inicia sesión con Google.</li>
<li>Pulsa <b>Nuevo cuaderno</b>. También puedes crearlo desde Google Drive: <b>Nuevo → Más → Google Colaboratory</b>.</li>
<li>Cámbiale el nombre arriba a la izquierda (por ejemplo <code>analisis_ventas.ipynb</code>).</li>
<li>Escribe código en una celda y ejecútala con <b>Shift+Enter</b> (ejecuta y pasa a la siguiente) o con el botón ▶.</li>
<li>Usa <b>+ Código</b> para nuevas celdas de código y <b>+ Texto</b> para notas (títulos, explicaciones).</li>
</ol>
${C(`import pandas as pd
print(pd.__version__)     # Colab ya trae pandas instalado`)}

<h4 class="pd-titulo">2. Cargar datos desde tu PC o laptop: cinco formas</h4>
<p><b>a) Panel de archivos (arrastrar y soltar).</b> Pulsa el ícono de carpeta 📁 en la barra izquierda, arrastra tu archivo o usa el botón
«Subir al almacenamiento de sesión». Luego:</p>
${C(`import pandas as pd
df = pd.read_csv("ventas.csv")      # el archivo quedó en /content/
df.head()`)}
<p><b>b) Con código: <code>files.upload()</code>.</b> Aparece un botón «Elegir archivos» debajo de la celda.</p>
${C(`from google.colab import files
subidos = files.upload()                 # escoge uno o varios archivos
nombre = list(subidos.keys())[0]         # nombre del primero
import pandas as pd
df = pd.read_csv(nombre)
df.head()`)}
<p><b>c) Desde Google Drive</b> (los archivos quedan guardados, no se borran):</p>
${C(`from google.colab import drive
drive.mount("/content/drive")            # pide permiso la primera vez

import pandas as pd
df = pd.read_csv("/content/drive/MyDrive/datos/ventas.csv")   # ruta dentro de tu Drive`)}
<p><b>d) Desde una dirección web (URL)</b>, por ejemplo un CSV en GitHub (usa el enlace «Raw») o publicado en internet:</p>
${C(`import pandas as pd
url = "https://raw.githubusercontent.com/mwaskom/seaborn-data/master/tips.csv"
propinas = pd.read_csv(url)
propinas.head()`)}
<p><b>e) Desde Google Sheets.</b> En la hoja: <b>Archivo → Compartir → Publicar en la web → CSV</b>, copia el enlace y:</p>
${C(`import pandas as pd
enlace = "https://docs.google.com/spreadsheets/d/e/TU_ID/pub?output=csv"
hoja = pd.read_csv(enlace)`)}
<p><b>Excel</b>: <code>pd.read_excel("archivo.xlsx", sheet_name="Hoja1")</code>. Para convertir una hoja de Excel en CSV: en Excel, <b>Archivo → Guardar como → CSV UTF-8</b>.</p>

<h4 class="pd-titulo">3. Trabajar con los datos</h4>
<p>Todo el código de la lección (explorar, filtrar, agrupar, combinar, graficar) funciona igual. Diferencias: en Colab la última línea de la celda se
muestra sola (no hace falta <code>mostrar()</code>) y puedes usar <code>display(df)</code> en medio de la celda.</p>

<h4 class="pd-titulo">4. Guardar y descargar resultados</h4>
${C(`resumen = df.groupby("region")["cantidad"].sum().reset_index()
resumen.to_csv("resumen.csv", index=False)

from google.colab import files
files.download("resumen.csv")            # se descarga a tu computador

# o guárdalo en Drive (si lo montaste):
resumen.to_csv("/content/drive/MyDrive/resumen.csv", index=False)`)}

<h4 class="pd-titulo">5. Consejos</h4>
<ul class="pd-pasos">
<li>Los archivos subidos a la sesión <b>se borran</b> cuando Colab se desconecta; los de Drive no.</li>
<li>Si algo falla tras muchos cambios: <b>Entorno de ejecución → Reiniciar sesión</b> y ejecuta las celdas desde arriba.</li>
<li>Para trabajar en grupo: <b>Compartir</b> (arriba a la derecha), como en un documento de Google.</li>
<li>¿Falta una librería? <code>!pip install nombre</code> en una celda.</li>
<li>Descarga los <b>datos de práctica</b> desde la tabla de la lección (sección 4) y súbelos para repetir los ejemplos.</li>
</ul>
</div>`;

    modules['pandas'] = {
        title: 'Bases de datos con pandas',
        description: 'DataFrames, carga de datos y análisis',
        video: '',
        additionalVideos: [],
        get content() { return contenido(); },
        colabContent: colab,
        exercises: [
            {
                title: 'Tu primer DataFrame',
                description: 'Crea un DataFrame con las columnas "pais" (Colombia, Perú, Chile, México) y "poblacion_millones" (52.1, 34.0, 19.6, 129.0). Imprime su forma (shape) y la población total con 1 decimal.',
                template: 'import pandas as pd\n\n# Crea el diccionario y el DataFrame\n\n\n# Imprime df.shape y la suma de poblacion_millones con 1 decimal\n',
                solution: 'import pandas as pd\n\ndatos = {"pais": ["Colombia", "Perú", "Chile", "México"],\n         "poblacion_millones": [52.1, 34.0, 19.6, 129.0]}\ndf = pd.DataFrame(datos)\nprint(df.shape)\nprint(f"Población total: {df[\'poblacion_millones\'].sum():.1f} millones")'
            },
            {
                title: 'Comercio: total vendido',
                description: 'Lee "ventas.csv", crea la columna total = cantidad × precio_unitario e imprime el total vendido (suma de total) y el número de ventas.',
                template: 'import pandas as pd\n\nv = pd.read_csv("ventas.csv")\n# Crea la columna total\n\n# Imprime la suma de total y la cantidad de filas\n',
                solution: 'import pandas as pd\n\nv = pd.read_csv("ventas.csv")\nv["total"] = v["cantidad"] * v["precio_unitario"]\nprint("Total vendido:", v["total"].sum())\nprint("Número de ventas:", len(v))'
            },
            {
                title: 'Educación: ¿cuántos aprobaron?',
                description: 'Lee "estudiantes.csv", calcula el promedio de nota1, nota2 y nota3 de cada estudiante y cuenta cuántos tienen promedio mayor o igual a 3.0.',
                template: 'import pandas as pd\n\ne = pd.read_csv("estudiantes.csv")\n# Columna promedio (mean con axis=1)\n\n# Filtra promedio >= 3.0 e imprime cuántos son\n',
                solution: 'import pandas as pd\n\ne = pd.read_csv("estudiantes.csv")\ne["promedio"] = e[["nota1", "nota2", "nota3"]].mean(axis=1)\naprobados = e[e["promedio"] >= 3.0]\nprint("Aprobaron:", len(aprobados))'
            },
            {
                title: 'Meteorología: temperatura por ciudad',
                description: 'Lee "clima.csv" e imprime la temperatura máxima promedio de cada ciudad con 1 decimal (usa groupby).',
                template: 'import pandas as pd\n\nc = pd.read_csv("clima.csv")\n# Agrupa por ciudad y promedia temp_max\n',
                solution: 'import pandas as pd\n\nc = pd.read_csv("clima.csv")\nprint(c.groupby("ciudad")["temp_max"].mean().round(1))'
            },
            {
                title: 'Salud: limpiar datos',
                description: 'Lee "pacientes.csv". Imprime cuántas filas duplicadas hay, quítalas, rellena la edad faltante con la mediana e imprime la mediana usada y la edad promedio final con 1 decimal.',
                template: 'import pandas as pd\n\np = pd.read_csv("pacientes.csv")\n# 1. Duplicados\n\n# 2. Mediana y fillna\n\n# 3. Edad promedio final\n',
                solution: 'import pandas as pd\n\np = pd.read_csv("pacientes.csv")\nprint("Duplicados:", p.duplicated().sum())\np = p.drop_duplicates()\nmediana = p["edad"].median()\np["edad"] = p["edad"].fillna(mediana)\nprint("Mediana usada:", mediana)\nprint(f"Edad promedio: {p[\'edad\'].mean():.1f}")'
            },
            {
                title: 'Salud: índice de masa corporal',
                description: 'Con "pacientes.csv" (sin duplicados), crea la columna imc = peso_kg / altura_m² e imprime el IMC promedio de mujeres (F) y de hombres (M) con 2 decimales.',
                template: 'import pandas as pd\n\np = pd.read_csv("pacientes.csv").drop_duplicates()\n# Columna imc\n\n# Promedio por sexo con 2 decimales\n',
                solution: 'import pandas as pd\n\np = pd.read_csv("pacientes.csv").drop_duplicates()\np["imc"] = p["peso_kg"] / p["altura_m"] ** 2\nprint(p.groupby("sexo")["imc"].mean().round(2))'
            },
            {
                title: 'Comercio: los 3 productos más vendidos',
                description: 'Con "ventas.csv", suma la cantidad vendida de cada producto e imprime los 3 productos con más unidades y sus cantidades.',
                template: 'import pandas as pd\n\nv = pd.read_csv("ventas.csv")\n# groupby + sum + sort_values (o nlargest)\n',
                solution: 'import pandas as pd\n\nv = pd.read_csv("ventas.csv")\nunidades = v.groupby("producto")["cantidad"].sum()\nprint(unidades.sort_values(ascending=False).head(3))'
            },
            {
                title: 'Combinar: ventas por categoría',
                description: 'Une "ventas.csv" con "productos.csv" por la columna producto, calcula el total de cada venta y muestra el total vendido por categoría.',
                template: 'import pandas as pd\n\nv = pd.read_csv("ventas.csv")\nprod = pd.read_csv("productos.csv")\n# merge, columna total y groupby por categoria\n',
                solution: 'import pandas as pd\n\nv = pd.read_csv("ventas.csv")\nprod = pd.read_csv("productos.csv")\nu = v.merge(prod[["producto", "categoria"]], on="producto")\nu["total"] = u["cantidad"] * u["precio_unitario"]\nprint(u.groupby("categoria")["total"].sum())'
            },
            {
                title: 'Biología: medidas por especie',
                description: 'Lee "plantas.csv" e imprime el largo de pétalo promedio de cada especie con 2 decimales y la especie con el pétalo más largo en promedio.',
                template: 'import pandas as pd\n\npl = pd.read_csv("plantas.csv")\n# Promedio de largo_petalo por especie\n\n# Especie con el mayor promedio (idxmax)\n',
                solution: 'import pandas as pd\n\npl = pd.read_csv("plantas.csv")\nprom = pl.groupby("especie")["largo_petalo"].mean().round(2)\nprint(prom)\nprint("Pétalo más largo:", prom.idxmax())'
            },
            {
                title: 'Fechas: ventas por mes',
                description: 'Lee "ventas.csv" con la fecha como fecha, crea el total de cada venta y una columna mes, e imprime el total vendido en cada mes.',
                template: 'import pandas as pd\n\nv = pd.read_csv("ventas.csv", parse_dates=["fecha"])\n# total, mes (dt.month) y groupby\n',
                solution: 'import pandas as pd\n\nv = pd.read_csv("ventas.csv", parse_dates=["fecha"])\nv["total"] = v["cantidad"] * v["precio_unitario"]\nv["mes"] = v["fecha"].dt.month\nprint(v.groupby("mes")["total"].sum())'
            }
        ],
        quiz: [
            { question: '¿Qué es un DataFrame en pandas?', options: ['Una tabla con filas y columnas', 'Un gráfico de barras', 'Una lista de funciones', 'Un tipo de archivo de Excel'], correct: 0 },
            { question: '¿Cómo se importa pandas de la forma estándar?', options: ['import pandas as pd', 'from pandas import all', 'import pd', 'include pandas'], correct: 0 },
            { question: '¿Qué función lee un archivo CSV?', options: ['pd.open_csv()', 'pd.read_csv()', 'pd.load()', 'pd.csv()'], correct: 1 },
            { question: 'Un CSV de Excel en español usa punto y coma y coma decimal. ¿Cómo se lee?', options: ['pd.read_csv("a.csv")', 'pd.read_csv("a.csv", sep=";", decimal=",")', 'pd.read_excel("a.csv")', 'pd.read_csv("a.csv", sep=",")'], correct: 1 },
            { question: 'En Google Colab, ¿qué código abre la ventana para subir un archivo desde tu PC?', options: ['files.upload()', 'pd.upload()', 'drive.open()', 'colab.subir()'], correct: 0 },
            { question: '¿Qué devuelve df.shape?', options: ['Los nombres de las columnas', 'Una tupla (filas, columnas)', 'El tipo de cada columna', 'Las primeras 5 filas'], correct: 1 },
            { question: '¿Cuál filtra correctamente las filas con nota mayor que 3 y programa "Biología"?', options: ['df[df["nota"] > 3 and df["programa"] == "Biología"]', 'df[(df["nota"] > 3) & (df["programa"] == "Biología")]', 'df.filter(nota > 3, programa = "Biología")', 'df[df.nota > 3 & df.programa == "Biología"]'], correct: 1 },
            { question: '¿Qué diferencia hay entre loc e iloc?', options: ['No hay diferencia', 'loc usa etiquetas e iloc usa posiciones numéricas', 'iloc solo sirve para columnas', 'loc es más rápido'], correct: 1 },
            { question: '¿Cómo cuentas los valores faltantes de cada columna?', options: ['df.count_missing()', 'df.isna().sum()', 'df.null()', 'df.missing().count()'], correct: 1 },
            { question: '¿Qué hace df.groupby("ciudad")["temp"].mean()?', options: ['Ordena por ciudad', 'Calcula la temperatura promedio de cada ciudad', 'Elimina las ciudades repetidas', 'Cuenta las ciudades'], correct: 1 },
            { question: '¿Qué función une dos tablas usando una columna en común (como BUSCARV)?', options: ['pd.concat()', 'df.merge()', 'df.append()', 'df.join_columns()'], correct: 1 },
            { question: '¿Cómo guardas un DataFrame en CSV sin la columna del índice?', options: ['df.to_csv("a.csv", index=False)', 'df.save("a.csv")', 'pd.write_csv(df)', 'df.export(csv)'], correct: 0 }
        ]
    };
})();

// Descarga un conjunto de datos de práctica como archivo CSV
function descargarDatoPractica(nombre) {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([DATOS_PANDAS[nombre]], { type: 'text/csv;charset=utf-8' }));
    a.download = nombre;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}
