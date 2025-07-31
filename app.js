let amigos = [];
let sorteados = [];

const input = document.getElementById('amigo');
const lista = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');
const mensaje = document.getElementById('mensaje');
const botonSortear = document.querySelector('.button-draw');

function mostrarMensaje(texto, tipo = 'info') {
  mensaje.textContent = texto;
  mensaje.className = `mensaje ${tipo}`;

  setTimeout(() => {
    mensaje.textContent = '';
    mensaje.className = 'mensaje';
  }, 3000);
}

function agregarAmigo() {
  const nombre = input.value.trim();

  if (nombre === '') {
    mostrarMensaje('Por favor, inserta un nombre.', 'error');
    return;
  }

  if (amigos.includes(nombre)) {
    mostrarMensaje('Este nombre ya fue añadido.', 'error');
    return;
  }

  amigos.push(nombre);
  input.value = '';
  mostrarLista();
  mostrarMensaje(`${nombre} fue añadido correctamente.`, 'success');

  if (amigos.length > 0) {
    botonSortear.disabled = false;
  }
}

function mostrarLista() {
  lista.innerHTML = '';
  amigos.forEach(nombre => {
    lista.innerHTML += `<li>${nombre}</li>`;
  });
}

function sortearAmigo() {
  resultado.innerHTML = '';

  if (amigos.length === 0) {
    mostrarMensaje('No hay amigos en la lista.', 'error');
    return;
  }

  const disponibles = amigos.filter(nombre => !sorteados.includes(nombre));

  if (disponibles.length === 0) {
    resultado.innerHTML = '<li>Todos los amigos ya han sido sorteados.</li>';
    mostrarMensaje('Todos los amigos ya fueron sorteados.', 'info');
    return;
  }

  const indice = Math.floor(Math.random() * disponibles.length);
  const amigoSorteado = disponibles[indice];

  sorteados.push(amigoSorteado);

  resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
  mostrarMensaje(`Se sorteó a: ${amigoSorteado}`, 'success');
}
