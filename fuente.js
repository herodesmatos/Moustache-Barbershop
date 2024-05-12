
const contadorNombres = {}

// se estima que el tiempo que dura un turno son 5 minutos 
const tiempo = 5
let cantidadNombre = 0

function registrarNombre(nombre) {
    console.log(nombre + " " + "está en turno")
    contadorNombres[nombre] = contadorNombres[nombre] + 1
    cantidadNombre++
}

// Bucle para solicitar nombres hasta que se ingrese "salir"
let nombre = ""
while (nombre !== "salir") {
    nombre = prompt("Ingresa un nombre (o escribe 'salir' para terminar):")
    if (nombre !== "salir") {
        registrarNombre(nombre)
    }
}

const tiempoEspera = tiempo * cantidadNombre

console.log("El tiempo de espera es:" +  tiempoEspera + " minutos")