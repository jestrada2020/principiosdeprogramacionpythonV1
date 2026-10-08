/**
 * Academia Bio-Python · Núcleo de la aplicación (v5, octubre de 2026)
 * Navegación por direcciones (#/inicio, #/modulo/intro/quiz…), mapa de aventura,
 * lecciones por pasos (Lección → Laboratorio → Retos → Quiz), logros, recursos y evaluaciones.
 * El contenido de cada módulo sigue en js/modules-data.js.
 */

// ---------- Organización del curso ----------
const UNIDADES = [
    { n: 1, titulo: 'Primeros pasos',         desc: 'Instala, ejecuta y juega con números y textos', color: '#22c55e', modulos: ['intro', 'interpreter', 'basics'] },
    { n: 2, titulo: 'Lógica y datos',          desc: 'Decisiones, bucles, funciones y colecciones',  color: '#3b82f6', modulos: ['control-flow', 'data-structures', 'modules'] },
    { n: 3, titulo: 'Programas de verdad',     desc: 'Archivos, errores y objetos',                  color: '#a855f7', modulos: ['io', 'errors', 'classes'] },
    { n: 4, titulo: 'Biblioteca y entorno',    desc: 'Las pilas incluidas de Python',                color: '#f59e0b', modulos: ['stdlib', 'stdlib2', 'venv'] },
    { n: 5, titulo: 'Herramientas e IA',       desc: 'Programa con asistentes y en la nube',         color: '#ef4444', modulos: ['deepseek', 'chatgptea', 'google-colab', 'cursor', 'zai', 'antigravity', 'vm'] }
];
// Módulos opcionales (Bonus): dan XP y medallas, pero no cuentan para el progreso del curso ni para el diploma
const EXTRAS = ['actividades-extras', 'pandas', 'libro-curso'];
const COLOR_EXTRA = { 'actividades-extras': '#f59e0b', pandas: '#0ea5e9', 'libro-curso': '#ef4444' };
const NUCLEO = UNIDADES.flatMap(u => u.modulos);

const ICONOS = {
    'actividades-extras': 'fa-star', intro: 'fa-seedling', interpreter: 'fa-terminal', basics: 'fa-calculator',
    'control-flow': 'fa-code-branch', 'data-structures': 'fa-layer-group', modules: 'fa-cubes', io: 'fa-file-lines',
    errors: 'fa-bug', classes: 'fa-shapes', stdlib: 'fa-book', stdlib2: 'fa-book-open', venv: 'fa-box-open',
    deepseek: 'fa-robot', chatgptea: 'fa-brain', 'google-colab': 'fa-cloud', cursor: 'fa-i-cursor', zai: 'fa-wand-magic-sparkles',
    antigravity: 'fa-rocket', vm: 'fa-desktop', pandas: 'fa-table', 'libro-curso': 'fa-file-pdf'
};
const SUBTITULOS = {
    'actividades-extras': 'Videos del futuro de la tecnología', intro: 'Abriendo el apetito', interpreter: 'Instalación y configuración',
    basics: 'Números, texto y listas', 'control-flow': 'if, for, while, funciones', 'data-structures': 'Listas, tuplas, diccionarios',
    modules: 'Importar y crear módulos', io: 'Archivos y formateo', errors: 'Manejo de errores', classes: 'Programación orientada a objetos',
    stdlib: 'Módulos más importantes', stdlib2: 'Temas avanzados', venv: 'Gestión de paquetes', deepseek: 'Asistente IA gratuito',
    chatgptea: 'IA norteamericana avanzada', 'google-colab': 'Notebook en la nube', cursor: 'Editor con IA integrada',
    zai: 'IA china avanzada', antigravity: 'Asistente de Google', vm: 'Virtualización de sistemas',
    pandas: 'DataFrames, carga de datos y análisis',
    'libro-curso': 'Libro completo del curso en PDF'
};

// Código inicial del laboratorio de cada módulo (ejemplos con sabor a biología)
const INICIOS = {
    intro: '# ¡Tu primer programa! Cambia el nombre y ejecútalo con Ctrl+Enter\nnombre = "Ada"\nprint("Hola,", nombre, "👋")\nprint("Bienvenida a Bio-Python")',
    interpreter: 'import sys\nprint("Estás usando Python", sys.version.split()[0])\nprint(2 ** 10)  # el intérprete también es una calculadora',
    basics: '# Una cadena de ADN es solo texto\nadn = "ATGCGATACGCTTGA"\nprint("Longitud:", len(adn))\nprint("Primeras 3 bases:", adn[:3])\nprint("Guaninas:", adn.count("G"))',
    'control-flow': '# Contenido GC de una secuencia\nadn = "ATGCGATACGCTTGAGC"\ngc = 0\nfor base in adn:\n    if base in "GC":\n        gc += 1\nporcentaje = gc / len(adn) * 100\nprint(f"GC = {porcentaje:.1f} %")\nif porcentaje > 50:\n    print("Secuencia rica en GC")\nelse:\n    print("Secuencia rica en AT")',
    'data-structures': '# Diccionario: código genético (fragmento)\ncodones = {"ATG": "Met", "TTT": "Phe", "GGC": "Gly", "TAA": "STOP"}\nsecuencia = "ATGTTTGGCTAA"\nfor i in range(0, len(secuencia), 3):\n    codon = secuencia[i:i+3]\n    print(codon, "→", codones.get(codon, "?"))',
    modules: 'import math, random\nprint("π =", round(math.pi, 5))\nbases = random.choices("ACGT", k=12)\nprint("ADN aleatorio:", "".join(bases))',
    io: '# Escribir y leer un archivo\nwith open("muestras.txt", "w") as f:\n    f.write("E. coli,20\\nS. aureus,35\\n")\n\nwith open("muestras.txt") as f:\n    for linea in f:\n        nombre, cantidad = linea.strip().split(",")\n        print(f"{nombre:<12}{int(cantidad):>5} colonias")',
    errors: 'datos = ["12", "7", "abc", "0"]\nfor d in datos:\n    try:\n        print(100 / int(d))\n    except ValueError:\n        print(f"«{d}» no es un número")\n    except ZeroDivisionError:\n        print("No se puede dividir entre cero")',
    classes: 'class Celula:\n    def __init__(self, tipo, tamaño_um):\n        self.tipo = tipo\n        self.tamaño_um = tamaño_um\n\n    def dividir(self):\n        return [Celula(self.tipo, self.tamaño_um / 2) for _ in range(2)]\n\nmadre = Celula("eucariota", 20)\nhijas = madre.dividir()\nprint(len(hijas), "células de", hijas[0].tamaño_um, "µm")',
    stdlib: 'from collections import Counter\nfrom datetime import date\nadn = "ATGCGATACGCTTGAGC"\nprint(Counter(adn).most_common())\nprint("Hoy es", date.today())',
    stdlib2: 'import statistics as st\nalturas = [1.62, 1.75, 1.58, 1.80, 1.69]\nprint("Media:", round(st.mean(alturas), 3))\nprint("Desviación:", round(st.stdev(alturas), 3))',
    pandas: '# Datos de práctica ya cargados: ventas, estudiantes, clima, pacientes, plantas, productos\nimport pandas as pd\n\ndf = pd.read_csv("estudiantes.csv")\nmostrar(df.head())\nprint("Filas y columnas:", df.shape)\nprint(df.groupby("programa")["nota1"].mean().round(2))\n\n# Sube tu propio archivo con el botón «Subir» y léelo igual',
    'google-colab': 'import numpy as np\nimport matplotlib.pyplot as plt\n\n# Crecimiento bacteriano exponencial\nt = np.linspace(0, 10, 50)\nN = 100 * np.exp(0.4 * t)\nplt.plot(t, N, color="#3776ab", linewidth=3)\nplt.title("Crecimiento bacteriano")\nplt.xlabel("Horas"); plt.ylabel("Bacterias")\nplt.show()'
};

const DATOS_CURIOSOS = [
    'Python se llama así por el grupo de comedia Monty Python, no por la serpiente.',
    'Escribe <code>import this</code> en el laboratorio y descubre el Zen de Python.',
    'Biopython, la librería para bioinformática, existe desde el año 2000.',
    'En Python puedes intercambiar dos variables en una línea: <code>a, b = b, a</code>.',
    'Los números enteros de Python no tienen límite: prueba <code>print(2 ** 1000)</code>.',
    'AlphaFold, que predice la forma de las proteínas, se entrenó con código en Python.',
    'Puedes multiplicar textos: <code>"AT" * 5</code> da <code>ATATATATAT</code>.',
    'Los índices negativos cuentan desde el final: <code>adn[-1]</code> es la última base.',
    'Guido van Rossum creó Python en la Navidad de 1989 como proyecto de vacaciones.',
    'Un f-string como <code>f"{x:.2f}"</code> redondea a dos decimales al imprimir.',
    'El genoma humano tiene unos 3 200 millones de bases: ¡un string enorme para Python!',
    '<code>sorted()</code> ordena cualquier lista sin modificar la original.'
];

const BIO_EJEMPLOS = [
    { t: 'Complemento de ADN', c: 'adn = "ATGCCGTA"\npares = {"A": "T", "T": "A", "G": "C", "C": "G"}\ncomplemento = "".join(pares[b] for b in adn)\nprint("Original:   ", adn)\nprint("Complemento:", complemento)\nprint("Reverso:    ", complemento[::-1])' },
    { t: 'Transcribir a ARN', c: 'adn = input("Escribe una secuencia de ADN: ").upper()\narn = adn.replace("T", "U")\nprint("ARN:", arn)' },
    { t: 'IMC con funciones', c: 'def imc(peso, altura):\n    return peso / altura ** 2\n\npeso = float(input("Peso (kg): "))\naltura = float(input("Altura (m): "))\nvalor = imc(peso, altura)\nprint(f"Tu IMC es {valor:.1f}")' },
    { t: 'Gráfico de población', c: 'import matplotlib.pyplot as plt\n\nanios = list(range(0, 11))\nconejos = [2]\nfor _ in anios[1:]:\n    conejos.append(conejos[-1] * 2)\nplt.bar(anios, conejos, color="#ffd43b", edgecolor="#3776ab")\nplt.title("Conejos que se duplican cada año")\nplt.show()' },
    { t: 'Temperaturas', c: 'celsius = [36.5, 37.2, 38.9, 35.8]\nfor c in celsius:\n    f = c * 9 / 5 + 32\n    estado = "fiebre" if c >= 38 else "normal"\n    print(f"{c} °C = {f:.1f} °F ({estado})")' },
    { t: 'Adivina el número', c: 'import random\nsecreto = random.randint(1, 10)\nfor intento in range(3):\n    n = int(input("Adivina (1-10): "))\n    if n == secreto:\n        print("¡Acertaste! 🎉")\n        break\n    print("Más alto" if n < secreto else "Más bajo")\nelse:\n    print("El número era", secreto)' }
];

