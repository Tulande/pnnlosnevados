document.addEventListener('DOMContentLoaded', () => {

  const datosMapbiomas = {
    1985: { 3: 30964.61, 11: 10092.32, 13: 63282.36, 21: 20744.88, 23: 359.16, 24: 3.83, 25: 390.80, 27: 3.12, 29: 7152.81, 33: 250.27, 34: 2196.53 },
    1990: { 3: 28911.61, 11: 9646.30, 13: 58039.11, 21: 29823.26, 23: 129.25, 24: 6.32, 25: 212.91, 27: 3.12, 29: 6364.13, 33: 273.24, 34: 2031.45 },
    1995: { 3: 28911.61, 11: 9646.30, 13: 58039.11, 21: 29823.26, 23: 129.25, 24: 6.32, 25: 212.91, 27: 3.12, 29: 6364.13, 33: 273.24, 34: 2031.45 },
    2000: { 3: 30373.72, 11: 9581.33, 13: 57029.71, 21: 29848.09, 23: 56.74, 24: 7.21, 25: 108.96, 27: 3.12, 29: 6664.57, 33: 198.32, 34: 1567.38 },
    2005: { 3: 32524.34, 11: 9464.89, 13: 56437.48, 21: 28707.59, 23: 50.69, 24: 7.21, 25: 17.20, 27: 3.12, 29: 6708.34, 33: 250.27, 34: 1269.57 },
    2010: { 3: 31577.01, 11: 9696.35, 13: 60142.07, 21: 25757.27, 23: 37.06, 24: 7.21, 25: 9.62, 27: 3.12, 29: 6729.73, 33: 284.75, 34: 1196.51 },
    2011: { 3: 31236.73, 11: 9608.86, 13: 60964.13, 21: 25424.98, 23: 36.17, 24: 7.21, 25: 11.49, 27: 3.12, 29: 6725.73, 33: 243.77, 34: 1178.51 },
    2012: { 3: 31011.24, 11: 9610.83, 13: 61404.61, 21: 25146.47, 23: 37.86, 24: 7.39, 25: 13.45, 27: 3.12, 29: 6817.31, 33: 241.98, 34: 1146.44 },
    2013: { 3: 30979.86, 11: 9756.15, 13: 61250.66, 21: 25178.73, 23: 38.39, 24: 7.39, 25: 15.06, 27: 3.12, 29: 6871.57, 33: 233.25, 34: 1106.53 },
    2014: { 3: 31757.45, 11: 9822.71, 13: 59851.80, 21: 25599.08, 23: 40.62, 24: 7.66, 25: 17.28, 27: 3.12, 29: 7128.22, 33: 224.87, 34: 987.87 },
    2015: { 3: 33114.40, 11: 9940.05, 13: 58331.73, 21: 25569.32, 23: 43.03, 24: 7.93, 25: 20.14, 27: 3.12, 29: 7264.70, 33: 220.06, 34: 926.22 },
    2016: { 3: 33202.81, 11: 9914.84, 13: 57872.99, 21: 25990.44, 23: 45.70, 24: 8.02, 25: 18.00, 27: 3.12, 29: 7289.82, 33: 217.66, 34: 877.31 },
    2017: { 3: 33070.07, 11: 9847.83, 13: 57310.89, 21: 26865.52, 23: 43.20, 24: 8.10, 25: 18.00, 27: 3.12, 29: 7215.16, 33: 215.52, 34: 843.28 },
    2018: { 3: 32825.75, 11: 9878.30, 13: 57756.02, 21: 26765.82, 23: 41.24, 24: 8.10, 25: 18.80, 27: 3.12, 29: 7103.62, 33: 211.69, 34: 828.23 },
    2019: { 3: 34015.28, 11: 9813.34, 13: 56638.55, 21: 26905.71, 23: 35.90, 24: 8.10, 25: 17.73, 27: 3.12, 29: 6989.96, 33: 211.16, 34: 801.86 },
    2020: { 3: 33330.42, 11: 9707.40, 13: 56375.41, 21: 28024.05, 23: 30.20, 24: 8.28, 25: 16.22, 27: 3.12, 29: 6988.35, 33: 208.48, 34: 748.76 },
    2021: { 3: 34065.15, 11: 9810.92, 13: 56911.78, 21: 26709.93, 23: 28.86, 24: 8.28, 25: 14.70, 27: 3.12, 29: 6941.84, 33: 207.86, 34: 738.25 },
    2022: { 3: 34570.66, 11: 10014.15, 13: 57022.94, 21: 25822.50, 23: 28.15, 24: 8.46, 25: 13.28, 27: 3.12, 29: 7044.74, 33: 211.51, 34: 701.19 },
    2023: { 3: 35160.96, 11: 10148.16, 13: 56902.47, 21: 25208.87, 23: 26.28, 24: 9.89, 25: 11.23, 27: 3.12, 29: 7052.21, 33: 216.50, 34: 701.01 }
  };
  const paletaColores = { 3: '#1F8D49', 11: '#519799', 13: '#D89F5C', 21: '#FFEFC3', 23: '#FFA07A', 24: '#D4271E', 25: '#DB4D4F', 27: '#FFFFFF', 29: '#FFAA5F', 33: '#2532E4', 34: '#93DFE6' };
  const nombresClases = { 3: 'Bosque', 11: 'Formación natural no forestal inundable', 13: 'Otra formación natural no forestal', 21: 'Mosaico de agricultura y/o pasto', 23: 'Playas, dunas y bancos de arena', 24: 'Infraestructura urbana', 25: 'Otra área sin vegetación', 27: 'No observado', 29: 'Afloramiento rocoso', 33: 'Río, lago u océano', 34: 'Glaciar y nival' };
  const CLASES_PRINCIPALES = [13, 3, 21, 34];

  const exploraAnioSelect = document.getElementById('explora-anio');
  const tarjetasResumenContainer = document.getElementById('tarjetas-resumen');
  const graficoDetalleContainer = document.getElementById('grafico-detalle');
  const mapaAnualContainer = document.getElementById('mapa-anual');

  function formatearNumero(num) { return num.toLocaleString('es-CO', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }

  function actualizarExploradorAnual() {
    const anio = exploraAnioSelect.value;
    const datosAnio = datosMapbiomas[anio];
    tarjetasResumenContainer.innerHTML = '';
    graficoDetalleContainer.innerHTML = '';
    if (datosAnio && Object.keys(datosAnio).length > 0) {
      let summaryHTML = '<h3>Coberturas Principales (Ha)</h3><div class="summary-cards">';
      CLASES_PRINCIPALES.forEach(claseId => {
        if (datosAnio[claseId] !== undefined) {
          summaryHTML += `<div class="summary-card"><div class="card-title"><span class="color-indicator" style="background-color: ${paletaColores[claseId]};"></span>${nombresClases[claseId]}</div><div class="card-value">${formatearNumero(datosAnio[claseId])}</div></div>`;
        }
      });
      summaryHTML += '</div>';
      tarjetasResumenContainer.innerHTML = summaryHTML;
      const clasesOrdenadas = Object.entries(datosAnio).sort(([,a], [,b]) => b - a);
      const areaMaxima = clasesOrdenadas[0][1];
      let chartHTML = '<h3>Detalle de Coberturas</h3><div class="bar-chart">';
      for (const [claseId, area] of clasesOrdenadas) {
        if(nombresClases[claseId]) {
            const porcentaje = area > 0 ? (area / areaMaxima) * 100 : 0;
            chartHTML += `<div class="bar-item" title="${nombresClases[claseId]}: ${formatearNumero(area)} Ha"><div class="bar-label"><span class="color-indicator" style="background-color: ${paletaColores[claseId]};"></span>${nombresClases[claseId]}</div><div class="bar-value">${formatearNumero(area)}</div><div class="bar-container"><div class="bar-wrapper"><div class="bar" style="width: ${porcentaje}%; background-color: ${paletaColores[claseId]};"></div></div></div></div>`;
        }
      }
      chartHTML += `</div>`;
      graficoDetalleContainer.innerHTML = chartHTML;
    } else {
      tarjetasResumenContainer.innerHTML = '<h3>Coberturas Principales (Ha)</h3><p>Datos no disponibles.</p>';
      graficoDetalleContainer.innerHTML = '<h3>Detalle de Coberturas</h3><p>Datos no disponibles.</p>';
    }
    mapaAnualContainer.innerHTML = `<iframe id="mapa-iframe-anual" src="Maps/Map_${anio}/index.html" title="Mapa interactivo del año ${anio}"></iframe>`;
    document.getElementById('mapa-iframe-anual').onload = ocultarCreditosIframe;
  }
  
  function ocultarCreditosIframe() { try { let i = this.contentDocument || this.contentWindow.document; let a = i.querySelector('.leaflet-control-attribution, .ol-attribution'); if (a) a.style.display = 'none'; } catch (e) {} }

  if (exploraAnioSelect) {
    exploraAnioSelect.addEventListener('change', actualizarExploradorAnual);
    actualizarExploradorAnual();
  }

  const comparadorAnio1Select = document.getElementById('comparador-anio1');
  const comparadorAnio2Select = document.getElementById('comparador-anio2');
  const analisisTextoPlaceholder = document.getElementById('analisis-texto-placeholder');

  function actualizarComparadorLadoALado() {
    const anio1 = comparadorAnio1Select.value;
    const anio2 = comparadorAnio2Select.value;
    document.getElementById('mapa1-placeholder').innerHTML = `<iframe id="mapa-iframe-1" src="Maps/Map_${anio1}/index.html" title="Mapa del año ${anio1}"></iframe>`;
    document.getElementById('mapa2-placeholder').innerHTML = `<iframe id="mapa-iframe-2" src="Maps/Map_${anio2}/index.html" title="Mapa del año ${anio2}"></iframe>`;
    document.getElementById('mapa-iframe-1').onload = ocultarCreditosIframe;
    document.getElementById('mapa-iframe-2').onload = ocultarCreditosIframe;

    if (parseInt(anio1) >= parseInt(anio2)) {
      analisisTextoPlaceholder.innerHTML = `<span style="color: #c0392b;">Seleccione un año inicial anterior al año final.</span>`; return;
    }
    const datosAnio1 = datosMapbiomas[anio1];
    const datosAnio2 = datosMapbiomas[anio2];
    if (datosAnio1 && Object.keys(datosAnio1).length > 0 && datosAnio2 && Object.keys(datosAnio2).length > 0) {
      let analisisHTML = `En el periodo <strong>${anio1}-${anio2}</strong>, se observan las siguientes tendencias:<ul>`;
      CLASES_PRINCIPALES.forEach(claseId => {
        const area1 = datosAnio1[claseId] || 0;
        const area2 = datosAnio2[claseId] || 0;
        const cambioNeto = area2 - area1;
        const cambioPorc = (area1 > 0) ? (cambioNeto / area1) * 100 : 0;
        let tendencia = cambioNeto >= 0 ? "aumentó" : "disminuyó";
        let color = cambioNeto >= 0 ? "color: #27ae60;" : "color: #c0392b;";
        analisisHTML += `<li><strong>${nombresClases[claseId]}:</strong> ${tendencia} en <strong>${formatearNumero(Math.abs(cambioNeto))} Ha</strong> (<span style="${color}">${formatearNumero(cambioPorc)}%</span>).</li>`;
      });
      analisisHTML += `</ul>`;
      analisisTextoPlaceholder.innerHTML = analisisHTML;
    } else {
      analisisTextoPlaceholder.innerHTML = `Faltan datos para uno o ambos años para poder realizar la comparación.`;
    }
  }

  if (comparadorAnio1Select) {
    comparadorAnio1Select.addEventListener('change', actualizarComparadorLadoALado);
    comparadorAnio2Select.addEventListener('change', actualizarComparadorLadoALado);
    actualizarComparadorLadoALado();
  }
  
  const animatedPanels = document.querySelectorAll('.animated-panel');
  if ("IntersectionObserver" in window) { const observer = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }); }, { threshold: 0.1 }); animatedPanels.forEach(panel => observer.observe(panel)); } else { animatedPanels.forEach(panel => panel.classList.add('is-visible')); }
});