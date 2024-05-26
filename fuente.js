
const contadorNombres = {}

// Array de objetos con los servicios ofrecidos y sus duraciones
const ServiciosOfrecidos = [
    {
        NombreServicio: "facial",
        Duracion: 15,
    },
    {
        NombreServicio: "corte tradicional",
        Duracion: 20,
    },
    {
        NombreServicio: "corte + barba",
        Duracion: 25,
    },
    {
        NombreServicio: "blowout",
        Duracion: 25,
    },
    {
        NombreServicio: "blowout + barba",
        Duracion: 30,
    },
]

// Función para registrar el nombre y el servicio
function registrarNombre(nombre, servicio) {
    console.log(nombre + " ha solicitado " + servicio)
    if (contadorNombres[nombre]) {
        contadorNombres[nombre].push(servicio)
    } else {
        contadorNombres[nombre] = [servicio]
    }
}

// Función para calcular el tiempo de espera
function calcularTiempoEspera() {
    let tiempoEspera = 0

    for (const nombre in contadorNombres) {
        const serviciosCliente = contadorNombres[nombre]
        for (const servicio of serviciosCliente) {
            const servicioEncontrado = ServiciosOfrecidos.find(s => s.NombreServicio === servicio)
            if (servicioEncontrado) {
                tiempoEspera = tiempoEspera + servicioEncontrado.Duracion

            }
        }
    }

    return tiempoEspera
}

// Bucle para solicitar nombres y servicios hasta que se ingrese "salir"
let nombre = ""
while (nombre !== "salir") {
    nombre = prompt("Ingresa un nombre (o escribe 'salir' para terminar):")
    if (nombre !== "salir") {
        const servicio = prompt("Ingresa el servicio solicitado por " + nombre + ":")
        registrarNombre(nombre, servicio)
    }
}

const tiempoEspera = calcularTiempoEspera()
console.log("El tiempo de espera es: " + tiempoEspera + " minutos")