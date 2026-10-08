/**
 * Academia Bio-Python · Recursos y evaluaciones del curso
 * Catálogo de evaluaciones externas (con código QR) y de recursos (PDF, guías, LaTeX…).
 * Conserva los nombres de funciones antiguos porque el contenido heredado los llama con onclick.
 */
const EVALUACIONES = [
    { id: 'evaluacionPrimerQuiz', titulo: 'Primer quiz',        sub: 'Quiz interactivo Bio-Python',            url: 'https://jestrada2020.github.io/PrimerQuizBioPythonV1/',                     qr: 'qrCodeContainer',               ico: 'fa-clipboard-check', color: '#10b981' },
    { id: 'evaluacionQuizDos',    titulo: 'Segundo quiz',       sub: 'Shiny for Python',                       url: 'https://jestrada2020.github.io/SegundoQuizShinyForPythonV1/',              qr: 'qrCodeQuizDosContainer',        ico: 'fa-clipboard-check', color: '#06b6d4' },
    { id: 'tercerQuiz',           titulo: 'Tercer quiz',        sub: 'Programación Python',                    url: 'https://jestrada2020.github.io/TercerQuizProgramacionPython/',             qr: 'qrCodeTercerQuizContainer',     ico: 'fa-book-reader',     color: '#3b82f6' },
    { id: 'cuartoQuiz',           titulo: 'Cuarto quiz',        sub: 'Programación Python',                    url: 'https://jestrada2020.github.io/CuartoQuizProgramacionversion1/',           qr: 'qrCodeCuartoQuizContainer',     ico: 'fa-book-reader',     color: '#8b5cf6' },
    { id: 'primerParcialPython',  titulo: 'Primer parcial',     sub: 'Bio-Python',                             url: 'https://jestrada2020.github.io/PrimerParcialBioPythonV1/',                 qr: 'qrCodeParcialContainer',        ico: 'fa-graduation-cap',  color: '#f59e0b' },
    { id: 'parcialDos',           titulo: 'Segundo parcial',    sub: 'Bio-Python',                             url: 'https://jestrada2020.github.io/SegundoParcialBioPythonV1/',                qr: 'qrCodeParcialDosContainer',     ico: 'fa-graduation-cap',  color: '#f97316' },
    { id: 'tercerParcial',        titulo: 'Tercer parcial',     sub: 'Programación Python',                    url: 'https://jestrada2020.github.io/TercerParcialProgramacionBioPyhtonv1/',     qr: 'qrCodeTercerParcialContainer',  ico: 'fa-graduation-cap',  color: '#ef4444' },
    { id: 'cuartoParcial',        titulo: 'Cuarto parcial',     sub: 'Evaluación final Bio-Python',            url: 'https://jestrada2020.github.io/EvaluacionFinalProgramacionBioPythonv1/',   qr: 'qrCodeCuartoParcialContainer',  ico: 'fa-trophy',          color: '#e11d48' }
];

const RECURSOS = [
    { id: 'pdfCursoCompletoCes',  titulo: 'Libro del curso (PDF)',       sub: 'Principios de programación con Python', ico: 'fa-file-pdf',     color: '#ef4444' },
    { id: 'resumenClaveCursoCes', titulo: 'Resumen clave de Python',     sub: 'La chuleta oficial del curso CES',      ico: 'fa-book-open',    color: '#f59e0b' },
    { id: 'recommended',          titulo: 'Páginas recomendadas',        sub: 'Sitios para seguir aprendiendo',        ico: 'fa-link',         color: '#3b82f6' },
    { id: 'shiny',                titulo: 'Shiny for Python',            sub: 'Aplicaciones web reactivas',            ico: 'fa-star',         color: '#8b5cf6' },
    { id: 'shinyConceptos',       titulo: 'Conceptos clave de Shiny',    sub: 'Guía de referencia',                    ico: 'fa-lightbulb',    color: '#a855f7' },
    { id: 'editorLatex',          titulo: 'Editor de LaTeX (Overleaf)',  sub: 'Escribe informes científicos',          ico: 'fa-file-alt',     color: '#10b981' },
    { id: 'github',               titulo: 'Guía de GitHub',              sub: 'Control de versiones y publicación',    ico: 'fa-code-branch',  color: '#64748b', fab: 'fa-github' },
    { id: 'manualUsuario',        titulo: 'Manual de usuario',           sub: 'Cómo usar la academia paso a paso',     ico: 'fa-book',         color: '#3776ab' },
    { id: 'htmlEntregas',         titulo: 'HTML de entregas',            sub: 'Página de entregas semanales',          ico: 'fa-code',         color: '#0ea5e9' }
];

function showNotification(mensaje) { UI.aviso(mensaje, 'ok', 'fa-check-circle'); }

function copiarTexto(texto, mensaje = '¡Copiado al portapapeles!') {
    const respaldo = () => {
        const ta = document.createElement('textarea');
        ta.value = texto; document.body.appendChild(ta); ta.select();
        try { document.execCommand('copy'); } catch (e) { /* sin portapapeles */ }
        ta.remove();
        showNotification(mensaje);
    };
    if (navigator.clipboard) navigator.clipboard.writeText(texto).then(() => showNotification(mensaje)).catch(respaldo);
    else respaldo();
}

