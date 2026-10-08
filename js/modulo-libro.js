/**
 * Academia Bio-Python · Módulo opcional «Libro del curso (PDF)»
 * Muestra el libro principalCusoPython14Feb2024Mod1.pdf dentro de la academia y en una ventana emergente.
 */
const LIBRO_CURSO = 'principalCusoPython14Feb2024Mod1.pdf';

// Abre el libro en una ventana aparte; si el navegador bloquea la ventana, se avisa en la página
function abrirLibroCurso() {
    const w = window.open(LIBRO_CURSO, '_blank');
    if (!w) UI.aviso('El navegador bloqueó la ventana emergente. Permite las ventanas emergentes o usa «Descargar PDF».', 'error');
}

modules['libro-curso'] = {
    title: 'Libro del curso (PDF)',
    description: 'Libro completo del curso en PDF',
    video: '',
    additionalVideos: [],
    content: `
        <div style="display:flex;flex-wrap:wrap;align-items:center;gap:10px;margin-bottom:12px">
            <div style="flex:1;min-width:240px">
                <h2 class="text-2xl font-bold theme-text-primary mb-1">Libro del curso de programación</h2>
                <p class="theme-text-secondary">Python, R con RStudio y automatización con n8n · Facultad de Ciencias y Biotecnología · 98 páginas.</p>
            </div>
            <button class="boton primario" onclick="abrirLibroCurso()"><i class="fas fa-up-right-from-square"></i>Ver en ventana emergente</button>
            <a class="boton" href="${LIBRO_CURSO}" download><i class="fas fa-download"></i>Descargar PDF</a>
        </div>
        <div style="width:100%;height:80vh;min-height:480px">
            <iframe src="${LIBRO_CURSO}#toolbar=1&navpanes=0&view=FitH" title="Libro del curso de programación (PDF)"
                style="width:100%;height:100%;border:0;border-radius:12px;background:#525659"></iframe>
        </div>
        <div class="pd-nota info" style="margin-top:14px">
            <b>Consejos:</b> usa la ventana emergente para leer a pantalla completa o junto al laboratorio. Los ejemplos de Python del libro
            se pueden copiar y ejecutar en el <a href="#/laboratorio">Laboratorio libre</a>. Si el visor no carga en tu celular, usa
            «Descargar PDF».
        </div>`,
    exercises: [],
    quiz: []
};