// ---------- Utilidades de interfaz ----------
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const UI = {
    aviso(texto, tipo = 'ok', icono) {
        const caja = $('#avisos');
        if (!caja) return;
        const ic = icono || { ok: 'fa-check-circle', error: 'fa-triangle-exclamation', xp: 'fa-bolt', info: 'fa-circle-info' }[tipo] || 'fa-circle-info';
        const el = document.createElement('div');
        el.className = 'aviso ' + tipo;
        el.innerHTML = `<i class="fas ${ic}"></i><span>${texto}</span>`;
        caja.appendChild(el);
        while (caja.children.length > 4) caja.firstChild.remove();
        setTimeout(() => { el.classList.add('saliendo'); setTimeout(() => el.remove(), 300); }, 3200);
    },
    _colaCelebraciones: [],
    celebrar(emoji, titulo, texto) {
        this._colaCelebraciones.push({ emoji, titulo, texto });
        if (this._colaCelebraciones.length === 1) this._mostrarCelebracion();
    },
    _mostrarCelebracion() {
        const cola = this._colaCelebraciones;
        if (!cola.length) return;
        // Varias medallas seguidas se muestran juntas en una sola ventana
        const medallas = cola.filter(x => x.titulo === '¡Nueva medalla!');
        if (medallas.length > 1 && cola[0].titulo === '¡Nueva medalla!') {
            const resto = cola.filter(x => x.titulo !== '¡Nueva medalla!');
            cola.length = 0;
            cola.push({ emoji: medallas.map(m => m.emoji).join(''), titulo: `¡${medallas.length} medallas nuevas!`, texto: medallas.map(m => m.texto.replace('<br>', ': ')).join('<br>') }, ...resto);
        }
        const c = cola[0];
        $('#celebracionContenido').innerHTML = `
            <div class="emoji">${c.emoji}</div><h2>${c.titulo}</h2><p>${c.texto}</p>
            <button class="boton dorado grande" style="margin-top:20px" id="btnCelebracion">¡Genial!</button>`;
        $('#capaCelebracion').classList.add('visible');
        GAME.confeti();
        $('#btnCelebracion').focus();
        $('#btnCelebracion').onclick = () => {
            $('#capaCelebracion').classList.remove('visible');
            this._colaCelebraciones.shift();
            setTimeout(() => this._mostrarCelebracion(), 200);
        };
    },
    modal(titulo, html) {
        $('#modalGenericoTitulo').textContent = titulo;
        $('#modalGenericoCuerpo').innerHTML = html;
        $('#capaModal').classList.add('visible');
    },
    cerrarModal() { $('#capaModal').classList.remove('visible'); }
};

