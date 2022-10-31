let map = L.map('fim-map', {
  gestureHandling: true,
}).setView([12.5657, 104.9910], 7);

const osmMapnikUrl = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
const osmMapnikAttrib = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const osmMapnik = L.tileLayer(osmMapnikUrl, {
  maxZoom: 19,
  attribution: osmMapnikAttrib
})

const stadiaAlidadeSmoothUrl = 'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png';
const stadiaAlidadeSmoothAttrib = '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';

const stadiaAlidadeSmooth = L.tileLayer(stadiaAlidadeSmoothUrl, {
  maxZoom: 19,
  attribution: stadiaAlidadeSmoothAttrib
})

let basemaps = {
  'Open Street Map Mapnik': osmMapnik,
  'Stadia Alidade Smooth': stadiaAlidadeSmooth,
}

L.control.layers(basemaps).addTo(map);

map.addLayer(stadiaAlidadeSmooth);

let stadiaAlidadeSmoothMini = L.tileLayer(stadiaAlidadeSmoothUrl, {
  maxZoom: 20,
  attribution: stadiaAlidadeSmoothAttrib
})

let miniMap = new L.Control.MiniMap(stadiaAlidadeSmoothMini, {
  toggleDisplay: true,
  collapsedWidth: 20,
  collapsedHeight: 20
}).addTo(map);