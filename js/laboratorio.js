/**
 * Academia Bio-Python · Laboratorio de código
 * - Ejecuta Python real en el navegador con Pyodide.
 * - input() lee de la caja «Entradas» (una por línea) y, si se agotan, pregunta en una ventana.
 * - Detecta bucles infinitos (límite de pasos) y muestra los gráficos de matplotlib.
 * - Traduce los errores de Python a explicaciones en español («Profe Pitón»).
 * - Verifica los retos comparando la salida del estudiante con la de la solución.
 */
const LAB = (() => {

    const PYODIDE_URL = 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/';
    const LIMITE_PASOS = 3000000;
    let py = null;
    let promesaCarga = null;
    let colaEntradas = [];
    let permitirVentana = true;
    let pandasListo = false;

    const ARRANQUE = String.raw`
import sys, io, builtins, traceback, json, base64, os, warnings
os.environ['MPLBACKEND'] = 'AGG'
warnings.filterwarnings('ignore', message='.*non-interactive.*')
warnings.filterwarnings('ignore', message='.*FigureCanvasAgg.*')
warnings.filterwarnings('ignore', message='.*non-GUI backend.*')
import js

class _BPLimite(Exception):
    pass

_bp_figs = []

def _bp_show(*args, **kwargs):
    # Reemplaza plt.show(): guarda cada figura abierta como imagen y la cierra,
    # así varios gráficos seguidos no se dibujan uno encima del otro
    plt = sys.modules.get('matplotlib.pyplot')
    if plt is None:
        return
    try:
        for n in plt.get_fignums():
            buf = io.BytesIO()
            plt.figure(n).savefig(buf, format='png', dpi=90, bbox_inches='tight')
            _bp_figs.append(base64.b64encode(buf.getvalue()).decode())
    finally:
        plt.close('all')

def _bp_preparar_graficos():
    import matplotlib
    matplotlib.use('AGG')
    import matplotlib.pyplot as plt
    plt.show = _bp_show

def _bp_ejecutar(codigo, limite):
    _bp_figs.clear()
    if 'matplotlib.pyplot' in sys.modules:
        sys.modules['matplotlib.pyplot'].show = _bp_show
    salida = io.StringIO()
    viejo_out, viejo_err, viejo_in = sys.stdout, sys.stderr, builtins.input
    sys.stdout = sys.stderr = salida
    pasos = [0]

    def _input(mensaje=''):
        salida.write(str(mensaje))
        valor = js.bpPedirEntrada(str(mensaje))
        if valor is None:
            raise EOFError('no hay más datos de entrada')
        valor = str(valor)
        salida.write('\x01' + valor + '\x02\n')
        return valor

    def _traza(marco, evento, arg):
        if marco.f_code.co_filename != '<tu código>':
            return None
        pasos[0] += 1
        if pasos[0] > limite:
            raise _BPLimite()
        return _traza

    def _mostrar(obj, filas=20):
        # Muestra un DataFrame o una Serie de pandas como tabla (en la consola de la academia)
        pd = sys.modules.get('pandas')
        if pd is not None and isinstance(obj, (pd.DataFrame, pd.Series)):
            tabla = obj.to_frame() if isinstance(obj, pd.Series) else obj
            html = tabla.head(filas).to_html(border=0, classes='tabla-df')
            pie = f'{tabla.shape[0]} filas × {tabla.shape[1]} columnas'
            if tabla.shape[0] > filas:
                pie += f' (se muestran las primeras {filas})'
            salida.write('\x03' + html + '<div class="df-pie">' + pie + '</div>\x04\n')
        else:
            salida.write(str(obj) + '\n')

    builtins.input = _input
    builtins.mostrar = _mostrar
    # Cada ejecución empieza limpia: logging conserva sus manejadores entre ejecuciones
    if 'logging' in sys.modules:
        _raiz = sys.modules['logging'].getLogger()
        for _h in _raiz.handlers[:]:
            _raiz.removeHandler(_h)
    error = None
    try:
        compilado = compile(codigo, '<tu código>', 'exec')
        sys.settrace(_traza)
        try:
            exec(compilado, {'__name__': '__main__', '__builtins__': builtins})
        finally:
            sys.settrace(None)
    except _BPLimite:
        error = {'tipo': 'TiempoAgotado', 'msg': '', 'linea': None, 'texto': ''}
    except SystemExit as e:
        if e.code not in (None, 0):
            error = {'tipo': 'SystemExit', 'msg': str(e.code), 'linea': None, 'texto': ''}
    except BaseException as e:
        linea, texto = None, ''
        if isinstance(e, SyntaxError):
            linea, texto = e.lineno, (e.text or '').rstrip()
        else:
            marcos = [m for m in traceback.extract_tb(e.__traceback__) if m.filename == '<tu código>']
            if marcos:
                linea, texto = marcos[-1].lineno, (marcos[-1].line or '')
        error = {'tipo': type(e).__name__, 'msg': str(e), 'linea': linea, 'texto': texto}
    finally:
        sys.settrace(None)
        sys.stdout, sys.stderr = viejo_out, viejo_err
        builtins.input = viejo_in

    _bp_show()
    figuras = list(_bp_figs)
    return json.dumps({'salida': salida.getvalue(), 'error': error, 'figuras': figuras})
`;

    // ---------- Carga de Pyodide ----------
    function avisarEstado(estado, texto) {
        const el = document.getElementById('estadoPython');
        if (!el) return;
        el.className = 'estado-python ' + estado;
        el.querySelector('.txt').textContent = texto;
    }

    function cargar() {
        if (promesaCarga) return promesaCarga;
        avisarEstado('', 'Preparando Python…');
        promesaCarga = (async () => {
            if (typeof loadPyodide === 'undefined') {
                await new Promise((ok, mal) => {
                    const s = document.createElement('script');
                    s.src = PYODIDE_URL + 'pyodide.js';
                    s.onload = ok; s.onerror = () => mal(new Error('sin conexión con el servidor de Pyodide'));
                    document.head.appendChild(s);
                });
            }
            py = await loadPyodide({ indexURL: PYODIDE_URL });
            py.runPython(ARRANQUE);
            copiarDatosPractica();
            avisarEstado('listo', 'Python listo');
            return py;
        })().catch(e => {
            promesaCarga = null;
            avisarEstado('error', 'Python sin conexión');
            throw e;
        });
        return promesaCarga;
    }

    window.bpPedirEntrada = function (mensaje) {
        if (colaEntradas.length) return colaEntradas.shift();
        if (!permitirVentana) return null;
        const v = window.prompt(mensaje && mensaje.trim() ? mensaje : 'Tu programa pide un dato (input):', '');
        return v === null ? null : v;
    };

    /**
     * Ejecuta código y devuelve { salida, error, figuras }.
     * entradas: texto con una entrada por línea. ventana: si se permite preguntar al agotarse.
     */
    async function ejecutar(codigo, entradas = '', ventana = true) {
        await cargar();
        try {
            await py.loadPackagesFromImports(codigo);
            if (/read_excel|to_excel|ExcelWriter/.test(codigo)) await asegurarOpenpyxl();
            if (/matplotlib|\.plot\(|\.hist\(|\.boxplot\(/.test(codigo)) {
                await py.loadPackage('matplotlib');
                py.runPython('_bp_preparar_graficos()');
            }
            if (/pandas/.test(codigo) && !pandasListo) {
                py.runPython("import pandas as _pd\n_pd.set_option('display.width', 120)\n_pd.set_option('display.max_columns', 20)");
                pandasListo = true;
            }
        } catch (e) { /* si un paquete no existe, el error aparecerá al ejecutar */ }
        colaEntradas = entradas ? entradas.replace(/\r/g, '').split('\n') : [];
        if (colaEntradas.length && colaEntradas[colaEntradas.length - 1] === '') colaEntradas.pop();
        permitirVentana = ventana;
        const f = py.globals.get('_bp_ejecutar');
        try {
            return JSON.parse(f(codigo, LIMITE_PASOS));
        } finally {
            f.destroy && f.destroy();
            colaEntradas = [];
        }
    }

    // ---------- Presentación ----------
    const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

    // Texto normal (escapado), entradas de input() en verde y tablas de mostrar() (HTML de pandas, que escapa las celdas)
    function salidaHTML(texto) {
        return texto.split(/\x03([\s\S]*?)\x04\n?/).map((parte, i) => i % 2
            ? `<div class="tabla-caja">${parte}</div>`
            : esc(parte).replace(/\x01([\s\S]*?)\x02/g, '<span class="entrada">$1</span>')).join('');
    }

    // ---------- Archivos del Python del navegador ----------
    const CARPETA = '/home/pyodide';
    function copiarDatosPractica() {
        if (typeof DATOS_PANDAS === 'undefined') return;
        Object.entries(DATOS_PANDAS).forEach(([nombre, texto]) => {
            try { py.FS.writeFile(`${CARPETA}/${nombre}`, texto); } catch (e) { /* sin acceso */ }
        });
    }

    async function subirArchivo(archivo) {
        await cargar();
        const nombre = archivo.name.replace(/[^\w.\-áéíóúñÁÉÍÓÚÑ ]/g, '_');
        const datos = new Uint8Array(await archivo.arrayBuffer());
        py.FS.writeFile(`${CARPETA}/${nombre}`, datos);
        if (/\.xlsx?$/i.test(nombre)) await asegurarOpenpyxl();
        return nombre;
    }

    function archivos() {
        if (!py) return [];
        return py.FS.readdir(CARPETA).filter(n => !n.startsWith('.')).map(n => {
            const st = py.FS.stat(`${CARPETA}/${n}`);
            return { nombre: n, bytes: st.size, carpeta: py.FS.isDir(st.mode), practica: typeof DATOS_PANDAS !== 'undefined' && n in DATOS_PANDAS };
        }).filter(a => !a.carpeta).sort((a, b) => a.practica - b.practica || a.nombre.localeCompare(b.nombre));
    }

    // pandas necesita openpyxl para Excel; si no viene con Pyodide, se instala desde PyPI con micropip
    async function asegurarOpenpyxl() {
        try { await py.loadPackage('openpyxl'); } catch (e) { /* no está en el repositorio de Pyodide */ }
        try { py.runPython('import openpyxl'); return; } catch (e) { /* hay que instalarlo */ }
        await py.loadPackage('micropip');
        await py.runPythonAsync("import micropip\nawait micropip.install('openpyxl')");
    }

    function leerArchivo(nombre) { return py.FS.readFile(`${CARPETA}/${nombre}`); }

    function codigoLectura(nombre) {
        const ext = (nombre.split('.').pop() || '').toLowerCase();
        if (ext === 'xlsx' || ext === 'xls') return `df = pd.read_excel("${nombre}")`;
        if (ext === 'json') return `df = pd.read_json("${nombre}")`;
        if (ext === 'tsv') return `df = pd.read_csv("${nombre}", sep="\\t")`;
        if (ext === 'txt') return `df = pd.read_csv("${nombre}", sep=None, engine="python")`;
        return `df = pd.read_csv("${nombre}")`;
    }

    function pintar(consola, r) {
        let html = r.salida ? salidaHTML(r.salida) : '';
        (r.figuras || []).forEach(b64 => { html += `<img alt="Gráfico generado por tu programa" src="data:image/png;base64,${b64}">`; });
        if (!html && !r.error) html = '<span class="vacio">✔ El programa terminó sin imprimir nada. Usa print() para ver resultados.</span>';
        consola.innerHTML = html;
        consola.scrollTop = consola.scrollHeight;
    }

    // ---------- Profe Pitón: errores en español ----------
    function explicar(err) {
        const m = err.msg || '';
        let titulo = err.tipo, exp = '', tip = '';
        let x;
        switch (err.tipo) {
            case 'NameError':
                x = m.match(/name '(.+?)' is not defined/);
                titulo = 'Nombre desconocido';
                exp = x ? `Python no conoce <code>${esc(x[1])}</code>.` : 'Usaste un nombre que Python no conoce.';
                tip = '¿Lo escribiste igual que cuando lo creaste? Python distingue mayúsculas de minúsculas, y la variable debe existir <i>antes</i> de usarla. Si querías un texto, ponlo entre comillas.';
                if ((x = m.match(/Did you mean: '(.+?)'/))) tip = `¿Quisiste decir <code>${esc(x[1])}</code>? ` + tip;
                break;
            case 'SyntaxError':
                titulo = 'Error de escritura (sintaxis)';
                exp = 'Python no entiende cómo está escrita una línea.';
                if (/expected ':'/.test(m)) tip = 'Falta los dos puntos <code>:</code> al final de la línea (después de <code>if</code>, <code>for</code>, <code>while</code>, <code>def</code>, <code>class</code>…).';
                else if (/unterminated string|EOL while scanning/.test(m)) tip = 'Abriste unas comillas y no las cerraste. Revisa que cada texto empiece y termine con la misma comilla.';
                else if (/was never closed/.test(m)) tip = 'Abriste un paréntesis, corchete o llave que nunca se cerró.';
                else if (/unmatched/.test(m)) tip = 'Hay un paréntesis o corchete de cierre que sobra.';
                else if (/Missing parentheses in call to 'print'/.test(m)) tip = 'En Python 3, <code>print</code> necesita paréntesis: <code>print("hola")</code>.';
                else if (/forgot a comma/.test(m)) tip = '¿Olvidaste una coma entre dos elementos?';
                else if (/cannot assign|assign to/.test(m)) tip = 'Del lado izquierdo de <code>=</code> solo puede ir un nombre de variable. Para comparar usa <code>==</code>.';
                else if (/invalid character/.test(m)) tip = 'Hay un carácter raro (por ejemplo comillas “tipográficas” copiadas de Word). Usa comillas rectas " o \'.';
                else tip = 'Revisa comillas, paréntesis, dos puntos y que no falte ningún operador.';
                break;
            case 'IndentationError':
            case 'TabError':
                titulo = 'Problema de sangría';
                exp = 'En Python los espacios al inicio de la línea son parte del código.';
                if (/expected an indented block/.test(m)) tip = 'Después de una línea que termina en <code>:</code> el bloque debe ir corrido hacia la derecha (4 espacios).';
                else if (/unexpected indent/.test(m)) tip = 'Esta línea tiene espacios de más al inicio. Alinéala con las demás de su bloque.';
                else tip = 'Las líneas de un mismo bloque deben tener exactamente la misma sangría. No mezcles tabuladores y espacios.';
                break;
            case 'TypeError':
                titulo = 'Tipos que no encajan';
                if (/can only concatenate str/.test(m) || /unsupported operand type.*'str'/.test(m)) {
                    exp = 'Intentaste unir texto con un número.';
                    tip = 'Convierte el número a texto con <code>str(n)</code>, o mejor usa un f-string: <code>print(f"Total: {n}")</code>. Si el número vino de <code>input()</code>, conviértelo con <code>int()</code> o <code>float()</code>.';
                } else if ((x = m.match(/'(\w+)' object is not callable/))) {
                    exp = `Pusiste paréntesis después de algo de tipo <code>${esc(x[1])}</code>, como si fuera una función.`;
                    tip = '¿Usaste como variable un nombre de función (por ejemplo <code>sum = 5</code> o <code>list = []</code>)? Cámbiale el nombre.';
                } else if (/missing \d+ required positional argument/.test(m)) {
                    exp = 'Llamaste una función con menos datos de los que necesita.';
                    tip = 'Revisa la definición con <code>def</code> y pásale todos los argumentos.';
                } else if (/takes \d+ positional argument/.test(m)) {
                    exp = 'Le diste a la función más datos de los que acepta.';
                    tip = 'Si es un método de una clase, recuerda que el primer parámetro debe ser <code>self</code>.';
                } else {
                    exp = 'Una operación recibió un dato de un tipo que no puede usar.';
                    tip = 'Usa <code>type(variable)</code> para ver de qué tipo es cada dato.';
                }
                break;
            case 'ValueError':
                titulo = 'Valor no válido';
                if (/invalid literal for int|could not convert string to float/.test(m)) {
                    exp = 'Intentaste convertir a número un texto que no es un número.';
                    tip = 'Revisa lo que escribiste en «Entradas». Para decimales usa punto (<code>3.5</code>), no coma.';
                } else { exp = 'El tipo del dato es correcto pero su valor no sirve para esa operación.'; tip = ''; }
                break;
            case 'ZeroDivisionError': titulo = 'División entre cero'; exp = 'Ningún número se puede dividir entre 0.'; tip = 'Antes de dividir, comprueba con un <code>if</code> que el divisor no sea cero.'; break;
            case 'IndexError': titulo = 'Posición fuera de la lista'; exp = 'Pediste una posición que no existe.'; tip = 'Las posiciones empiezan en 0: una lista de 3 elementos tiene las posiciones 0, 1 y 2. Usa <code>len(lista)</code> para saber cuántos hay.'; break;
            case 'KeyError': titulo = 'Clave inexistente'; exp = `El diccionario no tiene la clave ${esc(m)}.`; tip = 'Usa <code>dic.get(clave)</code> o comprueba antes con <code>if clave in dic:</code>.'; break;
            case 'AttributeError':
                titulo = 'Atributo o método inexistente';
                x = m.match(/'(\w+)' object has no attribute '(\w+)'/);
                exp = x ? `Los datos de tipo <code>${esc(x[1])}</code> no tienen <code>.${esc(x[2])}</code>.` : 'Ese objeto no tiene el atributo que pediste.';
                tip = x && x[2] === 'push' ? 'En Python se usa <code>.append()</code> para agregar a una lista.' : 'Escribe <code>dir(objeto)</code> para ver lo que sí tiene.';
                if ((x = m.match(/Did you mean: '(.+?)'/))) tip = `¿Quisiste decir <code>${esc(x[1])}</code>?`;
                break;
            case 'ModuleNotFoundError': case 'ImportError':
                titulo = 'Módulo no disponible';
                exp = 'Ese módulo no se puede importar aquí.';
                tip = 'Revisa el nombre. Algunos paquetes (por ejemplo flask) no funcionan dentro del navegador: practícalos en Google Colab o en tu computador.';
                break;
            case 'EOFError': titulo = 'Faltan datos de entrada'; exp = 'Tu programa pidió más datos con <code>input()</code> de los que escribiste.'; tip = 'Escribe un dato por línea en la caja «Entradas para input()».'; break;
            case 'RecursionError': titulo = 'Recursión sin fin'; exp = 'Una función se llamó a sí misma demasiadas veces.'; tip = 'Asegúrate de que la función tenga un caso base que detenga las llamadas.'; break;
            case 'TiempoAgotado': titulo = '¿Bucle infinito?'; exp = 'Tu programa ejecutó millones de pasos y lo detuvimos para que el navegador no se congele.'; tip = 'Revisa que la condición del <code>while</code> llegue a ser falsa (¿actualizas la variable dentro del bucle?).'; break;
            case 'FileNotFoundError': titulo = 'Archivo no encontrado'; exp = 'El archivo que intentas abrir no existe en este entorno.'; tip = 'Créalo primero con <code>open("archivo.txt", "w")</code> en el mismo programa.'; break;
            case 'UnboundLocalError': titulo = 'Variable local sin valor'; exp = 'Dentro de la función usas una variable antes de darle valor.'; tip = 'Si quieres modificar una variable de afuera, pásala como parámetro y devuelve el resultado.'; break;
            default: exp = 'Python encontró un problema al ejecutar tu programa.'; tip = 'Lee el mensaje original: suele decir exactamente qué pasó.';
        }
        const lugar = err.linea ? ` en la <b>línea ${err.linea}</b>${err.texto ? `: <code>${esc(err.texto.trim())}</code>` : ''}` : '';
        return `<div class="profe"><div class="cara">🐍</div><div>
            <b>Profe Pitón: ${titulo}${lugar}</b>${exp} ${tip}
            <div style="opacity:.7;font-size:.76rem;margin-top:6px" class="mono">${esc(err.tipo)}${m ? ': ' + esc(m) : ''}</div>
        </div></div>`;
    }

    // ---------- Editor ----------
    function crearEditor(contenedor, valor, opciones = {}) {
        contenedor.innerHTML = '';
        contenedor.classList.add('editor-caja');
        if (opciones.bajo) contenedor.classList.add('bajo');
        if (typeof CodeMirror === 'undefined') {
            const ta = document.createElement('textarea');
            ta.className = 'respaldo'; ta.spellcheck = false; ta.value = valor || '';
            ta.addEventListener('keydown', e => {
                if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') { e.preventDefault(); opciones.alEjecutar && opciones.alEjecutar(); }
                if (e.key === 'Tab') { e.preventDefault(); const p = ta.selectionStart; ta.value = ta.value.slice(0, p) + '    ' + ta.value.slice(ta.selectionEnd); ta.selectionStart = ta.selectionEnd = p + 4; }
            });
            contenedor.appendChild(ta);
            return { get: () => ta.value, set: v => { ta.value = v; }, focus: () => ta.focus(), refrescar() {} };
        }
        const cm = CodeMirror(contenedor, {
            value: valor || '', mode: 'python', lineNumbers: true, indentUnit: 4, tabSize: 4,
            matchBrackets: true, autoCloseBrackets: true, lineWrapping: false, viewportMargin: Infinity,
            extraKeys: {
                'Ctrl-Enter': () => opciones.alEjecutar && opciones.alEjecutar(),
                'Cmd-Enter': () => opciones.alEjecutar && opciones.alEjecutar(),
                Tab: c => c.somethingSelected() ? c.indentSelection('add') : c.replaceSelection('    ', 'end'),
                'Shift-Tab': c => c.indentSelection('subtract'),
                'Ctrl-/': 'toggleComment'
            }
        });
        if (opciones.alCambiar) cm.on('change', () => opciones.alCambiar(cm.getValue()));
        return { get: () => cm.getValue(), set: v => cm.setValue(v), focus: () => cm.focus(), refrescar: () => setTimeout(() => cm.refresh(), 20), cm };
    }

    // ---------- Verificación de retos ----------
    // Números de la salida (no cuentan los pegados a letras, como el 64 de «float64» o el 1 de «nota1»)
    const NUM = /(?<![\w.])-?\d+(?:[.,]\d+)?(?:e[-+]?\d+)?(?![\w])/gi;
    const limpiar = s => s.replace(/\x01[\s\S]*?\x02/g, '')
        .replace(/\x03([\s\S]*?)\x04/g, (m, h) => h.replace(/<\/(td|th)>/g, ' ').replace(/<\/tr>/g, '\n').replace(/<[^>]+>/g, '').replace(/&amp;/g, '&'));
    const sinTildes = s => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const palabras = s => sinTildes(s).split(/[^a-z0-9]+/).filter(w => w.length >= 3);
    const normal = s => sinTildes(s).replace(/[^a-z0-9]+/g, '');

    function numerosDe(s) { return (s.match(NUM) || []).map(t => ({ t: t.replace(',', '.'), v: parseFloat(t.replace(',', '.')) })); }

    function coincide(esperado, obtenidos) {
        const dec = (esperado.t.split('.')[1] || '').replace(/e.*/i, '').length;
        return obtenidos.some(o => {
            if (Math.abs(o.v - esperado.v) <= 1e-9 * Math.max(1, Math.abs(esperado.v))) return true;
            const f = Math.pow(10, dec);
            return Math.round(o.v * f) / f === Math.round(esperado.v * f) / f;
        });
    }

    /**
     * Devuelve { estado: 'ok' | 'falla' | 'error' | 'manual' | 'sin-cambios', ... }
     */
    async function verificar(codigo, solucion, plantilla, entradas) {
        if (!codigo.trim() || normal(codigo) === normal(plantilla || '')) return { estado: 'sin-cambios' };
        const a = await ejecutar(solucion, entradas, false);
        if (a.error) return { estado: 'manual', motivo: a.error };
        const b = await ejecutar(solucion, entradas, false);
        const r = await ejecutar(codigo, entradas, false);
        if (r.error) return { estado: 'error', resultado: r };

        const la = limpiar(a.salida).split('\n'), lb = limpiar(b.salida).split('\n');
        const fijas = la.filter((l, i) => l.trim() && l === lb[i]);
        const salidaEst = limpiar(r.salida);
        const numsEst = numerosDe(salidaEst);
        const faltan = [];
        const conNumeros = fijas.filter(l => numerosDe(l).length);
        if (conNumeros.length) {
            // Los números que solo repiten una entrada (p. ej. «radio 3.000») no se exigen
            const deEntrada = numerosDe(entradas || '').map(n => n.v);
            conNumeros.forEach(l => numerosDe(l).forEach(n => {
                if (deEntrada.some(v => Math.abs(v - n.v) < 1e-9)) return;
                if (!coincide(n, numsEst) && !faltan.includes(n.t)) faltan.push(n.t);
            }));
        } else if (fijas.length) {
            // Sin números: se comparan palabras. Las líneas idénticas a la solución (p. ej. el mensaje de input) no cuentan.
            const fijasSet = new Set(fijas);
            const delEst = new Set(palabras(salidaEst.split('\n').filter(l => !fijasSet.has(l)).join(' ')));
            // Palabras clave: las que cambian si cambian las entradas (p. ej. «par» / «impar»)
            let clave = new Set();
            if (entradas && entradas.trim()) {
                const otras = entradas.split('\n').map(x => /^-?\d+(\.\d+)?$/.test(x.trim()) ? String(+x + 1) : x + 'x').join('\n');
                const c = await ejecutar(solucion, otras, false);
                if (!c.error) {
                    const enOtra = new Set(palabras(limpiar(c.salida)));
                    clave = new Set(palabras(fijas.join(' ')).filter(w => !enOtra.has(w)));
                }
            }
            fijas.forEach(l => {
                if (salidaEst.split('\n').includes(l)) return;
                const p = palabras(l);
                const faltaClave = p.some(w => clave.has(w) && !delEst.has(w));
                if (p.length && (faltaClave || p.filter(w => delEst.has(w)).length / p.length < 0.5)) faltan.push(l.trim());
            });
        }
        // Si parte de la salida es aleatoria o variable, se piden al menos tantas líneas como la solución
        const lineasSol = la.filter(l => l.trim()).length;
        if (fijas.length < lineasSol && salidaEst.split('\n').filter(l => l.trim()).length < lineasSol) faltan.push(`${lineasSol} líneas de resultados`);
        if ((a.figuras || []).length && !(r.figuras || []).length) faltan.push('un gráfico');
        return faltan.length
            ? { estado: 'falla', faltan, referencia: limpiar(a.salida), resultado: r }
            : { estado: 'ok', resultado: r };
    }

    function entradasSugeridas(solucion) {
        const n = (solucion.match(/input\s*\(/g) || []).length;
        return [3, 4, 5, 6, 7, 8].slice(0, n).join('\n');
    }

    return { cargar, ejecutar, pintar, explicar, crearEditor, verificar, entradasSugeridas, esc, subirArchivo, archivos, leerArchivo, codigoLectura, get listo() { return !!py; } };
})();