// ---------- Aplicación ----------
const APP = (() => {
    let sesion = null;
    let moduloActual = null;
    let editorLab = null, editorLibre = null;
    const editoresRetos = {};
    let retoDiario = null;

    // ===== Arranque =====
    function iniciar() {
        sesion = AUTH.getSession() || { id: 'anonimo', nombre: 'Estudiante', rol: 'estudiante' };
        GAME.cargar(sesion.id);
        aplicarTema(localStorage.getItem('bpTema') || (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'));
        retoDiario = elegirRetoDiario();
        construirLateral();
        refrescarJugador();
        enlazarEventos();
        LAB.cargar().catch(() => UI.aviso('No se pudo cargar Python. Revisa tu conexión a internet.', 'error'));
        REGISTRO.iniciar();
        window.addEventListener('hashchange', enrutar);
        enrutar();
        setTimeout(() => $('#cargando').classList.add('fuera'), 250);
    }

    function aplicarTema(t) {
        document.documentElement.dataset.theme = t;
        localStorage.setItem('bpTema', t);
        const i = $('#btnTema i');
        if (i) i.className = t === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }

    function enlazarEventos() {
        $('#btnTema').onclick = () => aplicarTema(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
        $('#btnMenu').onclick = () => $('#lateral').classList.toggle('abierta');
        $('#btnBuscar').onclick = abrirPaleta;
        $('#btnNotas').onclick = abrirNotas;
        $('#btnPantalla').onclick = () => document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen().catch(() => {});
        $('#btnSalir').onclick = () => { REGISTRO.salida(); AUTH.logout(); };
        document.addEventListener('click', e => {
            const lat = $('#lateral');
            if (lat.classList.contains('abierta') && !lat.contains(e.target) && !$('#btnMenu').contains(e.target)) lat.classList.remove('abierta');
        });
        document.addEventListener('keydown', e => {
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); abrirPaleta(); }
            if (e.key === 'Escape') { $$('.capa.visible').forEach(c => { if (c.id !== 'capaCelebracion') c.classList.remove('visible'); }); }
        });
        $$('.capa').forEach(c => c.addEventListener('click', e => { if (e.target === c && c.id !== 'capaCelebracion') c.classList.remove('visible'); }));
        $('#paletaEntrada').addEventListener('input', filtrarPaleta);
        $('#paletaEntrada').addEventListener('keydown', moverPaleta);
        $('#btnGuardarNotas').onclick = guardarNotas;
        $('#btnDescargarNotas').onclick = descargarNotas;
    }

    // ===== Barra lateral =====
    function estadoModulo(id) {
        const m = GAME.estado.modulos[id];
        if (!m) return 'nuevo';
        if (m.completo) return 'hecho';
        return (m.visitado || m.leccion || m.lab) ? 'en-curso' : 'nuevo';
    }

    function pasosModulo(id) {
        const datos = modules[id], m = GAME.estado.modulos[id] || {};
        const nRetos = (datos.exercises || []).length;
        const hechosRetos = Object.keys(m.retos || {}).length;
        return [
            !!m.leccion,
            !!m.lab,
            nRetos ? hechosRetos >= nRetos : !!m.completo,
            m.quizMejor !== null && m.quizMejor !== undefined ? m.quizMejor >= 70 : !!m.completo
        ];
    }

    function siguienteModulo() {
        const u = GAME.estado.ultimoModulo;
        if (u && NUCLEO.includes(u) && estadoModulo(u) !== 'hecho') return u;
        return NUCLEO.find(id => estadoModulo(id) !== 'hecho') || null;
    }

    function construirLateral() {
        const cont = $('#navModulos');
        cont.innerHTML = UNIDADES.map(u => {
            const hechos = u.modulos.filter(id => estadoModulo(id) === 'hecho').length;
            return `<details class="nav-unidad" data-unidad="${u.n}">
                <summary><i class="fas fa-chevron-right"></i><span>Unidad ${u.n} · ${u.titulo}</span><span class="mini">${hechos}/${u.modulos.length}</span></summary>
                <div class="nav-lista">${u.modulos.map(id => itemModulo(id)).join('')}</div>
            </details>`;
        }).join('') + `<div class="nav-lista" style="margin-top:6px">${EXTRAS.map(id => itemModulo(id, true)).join('')}</div>`;
        $$('[data-ir]', $('#lateral')).forEach(b => b.onclick = () => { location.hash = b.dataset.ir; });
        // Abrir la unidad del módulo siguiente
        const sig = siguienteModulo();
        const u = UNIDADES.find(x => x.modulos.includes(moduloActual || sig));
        $$('.nav-unidad').forEach(d => { d.open = u ? +d.dataset.unidad === u.n : +d.dataset.unidad === 1; });
        marcarNavActivo();
    }

    function itemModulo(id, extra) {
        const st = estadoModulo(id);
        const num = NUCLEO.indexOf(id) + 1;
        const marca = st === 'hecho' ? '<i class="fas fa-check"></i>' : extra ? '<i class="fas fa-star" style="color:var(--amarillo)"></i>' : num;
        const titulo = modules[id].title.replace(/^\d+\.\s*/, '');
        return `<button class="nav-item" data-ir="#/modulo/${id}" data-mod="${id}" title="${esc(modules[id].title)}">
            <span class="estado ${st}">${marca}</span><span class="nav-texto">${esc(titulo)}</span></button>`;
    }

    function marcarNavActivo() {
        const h = location.hash || '#/inicio';
        const exacto = $$('#lateral .nav-item').some(b => b.dataset.ir === h && !b.dataset.mod);
        $$('#lateral .nav-item').forEach(b => {
            if (exacto && !b.dataset.mod) { b.classList.toggle('activo', b.dataset.ir === h); return; }
            const ir = b.dataset.ir;
            b.classList.toggle('activo', ir === h || (b.dataset.mod && h.startsWith('#/modulo/' + b.dataset.mod + '/')) || (ir !== '#/inicio' && ir && h.startsWith(ir + '/')));
        });
    }

    function refrescarJugador() {
        const e = GAME.estado, nv = GAME.nivelDe(e.xp);
        $('#jugAvatar').textContent = (sesion.nombre || 'E').trim().charAt(0).toUpperCase();
        $('#jugNombre').textContent = sesion.nombre;
        $('#jugNivel').textContent = `${nv.actual.emoji} Nivel ${nv.indice + 1} · ${nv.actual.nombre}`;
        $('#jugBarra').style.width = (nv.pct * 100).toFixed(1) + '%';
        $('#jugXP').textContent = `${e.xp} XP`;
        $('#jugSig').textContent = nv.sig ? `${nv.sig.xp - e.xp} para subir` : '¡Nivel máximo!';
        const rachaViva = e.racha.ultimo && (e.racha.ultimo === GAME.hoy() || (new Date(GAME.hoy()) - new Date(e.racha.ultimo)) / 86400000 <= 1);
        $('#jugRacha').textContent = rachaViva ? e.racha.dias : 0;
        $('#chipRacha').classList.toggle('racha-activa', !!rachaViva && e.racha.dias > 0);
        $('#jugHoy').textContent = e.diario.fecha === GAME.hoy() ? e.diario.xp : 0;
        $('#jugMedallas').textContent = Object.keys(e.medallas).length;
        if (sesion.rol === 'admin' && !$('#btnAdmin')) {
            const a = document.createElement('a');
            a.id = 'btnAdmin'; a.href = 'admin.html'; a.className = 'btn-mini'; a.innerHTML = '<i class="fas fa-gear"></i>Admin';
            $('#zonaSalir').prepend(a);
        }
    }

    function refrescarTodo() {
        refrescarJugador();
        construirLateral();
    }

    // ===== Enrutador =====
    function enrutar() {
        const partes = (location.hash || '#/inicio').replace(/^#\/?/, '').split('/');
        const [vista, a, b] = partes;
        $$('.vista').forEach(v => v.classList.remove('visible'));
        $('#lateral').classList.remove('abierta');
        detenerVideos();
        if (vista === 'modulo' && modules[a]) mostrarModulo(a, b || 'leccion');
        else if (vista === 'laboratorio') mostrarLaboratorioLibre();
        else if (vista === 'logros') mostrarLogros();
        else if (vista === 'evaluaciones') mostrarColeccion('evaluaciones', a);
        else if (vista === 'recursos') mostrarColeccion('recursos', a);
        else if (vista === 'videos') mostrarVideos();
        else mostrarInicio();
        marcarNavActivo();
        window.scrollTo({ top: 0 });
    }

    function titular(pre, titulo) {
        $('#migaPre').textContent = pre;
        $('#migaTitulo').textContent = titulo;
        document.title = `${titulo} · Academia Bio-Python`;
    }

    function detenerVideos() {
        $$('#vistaModulo .video-marco iframe').forEach(f => f.remove());
    }

    // ===== Inicio =====
    function mostrarInicio() {
        moduloActual = null;
        titular('Academia Bio-Python', 'Inicio');
        const e = GAME.estado, nv = GAME.nivelDe(e.xp);
        const hechos = NUCLEO.filter(id => estadoModulo(id) === 'hecho').length;
        const sig = siguienteModulo();
        const nombreCorto = (sesion.nombre || '').split(' ')[0] || 'estudiante';
        const hora = new Date().getHours();
        const saludo = hora < 12 ? 'Buenos días' : hora < 19 ? 'Buenas tardes' : 'Buenas noches';
        const dato = DATOS_CURIOSOS[(new Date().getDate() + new Date().getMonth()) % DATOS_CURIOSOS.length];
        const xpHoy = e.diario.fecha === GAME.hoy() ? e.diario.xp : 0;
        const pctMeta = Math.min(1, xpHoy / GAME.META_DIARIA);
        const C = 2 * Math.PI * 27;
        const reto = retoDiario;
        const retoHecho = !!e.retosDiarios[GAME.hoy()];

        const v = $('#vistaInicio');
        v.innerHTML = `
        <div class="heroe">
            <div>
                <span class="etiqueta xp"><i class="fas fa-bolt"></i>${nv.actual.emoji} ${nv.actual.nombre}</span>
                <h1 style="margin-top:12px">${saludo}, ${esc(nombreCorto)}.<br><span class="resalta">${hechos ? '¡Sigamos programando!' : 'Hoy escribes tu primer programa.'}</span></h1>
                <p>${hechos ? `Llevas <b>${hechos} de ${NUCLEO.length}</b> módulos. Cada lección te da XP, medallas y te acerca al título de <b>Gran Maestro Pythonista</b>.` : 'Aprende Python resolviendo retos reales de biología, directamente en tu navegador. Sin instalar nada.'}</p>
                <div class="acciones">
                    ${sig ? `<a class="boton dorado grande" href="#/modulo/${sig}"><i class="fas fa-play"></i>${hechos || (GAME.estado.modulos[sig] || {}).visitado ? 'Continuar' : '¡Empezar ahora!'}</a>` : `<a class="boton dorado grande" href="#/logros"><i class="fas fa-crown"></i>Ver mi diploma</a>`}
                    <a class="boton grande" href="#/laboratorio"><i class="fas fa-flask"></i>Laboratorio libre</a>
                </div>
            </div>
            <div class="terminal-heroe mono" id="terminalHeroe">
                <div class="puntos"><i style="background:#f87171"></i><i style="background:#fbbf24"></i><i style="background:#34d399"></i></div>
                <div id="terminalTexto"></div>
            </div>
        </div>

        <div class="rejilla-stats">
            <div class="stat"><div class="ico" style="background:rgba(255,212,59,.15);color:var(--amarillo)"><i class="fas fa-bolt"></i></div><div><b>${e.xp}</b><span>XP totales</span></div></div>
            <div class="stat"><div class="ico" style="background:rgba(251,146,60,.15);color:var(--naranja)"><i class="fas fa-fire"></i></div><div><b>${$('#jugRacha').textContent} día${$('#jugRacha').textContent === '1' ? '' : 's'}</b><span>Racha (mejor: ${e.racha.mejor})</span></div></div>
            <div class="stat"><div class="ico" style="background:rgba(52,211,153,.15);color:var(--verde)"><i class="fas fa-circle-check"></i></div><div><b>${hechos}/${NUCLEO.length}</b><span>Módulos completados</span></div></div>
            <div class="stat"><div class="ico" style="background:rgba(167,139,250,.15);color:var(--morado)"><i class="fas fa-medal"></i></div><div><b>${Object.keys(e.medallas).length}/${GAME.MEDALLAS.length}</b><span>Medallas</span></div></div>
        </div>

        <div class="dos-col">
            <div style="display:flex;flex-direction:column;gap:18px">
                ${sig ? `<div class="tarjeta continuar" onclick="location.hash='#/modulo/${sig}'">
                    <div class="grande-ico"><i class="fas ${ICONOS[sig]}"></i></div>
                    <div style="flex:1;min-width:0">
                        <small style="color:var(--texto-3);font-weight:700;font-size:.72rem;letter-spacing:.06em">TU SIGUIENTE MISIÓN</small>
                        <h3 style="font-size:1.15rem">${esc(modules[sig].title)}</h3>
                        <div class="pasos-mini" style="display:flex;gap:4px;margin-top:8px;max-width:260px">${pasosModulo(sig).map((ok, i) => `<i title="${['Lección', 'Laboratorio', 'Retos', 'Quiz'][i]}" style="flex:1;height:6px;border-radius:9px;display:block;background:${ok ? 'var(--verde)' : 'var(--superficie-2)'}"></i>`).join('')}</div>
                    </div>
                    <i class="fas fa-chevron-right" style="color:var(--texto-3)"></i>
                </div>` : ''}
                ${reto ? `<div class="tarjeta reto-dia">
                    <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px">
                        <span style="font-size:1.5rem">☀️</span>
                        <div style="flex:1"><h3>Reto del día</h3><small style="color:var(--texto-3)">${esc(modules[reto.mod].title)}</small></div>
                        ${retoHecho ? '<span class="etiqueta ok"><i class="fas fa-check"></i>Superado</span>' : '<span class="etiqueta xp">XP doble</span>'}
                    </div>
                    <p style="font-weight:700;margin-top:6px">${esc(reto.ej.title)}</p>
                    <p style="color:var(--texto-2);font-size:.88rem;margin:4px 0 12px">${esc(reto.ej.description)}</p>
                    <a class="boton ${retoHecho ? '' : 'primario'}" href="#/modulo/${reto.mod}/retos/${reto.i}"><i class="fas fa-bullseye"></i>${retoHecho ? 'Verlo otra vez' : 'Aceptar el reto'}</a>
                </div>` : ''}
            </div>
            <div style="display:flex;flex-direction:column;gap:18px">
                <div class="tarjeta">
                    <div class="meta-dia">
                        <div class="anillo"><svg width="64" height="64"><circle class="fondo-anillo" cx="32" cy="32" r="27"/><circle class="valor-anillo" cx="32" cy="32" r="27" stroke-dasharray="${C}" stroke-dashoffset="${C * (1 - pctMeta)}"/></svg><b>${Math.round(pctMeta * 100)}%</b></div>
                        <div><h3>Meta diaria</h3><p style="color:var(--texto-2);font-size:.85rem">${xpHoy} / ${GAME.META_DIARIA} XP hoy. ${pctMeta >= 1 ? '¡Cumplida! 🎉' : 'Una lección y un reto bastan.'}</p></div>
                    </div>
                </div>
                <a class="tarjeta recurso" href="#/videos" style="display:flex;gap:14px;align-items:center;text-decoration:none">
                    <div class="r-ico" style="background:#ef4444;margin:0"><i class="fab fa-youtube"></i></div>
                    <div><h3>Aprendo con videos</h3><p>${VideosCanal.total()} videos del canal del profesor: pandas, Colab, Shiny, import y simulaciones.</p></div>
                </a>
                <div class="tarjeta">
                    <h3><i class="fas fa-lightbulb" style="color:var(--amarillo)"></i> ¿Sabías que…?</h3>
                    <p style="color:var(--texto-2);font-size:.9rem;margin-top:6px;line-height:1.6">${dato}</p>
                </div>
            </div>
        </div>

        <div class="mapa">
            <h2 style="font-size:1.35rem;font-weight:900;margin-bottom:14px">🗺️ Mapa de la aventura</h2>
            ${UNIDADES.map(u => {
                const hechosU = u.modulos.filter(id => estadoModulo(id) === 'hecho').length;
                return `<div class="unidad">
                <div class="unidad-cab">
                    <div class="unidad-num" style="background:${u.color}">${u.n}</div>
                    <div><h3>Unidad ${u.n} · ${u.titulo}</h3><p>${u.desc}</p></div>
                    <div class="progreso-unidad">${hechosU}/${u.modulos.length} completados<div class="barra-xp"><i style="width:${hechosU / u.modulos.length * 100}%"></i></div></div>
                </div>
                <div class="nodos">${u.modulos.map(id => nodo(id, u.color, id === sig)).join('')}</div>
            </div>`;
            }).join('')}
            <div class="unidad">
                <div class="unidad-cab"><div class="unidad-num" style="background:linear-gradient(135deg,#f59e0b,#ef4444)"><i class="fas fa-star"></i></div><div><h3>Bonus · opcional</h3><p>Material extra: da XP y medallas, pero no cuenta para el diploma</p></div></div>
                <div class="nodos">${EXTRAS.map(id => nodo(id, COLOR_EXTRA[id], false)).join('')}</div>
            </div>
        </div>`;
        v.classList.add('visible');
        animarTerminal();
    }

    function nodo(id, color, esSiguiente) {
        const st = estadoModulo(id);
        const pasos = pasosModulo(id);
        return `<button class="nodo ${st === 'hecho' ? 'hecho' : ''} ${esSiguiente ? 'siguiente' : ''}" onclick="location.hash='#/modulo/${id}'">
            ${st === 'hecho' ? '<span class="sello etiqueta ok"><i class="fas fa-check"></i></span>' : ''}
            <div class="nodo-ico" style="background:${color}"><i class="fas ${ICONOS[id]}"></i></div>
            <h4>${esc(modules[id].title)}</h4>
            <p>${esc(SUBTITULOS[id] || '')}</p>
            <div class="pasos-mini">${pasos.map(ok => `<i class="${ok ? 'ok' : ''}"></i>`).join('')}</div>
        </button>`;
    }

    let temporizadorTerminal = null;
    function animarTerminal() {
        clearTimeout(temporizadorTerminal);
        const lineas = [
            ['<span class="k">def</span> <span class="f">aprender</span>(dias):', ''],
            ['    <span class="k">return</span> <span class="s">"🐍"</span> * dias', ''],
            ['', ''],
            ['<span class="f">print</span>(aprender(<span class="s">' + Math.max(1, GAME.estado.racha.dias) + '</span>))', ''],
            ['<span class="c"># ' + '🐍'.repeat(Math.min(7, Math.max(1, GAME.estado.racha.dias))) + '</span>', '']
        ];
        const caja = $('#terminalTexto');
        if (!caja) return;
        let i = 0;
        (function sig() {
            if (!document.body.contains(caja)) return;
            caja.innerHTML = lineas.slice(0, i).map(l => `<div>${l[0] || '&nbsp;'}</div>`).join('') + (i < lineas.length ? '<span class="cursor-parpadeo"></span>' : '');
            if (i++ < lineas.length) temporizadorTerminal = setTimeout(sig, 420);
        })();
    }

    // ===== Reto del día =====
    function elegirRetoDiario() {
        const lista = [];
        NUCLEO.forEach(id => (modules[id].exercises || []).forEach((ej, i) => {
            if (!/^\s*(cursor|from flask)/m.test(ej.solution) && !/flask/.test(ej.solution)) lista.push({ mod: id, i, ej });
        }));
        if (!lista.length) return null;
        const h = GAME.hoy().split('-').reduce((a, n) => a * 31 + +n, 7);
        return lista[h % lista.length];
    }

    // ===== Vista de módulo =====
    const PASOS = [
        { id: 'leccion', nombre: 'Lección', sub: 'Mira y lee', ico: 'fa-play' },
        { id: 'laboratorio', nombre: 'Laboratorio', sub: 'Escribe código', ico: 'fa-flask' },
        { id: 'retos', nombre: 'Retos', sub: 'Pon a prueba tu código', ico: 'fa-bullseye' },
        { id: 'quiz', nombre: 'Quiz', sub: 'Gana el módulo', ico: 'fa-trophy' }
    ];

    function mostrarModulo(id, paso, sub) {
        const datos = modules[id];
        const partes = location.hash.split('/');
        const retoAbrir = partes[4] !== undefined ? +partes[4] : null;
        const cambiaModulo = moduloActual !== id;
        moduloActual = id;
        GAME.visitar(id);
        const unidad = UNIDADES.find(u => u.modulos.includes(id));
        const color = unidad ? unidad.color : (COLOR_EXTRA[id] || '#f59e0b');
        titular(unidad ? `Unidad ${unidad.n} · ${unidad.titulo}` : 'Bonus · opcional', datos.title);
        const v = $('#vistaModulo');

        if (cambiaModulo || !$('#modCab', v)) {
            const extras = [];
            if (datos.colabContent) extras.push({ id: 'colab', nombre: 'Colab', ico: 'fab fa-google' });
            if (datos.shinyContent) extras.push({ id: 'shiny', nombre: 'Shiny', ico: 'fas fa-star' });
            const idx = NUCLEO.indexOf(id);
            const ant = idx > 0 ? NUCLEO[idx - 1] : null, sig = idx >= 0 && idx < NUCLEO.length - 1 ? NUCLEO[idx + 1] : null;
            v.innerHTML = `
            <div class="mod-cab" id="modCab">
                <div class="mod-ico" style="background:${color}"><i class="fas ${ICONOS[id]}"></i></div>
                <div style="min-width:0;flex:1">
                    <small style="color:var(--texto-3);font-weight:700;font-size:.72rem;letter-spacing:.06em;text-transform:uppercase">${unidad ? 'Unidad ' + unidad.n + ' · ' + unidad.titulo : 'Bonus · opcional'}</small>
                    <h1>${esc(datos.title)}</h1>
                    <p>${esc(SUBTITULOS[id] || datos.description || '')}</p>
                </div>
                <div class="der">
                    ${ant ? `<a class="boton peq" href="#/modulo/${ant}" title="Módulo anterior"><i class="fas fa-arrow-left"></i></a>` : ''}
                    <span id="selloModulo"></span>
                    ${sig ? `<a class="boton peq" href="#/modulo/${sig}" title="Módulo siguiente"><i class="fas fa-arrow-right"></i></a>` : ''}
                </div>
            </div>
            <div class="pasos" id="pasos">
                ${PASOS.map((p, i) => `<button class="paso" data-paso="${p.id}"><span class="n">${i + 1}</span><span>${p.nombre}<small>${p.sub}</small></span></button>`).join('')}
                ${extras.map(x => `<button class="paso extra" data-paso="${x.id}"><span class="n"><i class="${x.ico}"></i></span><span>${x.nombre}</span></button>`).join('')}
            </div>
            <div id="panelesModulo">
                <div class="panel" data-panel="leccion"></div>
                <div class="panel" data-panel="laboratorio"></div>
                <div class="panel" data-panel="retos"></div>
                <div class="panel" data-panel="quiz"></div>
                <div class="panel" data-panel="colab"><div class="tarjeta texto-modulo">${datos.colabContent || ''}</div></div>
                <div class="panel" data-panel="shiny"><div class="tarjeta texto-modulo">${datos.shinyContent || ''}</div></div>
            </div>`;
            $$('#pasos .paso', v).forEach(b => b.onclick = () => { location.hash = `#/modulo/${id}/${b.dataset.paso}`; });
            construirLeccion(id);
            construirLaboratorio(id);
            construirRetos(id);
            construirQuiz(id);
            prepararCodigoProbable($('#panelesModulo', v));
        }
        if (!PASOS.some(p => p.id === paso) && !['colab', 'shiny'].includes(paso)) paso = 'leccion';
        $$('#pasos .paso', v).forEach(b => b.classList.toggle('activo', b.dataset.paso === paso));
        $$('#panelesModulo > .panel', v).forEach(p => p.classList.toggle('visible', p.dataset.panel === paso));
        actualizarPasos(id);
        if (paso === 'laboratorio' && editorLab) editorLab.refrescar();
        if (paso === 'retos') {
            Object.values(editoresRetos).forEach(e => e.refrescar());
            if (retoAbrir !== null) abrirReto(retoAbrir, true);
        }
        v.classList.add('visible');
        construirLateral();
    }

    function actualizarPasos(id) {
        const ok = pasosModulo(id);
        $$('#pasos .paso').forEach((b, i) => { if (i < 4) b.classList.toggle('ok', ok[i]); });
        const m = GAME.estado.modulos[id] || {};
        const sello = $('#selloModulo');
        if (sello) {
            const tieneQuiz = (modules[id].quiz || []).length > 0;
            sello.innerHTML = m.completo
                ? '<span class="etiqueta ok" style="padding:8px 12px"><i class="fas fa-trophy"></i>Módulo completado</span>'
                : tieneQuiz ? '' : '<button class="boton exito peq" id="btnCompletarManual"><i class="fas fa-check"></i>Marcar como completado</button>';
            const b = $('#btnCompletarManual');
            if (b) b.onclick = () => completar(id);
        }
    }

    function completar(id) {
        if (GAME.completarModulo(id, NUCLEO, UNIDADES[0].modulos)) {
            REGISTRO.actividad(id, 'Módulo completado', EXTRAS.includes(id) ? 'Módulo opcional' : '', 'Completado');
            const idx = NUCLEO.indexOf(id);
            const sig = idx >= 0 ? NUCLEO[idx + 1] : null;
            UI.celebrar('🏆', '¡Módulo completado!', `Dominaste <b>${esc(modules[id].title)}</b>.${sig ? `<br><br>Siguiente misión: <b>${esc(modules[sig].title)}</b>` : ''}`);
        }
        actualizarPasos(id);
        refrescarTodo();
    }

    // ----- Lección -----
    const idYoutube = url => ((url || '').match(/(?:embed\/|v=|youtu\.be\/)([\w-]{11})/) || [])[1];

    function construirLeccion(id) {
        const datos = modules[id];
        const videos = [];
        if (datos.video) videos.push({ title: 'Video principal', url: datos.video });
        (datos.additionalVideos || []).forEach(v => videos.push(v));
        VideosCanal.deModulo(id).forEach(v => videos.push(v));
        const p = $('[data-panel="leccion"]');
        p.innerHTML = `
            ${videos.length ? `<div class="leccion" style="margin-bottom:18px">
                <div class="video-marco" id="videoMarco"></div>
                <div class="tarjeta" style="padding:14px">
                    <h3 style="margin-bottom:10px;font-size:.92rem;display:flex;align-items:center;gap:6px"><i class="fab fa-youtube" style="color:#ef4444"></i> Videos (${videos.length})
                        <a id="abrirYT" class="etiqueta" style="margin-left:auto;text-decoration:none" target="_blank" rel="noopener" title="Si el video no se ve aquí, ábrelo en YouTube"><i class="fas fa-up-right-from-square"></i>YouTube</a></h3>
                    <div class="video-lista">${videos.map((v, i) => {
                        const vid = idYoutube(v.url);
                        return `<button class="video-item ${i === 0 ? 'activo' : ''}" data-video="${i}">
                            ${vid ? `<img loading="lazy" src="https://img.youtube.com/vi/${vid}/mqdefault.jpg" alt="">` : ''}
                            <div><b>${esc(v.title)}</b><span>${v.canal ? '<i class="fab fa-youtube" style="color:#ef4444"></i> Canal del profe' : i === 0 ? 'Recomendado' : 'Complementario'}</span></div></button>`;
                    }).join('')}</div>
                </div>
            </div>` : ''}
            <div class="tarjeta texto-modulo">${datos.content || ''}</div>
            ${datos.practiceContent ? `<details class="tarjeta" style="margin-top:18px"><summary style="cursor:pointer;font-weight:800"><i class="fas fa-book-open" style="color:var(--azul)"></i> Guía práctica del módulo (ábrela para estudiar los ejemplos)</summary><div class="texto-modulo" style="margin-top:14px">${datos.practiceContent}</div></details>` : ''}
            <div class="fin-leccion" id="finLeccion"></div>`;
        const ponerVideo = (i, reproducir) => {
            const v = videos[i], vid = idYoutube(v.url), marco = $('#videoMarco');
            if (!marco) return;
            $$('.video-item', p).forEach(b => b.classList.toggle('activo', +b.dataset.video === i));
            const yt = $('#abrirYT', p);
            if (yt) yt.href = vid ? `https://www.youtube.com/watch?v=${vid}` : v.url;
            if (reproducir || !vid) {
                const src = vid ? `https://www.youtube.com/embed/${vid}?autoplay=1&rel=0` : v.url;
                marco.innerHTML = `<iframe referrerpolicy="strict-origin-when-cross-origin" src="${src}" title="${esc(v.title)}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
            } else {
                marco.innerHTML = `<button aria-label="Reproducir video" style="position:absolute;inset:0;border:0;cursor:pointer;background:#000 url(https://img.youtube.com/vi/${vid}/hqdefault.jpg) center/cover">
                    <span style="position:absolute;inset:0;display:grid;place-items:center;background:rgba(0,0,0,.25)"><span style="width:76px;height:76px;border-radius:50%;background:#ef4444;display:grid;place-items:center;box-shadow:0 8px 30px rgba(0,0,0,.5)"><i class="fas fa-play" style="color:#fff;font-size:1.8rem;margin-left:5px"></i></span></span>
                    <span style="position:absolute;left:14px;bottom:12px;color:#fff;font-weight:700;text-shadow:0 2px 8px #000">${esc(v.title)}</span></button>`;
                marco.firstElementChild.onclick = () => ponerVideo(i, true);
            }
        };
        if (videos.length) ponerVideo(0, false);
        $$('.video-item', p).forEach(b => b.onclick = () => ponerVideo(+b.dataset.video, true));
        pintarFinLeccion(id);
    }

    function pintarFinLeccion(id) {
        const f = $('#finLeccion');
        if (!f) return;
        const leida = (GAME.estado.modulos[id] || {}).leccion;
        f.innerHTML = leida
            ? `<span style="font-size:1.6rem">✅</span><div style="flex:1"><b>Lección completada</b><div style="color:var(--texto-2);font-size:.86rem">Ahora toca ensuciarse las manos con código.</div></div>
               <a class="boton primario" href="#/modulo/${id}/laboratorio"><i class="fas fa-flask"></i>Ir al laboratorio</a>`
            : `<span style="font-size:1.6rem">📖</span><div style="flex:1"><b>¿Terminaste de ver y leer?</b><div style="color:var(--texto-2);font-size:.86rem">Marca la lección y gana <b>15 XP</b>.</div></div>
               <button class="boton exito" id="btnLeida"><i class="fas fa-check"></i>¡Lo entendí!</button>`;
        const b = $('#btnLeida');
        if (b) b.onclick = () => {
            if (GAME.leccionLeida(id)) REGISTRO.actividad(id, 'Lección', '', 'Leída');
            pintarFinLeccion(id);
            actualizarPasos(id);
            refrescarTodo();
            setTimeout(() => { location.hash = `#/modulo/${id}/laboratorio`; }, 600);
        };
    }

    // Agrega «▶ Probar» a los bloques de código Python del contenido (pre, o code de varias líneas)
    function codigoEjecutable(texto) {
        let lineas = texto.replace(/ /g, ' ').replace(/\r/g, '').split('\n');
        if (lineas.some(l => /^\s*>>>/.test(l))) {
            // Sesión interactiva: solo las líneas que escribe el usuario
            lineas = lineas.filter(l => /^\s*(>>>|\.\.\.)/.test(l)).map(l => l.replace(/^\s*(>>>|\.\.\.) ?/, ''));
        }
        // Los bloques con comandos de terminal (pip, venv, git…) no son Python
        if (lineas.some(l => /^\s*\$\s/.test(l) || /^\s*(pip3?|conda|cd|git|source|npm|deactivate|python3? -m)\b/.test(l) || /^\s*[\w.-]+\\[\w\\.-]+\s*$/.test(l))) return null;
        // Quitar la sangría común
        const sangria = Math.min(...lineas.filter(l => l.trim()).map(l => l.match(/^ */)[0].length));
        lineas = lineas.map(l => l.slice(isFinite(sangria) ? sangria : 0));
        const codigo = lineas.join('\n').trim();
        if (!codigo || codigo.length > 4000 || /^\s*</.test(codigo)) return null;
        if (/google\.colab|drive\.mount|https?:\/\/|^\s*!/m.test(codigo)) return null;
        if (!/[=(]|^\s*(import|from|for|if|while|def|class|print)\b/m.test(codigo)) return null;
        return codigo;
    }

    function prepararCodigoProbable(raiz) {
        const bloques = $$('pre', raiz).concat($$('code', raiz).filter(c => !c.closest('pre') && c.innerText.trim().includes('\n')));
        bloques.forEach(el => {
            if (el.closest('.CodeMirror, .consola, .lab, .reto, .profe')) return;
            const caja = el.tagName === 'CODE' ? el.parentElement : el;
            if (caja.dataset.probable) return;
            const codigo = codigoEjecutable(el.innerText);
            if (!codigo) return;
            caja.dataset.probable = '1';
            if (getComputedStyle(caja).position === 'static') caja.style.position = 'relative';
            const b = document.createElement('button');
            b.className = 'boton peq primario';
            b.style.cssText = 'position:absolute;top:8px;right:8px;opacity:.92;z-index:2';
            b.innerHTML = '<i class="fas fa-play"></i>Probar';
            b.title = 'Copiar este ejemplo al laboratorio y ejecutarlo';
            b.onclick = e => {
                e.stopPropagation();
                if (!moduloActual) { location.hash = '#/laboratorio'; setTimeout(() => { editorLibre.set(codigo); correrEn('libre', editorLibre, null); }, 80); return; }
                location.hash = `#/modulo/${moduloActual}/laboratorio`;
                setTimeout(() => { editorLab.set(codigo); ejecutarLab(); }, 80);
            };
            caja.appendChild(b);
        });
    }

    // ----- Laboratorio del módulo -----
    function plantillaLab(prefijo, alto) {
        return `<div class="lab">
            <div class="lab-col">
                <div class="lab-barra">
                    <span class="titulo"><i class="fab fa-python" style="color:var(--amarillo)"></i>Tu código</span>
                    <label class="boton peq" title="Subir archivos desde tu PC (CSV, Excel, JSON…)"><i class="fas fa-upload"></i>Subir<input type="file" id="${prefijo}Subir" multiple hidden accept=".csv,.tsv,.txt,.xlsx,.xls,.json"></label>
                    <button class="boton peq" id="${prefijo}Archivos" title="Ver, usar y descargar archivos"><i class="fas fa-folder-open"></i></button>
                    <button class="boton peq" id="${prefijo}Limpiar" title="Borrar el código"><i class="fas fa-eraser"></i></button>
                    <button class="boton peq" id="${prefijo}Descargar" title="Descargar como archivo .py"><i class="fas fa-download"></i></button>
                    <button class="boton exito peq" id="${prefijo}Ejecutar"><i class="fas fa-play"></i>Ejecutar <kbd style="opacity:.75;font-size:.66rem">Ctrl+Enter</kbd></button>
                </div>
                <div id="${prefijo}Editor"></div>
                <label class="entradas-ayuda" for="${prefijo}Entradas"><i class="fas fa-keyboard"></i> Entradas para <code>input()</code>: una por línea (si faltan, el programa te las preguntará)</label>
                <textarea class="entradas mono" id="${prefijo}Entradas" placeholder="Ejemplo:&#10;Ada&#10;20"></textarea>
            </div>
            <div class="lab-col">
                <div class="lab-barra"><span class="titulo"><i class="fas fa-terminal" style="color:var(--verde)"></i>Consola</span><span class="etiqueta" id="${prefijo}Tiempo"></span></div>
                <div class="consola" id="${prefijo}Consola" style="min-height:${alto}px"><span class="vacio">La salida de tu programa aparecerá aquí. Presiona ▶ Ejecutar.</span></div>
                <div id="${prefijo}Profe"></div>
            </div>
        </div>`;
    }

    function construirLaboratorio(id) {
        const datos = modules[id];
        const p = $('[data-panel="laboratorio"]');
        const guardado = localStorage.getItem(`bp_lab_${sesion.id}_${id}`);
        const inicial = guardado || INICIOS[id] || (datos.exercises && datos.exercises[0] ? datos.exercises[0].template : '') || '# Escribe tu código Python aquí\nprint("¡Hola, mundo!")';
        p.innerHTML = `
            <div class="profe info" style="margin-bottom:14px"><div class="cara">🧪</div><div><b>Laboratorio de ${esc(datos.title.replace(/^\d+\.\s*/, ''))}</b>
            Experimenta sin miedo: aquí nada se rompe. Ejecuta el ejemplo, cámbialo y vuelve a ejecutarlo. Tu código se guarda solo.
            Los bloques de la lección con el botón <b>▶ Probar</b> se copian aquí.${id === 'pandas' ? ' Usa <b>Subir</b> para traer tus propios archivos (CSV, Excel, JSON) y <b><i class="fas fa-folder-open"></i></b> para verlos y descargar resultados. Los datos de práctica ya están cargados.' : ''}</div></div>
            ${plantillaLab('lab', 340)}`;
        editorLab = LAB.crearEditor($('#labEditor'), inicial, {
            alEjecutar: ejecutarLab,
            alCambiar: v => { try { localStorage.setItem(`bp_lab_${sesion.id}_${id}`, v); } catch (e) { /* lleno */ } }
        });
        $('#labEjecutar').onclick = ejecutarLab;
        $('#labLimpiar').onclick = () => { editorLab.set(''); editorLab.focus(); };
        $('#labDescargar').onclick = () => descargar(editorLab.get(), `${id}.py`);
        conectarArchivos('lab', () => editorLab);
    }

    // ----- Archivos: subir desde el PC, usar y descargar -----
    function insertarLectura(editor, nombre) {
        const linea = LAB.codigoLectura(nombre);
        const codigo = editor.get();
        const lineas = codigo.split('\n');
        const i = lineas.findIndex(l => /^\s*import pandas as pd\b/.test(l));
        // La lectura va justo después del import de pandas (o con su propio import al inicio)
        if (i >= 0) lineas.splice(i + 1, 0, linea, 'mostrar(df.head())');
        else lineas.unshift('import pandas as pd', linea, 'mostrar(df.head())', '');
        editor.set(lineas.join('\n'));
        editor.focus();
        UI.aviso(`Se agregó la lectura de «${nombre}» al inicio del código`, 'ok', 'fa-file-import');
    }

    function conectarArchivos(prefijo, obtenerEditor) {
        const entrada = $(`#${prefijo}Subir`), boton = $(`#${prefijo}Archivos`);
        if (entrada) entrada.onchange = async () => {
            const consola = $(`#${prefijo}Consola`);
            consola.innerHTML = '<span class="vacio">Subiendo…</span>';
            const nombres = [];
            for (const f of Array.from(entrada.files)) {
                try { nombres.push(await LAB.subirArchivo(f)); }
                catch (e) { UI.aviso('No se pudo subir ' + esc(f.name), 'error'); }
            }
            entrada.value = '';
            if (!nombres.length) { consola.innerHTML = ''; return; }
            consola.innerHTML = nombres.map(n => `<span class="entrada">📂 «${esc(n)}» listo para usar.</span>\nLéelo con:\n    import pandas as pd\n    ${esc(LAB.codigoLectura(n))}\n<button class="boton peq primario" data-usar="${esc(n)}" style="margin:6px 0 10px"><i class="fas fa-file-import"></i>Usar en mi código</button>\n`).join('\n');
            $$('[data-usar]', consola).forEach(b => b.onclick = () => insertarLectura(obtenerEditor(), b.dataset.usar));
            UI.aviso(`${nombres.length} archivo${nombres.length > 1 ? 's' : ''} subido${nombres.length > 1 ? 's' : ''}`, 'ok', 'fa-upload');
        };
        if (boton) boton.onclick = () => abrirArchivos(obtenerEditor);
    }

    async function abrirArchivos(obtenerEditor) {
        UI.modal('Archivos de Python', '<p style="color:var(--texto-3)">Cargando…</p>');
        try { await LAB.cargar(); } catch (e) { UI.modal('Archivos de Python', '<p>Python aún no está disponible. Revisa tu conexión.</p>'); return; }
        const lista = LAB.archivos();
        const kb = b => b < 1024 ? b + ' B' : (b / 1024).toFixed(1) + ' KB';
        UI.modal('Archivos de Python', `
            <p style="color:var(--texto-2);font-size:.88rem;margin-bottom:10px">Archivos que tu código puede leer. Los que subas o crees (por ejemplo con <code>to_csv</code>) aparecen aquí; se borran al recargar la página.</p>
            <div style="display:flex;flex-direction:column;gap:6px;max-height:50vh;overflow:auto">
            ${lista.map(a => `<div style="display:flex;align-items:center;gap:8px;padding:8px 10px;border-radius:10px;background:var(--superficie-2)">
                <i class="fas ${/\.xlsx?$/i.test(a.nombre) ? 'fa-file-excel' : /\.csv$/i.test(a.nombre) ? 'fa-file-csv' : 'fa-file'}" style="color:var(--azul)"></i>
                <span class="mono" style="flex:1;font-size:.84rem">${esc(a.nombre)}</span>
                <span class="etiqueta">${a.practica ? 'práctica' : kb(a.bytes)}</span>
                <button class="boton peq" data-usar="${esc(a.nombre)}" title="Agregar la lectura al código"><i class="fas fa-file-import"></i>Usar</button>
                <button class="boton peq" data-bajar="${esc(a.nombre)}" title="Descargar a tu PC"><i class="fas fa-download"></i></button></div>`).join('') || '<p>No hay archivos.</p>'}
            </div>
            <label class="boton primario" style="margin-top:12px"><i class="fas fa-upload"></i>Subir desde mi PC<input type="file" id="modalSubir" multiple hidden accept=".csv,.tsv,.txt,.xlsx,.xls,.json"></label>`);
        $$('#modalGenericoCuerpo [data-usar]').forEach(b => b.onclick = () => { UI.cerrarModal(); insertarLectura(obtenerEditor(), b.dataset.usar); });
        $$('#modalGenericoCuerpo [data-bajar]').forEach(b => b.onclick = () => {
            const n = b.dataset.bajar, a = document.createElement('a');
            a.href = URL.createObjectURL(new Blob([LAB.leerArchivo(n)]));
            a.download = n; a.click();
            setTimeout(() => URL.revokeObjectURL(a.href), 1000);
            UI.aviso('Descargado: ' + esc(n), 'ok', 'fa-download');
        });
        $('#modalSubir').onchange = async ev => {
            for (const f of Array.from(ev.target.files)) { try { await LAB.subirArchivo(f); } catch (e) { UI.aviso('No se pudo subir ' + esc(f.name), 'error'); } }
            abrirArchivos(obtenerEditor);
        };
    }

    async function correrEn(prefijo, editor, idModulo) {
        const consola = $(`#${prefijo}Consola`), profe = $(`#${prefijo}Profe`), boton = $(`#${prefijo}Ejecutar`);
        const codigo = editor.get();
        if (!codigo.trim()) { consola.innerHTML = '<span class="vacio">Escribe algo de código primero 🙂</span>'; return; }
        boton.disabled = true;
        profe.innerHTML = '';
        consola.innerHTML = `<span class="vacio">${LAB.listo ? 'Ejecutando…' : 'Cargando Python por primera vez (unos segundos)…'}</span>`;
        await new Promise(r => setTimeout(r, 30));
        const t0 = performance.now();
        try {
            const r = await LAB.ejecutar(codigo, $(`#${prefijo}Entradas`).value, true);
            LAB.pintar(consola, r);
            $(`#${prefijo}Tiempo`).textContent = `${Math.round(performance.now() - t0)} ms`;
            if (r.error) profe.innerHTML = LAB.explicar(r.error);
            GAME.ejecucion(idModulo, !r.error, r.salida, (r.figuras || []).length > 0);
            if (idModulo) { actualizarPasos(idModulo); }
        } catch (e) {
            consola.innerHTML = '<span class="err">No se pudo ejecutar: ' + esc(e.message) + '</span>';
            profe.innerHTML = '<div class="profe"><div class="cara">📡</div><div><b>Sin conexión con Python</b>El intérprete se descarga de internet la primera vez. Revisa tu conexión y vuelve a intentarlo.</div></div>';
        } finally {
            boton.disabled = false;
        }
    }

    function ejecutarLab() { return correrEn('lab', editorLab, moduloActual); }

    function descargar(texto, nombre) {
        const a = document.createElement('a');
        a.href = URL.createObjectURL(new Blob([texto], { type: 'text/x-python' }));
        a.download = nombre;
        a.click();
        setTimeout(() => URL.revokeObjectURL(a.href), 1000);
        UI.aviso('Archivo descargado: ' + nombre, 'ok', 'fa-download');
    }

    // ----- Retos -----
    function construirRetos(id) {
        const datos = modules[id], ejercicios = datos.exercises || [];
        const p = $('[data-panel="retos"]');
        Object.keys(editoresRetos).forEach(k => delete editoresRetos[k]);
        if (!ejercicios.length) {
            p.innerHTML = `<div class="tarjeta" style="text-align:center;padding:40px">
                <div style="font-size:3rem">🧭</div><h3 style="margin-top:8px">Este módulo no tiene retos de código</h3>
                <p style="color:var(--texto-2);margin:6px 0 16px">Practica lo aprendido en el laboratorio o pasa directamente al quiz.</p>
                <a class="boton primario" href="#/modulo/${id}/${(datos.quiz || []).length ? 'quiz' : 'laboratorio'}">Continuar</a></div>`;
            return;
        }
        const m = GAME.estado.modulos[id] || { retos: {} };
        p.innerHTML = `
            <div class="profe info" style="margin-bottom:14px"><div class="cara">🎯</div><div><b>${ejercicios.length} reto${ejercicios.length > 1 ? 's' : ''} con verificación automática</b>
            Escribe tu solución y presiona <b>Verificar</b>: comparamos los resultados de tu programa con los esperados. Superarlo sin ver la solución da <b>25 XP</b>; con la solución, 8 XP.</div></div>
            ${ejercicios.map((ej, i) => `
            <div class="tarjeta reto ${m.retos && m.retos[i] ? 'superado' : ''}" data-reto="${i}">
                <div class="reto-cab"><span class="num">${m.retos && m.retos[i] ? '<i class="fas fa-check"></i>' : i + 1}</span><h4>${esc(ej.title)}</h4>
                    ${retoDiario && retoDiario.mod === id && retoDiario.i === i ? '<span class="etiqueta xp">☀️ Reto del día</span>' : ''}
                    <span class="etiqueta ${m.retos && m.retos[i] ? 'ok' : 'xp'}">${m.retos && m.retos[i] ? 'Superado' : '+25 XP'}</span><i class="fas fa-chevron-down" style="color:var(--texto-3)"></i></div>
                <div class="reto-cuerpo">
                    <p class="reto-desc">${esc(ej.description)}</p>
                    ${plantillaLab('reto' + i, 230)}
                    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:12px">
                        <button class="boton primario" data-accion="verificar"><i class="fas fa-circle-check"></i>Verificar</button>
                        <button class="boton" data-accion="pista"><i class="fas fa-lightbulb"></i>Pista</button>
                        <button class="boton fantasma" data-accion="solucion"><i class="fas fa-eye"></i>Ver solución</button>
                        <button class="boton fantasma" data-accion="reiniciar" title="Volver a la plantilla"><i class="fas fa-rotate-left"></i></button>
                    </div>
                    <div class="veredicto" style="margin-top:12px"></div>
                </div>
            </div>`).join('')}`;
        $$('.reto', p).forEach(caja => {
            const i = +caja.dataset.reto;
            $('.reto-cab', caja).onclick = () => abrirReto(i, !caja.classList.contains('abierto'));
        });
    }

    function abrirReto(i, abrir) {
        const id = moduloActual, ej = modules[id].exercises[i];
        const caja = $(`.reto[data-reto="${i}"]`);
        if (!caja || !ej) return;
        caja.classList.toggle('abierto', abrir);
        if (!abrir) return;
        if (!editoresRetos[i]) {
            const clave = `bp_reto_${sesion.id}_${id}_${i}`;
            const ed = LAB.crearEditor($(`#reto${i}Editor`), localStorage.getItem(clave) || ej.template || '', {
                bajo: true,
                alEjecutar: () => correrEn('reto' + i, ed, id),
                alCambiar: v => { try { localStorage.setItem(clave, v); } catch (e) { /* lleno */ } }
            });
            editoresRetos[i] = ed;
            $(`#reto${i}Entradas`).value = LAB.entradasSugeridas(ej.solution);
            $(`#reto${i}Ejecutar`).onclick = () => correrEn('reto' + i, ed, id);
            $(`#reto${i}Limpiar`).onclick = () => ed.set('');
            $(`#reto${i}Descargar`).onclick = () => descargar(ed.get(), `reto_${id}_${i + 1}.py`);
            conectarArchivos('reto' + i, () => ed);
            let vioSolucion = false;
            const veredicto = $('.veredicto', caja);
            $('[data-accion="pista"]', caja).onclick = () => { veredicto.innerHTML = pista(ej); };
            $('[data-accion="reiniciar"]', caja).onclick = () => { ed.set(ej.template || ''); veredicto.innerHTML = ''; };
            $('[data-accion="solucion"]', caja).onclick = () => {
                veredicto.innerHTML = `<div class="profe info"><div class="cara">🤔</div><div><b>¿Seguro?</b>Intentarlo una vez más te enseña mucho más. Si ves la solución, el reto valdrá 8 XP en lugar de 25.
                    <div style="margin-top:10px;display:flex;gap:8px"><button class="boton peq" data-si>Mostrar solución</button><button class="boton peq primario" data-no>Lo intento otra vez 💪</button></div></div></div>`;
                $('[data-no]', veredicto).onclick = () => { veredicto.innerHTML = ''; ed.focus(); };
                $('[data-si]', veredicto).onclick = () => { vioSolucion = true; ed.set(ej.solution); veredicto.innerHTML = '<div class="profe info"><div class="cara">📖</div><div><b>Solución cargada</b>Léela línea por línea, ejecútala y luego intenta escribirla tú sin mirar.</div></div>'; };
            };
            $('[data-accion="verificar"]', caja).onclick = async () => {
                const b = $('[data-accion="verificar"]', caja);
                b.disabled = true;
                veredicto.innerHTML = '<div class="profe info"><div class="cara">⏳</div><div><b>Verificando…</b>Ejecutamos tu programa y la solución con las mismas entradas.</div></div>';
                try {
                    const entradas = $(`#reto${i}Entradas`).value;
                    const r = await LAB.verificar(ed.get(), ej.solution, ej.template, entradas);
                    const consola = $(`#reto${i}Consola`);
                    if (r.resultado) LAB.pintar(consola, r.resultado);
                    const esDiario = !!(retoDiario && retoDiario.mod === id && retoDiario.i === i);
                    if (r.estado === 'ok') {
                        veredicto.innerHTML = `<div class="profe bien"><div class="cara">🎉</div><div><b>¡Reto superado!</b>Tu programa produce los resultados esperados.</div></div>`;
                        if (GAME.retoSuperado(id, i, vioSolucion, esDiario)) {
                            GAME.confeti(90); marcarRetoSuperado(caja, i);
                            REGISTRO.actividad(id, 'Reto', ej.title, vioSolucion ? 'Superado con la solución' : 'Superado');
                        }
                        GAME.ejecucion(id, true, r.resultado.salida, (r.resultado.figuras || []).length > 0);
                    } else if (r.estado === 'manual') {
                        veredicto.innerHTML = `<div class="profe info"><div class="cara">🧑‍🔬</div><div><b>Este reto se practica fuera del navegador</b>Usa Google Colab, Cursor o tu computador según indica el enunciado. Cuando lo hayas hecho, márcalo.
                            <div style="margin-top:10px"><button class="boton exito peq" data-hecho><i class="fas fa-check"></i>Ya lo hice</button></div></div></div>`;
                        $('[data-hecho]', veredicto).onclick = () => { if (GAME.retoSuperado(id, i, false, esDiario)) { marcarRetoSuperado(caja, i); REGISTRO.actividad(id, 'Reto', ej.title, 'Marcado como hecho (fuera del navegador)'); } veredicto.innerHTML = '<div class="profe bien"><div class="cara">✅</div><div><b>¡Registrado!</b>Buen trabajo.</div></div>'; };
                    } else if (r.estado === 'sin-cambios') {
                        veredicto.innerHTML = '<div class="profe info"><div class="cara">✍️</div><div><b>Todavía no escribiste tu solución</b>Completa la plantilla donde dicen los comentarios y vuelve a verificar.</div></div>';
                    } else if (r.estado === 'error') {
                        veredicto.innerHTML = LAB.explicar(r.resultado.error);
                        GAME.ejecucion(id, false);
                    } else {
                        veredicto.innerHTML = `<div class="profe"><div class="cara">🔍</div><div><b>¡Casi! Faltan resultados</b>
                            No encontramos en tu salida: ${r.faltan.slice(0, 6).map(x => `<code>${esc(x)}</code>`).join(', ')}.
                            <details style="margin-top:8px"><summary style="cursor:pointer">Ver la salida esperada con estas entradas</summary><pre class="consola" style="min-height:0;margin-top:6px">${esc(r.referencia)}</pre></details></div></div>`;
                    }
                    actualizarPasos(id);
                    refrescarTodo();
                } catch (e) {
                    veredicto.innerHTML = '<div class="profe"><div class="cara">📡</div><div><b>No se pudo verificar</b>Python aún no está disponible. Revisa tu conexión.</div></div>';
                } finally { b.disabled = false; }
            };
        }
        editoresRetos[i].refrescar();
        caja.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function marcarRetoSuperado(caja, i) {
        caja.classList.add('superado');
        $('.num', caja).innerHTML = '<i class="fas fa-check"></i>';
        const et = $$('.reto-cab .etiqueta', caja).pop();
        if (et) { et.className = 'etiqueta ok'; et.textContent = 'Superado'; }
    }

    function pista(ej) {
        const s = ej.solution;
        const ideas = [];
        const defs = s.match(/def\s+\w+\(.*?\)/g);
        if (defs) ideas.push(`Necesitas definir ${defs.map(d => `<code>${esc(d)}</code>`).join(' y ')}.`);
        if (/input\(/.test(s)) ideas.push('Lee los datos con <code>input()</code> y conviértelos con <code>float()</code> o <code>int()</code>.');
        if (/\bfor\b/.test(s)) ideas.push('Un bucle <code>for</code> te ayudará a repetir.');
        if (/\bif\b/.test(s)) ideas.push('Usa <code>if</code> para decidir.');
        if (/try:/.test(s)) ideas.push('Protege la parte peligrosa con <code>try</code> / <code>except</code>.');
        if (/:\.\d+f/.test(s)) ideas.push(`Para los decimales usa un f-string como <code>${esc((s.match(/\{[^}]*:\.\d+f\}/) || ['{x:.2f}'])[0])}</code>.`);
        if (/math\.pi/.test(s)) ideas.push('π está en <code>math.pi</code> (recuerda <code>import math</code>).');
        if (/\*\*/.test(s)) ideas.push('La potencia se escribe <code>**</code>, por ejemplo <code>r ** 3</code>.');
        if (/class\s/.test(s)) ideas.push('Define una clase con <code>class</code> y su método <code>__init__(self, …)</code>.');
        const pr = (s.match(/print\(/g) || []).length;
        if (pr) ideas.push(`La solución usa ${pr} <code>print()</code>.`);
        return `<div class="profe info"><div class="cara">💡</div><div><b>Pistas</b><ul style="margin:4px 0 0 18px;list-style:disc">${(ideas.length ? ideas : ['Lee con calma el enunciado y escribe primero los pasos en comentarios.']).map(x => `<li>${x}</li>`).join('')}</ul></div></div>`;
    }

    // ----- Quiz -----
    let quiz = null;
    function construirQuiz(id) {
        const preguntas = modules[id].quiz || [];
        const p = $('[data-panel="quiz"]');
        if (!preguntas.length) {
            p.innerHTML = `<div class="tarjeta" style="text-align:center;padding:40px"><div style="font-size:3rem">📚</div><h3 style="margin-top:8px">Este módulo no tiene quiz</h3>
                <p style="color:var(--texto-2);margin-top:6px">Cuando termines de revisar el material, márcalo como completado arriba.</p></div>`;
            return;
        }
        const mejor = (GAME.estado.modulos[id] || {}).quizMejor;
        p.innerHTML = `<div class="quiz-caja"><div class="tarjeta" style="text-align:center;padding:36px 24px">
            <div style="font-size:3.2rem">🏆</div>
            <h2 style="font-size:1.5rem;font-weight:900;margin-top:6px">Quiz: ${esc(modules[id].title.replace(/^\d+\.\s*/, ''))}</h2>
            <p style="color:var(--texto-2);margin:8px auto 18px;max-width:460px">${preguntas.length} preguntas, una a la vez, con respuesta inmediata. Logra <b>70 %</b> o más para completar el módulo y ganar <b>100 XP</b> extra. ¡Encadena aciertos para hacer combos!</p>
            ${mejor !== null && mejor !== undefined ? `<p style="margin-bottom:16px"><span class="etiqueta ${mejor >= 70 ? 'ok' : ''}">Tu mejor resultado: ${mejor} %</span></p>` : ''}
            <button class="boton dorado grande" id="btnEmpezarQuiz"><i class="fas fa-play"></i>${mejor !== null && mejor !== undefined ? 'Intentar de nuevo' : 'Empezar quiz'}</button>
        </div></div>`;
        $('#btnEmpezarQuiz').onclick = () => empezarQuiz(id);
    }

    function barajar(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; }

    function empezarQuiz(id) {
        const preguntas = barajar(modules[id].quiz).map(q => {
            const ops = q.options.map((t, i) => ({ t, ok: i === q.correct }));
            // Si una opción menciona a otras («Opciones A y B», «Todas las anteriores»), se conserva el orden
            const orden = q.options.some(t => /opci[oó]n|todas|ninguna|anterior/i.test(t)) ? ops : barajar(ops);
            return { q: q.question, ops: orden };
        });
        quiz = { id, preguntas, i: 0, aciertos: 0, combo: 0, mejorCombo: 0, marcas: [] };
        pintarPregunta();
    }

    function pintarPregunta() {
        const p = $('[data-panel="quiz"]'), Q = quiz.preguntas[quiz.i];
        p.innerHTML = `<div class="quiz-caja"><div class="tarjeta" style="padding:26px">
            <div class="quiz-progreso">${quiz.preguntas.map((_, k) => `<i class="${quiz.marcas[k] || (k === quiz.i ? 'actual' : '')}"></i>`).join('')}</div>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
                <span class="etiqueta">Pregunta ${quiz.i + 1} de ${quiz.preguntas.length}</span>
                <span class="combo" id="combo">${quiz.combo >= 2 ? `🔥 Combo x${quiz.combo}` : ''}</span>
            </div>
            <div class="pregunta">${esc(Q.q)}</div>
            <div class="opciones">${Q.ops.map((o, k) => `<button class="opcion" data-k="${k}"><span class="letra">${'ABCD'[k] || k + 1}</span><span>${esc(o.t)}</span></button>`).join('')}</div>
            <div id="quizPie" style="margin-top:16px;min-height:46px;display:flex;justify-content:flex-end"></div>
        </div></div>`;
        $$('.opcion', p).forEach(b => b.onclick = () => responder(+b.dataset.k));
    }

    function responder(k) {
        const Q = quiz.preguntas[quiz.i], p = $('[data-panel="quiz"]');
        const botones = $$('.opcion', p);
        botones.forEach(b => b.disabled = true);
        const bien = Q.ops[k].ok;
        botones[k].classList.add(bien ? 'correcta' : 'incorrecta');
        if (!bien) botones[Q.ops.findIndex(o => o.ok)].classList.add('correcta');
        quiz.marcas[quiz.i] = bien ? 'bien' : 'mal';
        if (bien) { quiz.aciertos++; quiz.combo++; quiz.mejorCombo = Math.max(quiz.mejorCombo, quiz.combo); }
        else quiz.combo = 0;
        $('#combo').textContent = quiz.combo >= 2 ? `🔥 Combo x${quiz.combo}` : '';
        const ultimo = quiz.i === quiz.preguntas.length - 1;
        const frases = bien ? ['¡Correcto!', '¡Exacto!', '¡Bien hecho!', '¡Eso es!', '¡Perfecto!'] : ['Casi…', 'No exactamente', 'Ups'];
        $('#quizPie').innerHTML = `<div style="flex:1;font-weight:800;color:${bien ? 'var(--verde)' : 'var(--rojo)'};align-self:center">${frases[Math.random() * frases.length | 0]}</div>
            <button class="boton primario" id="btnSigPregunta">${ultimo ? 'Ver resultado' : 'Siguiente'} <i class="fas fa-arrow-right"></i></button>`;
        const b = $('#btnSigPregunta');
        b.focus();
        b.onclick = () => { if (ultimo) terminarQuiz(); else { quiz.i++; pintarPregunta(); } };
    }

    function terminarQuiz() {
        const { id, aciertos, preguntas, mejorCombo } = quiz;
        const pct = GAME.quizTerminado(id, aciertos, preguntas.length, mejorCombo);
        REGISTRO.actividad(id, 'Quiz', `${preguntas.length} preguntas`, `${pct} % (${aciertos} de ${preguntas.length})`, (pct / 20).toFixed(1));
        const aprobado = pct >= 70;
        const p = $('[data-panel="quiz"]');
        const emoji = pct === 100 ? '🌟' : aprobado ? '🎉' : pct >= 40 ? '💪' : '📚';
        const idx = NUCLEO.indexOf(id), sig = idx >= 0 ? NUCLEO[idx + 1] : null;
        p.innerHTML = `<div class="quiz-caja"><div class="tarjeta resultado-quiz">
            <div style="font-size:3.4rem">${emoji}</div>
            <div class="grande" style="color:${aprobado ? 'var(--verde)' : 'var(--naranja)'}">${pct}%</div>
            <p style="font-weight:800;font-size:1.1rem;margin-top:6px">${aciertos} de ${preguntas.length} correctas · mejor combo x${mejorCombo}</p>
            <p style="color:var(--texto-2);margin:8px auto 18px;max-width:460px">${aprobado ? (pct === 100 ? '¡Perfecto! Dominas este tema.' : '¡Aprobado! Ya puedes avanzar al siguiente módulo.') : 'Te falta poco. Repasa la lección y vuelve a intentarlo: las preguntas cambian de orden.'}</p>
            <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
                <button class="boton" id="btnRepetirQuiz"><i class="fas fa-rotate-right"></i>Repetir</button>
                ${aprobado && sig ? `<a class="boton dorado" href="#/modulo/${sig}"><i class="fas fa-forward"></i>Siguiente módulo</a>` : ''}
                ${!aprobado ? `<a class="boton primario" href="#/modulo/${id}/leccion"><i class="fas fa-book"></i>Repasar lección</a>` : ''}
            </div>
        </div></div>`;
        $('#btnRepetirQuiz').onclick = () => empezarQuiz(id);
        if (aprobado) { GAME.confeti(); completar(id); }
        actualizarPasos(id);
        refrescarTodo();
    }

    // ===== Laboratorio libre =====
    function mostrarLaboratorioLibre() {
        moduloActual = null;
        titular('Práctica libre', 'Laboratorio');
        const v = $('#vistaLaboratorio');
        if (!editorLibre) {
            v.innerHTML = `
            <div class="mod-cab"><div class="mod-ico" style="background:linear-gradient(135deg,#10b981,#3776ab)"><i class="fas fa-flask"></i></div>
                <div><h1>Laboratorio libre</h1><p>Python 3 real en tu navegador: numpy, matplotlib y más. Elige un experimento o escribe el tuyo.</p></div></div>
            <div class="tarjeta" style="margin-bottom:14px;padding:14px">
                <div style="font-weight:800;font-size:.85rem;margin-bottom:8px"><i class="fas fa-dna" style="color:var(--verde)"></i> Experimentos de Bio-Python</div>
                <div class="ejemplos">${BIO_EJEMPLOS.map((e, i) => `<button class="boton peq" data-ej="${i}">${esc(e.t)}</button>`).join('')}</div>
            </div>
            ${plantillaLab('libre', 340)}`;
            const clave = `bp_lab_${sesion.id}_libre`;
            editorLibre = LAB.crearEditor($('#libreEditor'), localStorage.getItem(clave) || BIO_EJEMPLOS[0].c, {
                alEjecutar: () => correrEn('libre', editorLibre, null),
                alCambiar: x => { try { localStorage.setItem(clave, x); } catch (e) { /* lleno */ } }
            });
            $('#libreEjecutar').onclick = () => correrEn('libre', editorLibre, null);
            $('#libreLimpiar').onclick = () => editorLibre.set('');
            $('#libreDescargar').onclick = () => descargar(editorLibre.get(), 'mi_programa.py');
            conectarArchivos('libre', () => editorLibre);
            $$('[data-ej]', v).forEach(b => b.onclick = () => { editorLibre.set(BIO_EJEMPLOS[+b.dataset.ej].c); $('#libreEntradas').value = ''; correrEn('libre', editorLibre, null); });
        }
        v.classList.add('visible');
        editorLibre.refrescar();
    }

    // ===== Logros =====
    function mostrarLogros() {
        moduloActual = null;
        titular('Tu progreso', 'Logros');
        const e = GAME.estado, nv = GAME.nivelDe(e.xp);
        const hechos = NUCLEO.filter(id => estadoModulo(id) === 'hecho').length;
        const v = $('#vistaLogros');
        v.innerHTML = `
        <div class="mod-cab"><div class="mod-ico" style="background:linear-gradient(135deg,#ffd43b,#f59e0b);color:#2a1d00">${nv.actual.emoji}</div>
            <div style="flex:1"><h1>${esc(sesion.nombre)}</h1><p>Nivel ${nv.indice + 1} · ${nv.actual.nombre} · ${e.xp} XP</p>
            <div class="barra-xp" style="max-width:420px"><i style="width:${nv.pct * 100}%"></i></div></div>
            <div class="der"><button class="boton ${hechos === NUCLEO.length ? 'dorado' : ''}" id="btnDiploma" ${hechos === NUCLEO.length ? '' : 'disabled title="Completa todos los módulos para obtenerlo"'}><i class="fas fa-award"></i>Diploma ${hechos}/${NUCLEO.length}</button></div>
        </div>
        <div class="rejilla-stats" style="margin-top:0;margin-bottom:18px">
            <div class="stat"><div class="ico" style="background:rgba(75,139,212,.15);color:var(--azul)"><i class="fas fa-play"></i></div><div><b>${e.stats.ejecuciones}</b><span>Programas ejecutados</span></div></div>
            <div class="stat"><div class="ico" style="background:rgba(52,211,153,.15);color:var(--verde)"><i class="fas fa-bullseye"></i></div><div><b>${e.stats.retos}</b><span>Retos superados</span></div></div>
            <div class="stat"><div class="ico" style="background:rgba(248,113,113,.15);color:var(--rojo)"><i class="fas fa-bug"></i></div><div><b>${e.stats.errores}</b><span>Errores (¡así se aprende!)</span></div></div>
            <div class="stat"><div class="ico" style="background:rgba(251,146,60,.15);color:var(--naranja)"><i class="fas fa-fire"></i></div><div><b>${e.racha.mejor}</b><span>Mejor racha (días)</span></div></div>
        </div>
        ${REGISTRO.activo() ? '<div class="profe info" style="margin-bottom:18px"><div class="cara">📋</div><div><b>Registro para tu profesor</b>La academia envía a tu profesor la hora de ingreso y de salida, el tiempo que pasas en la plataforma y las actividades que cumples (lecciones, retos, notas de los quizzes y módulos completados).</div></div>' : ''}
        <div class="dos-col" style="grid-template-columns:2fr 1fr;margin-top:0">
            <div><h2 style="font-size:1.2rem;font-weight:900;margin-bottom:12px">🏅 Medallas (${Object.keys(e.medallas).length}/${GAME.MEDALLAS.length})</h2>
                <div class="medallas">${GAME.MEDALLAS.map(m => {
                    const f = e.medallas[m.id];
                    return `<div class="medalla ${f ? '' : 'bloqueada'}"><div class="disco" style="background:${m.color}22;box-shadow:inset 0 0 0 3px ${m.color}">${m.emoji}</div><h4>${m.nombre}</h4><p>${m.desc}</p>${f ? `<p style="color:var(--verde);font-weight:700">${f}</p>` : ''}</div>`;
                }).join('')}</div></div>
            <div><h2 style="font-size:1.2rem;font-weight:900;margin-bottom:12px">📈 Niveles</h2>
                <div class="tarjeta niveles" style="padding:10px">${GAME.NIVELES.map((n, i) => `<div class="nivel-fila ${i === nv.indice ? 'actual' : i < nv.indice ? 'pasado' : ''}"><span style="font-size:1.2rem">${n.emoji}</span><span style="flex:1">${i + 1}. ${n.nombre}</span><span class="mono" style="font-size:.75rem">${n.xp} XP</span></div>`).join('')}</div>
                <div class="tarjeta" style="margin-top:14px;font-size:.84rem;color:var(--texto-2);line-height:1.7">
                    <h3 style="color:var(--texto);margin-bottom:6px">¿Cómo gano XP?</h3>
                    📖 Lección leída: <b>15</b><br>🧪 Primer programa del módulo: <b>10</b><br>🎯 Reto superado: <b>25</b> (con solución: 8)<br>☀️ Reto del día: <b>doble</b><br>❓ Respuesta correcta nueva: <b>8</b><br>🏆 Módulo completado: <b>100</b>
                </div>
            </div>
        </div>`;
        v.classList.add('visible');
        const bd = $('#btnDiploma');
        if (bd && !bd.disabled) bd.onclick = diploma;
    }

    function diploma() {
        const w = window.open('', '_blank');
        if (!w) { UI.aviso('Permite las ventanas emergentes para ver tu diploma', 'error'); return; }
        const fecha = new Date().toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' });
        w.document.write(`<!doctype html><html lang="es"><head><meta charset="utf-8"><title>Diploma Bio-Python</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet">
        <style>body{margin:0;font-family:Inter,sans-serif;background:#eef2fa;display:grid;place-items:center;min-height:100vh}
        .d{width:900px;max-width:95vw;aspect-ratio:1.414;background:#fff;border:14px solid #3776ab;outline:4px solid #ffd43b;outline-offset:-26px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:40px;box-sizing:border-box}
        h1{font-size:2.6rem;margin:.2em 0;color:#3776ab}h2{font-size:2rem;margin:.3em 0;color:#0f1a33}p{color:#46557a;font-size:1.05rem;max-width:620px}
        .s{font-size:4rem}@media print{body{background:#fff}button{display:none}}</style></head><body>
        <div class="d"><div class="s">🐍</div><p>La Academia Bio-Python certifica que</p><h2>${esc(sesion.nombre)}</h2>
        <p>completó los ${NUCLEO.length} módulos de <b>Principios de programación con Python</b>, alcanzando el nivel <b>${GAME.nivelDe(GAME.estado.xp).actual.nombre}</b> con ${GAME.estado.xp} XP y ${Object.keys(GAME.estado.medallas).length} medallas.</p>
        <h1>Gran logro</h1><p>${fecha}</p><button onclick="print()" style="margin-top:14px;padding:10px 18px;border-radius:10px;border:0;background:#3776ab;color:#fff;font-weight:700;cursor:pointer">Imprimir o guardar en PDF</button></div></body></html>`);
        w.document.close();
    }

    // ===== Recursos y evaluaciones =====
    function mostrarColeccion(tipo, idItem) {
        moduloActual = null;
        const lista = tipo === 'evaluaciones' ? EVALUACIONES : RECURSOS;
        const v = $(tipo === 'evaluaciones' ? '#vistaEvaluaciones' : '#vistaRecursos');
        const nombre = tipo === 'evaluaciones' ? 'Evaluaciones' : 'Recursos del curso';
        // Devolver al almacén un panel abierto antes
        $$('.panel-almacen', v).forEach(n => $('#almacen').appendChild(n));
        const item = lista.find(x => x.id === idItem);
        if (item) {
            titular(nombre, item.titulo);
            v.innerHTML = `<a class="boton peq volver" href="#/${tipo}"><i class="fas fa-arrow-left"></i>${nombre}</a><div class="hueco-panel"></div>`;
            const panel = $(`#almacen [data-panel-id="${item.id}"]`);
            if (panel) {
                $$('iframe[data-src]', panel).forEach(f => { if (!f.src) f.src = f.dataset.src; });
                $('.hueco-panel', v).appendChild(panel);
                prepararCodigoProbable(panel);
            }
            if (item.qr) generarQR(item.url, item.qr);
        } else {
            titular('Academia Bio-Python', nombre);
            v.innerHTML = `
            <div class="mod-cab"><div class="mod-ico" style="background:${tipo === 'evaluaciones' ? 'linear-gradient(135deg,#f59e0b,#ef4444)' : 'linear-gradient(135deg,#3b82f6,#8b5cf6)'}"><i class="fas ${tipo === 'evaluaciones' ? 'fa-clipboard-check' : 'fa-toolbox'}"></i></div>
                <div><h1>${nombre}</h1><p>${tipo === 'evaluaciones' ? 'Quizzes y parciales oficiales del curso. Cada uno se abre en una ventana nueva y tiene código QR para el celular.' : 'Libro del curso, guías, Shiny, LaTeX, GitHub y más.'}</p></div></div>
            <div class="rejilla-recursos">${lista.map(x => `
                <a class="tarjeta recurso" href="#/${tipo}/${x.id}">
                    <div class="r-ico" style="background:${x.color}"><i class="${x.fab ? 'fab ' + x.fab : 'fas ' + x.ico}"></i></div>
                    <h3>${esc(x.titulo)}</h3><p>${esc(x.sub)}</p>
                </a>`).join('')}</div>`;
        }
        v.classList.add('visible');
    }

    // ===== Aprendo con videos (canal del profesor) =====
    function mostrarVideos() {
        moduloActual = null;
        titular('Canal del profesor', 'Aprendo con videos');
        const v = $('#vistaVideos');
        if (!v.dataset.listo) { v.innerHTML = VideosCanal.html(); VideosCanal.montar(v); v.dataset.listo = '1'; }
        v.classList.add('visible');
    }

    // ===== Paleta de búsqueda (Ctrl+K) =====
    let entradasPaleta = [], selPaleta = 0;
    function indicePaleta() {
        const r = [
            { t: 'Inicio', s: 'Mapa de la aventura', ir: '#/inicio', ico: 'fa-house' },
            { t: 'Laboratorio libre', s: 'Escribe y ejecuta Python', ir: '#/laboratorio', ico: 'fa-flask' },
            { t: 'Mis logros', s: 'Medallas, niveles y diploma', ir: '#/logros', ico: 'fa-medal' },
            { t: 'Evaluaciones', s: 'Quizzes y parciales', ir: '#/evaluaciones', ico: 'fa-clipboard-check' },
            { t: 'Recursos', s: 'PDF, guías, LaTeX, GitHub', ir: '#/recursos', ico: 'fa-toolbox' },
            { t: 'Aprendo con videos', s: 'Videos del canal del profesor', ir: '#/videos', ico: 'fa-youtube', fab: true }
        ];
        VideosCanal.TEMAS.forEach(t => r.push({ t: 'Video: ' + t[0], s: 'Aprendo con videos', ir: '#/videos', ico: 'fa-youtube', fab: true, extra: t[3].map(v => VideosCanal.TITULOS[v][0]).join(' ').toLowerCase() }));
        [...NUCLEO, ...EXTRAS].forEach(id => {
            const d = modules[id];
            const texto = [d.content, d.practiceContent, d.colabContent, ...(d.quiz || []).map(q => q.question)].join(' ').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
            r.push({ t: d.title, s: SUBTITULOS[id] || '', ir: `#/modulo/${id}`, ico: ICONOS[id], extra: texto.toLowerCase() });
            (d.exercises || []).forEach((ej, i) => r.push({ t: 'Reto: ' + ej.title, s: d.title, ir: `#/modulo/${id}/retos/${i}`, ico: 'fa-bullseye', extra: (ej.description || '').toLowerCase() }));
            if ((d.quiz || []).length) r.push({ t: 'Quiz: ' + d.title.replace(/^\d+\.\s*/, ''), s: `${d.quiz.length} preguntas`, ir: `#/modulo/${id}/quiz`, ico: 'fa-trophy' });
        });
        EVALUACIONES.forEach(x => r.push({ t: x.titulo, s: 'Evaluación · ' + x.sub, ir: `#/evaluaciones/${x.id}`, ico: x.ico }));
        RECURSOS.forEach(x => r.push({ t: x.titulo, s: 'Recurso · ' + x.sub, ir: `#/recursos/${x.id}`, ico: x.fab ? x.fab : x.ico, fab: !!x.fab }));
        return r;
    }
    function abrirPaleta() {
        entradasPaleta = indicePaleta();
        $('#capaPaleta').classList.add('visible');
        $('#paletaEntrada').value = '';
        filtrarPaleta();
        setTimeout(() => $('#paletaEntrada').focus(), 30);
    }
    const sinTildes = s => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    function filtrarPaleta() {
        const q = sinTildes($('#paletaEntrada').value.trim());
        // Cada palabra debe aparecer en el título, el subtítulo o el texto; pesan más las del título
        const palabras = q.split(/\s+/).filter(Boolean);
        const puntaje = x => {
            const t = sinTildes(x.t), st = sinTildes(x.s), ex = x.extra ? sinTildes(x.extra) : '';
            let p = 0;
            for (const w of palabras) {
                if (t.includes(w)) p += 3; else if (st.includes(w)) p += 2; else if (ex.includes(w)) p += 1; else return 0;
            }
            return p;
        };
        const res = !q ? entradasPaleta.slice(0, 12) : entradasPaleta
            .map(x => ({ x, p: puntaje(x) })).filter(o => o.p).sort((a, b) => b.p - a.p).slice(0, 14).map(o => o.x);
        selPaleta = 0;
        $('#paletaLista').innerHTML = res.length ? res.map((x, i) => `<button class="paleta-item ${i === 0 ? 'sel' : ''}" data-ir="${x.ir}"><i class="${x.fab ? 'fab' : 'fas'} ${x.ico}" style="width:20px;color:var(--azul)"></i><div>${esc(x.t)}<small>${esc(x.s)}</small></div></button>`).join('')
            : '<p style="padding:16px;color:var(--texto-3)">Sin resultados. Prueba con «listas», «while» o «diccionario».</p>';
        $$('#paletaLista .paleta-item').forEach(b => b.onclick = () => { $('#capaPaleta').classList.remove('visible'); location.hash = b.dataset.ir; });
    }
    function moverPaleta(e) {
        const items = $$('#paletaLista .paleta-item');
        if (!items.length) return;
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            e.preventDefault();
            selPaleta = (selPaleta + (e.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length;
            items.forEach((b, i) => b.classList.toggle('sel', i === selPaleta));
            items[selPaleta].scrollIntoView({ block: 'nearest' });
        } else if (e.key === 'Enter') { items[selPaleta].click(); }
    }

    // ===== Notas =====
    function claveNotas() { return `bp_notas_${sesion.id}`; }
    function abrirNotas() {
        let notas = {};
        try { notas = JSON.parse(localStorage.getItem(claveNotas()) || '{}'); } catch (e) { /* vacío */ }
        const id = moduloActual || 'general';
        $('#notasTitulo').textContent = moduloActual ? `Notas · ${modules[moduloActual].title}` : 'Notas generales';
        $('#notasArea').value = notas[id] || '';
        $('#capaNotas').classList.add('visible');
        setTimeout(() => $('#notasArea').focus(), 30);
    }
    function guardarNotas() {
        let notas = {};
        try { notas = JSON.parse(localStorage.getItem(claveNotas()) || '{}'); } catch (e) { /* vacío */ }
        notas[moduloActual || 'general'] = $('#notasArea').value;
        localStorage.setItem(claveNotas(), JSON.stringify(notas));
        $('#capaNotas').classList.remove('visible');
        UI.aviso('Notas guardadas', 'ok', 'fa-floppy-disk');
        if ($('#notasArea').value.trim()) GAME.notasGuardadas();
    }
    function descargarNotas() {
        let notas = {};
        try { notas = JSON.parse(localStorage.getItem(claveNotas()) || '{}'); } catch (e) { /* vacío */ }
        notas[moduloActual || 'general'] = $('#notasArea').value;
        const texto = Object.entries(notas).filter(([, t]) => t.trim()).map(([k, t]) => `# ${k === 'general' ? 'Notas generales' : modules[k] ? modules[k].title : k}\n\n${t}\n`).join('\n');
        const a = document.createElement('a');
        a.href = URL.createObjectURL(new Blob([texto || 'Sin notas'], { type: 'text/markdown' }));
        a.download = 'mis_notas_biopython.md';
        a.click();
    }

    return { iniciar, refrescarJugador, refrescarTodo, get sesion() { return sesion; } };
})();

// Compatibilidad con contenido antiguo que llama loadModule('id')
function loadModule(id) { location.hash = '#/modulo/' + id; }

document.addEventListener('DOMContentLoaded', () => APP.iniciar());