function generarQR(url, idContenedor) {
    const c = document.getElementById(idContenedor);
    if (!c || c.childElementCount) return;
    const img = document.createElement('img');
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(url)}`;
    img.alt = 'Código QR de la evaluación';
    img.width = 200; img.height = 200;
    img.style.margin = '0 auto';
    img.onerror = () => { c.innerHTML = '<p style="color:#475569;font-size:.8rem;padding:12px">No se pudo generar el código QR.<br>Usa el enlace directo.</p>'; };
    c.appendChild(img);
}

// Nombres antiguos usados por el contenido heredado
const _ev = id => EVALUACIONES.find(e => e.id === id);
function generateQRCode()            { const e = _ev('evaluacionPrimerQuiz'); generarQR(e.url, e.qr); }
function generateQuizDosQRCode()     { const e = _ev('evaluacionQuizDos');    generarQR(e.url, e.qr); }
function generateTercerQuizQRCode()  { const e = _ev('tercerQuiz');           generarQR(e.url, e.qr); }
function generateCuartoQuizQRCode()  { const e = _ev('cuartoQuiz');           generarQR(e.url, e.qr); }
function generateParcialQRCode()     { const e = _ev('primerParcialPython');  generarQR(e.url, e.qr); }
function generateParcialDosQRCode()  { const e = _ev('parcialDos');           generarQR(e.url, e.qr); }
function generateTercerParcialQRCode(){ const e = _ev('tercerParcial');       generarQR(e.url, e.qr); }
function generateCuartoParcialQRCode(){ const e = _ev('cuartoParcial');       generarQR(e.url, e.qr); }
function copyEvaluacionLink()        { copiarTexto(_ev('evaluacionPrimerQuiz').url, '¡Enlace copiado!'); }
function copyEvaluacionQuizDosLink() { copiarTexto(_ev('evaluacionQuizDos').url, '¡Enlace copiado!'); }
function copyTercerQuizLink()        { copiarTexto(_ev('tercerQuiz').url, '¡Enlace copiado!'); }
function copyCuartoQuizLink()        { copiarTexto(_ev('cuartoQuiz').url, '¡Enlace copiado!'); }
function copyParcialLink()           { copiarTexto(_ev('primerParcialPython').url, '¡Enlace del parcial copiado!'); }
function copyParcialDosLink()        { copiarTexto(_ev('parcialDos').url, '¡Enlace del parcial copiado!'); }
function copyTercerParcialLink()     { copiarTexto(_ev('tercerParcial').url, '¡Enlace del parcial copiado!'); }
function copyCuartoParcialLink()     { copiarTexto(_ev('cuartoParcial').url, '¡Enlace del parcial copiado!'); }
function copyToClipboard(texto)      { copiarTexto(texto, '¡Comando copiado!'); }

// Botones que aparecen dentro del contenido de algunos módulos
function openNewColabNotebook() { window.open('https://colab.research.google.com/', '_blank', 'noopener'); showNotification('Abriendo Google Colab…'); }
function openOverleafEditor()   { window.open('https://www.overleaf.com/', '_blank', 'noopener'); showNotification('Abriendo Overleaf…'); }
function openZAI()              { window.open('https://chat.z.ai/', '_blank', 'noopener'); showNotification('Abriendo Z AI…'); }
function handleZAIIframeLoad() {}
function handleZAIIframeError() { showZAIFallback(); }
function showZAIFallback() {
    const marco = document.getElementById('zai-iframe-container');
    const respaldo = document.getElementById('zai-fallback');
    if (marco && respaldo) { marco.style.display = 'none'; respaldo.classList.remove('hidden'); respaldo.style.display = 'flex'; }
}

// Cursor no se puede abrir desde una página web: se muestran instrucciones claras
function launchCursorIDE() {
    const ua = navigator.userAgent.toLowerCase();
    const so = ua.includes('win') ? 'Windows' : ua.includes('mac') ? 'macOS' : ua.includes('linux') ? 'Linux' : 'tu sistema';
    const terminal = so === 'Windows' ? 'PowerShell' : 'la Terminal';
    UI.modal('Abrir Cursor IDE', `
        <p style="color:var(--texto-2)">Sistema detectado: <b>${so}</b>. Por seguridad, el navegador no puede abrir programas de tu computador; hazlo así:</p>
        <ol style="margin:12px 0 14px 18px;list-style:decimal;color:var(--texto-2);line-height:1.8">
            <li>Abre ${terminal}.</li>
            <li>Escribe <code class="mono">cursor .</code> y presiona Enter (abre Cursor en la carpeta actual).</li>
            <li>Si dice «comando no encontrado», instala Cursor desde su página.</li>
        </ol>
        <div style="display:flex;gap:8px;flex-wrap:wrap">
            <button class="boton primario" onclick="copyToClipboard('cursor .')"><i class="fas fa-copy"></i>Copiar comando</button>
            <a class="boton" href="https://cursor.com" target="_blank" rel="noopener"><i class="fas fa-download"></i>Descargar Cursor</a>
        </div>`);
}
function openCursorWebsite() { window.open('https://cursor.com', '_blank', 'noopener'); }
function closeCursorModal() { UI.cerrarModal(); }

// Manual de usuario en una ventana aparte (si el navegador la bloquea, se avisa en la página)
function abrirManual() {
    const w = window.open('docs/manual_usuario.pdf', '_blank');
    if (!w) UI.aviso('El navegador bloqueó la ventana emergente. Usa «Descargar PDF» o permite las ventanas emergentes.', 'error');
}
