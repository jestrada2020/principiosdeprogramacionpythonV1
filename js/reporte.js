/**
 * Academia Bio-Python · Reporte de actividades en PDF para el docente
 * Reúne el progreso guardado en este navegador (módulos, retos, quizzes con nota de 0 a 5, medallas e historial)
 * y lo descarga como PDF con jsPDF. Las librerías se cargan solo al pulsar el botón.
 * También genera el informe de una sola unidad (REPORTE.descargarUnidad(n) o 'bonus'): temas de la lección, laboratorio,
 * cada reto y el quiz de sus módulos, con un espacio para las observaciones del docente.
 * Si no se pueden cargar (sin internet), abre una versión imprimible para «Guardar como PDF».
 */
const REPORTE = (() => {
    const LIBS = [
        'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.8.2/jspdf.plugin.autotable.min.js'
    ];
    const AZUL = [55, 118, 171], AMARILLO = [255, 212, 59], GRIS = [100, 116, 139];
    let cargando = null, ocupado = false;

    function cargarScript(src) {
        return new Promise((ok, mal) => {
            const s = document.createElement('script');
            s.src = src; s.onload = ok; s.onerror = () => mal(new Error('No se pudo cargar ' + src));
            document.head.appendChild(s);
        });
    }
    function cargarLibs() {
        if (window.jspdf && window.jspdf.jsPDF && window.jspdf.jsPDF.API.autoTable) return Promise.resolve();
        if (!cargando) cargando = LIBS.reduce((p, src) => p.then(() => cargarScript(src)), Promise.resolve()).catch(e => { cargando = null; throw e; });
        return cargando;
    }

    // Las fuentes estándar del PDF solo tienen caracteres latinos: se quitan emojis y símbolos raros
    const limpio = t => String(t == null ? '' : t).replace(/[^\x20-\x7E -ÿ–—‘’“”•…]/g, '').replace(/\s+/g, ' ').trim();
    const dos = n => String(n).padStart(2, '0');
    const fechaHora = d => `${d.getFullYear()}-${dos(d.getMonth() + 1)}-${dos(d.getDate())} ${dos(d.getHours())}:${dos(d.getMinutes())}`;
    const nota = pct => pct === null || pct === undefined ? '' : (pct / 20).toFixed(1);

    // ---------- Datos del reporte ----------
    function datos() {
        const sesion = (typeof AUTH !== 'undefined' && AUTH.getSession()) || { id: 'anonimo', nombre: 'Estudiante' };
        const e = GAME.estado, nv = GAME.nivelDe(e.xp);
        const fila = (id, grupo) => {
            const d = modules[id], m = e.modulos[id] || {};
            const total = (d.exercises || []).length, retos = Object.values(m.retos || {});
            const solos = retos.filter(r => r === true).length, ayuda = retos.filter(r => r === 'con-ayuda').length;
            const tieneQuiz = (d.quiz || []).length > 0;
            const estado = m.completo ? 'Completado' : (m.visitado || m.leccion || m.lab || retos.length || (m.quizMejor !== null && m.quizMejor !== undefined)) ? 'En curso' : 'Sin iniciar';
            return {
                id, grupo, titulo: limpio(d.title), estado, completo: !!m.completo,
                leccion: m.leccion ? 'Sí' : 'No', lab: m.lab ? 'Sí' : 'No',
                retos: total ? `${solos + ayuda}/${total}${ayuda ? ` (${ayuda} con ayuda)` : ''}` : '—',
                quiz: !tieneQuiz ? '—' : (m.quizMejor === null || m.quizMejor === undefined ? 'Sin presentar' : m.quizMejor + ' %'),
                nota: tieneQuiz ? nota(m.quizMejor) : '', pct: m.quizMejor, solos, ayuda, total
            };
        };
        const filas = [];
        UNIDADES.forEach(u => u.modulos.forEach(id => modules[id] && filas.push(fila(id, `Unidad ${u.n} · ${u.titulo}`))));
        EXTRAS.forEach(id => modules[id] && filas.push(fila(id, 'Bonus (opcional)')));
        const nucleo = filas.filter(f => !f.grupo.startsWith('Bonus'));
        const notas = nucleo.filter(f => f.pct !== null && f.pct !== undefined).map(f => f.pct / 20);
        const medallas = GAME.MEDALLAS.filter(m => e.medallas[m.id]).map(m => ({ nombre: limpio(m.nombre), desc: limpio(m.desc), fecha: e.medallas[m.id] }));
        const historial = (e.historial || []).slice().reverse();
        return {
            sesion, e, nv, filas, medallas, historial,
            generado: fechaHora(new Date()),
            resumen: {
                modulos: `${nucleo.filter(f => f.completo).length} de ${nucleo.length}`,
                retos: `${nucleo.reduce((a, f) => a + f.solos + f.ayuda, 0)} de ${nucleo.reduce((a, f) => a + f.total, 0)}`,
                retosAyuda: nucleo.reduce((a, f) => a + f.ayuda, 0),
                quizzes: `${notas.length} de ${nucleo.filter(f => f.quiz !== '—').length}`,
                promedio: notas.length ? (notas.reduce((a, b) => a + b, 0) / notas.length).toFixed(2) : '—'
            }
        };
    }

    const nombreArchivo = d => `Reporte_BioPython_${String(d.sesion.id).replace(/[^\w-]+/g, '_')}_${d.generado.slice(0, 10)}.pdf`;

    // ---------- PDF con jsPDF ----------
    function pdf(d) {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF({ unit: 'mm', format: 'letter' });
        const W = doc.internal.pageSize.getWidth(), M = 14;

        // Encabezado
        doc.setFillColor(...AZUL); doc.rect(0, 0, W, 30, 'F');
        doc.setFillColor(...AMARILLO); doc.rect(0, 30, W, 1.6, 'F');
        doc.setTextColor(255); doc.setFont('helvetica', 'bold'); doc.setFontSize(17);
        doc.text('Academia Bio-Python', M, 13);
        doc.setFont('helvetica', 'normal'); doc.setFontSize(10.5);
        doc.text('Reporte de actividades · Principios de programación con Python', M, 21);
        doc.setFontSize(9); doc.text(`Generado: ${d.generado}`, W - M, 21, { align: 'right' });

        // Datos del estudiante
        doc.setTextColor(20); doc.setFont('helvetica', 'bold'); doc.setFontSize(13);
        doc.text(limpio(d.sesion.nombre), M, 42);
        doc.setFont('helvetica', 'normal'); doc.setFontSize(9.5); doc.setTextColor(...GRIS);
        doc.text(`Usuario: ${limpio(d.sesion.id)}    Nivel ${d.nv.indice + 1}: ${limpio(d.nv.actual.nombre)}    ${d.e.xp} XP`, M, 48);

        // Resumen
        const r = d.resumen;
        doc.autoTable({
            startY: 53, theme: 'grid', margin: { left: M, right: M },
            head: [['Módulos del curso completados', 'Retos superados', 'Quizzes presentados', 'Promedio de notas (0 a 5)']],
            body: [[r.modulos, r.retos + (r.retosAyuda ? ` (${r.retosAyuda} con ayuda)` : ''), r.quizzes, r.promedio]],
            styles: { halign: 'center', fontSize: 10, cellPadding: 2.4 }, bodyStyles: { fontStyle: 'bold', fontSize: 11.5 },
            headStyles: { fillColor: [236, 242, 249], textColor: 40, fontSize: 8.5 }
        });
        doc.autoTable({
            startY: doc.lastAutoTable.finalY + 2, theme: 'plain', margin: { left: M, right: M },
            body: [[`Racha actual: ${d.e.racha.dias} días`, `Mejor racha: ${d.e.racha.mejor} días`, `Medallas: ${d.medallas.length} de ${GAME.MEDALLAS.length}`,
                `Programas ejecutados: ${d.e.stats.ejecuciones}`, `Intentos de quiz: ${d.e.stats.quizzes}`]],
            styles: { fontSize: 8.5, textColor: 70, halign: 'center', cellPadding: 1.5 }
        });

        // Progreso por módulo
        const titulo = (t, y) => { doc.setFont('helvetica', 'bold'); doc.setFontSize(12); doc.setTextColor(...AZUL); doc.text(t, M, y); };
        let y = doc.lastAutoTable.finalY + 8;
        titulo('Progreso por módulo', y);
        const cuerpo = [];
        let grupo = '';
        d.filas.forEach(f => {
            if (f.grupo !== grupo) { grupo = f.grupo; cuerpo.push([{ content: grupo, colSpan: 7, styles: { fillColor: [245, 247, 250], fontStyle: 'bold', textColor: 60 } }]); }
            cuerpo.push([f.titulo, f.leccion, f.lab, f.retos, f.quiz, f.nota, f.estado]);
        });
        doc.autoTable({
            startY: y + 3, margin: { left: M, right: M }, theme: 'striped',
            head: [['Módulo', 'Lección', 'Laboratorio', 'Retos', 'Mejor quiz', 'Nota', 'Estado']],
            body: cuerpo,
            headStyles: { fillColor: AZUL, fontSize: 8.5 },
            styles: { fontSize: 8.3, cellPadding: 1.8, valign: 'middle' },
            columnStyles: { 0: { cellWidth: 58 }, 1: { halign: 'center' }, 2: { halign: 'center' }, 3: { halign: 'center' }, 4: { halign: 'center' }, 5: { halign: 'center', fontStyle: 'bold' }, 6: { halign: 'center' } },
            didParseCell: c => {
                if (c.section !== 'body' || c.column.index !== 6) return;
                if (c.cell.raw === 'Completado') c.cell.styles.textColor = [22, 128, 61];
                else if (c.cell.raw === 'En curso') c.cell.styles.textColor = [180, 100, 0];
                else if (c.cell.raw === 'Sin iniciar') c.cell.styles.textColor = [150, 150, 150];
            }
        });

        // Medallas
        y = doc.lastAutoTable.finalY + 9;
        if (y > 245) { doc.addPage(); y = 20; }
        titulo(`Medallas obtenidas (${d.medallas.length})`, y);
        doc.autoTable({
            startY: y + 3, margin: { left: M, right: M }, theme: 'striped',
            head: [['Medalla', 'Cómo se gana', 'Fecha']],
            body: d.medallas.length ? d.medallas.map(m => [m.nombre, m.desc, m.fecha]) : [[{ content: 'Todavía no hay medallas.', colSpan: 3, styles: { textColor: 120 } }]],
            headStyles: { fillColor: AZUL, fontSize: 8.5 }, styles: { fontSize: 8.3, cellPadding: 1.8 },
            columnStyles: { 2: { cellWidth: 26, halign: 'center' } }
        });

        // Historial
        y = doc.lastAutoTable.finalY + 9;
        if (y > 245) { doc.addPage(); y = 20; }
        titulo(`Historial de actividades (${d.historial.length})`, y);
        doc.autoTable({
            startY: y + 3, margin: { left: M, right: M }, theme: 'striped',
            head: [['Fecha', 'Módulo', 'Actividad', 'Detalle', 'Resultado', 'Nota']],
            body: d.historial.length
                ? d.historial.map(h => [h.f, limpio((modules[h.m] || {}).title || h.m), limpio(h.t), limpio(h.d), limpio(h.r), h.n || ''])
                : [[{ content: 'El historial con fechas empieza a registrarse desde esta versión de la academia.', colSpan: 6, styles: { textColor: 120 } }]],
            headStyles: { fillColor: AZUL, fontSize: 8.5 }, styles: { fontSize: 7.8, cellPadding: 1.5 },
            columnStyles: { 0: { cellWidth: 27 }, 1: { cellWidth: 40 }, 5: { halign: 'center', cellWidth: 12 } }
        });

        // Pie de página
        const n = doc.internal.getNumberOfPages(), H = doc.internal.pageSize.getHeight();
        for (let i = 1; i <= n; i++) {
            doc.setPage(i);
            doc.setDrawColor(220); doc.line(M, H - 12, W - M, H - 12);
            doc.setFont('helvetica', 'normal'); doc.setFontSize(7.5); doc.setTextColor(140);
            doc.text(`${limpio(d.sesion.nombre)} · ${limpio(d.sesion.id)} · Progreso guardado en este navegador`, M, H - 7);
            doc.text(`Página ${i} de ${n}`, W - M, H - 7, { align: 'right' });
        }
        doc.save(nombreArchivo(d));
    }

    // ---------- Versión imprimible (sin internet) ----------
    function imprimible(d) {
        const w = window.open('', '_blank');
        if (!w) { UI.aviso('Permite las ventanas emergentes para generar el reporte', 'error'); return false; }
        const x = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
        let grupo = '';
        const filas = d.filas.map(f => {
            const cab = f.grupo !== grupo ? `<tr class="g"><td colspan="7">${x(grupo = f.grupo)}</td></tr>` : '';
            return cab + `<tr><td>${x(f.titulo)}</td><td>${f.leccion}</td><td>${f.lab}</td><td>${x(f.retos)}</td><td>${x(f.quiz)}</td><td><b>${f.nota}</b></td><td>${f.estado}</td></tr>`;
        }).join('');
        const r = d.resumen;
        w.document.write(`<!doctype html><html lang="es"><head><meta charset="utf-8"><title>${x(nombreArchivo(d).replace(/\.pdf$/, ''))}</title><style>
            body{font-family:Arial,Helvetica,sans-serif;color:#1e293b;margin:24px;font-size:12px}
            header{background:#3776ab;color:#fff;padding:14px 18px;border-bottom:4px solid #ffd43b}
            h1{margin:0;font-size:20px} h2{color:#3776ab;font-size:15px;margin:22px 0 6px}
            table{width:100%;border-collapse:collapse;margin-top:6px} th{background:#3776ab;color:#fff;font-size:11px}
            th,td{border:1px solid #dbe3ec;padding:5px;text-align:center} td:first-child{text-align:left}
            tr.g td{background:#f1f5f9;font-weight:bold;text-align:left} .res td{font-size:15px;font-weight:bold}
            .nota{background:#fef9c3;padding:8px 12px;border-radius:6px;margin:12px 0} @media print{.nota{display:none}}
        </style></head><body>
        <p class="nota">Sin conexión no se pudo crear el PDF directamente. En la ventana de impresión elige <b>«Guardar como PDF»</b> y envía el archivo a tu docente.</p>
        <header><h1>Academia Bio-Python</h1>Reporte de actividades · Generado: ${d.generado}</header>
        <h2 style="color:#1e293b">${x(d.sesion.nombre)}</h2><p>Usuario: ${x(d.sesion.id)} · Nivel ${d.nv.indice + 1}: ${x(limpio(d.nv.actual.nombre))} · ${d.e.xp} XP</p>
        <table class="res"><tr><th>Módulos completados</th><th>Retos superados</th><th>Quizzes presentados</th><th>Promedio (0 a 5)</th></tr>
        <tr><td>${r.modulos}</td><td>${r.retos}</td><td>${r.quizzes}</td><td>${r.promedio}</td></tr></table>
        <h2>Progreso por módulo</h2><table><tr><th>Módulo</th><th>Lección</th><th>Laboratorio</th><th>Retos</th><th>Mejor quiz</th><th>Nota</th><th>Estado</th></tr>${filas}</table>
        <h2>Medallas (${d.medallas.length})</h2><table><tr><th>Medalla</th><th>Cómo se gana</th><th>Fecha</th></tr>${d.medallas.map(m => `<tr><td>${x(m.nombre)}</td><td>${x(m.desc)}</td><td>${m.fecha}</td></tr>`).join('') || '<tr><td colspan="3">Todavía no hay medallas.</td></tr>'}</table>
        <h2>Historial de actividades (${d.historial.length})</h2><table><tr><th>Fecha</th><th>Módulo</th><th>Actividad</th><th>Detalle</th><th>Resultado</th><th>Nota</th></tr>${d.historial.map(h => `<tr><td>${h.f}</td><td>${x(limpio((modules[h.m] || {}).title || h.m))}</td><td>${x(h.t)}</td><td>${x(h.d)}</td><td>${x(h.r)}</td><td>${h.n || ''}</td></tr>`).join('') || '<tr><td colspan="6">El historial con fechas empieza a registrarse desde esta versión.</td></tr>'}</table>
        <script>setTimeout(function(){window.print()},400)<\/script></body></html>`);
        w.document.close();
        return true;
    }

    async function descargar() {
        if (ocupado) return;
        ocupado = true;
        UI.aviso('Preparando tu reporte en PDF…', 'ok', 'fa-file-pdf');
        const d = datos();
        try {
            await cargarLibs();
            pdf(d);
            UI.aviso(`Reporte descargado: ${nombreArchivo(d)}. Envíalo a tu docente.`, 'ok', 'fa-download');
        } catch (err) {
            if (imprimible(d)) UI.aviso('Sin conexión: usa «Guardar como PDF» en la ventana de impresión.', 'ok', 'fa-print');
        } finally {
            ocupado = false;
        }
    }

    // ================= Informe de una unidad (lecciones, laboratorio, retos y quiz de cada módulo) =================
    function grupoDe(clave) {
        if (clave === 'bonus') return { n: 'bonus', titulo: 'Bonus (módulos opcionales)', frase: 'los módulos opcionales (Bonus)', nombre: 'Bonus', modulos: EXTRAS.filter(id => modules[id]) };
        const u = UNIDADES.find(x => String(x.n) === String(clave));
        return u ? { n: u.n, titulo: `Unidad ${u.n} · ${u.titulo}`, frase: `la Unidad ${u.n} · ${u.titulo}`, nombre: `Unidad${u.n}`, desc: u.desc, modulos: u.modulos.filter(id => modules[id]) } : null;
    }
    const unidadDe = id => { const u = UNIDADES.find(x => x.modulos.includes(id)); return u ? u.n : (EXTRAS.includes(id) ? 'bonus' : null); };

    // Temas de la lección: los títulos (h2, h3, h4) del contenido del módulo
    function temasDe(id) {
        try {
            let c = modules[id].content;
            if (typeof c === 'function') c = c();
            const doc = new DOMParser().parseFromString(String(c || ''), 'text/html');
            const vistos = new Set(), temas = [];
            doc.querySelectorAll('h2, h3, h4').forEach(h => {
                const t = limpio(h.textContent).replace(/^[\d.\s]+(?=[A-Za-zÁÉÍÓÚÑ¿¡])/, '').replace(/[:\s]+$/, '');
                const k = t.toLowerCase();
                if (t.length > 2 && t.length < 90 && !vistos.has(k)) { vistos.add(k); temas.push(t); }
            });
            return temas.slice(0, 16);
        } catch (e) { return []; }
    }

    function datosUnidad(clave) {
        const g = grupoDe(clave);
        if (!g) return null;
        const sesion = (typeof AUTH !== 'undefined' && AUTH.getSession()) || { id: 'anonimo', nombre: 'Estudiante' };
        const e = GAME.estado, nv = GAME.nivelDe(e.xp);
        let lecciones = 0, labs = 0, retosHechos = 0, retosTotal = 0, ayuda = 0, ejec = 0, completos = 0;
        const notas = [];
        const mods = g.modulos.map(id => {
            const d = modules[id], m = e.modulos[id] || {};
            const ejercicios = d.exercises || [], q = d.quiz || [];
            const quizHecho = m.quizMejor !== null && m.quizMejor !== undefined;
            const estado = m.completo ? 'Completado' : (m.visitado || m.leccion || m.lab || Object.keys(m.retos || {}).length || quizHecho) ? 'En curso' : 'Sin iniciar';
            if (m.leccion) lecciones++;
            if (m.lab) labs++;
            if (m.completo) completos++;
            ejec += m.ejec || 0;
            const filas = [];
            filas.push(['Lección', 'Lectura del contenido y videos', m.leccion ? 'Leída' : 'Pendiente']);
            filas.push(['Laboratorio', m.ejec !== undefined ? `${m.ejec} programa${m.ejec === 1 ? '' : 's'} ejecutado${m.ejec === 1 ? '' : 's'}${m.err ? ` (${m.err} con error)` : ''}` : 'Ejecutar código propio en el módulo', m.lab ? 'Usado' : 'Sin usar']);
            ejercicios.forEach((ej, i) => {
                const r = (m.retos || {})[i];
                retosTotal++;
                if (r) retosHechos++;
                if (r === 'con-ayuda') ayuda++;
                filas.push([`Reto ${i + 1}`, limpio(ej.title), r === 'con-ayuda' ? 'Superado con la solución' : r ? 'Superado' : 'Pendiente']);
            });
            if (q.length) {
                if (quizHecho) notas.push(m.quizMejor / 20);
                const det = `${q.length} preguntas` + (m.quizN ? ` · ${m.quizN} intento${m.quizN === 1 ? '' : 's'}` : '') + (m.quizUlt !== undefined && m.quizUlt !== null ? ` · último ${m.quizUlt} %` : '');
                filas.push(['Quiz', det, quizHecho ? `Mejor ${m.quizMejor} % · nota ${nota(m.quizMejor)}` : 'Sin presentar']);
            }
            filas.push(['Estado del módulo', '', estado]);
            return { id, titulo: limpio(d.title), estado, temas: temasDe(id), filas };
        });
        const ids = new Set(g.modulos);
        const conQuiz = g.modulos.filter(id => (modules[id].quiz || []).length).length;
        return {
            tipo: 'unidad', g, sesion, e, nv, mods, generado: fechaHora(new Date()),
            historial: (e.historial || []).filter(h => ids.has(h.m)).slice().reverse(),
            resumen: [
                ['Módulos completados', `${completos} de ${g.modulos.length}`],
                ['Lecciones leídas', `${lecciones} de ${g.modulos.length}`],
                ['Laboratorio usado', `${labs} de ${g.modulos.length}` + (ejec ? ` (${ejec} programas)` : '')],
                ['Retos superados', `${retosHechos} de ${retosTotal}` + (ayuda ? ` (${ayuda} con ayuda)` : '')],
                ['Quizzes presentados', `${notas.length} de ${conQuiz}`],
                ['Promedio de la unidad (0 a 5)', notas.length ? (notas.reduce((a, b) => a + b, 0) / notas.length).toFixed(2) : '—']
            ]
        };
    }

    const archivoUnidad = d => `Informe_${d.g.nombre}_BioPython_${String(d.sesion.id).replace(/[^\w-]+/g, '_')}_${d.generado.slice(0, 10)}.pdf`;
    const colorEstado = t => /^(Completado|Superado|Leída|Usado|Mejor)/.test(t) ? [22, 128, 61] : /^(En curso|Superado con)/.test(t) ? [180, 100, 0] : /^(Pendiente|Sin )/.test(t) ? [150, 150, 150] : null;

    function pdfUnidad(d) {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF({ unit: 'mm', format: 'letter' });
        const W = doc.internal.pageSize.getWidth(), H = doc.internal.pageSize.getHeight(), M = 14;
        doc.setFillColor(...AZUL); doc.rect(0, 0, W, 30, 'F');
        doc.setFillColor(...AMARILLO); doc.rect(0, 30, W, 1.6, 'F');
        doc.setTextColor(255); doc.setFont('helvetica', 'bold'); doc.setFontSize(16);
        doc.text(limpio(`Informe de ${d.g.frase}`), M, 13);
        doc.setFont('helvetica', 'normal'); doc.setFontSize(10);
        doc.text('Academia Bio-Python · Lecciones, laboratorio, retos y quiz', M, 21);
        doc.setFontSize(9); doc.text(`Generado: ${d.generado}`, W - M, 21, { align: 'right' });

        doc.setTextColor(20); doc.setFont('helvetica', 'bold'); doc.setFontSize(13);
        doc.text(limpio(d.sesion.nombre), M, 42);
        doc.setFont('helvetica', 'normal'); doc.setFontSize(9.5); doc.setTextColor(...GRIS);
        doc.text(`Usuario: ${limpio(d.sesion.id)}    Nivel ${d.nv.indice + 1}: ${limpio(d.nv.actual.nombre)}    ${d.e.xp} XP`, M, 48);

        doc.autoTable({
            startY: 53, theme: 'grid', margin: { left: M, right: M },
            head: [d.resumen.map(r => r[0])], body: [d.resumen.map(r => r[1])],
            styles: { halign: 'center', fontSize: 9.5, cellPadding: 2.2 }, bodyStyles: { fontStyle: 'bold', fontSize: 10 },
            headStyles: { fillColor: [236, 242, 249], textColor: 40, fontSize: 7.8 }
        });

        let y = doc.lastAutoTable.finalY + 9;
        d.mods.forEach((md, k) => {
            if (y > H - 60) { doc.addPage(); y = 20; }
            doc.setFont('helvetica', 'bold'); doc.setFontSize(12); doc.setTextColor(...AZUL);
            doc.text(md.titulo, M, y);
            doc.setFontSize(9); const c = colorEstado(md.estado) || GRIS; doc.setTextColor(...c);
            doc.text(md.estado, W - M, y, { align: 'right' });
            y += 5;
            if (md.temas.length) {
                doc.setFont('helvetica', 'normal'); doc.setFontSize(8.3); doc.setTextColor(70);
                const lineas = doc.splitTextToSize('Temas de la lección: ' + md.temas.join(' · '), W - 2 * M);
                doc.text(lineas, M, y); y += lineas.length * 3.6 + 1;
            }
            doc.autoTable({
                startY: y, margin: { left: M, right: M }, theme: 'striped',
                head: [['Actividad', 'Detalle', 'Resultado']], body: md.filas,
                headStyles: { fillColor: AZUL, fontSize: 8.3 }, styles: { fontSize: 8.2, cellPadding: 1.7, valign: 'middle' },
                columnStyles: { 0: { cellWidth: 34, fontStyle: 'bold' }, 2: { cellWidth: 52 } },
                didParseCell: c2 => {
                    if (c2.section !== 'body' || c2.column.index !== 2) return;
                    const col = colorEstado(String(c2.cell.raw)); if (col) c2.cell.styles.textColor = col;
                }
            });
            y = doc.lastAutoTable.finalY + 9;
        });

        if (y > H - 50) { doc.addPage(); y = 20; }
        doc.setFont('helvetica', 'bold'); doc.setFontSize(12); doc.setTextColor(...AZUL);
        doc.text(`Historial de la unidad (${d.historial.length})`, M, y);
        doc.autoTable({
            startY: y + 3, margin: { left: M, right: M }, theme: 'striped',
            head: [['Fecha', 'Módulo', 'Actividad', 'Detalle', 'Resultado', 'Nota']],
            body: d.historial.length ? d.historial.map(h => [h.f, limpio((modules[h.m] || {}).title || h.m), limpio(h.t), limpio(h.d), limpio(h.r), h.n || ''])
                : [[{ content: 'Todavía no hay actividades registradas en esta unidad.', colSpan: 6, styles: { textColor: 120 } }]],
            headStyles: { fillColor: AZUL, fontSize: 8.3 }, styles: { fontSize: 7.8, cellPadding: 1.5 },
            columnStyles: { 0: { cellWidth: 27 }, 1: { cellWidth: 40 }, 5: { halign: 'center', cellWidth: 12 } }
        });

        // Espacio para el docente
        y = doc.lastAutoTable.finalY + 10;
        if (y > H - 55) { doc.addPage(); y = 20; }
        doc.setDrawColor(...AZUL); doc.setLineWidth(0.4); doc.roundedRect(M, y, W - 2 * M, 38, 2, 2);
        doc.setFont('helvetica', 'bold'); doc.setFontSize(10); doc.setTextColor(...AZUL);
        doc.text('Para el docente', M + 4, y + 7);
        doc.setFont('helvetica', 'normal'); doc.setFontSize(9); doc.setTextColor(80);
        doc.text('Observaciones:', M + 4, y + 15);
        doc.setDrawColor(200); doc.setLineWidth(0.2);
        [15, 22, 29].forEach(dy => doc.line(M + 30, y + dy, W - M - 4, y + dy));
        doc.text('Nota asignada: ________     Firma: ______________________', M + 4, y + 35);

        const n = doc.internal.getNumberOfPages();
        for (let i = 1; i <= n; i++) {
            doc.setPage(i);
            doc.setDrawColor(220); doc.setLineWidth(0.2); doc.line(M, H - 12, W - M, H - 12);
            doc.setFont('helvetica', 'normal'); doc.setFontSize(7.5); doc.setTextColor(140);
            doc.text(`${limpio(d.sesion.nombre)} · ${limpio(d.sesion.id)} · ${limpio(d.g.titulo)} · Progreso guardado en este navegador`, M, H - 7);
            doc.text(`Página ${i} de ${n}`, W - M, H - 7, { align: 'right' });
        }
        doc.save(archivoUnidad(d));
    }

    function imprimibleUnidad(d) {
        const w = window.open('', '_blank');
        if (!w) { UI.aviso('Permite las ventanas emergentes para generar el informe', 'error'); return false; }
        const x = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
        const mods = d.mods.map(md => `<h2>${x(md.titulo)} <small>${x(md.estado)}</small></h2>
            ${md.temas.length ? `<p class="temas"><b>Temas de la lección:</b> ${md.temas.map(x).join(' · ')}</p>` : ''}
            <table><tr><th>Actividad</th><th>Detalle</th><th>Resultado</th></tr>${md.filas.map(f => `<tr><td><b>${x(f[0])}</b></td><td>${x(f[1])}</td><td>${x(f[2])}</td></tr>`).join('')}</table>`).join('');
        w.document.write(`<!doctype html><html lang="es"><head><meta charset="utf-8"><title>${x(archivoUnidad(d).replace(/\.pdf$/, ''))}</title><style>
            body{font-family:Arial,Helvetica,sans-serif;color:#1e293b;margin:24px;font-size:12px}
            header{background:#3776ab;color:#fff;padding:14px 18px;border-bottom:4px solid #ffd43b} h1{margin:0;font-size:19px}
            h2{color:#3776ab;font-size:14px;margin:20px 0 4px} h2 small{color:#64748b;font-weight:normal;float:right}
            table{width:100%;border-collapse:collapse;margin-top:6px} th{background:#3776ab;color:#fff;font-size:11px}
            th,td{border:1px solid #dbe3ec;padding:5px;text-align:left} .temas{color:#475569;margin:2px 0}
            .res td{font-weight:bold;text-align:center} .res th{text-align:center}
            .docente{border:1.5px solid #3776ab;border-radius:6px;padding:10px 14px;margin-top:22px;line-height:2.2}
            .nota{background:#fef9c3;padding:8px 12px;border-radius:6px;margin:12px 0} @media print{.nota{display:none}}
        </style></head><body>
        <p class="nota">Sin conexión no se pudo crear el PDF directamente. En la ventana de impresión elige <b>«Guardar como PDF»</b> y envía el archivo a tu docente.</p>
        <header><h1>Informe de ${x(d.g.frase)}</h1>Academia Bio-Python · Generado: ${d.generado}</header>
        <h2 style="color:#1e293b">${x(d.sesion.nombre)}</h2><p>Usuario: ${x(d.sesion.id)} · Nivel ${d.nv.indice + 1}: ${x(limpio(d.nv.actual.nombre))} · ${d.e.xp} XP</p>
        <table class="res"><tr>${d.resumen.map(r => `<th>${x(r[0])}</th>`).join('')}</tr><tr>${d.resumen.map(r => `<td>${x(r[1])}</td>`).join('')}</tr></table>
        ${mods}
        <h2>Historial de la unidad (${d.historial.length})</h2><table><tr><th>Fecha</th><th>Módulo</th><th>Actividad</th><th>Detalle</th><th>Resultado</th><th>Nota</th></tr>${d.historial.map(h => `<tr><td>${h.f}</td><td>${x(limpio((modules[h.m] || {}).title || h.m))}</td><td>${x(h.t)}</td><td>${x(h.d)}</td><td>${x(h.r)}</td><td>${h.n || ''}</td></tr>`).join('') || '<tr><td colspan="6">Todavía no hay actividades registradas en esta unidad.</td></tr>'}</table>
        <div class="docente"><b style="color:#3776ab">Para el docente</b><br>Observaciones: ____________________________________________________________<br>______________________________________________________________________<br>Nota asignada: ________ &nbsp;&nbsp; Firma: ______________________</div>
        <script>setTimeout(function(){window.print()},400)<\/script></body></html>`);
        w.document.close();
        return true;
    }

    async function descargarUnidad(clave) {
        if (ocupado) return;
        const d = datosUnidad(clave);
        if (!d) { UI.aviso('No se encontró esa unidad', 'error'); return; }
        ocupado = true;
        UI.aviso(`Preparando el informe de ${d.g.frase}…`, 'ok', 'fa-file-pdf');
        try {
            await cargarLibs();
            pdfUnidad(d);
            UI.aviso(`Informe descargado: ${archivoUnidad(d)}. Envíalo a tu docente.`, 'ok', 'fa-download');
        } catch (err) {
            if (imprimibleUnidad(d)) UI.aviso('Sin conexión: usa «Guardar como PDF» en la ventana de impresión.', 'ok', 'fa-print');
        } finally {
            ocupado = false;
        }
    }

    return { descargar, datos, descargarUnidad, datosUnidad, unidadDe };
})();
