/**
 * Academia Bio-Python · «Aprendo con videos»
 * Videos del canal de YouTube del profesor John Jairo Estrada (john estrada, UCe_8YXWBojXgfgaiQODPWTg),
 * verificados uno por uno (canal y descripción) en octubre de 2026 y asociados a los módulos y recursos
 * cuyo tema tratan. Los títulos se muestran con la ortografía corregida.
 */
const VideosCanal = (() => {

    const CANAL = 'https://www.youtube.com/channel/UCe_8YXWBojXgfgaiQODPWTg';

    // [tema, [destinos: '#/modulo/id' o '#/recursos/id'], qué se aprende, [ids de video]]
    const TEMAS = [
        ['Importar módulos', ['#/modulo/modules'],
            'La diferencia entre <code>import</code> y <code>from … import</code> para usar funciones de otros módulos.',
            ['Kqx45kvgahw']],
        ['Dataframes con pandas', ['#/modulo/pandas', '#/modulo/data-structures'],
            'Crear tablas de datos (dataframes), filtrarlas con condiciones lógicas y desigualdades, y operar entre filas y columnas.',
            ['U_Yp9cA7hH4', 'eT1nRAJGDNg', 'gzN7VTDyWPw', 'A9X0-QJSV2Q']],
        ['De la unidad de observación al dataframe (apoyo)', ['#/modulo/pandas', '#/modulo/data-structures'],
            'Cómo se organizan los datos de un estudio en una tabla antes de llevarla a Python: ejemplos en biología, ecología, física y química.',
            ['3c4oRkL2_2w', 'zd2Ku40ahB0', 'c9DTa2An1qg', '_m5ddwI-9zo']],
        ['Google Colab', ['#/modulo/google-colab'],
            'Personalizar Colab, trabajar en grupo con proyectos y datos colaborativos.',
            ['5-Ded09PCKI', 'tw9FqCLlLqo', 'Ba7vJ1XW7M4']],
        ['Cargar datos CSV en Colab', ['#/modulo/pandas', '#/modulo/google-colab', '#/modulo/io'],
            'Convertir una hoja de Excel a CSV y subir el archivo a Colab para leerlo con Python.',
            ['A4FUP3M9ZDk', 'lm7MwqMPNJM']],
        ['Shiny for Python', ['#/recursos/shiny', '#/recursos/shinyConceptos'],
            'Los botones clave para construir aplicaciones web interactivas con Shiny for Python.',
            ['mDglHFySmzA', 'IwH_7DOFpw4']],
        ['Modelos y simulaciones en biología (apoyo)', ['#/laboratorio'],
            'Problemas reales del curso Bio-Python: biorreactores, crecimiento logístico y mezcla en dos tanques, del modelo a la simulación con gráfica.',
            ['Y0XPC_ohq1s', 'lF_lwkrVkXI', 'phJlrxi0ZWw', 'VFdqLxqz4M4', '_LTU2PCMKCU', 'j8aSH8D274Y']]
    ];

    const TITULOS = {
        'Kqx45kvgahw': ['¿Qué es import y qué es from?', '1:05'],
        'U_Yp9cA7hH4': ['Dataframes y pandas en Python', '5:48'],
        'eT1nRAJGDNg': ['Dataframe y filtrado lógico con pandas', '9:11'],
        'gzN7VTDyWPw': ['Dataframes: filtros con desigualdades y pandas', '9:07'],
        'A9X0-QJSV2Q': ['Dataframes: operaciones entre filas y columnas con pandas', '7:07'],
        '3c4oRkL2_2w': ['Construcción de una base de datos (dataframe): ejemplo en biología', '8:03'],
        'zd2Ku40ahB0': ['De la unidad de observación a la base de datos: ejemplo en ecología', '8:00'],
        'c9DTa2An1qg': ['De la unidad de observación a la base de datos: ejemplo en física', '7:57'],
        '_m5ddwI-9zo': ['De la unidad de observación a la base de datos: ejemplo en química', '7:48'],
        '5-Ded09PCKI': ['Google Colab: personalizar la configuración', '4:07'],
        'tw9FqCLlLqo': ['Google Colab: proyectos colaborativos en grupos de trabajo', '1:52'],
        'Ba7vJ1XW7M4': ['Google Colab: datos colaborativos', '2:33'],
        'A4FUP3M9ZDk': ['Google Colab: convertir una hoja de Excel a CSV y cargarla', '3:29'],
        'lm7MwqMPNJM': ['Google Colab: cómo cargar datos en formato CSV', '4:05'],
        'mDglHFySmzA': ['Botones de Shiny for Python (parte 1)', '4:10'],
        'IwH_7DOFpw4': ['Botones de Shiny for Python (parte 2)', '3:24'],
        'Y0XPC_ohq1s': ['Biorreactor (parte 1): qué es y sus ecuaciones diferenciales', '4:45'],
        'lF_lwkrVkXI': ['Biorreactor (parte 2): simulación de dos casos', '0:46'],
        'phJlrxi0ZWw': ['Biorreactor (parte 3): simulación con gráfica', '0:46'],
        'VFdqLxqz4M4': ['Deducción de la ecuación logística por dos métodos', '7:50'],
        '_LTU2PCMKCU': ['Deducción del sistema para dos tanques', '7:25'],
        'j8aSH8D274Y': ['Simulación del modelo para dos tanques', '6:26']
    };

    // Módulos que aún no tienen videos del canal (ayuda a decidir qué grabar)
    const SIN = ['intro', 'interpreter', 'basics', 'control-flow', 'errors', 'classes', 'stdlib', 'stdlib2', 'venv',
        'deepseek', 'chatgptea', 'cursor', 'zai', 'antigravity', 'vm'];

    const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

    function nombreDestino(ir) {
        const [, tipo, id] = ir.split('/');
        if (tipo === 'modulo' && modules[id]) return modules[id].title;
        if (tipo === 'recursos') { const r = RECURSOS.find(x => x.id === id); return r ? r.titulo : id; }
        if (tipo === 'laboratorio') return 'Laboratorio libre';
        return ir;
    }

    // Videos del canal relacionados con un módulo (para mostrarlos también en su lección)
    function deModulo(id) {
        const ids = [];
        TEMAS.forEach(t => { if (t[1].includes('#/modulo/' + id)) t[3].forEach(v => { if (!ids.includes(v)) ids.push(v); }); });
        return ids.map(v => ({ title: TITULOS[v][0], url: 'https://www.youtube.com/embed/' + v, canal: true }));
    }

    function total() { return Object.keys(TITULOS).length; }

    function html() {
        return `
        <div class="mod-cab">
            <div class="mod-ico" style="background:linear-gradient(135deg,#ef4444,#b91c1c)"><i class="fab fa-youtube"></i></div>
            <div style="flex:1;min-width:0"><h1>Aprendo con videos</h1>
                <p>${total()} videos del canal del profesor John Jairo Estrada, organizados por tema. Pulsa un video para verlo aquí mismo.</p></div>
            <div class="der"><a class="boton" href="${CANAL}" target="_blank" rel="noopener"><i class="fab fa-youtube" style="color:#ef4444"></i>Ver el canal completo</a></div>
        </div>
        <div class="leccion" style="margin-bottom:22px">
            <div class="video-marco" id="canalMarco"></div>
            <div class="tarjeta" style="padding:16px">
                <small style="color:var(--texto-3);font-weight:700;font-size:.7rem;letter-spacing:.06em">REPRODUCIENDO</small>
                <h3 id="canalTitulo" style="margin:4px 0 6px"></h3>
                <p id="canalTema" style="color:var(--texto-2);font-size:.85rem"></p>
                <div id="canalIr" style="display:flex;flex-direction:column;gap:6px;margin-top:12px"></div>
            </div>
        </div>
        ${TEMAS.map((t, i) => `
        <div class="tarjeta" style="margin-bottom:14px">
            <div style="display:flex;gap:12px;align-items:flex-start;flex-wrap:wrap;margin-bottom:12px">
                <div style="flex:1;min-width:240px"><h3>${esc(t[0])}</h3><p style="color:var(--texto-2);font-size:.88rem;margin-top:4px">${t[2]}</p></div>
                <div style="display:flex;gap:6px;flex-wrap:wrap">${t[1].map(ir => `<a class="boton peq" href="${ir}"><i class="fas fa-arrow-right"></i>Ver en la aplicación: ${esc(nombreDestino(ir))}</a>`).join('')}</div>
            </div>
            <div class="rejilla-videos">${t[3].map(v => `
                <button class="video-item" data-video="${v}" data-tema="${i}">
                    <img loading="lazy" src="https://img.youtube.com/vi/${v}/mqdefault.jpg" alt="">
                    <div><b>${esc(TITULOS[v][0])}</b><span>${TITULOS[v][1]} min</span></div>
                </button>`).join('')}</div>
        </div>`).join('')}
        <div class="profe info"><div class="cara">🎬</div><div><b>Módulos que aún no tienen videos del canal</b>
            ${SIN.map(id => esc(modules[id] ? modules[id].title : id)).join(' · ')}. Sus lecciones tienen videos de otros autores.</div></div>`;
    }

    function montar(raiz) {
        const poner = (v, tema, reproducir) => {
            const marco = raiz.querySelector('#canalMarco');
            raiz.querySelectorAll('.video-item').forEach(b => b.classList.toggle('activo', b.dataset.video === v));
            raiz.querySelector('#canalTitulo').textContent = TITULOS[v][0];
            raiz.querySelector('#canalTema').textContent = 'Tema: ' + TEMAS[tema][0];
            raiz.querySelector('#canalIr').innerHTML = TEMAS[tema][1].map(ir => `<a class="boton peq" href="${ir}"><i class="fas fa-arrow-right"></i>${esc(nombreDestino(ir))}</a>`).join('')
                + `<a class="boton peq fantasma" href="https://www.youtube.com/watch?v=${v}" target="_blank" rel="noopener"><i class="fab fa-youtube"></i>Abrir en YouTube</a>`;
            if (reproducir) {
                marco.innerHTML = `<iframe referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/${v}?autoplay=1&rel=0" title="${esc(TITULOS[v][0])}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
            } else {
                marco.innerHTML = `<button aria-label="Reproducir video" style="position:absolute;inset:0;border:0;cursor:pointer;background:#000 url(https://img.youtube.com/vi/${v}/hqdefault.jpg) center/cover">
                    <span style="position:absolute;inset:0;display:grid;place-items:center;background:rgba(0,0,0,.25)"><span style="width:76px;height:76px;border-radius:50%;background:#ef4444;display:grid;place-items:center"><i class="fas fa-play" style="color:#fff;font-size:1.8rem;margin-left:5px"></i></span></span></button>`;
                marco.firstElementChild.onclick = () => poner(v, tema, true);
            }
        };
        raiz.querySelectorAll('.video-item').forEach(b => b.onclick = () => { poner(b.dataset.video, +b.dataset.tema, true); window.scrollTo({ top: 0, behavior: 'smooth' }); });
        poner(TEMAS[1][3][0], 1, false);
    }

    return { CANAL, TEMAS, TITULOS, SIN, html, montar, deModulo, total };
})();
