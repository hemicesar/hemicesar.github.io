let segundos = 0;
let minutos = 0;
let horas = 0;

function actualizarContador() {
  segundos++;
  if (segundos == 60) {
    segundos = 0;
    minutos++;
  }
  if (minutos == 60) {
    minutos = 0;
    horas++;
  }
  document.getElementById("contador").innerHTML = horas.toString().padStart(2, '0') + ":" + minutos.toString().padStart(2, '0') + ":" + segundos.toString().padStart(2, '0');
}

setInterval(actualizarContador, 1000);
