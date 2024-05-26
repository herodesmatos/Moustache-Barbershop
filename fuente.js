
const contadorNombres = {}

// se estima que el tiempo que dura un turno son 5 minutos 
const tiempo = 5
let cantidadNombre = 0

//Array de objetos
/*
const ServiciosOfrecidos = [
    {
        NombreServicio: "facial",
        Duracion: 15,
    },
    {
        NombreServicio: "corte tradicional",
        Duracion: 20,
    }
    {
        NombreServicio: "corte + barba",
        Duracion: 25,
    },
    {
        NombreServicio: "blow out",
        Duracion: 25,
    },
    {
        NombreServicio: "blow out + barba",
        Duracion: 30,
    },
]
*/

function registrarNombre(nombre) {
    console.log(nombre + " está en turno")
    console.log("Servicio: " + servicio)
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