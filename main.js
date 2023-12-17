
function calcular() {
  let msg = document.getElementById('ALERT');
  let binario = document.getElementById('BINARIO');
  let numero = document.getElementById('NUMERO');
  numero = parseInt(numero.value)
  let numeroBinario = [];

  if (numero) {
    if (numero > 1) {
      while (numero > 1) {
        numeroBinario.push(numero % 2);
        numero = Math.floor(numero / 2);
      }
    }
    numeroBinario.push(1);
    numeroBinario = numeroBinario.reverse();
    msg.hidden = false;
    binario.innerHTML = numeroBinario.join('');
  }


}


