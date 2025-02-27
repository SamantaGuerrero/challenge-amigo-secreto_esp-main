let amigos = []; // Arreglo para almacenar los nombres de los amigos.

// Función para asignar texto a un elemento.
function asignarTextoElemento(elemento, texto) {
    document.querySelector(elemento).innerHTML = texto;
}

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo"); // Recibe el nombre del amigo
    const nombre = input.value.trim(); // Obtiene el valor del input
    
    // Validación para asegurar que el campo no esté vacío
    if (!nombre) {//Si no hay un "nombre"
        alert("Por favor, inserta un nombre.");
        return;
    }
        
    amigos.push(nombre); // Agrega el nombre al arreglo
    actualizarLista(); // Actualiza la lista mostrada en pantalla
    input.value = ""; // Limpia el campo de entrada
}

// Función para actualizar la lista de amigos
function actualizarLista() {
    asignarTextoElemento("#listaAmigos", amigos.map(amigo => `<li>${amigo}</li>`).join(""));
}

// Función para elegir un amigo secreto aleatoriamente
function sortearAmigo() { 
    if (amigos.length < 2) {
        alert("Debes agregar al menos dos amigos para el sorteo.");
        return;
    }  
    let elegido = amigos[Math.floor(Math.random() * amigos.length)]; // Selecciona un amigo aleatorio
    mostrarResultado(elegido); // Muestra el resultado en la pantalla
}

// Función para mostrar el resultado del sorteo 
function mostrarResultado(elegido) {
    asignarTextoElemento("#resultado", `<li>Amigo Secreto: ${elegido}</li>`);
}