const ServiciosOfrecidos = [
    { NombreServicio: "facial", Duracion: 15 },
    { NombreServicio: "corte tradicional", Duracion: 20 },
    { NombreServicio: "corte + barba", Duracion: 25 },
    { NombreServicio: "blowout", Duracion: 25 },
    { NombreServicio: "blowout + barba", Duracion: 30 },
];

const contadorNombres = JSON.parse(sessionStorage.getItem('contadorNombres')) || {};

document.getElementById('registrar').addEventListener('click', () => {
    const nombre = document.getElementById('nombre').value;
    const servicio = document.getElementById('servicio').value;
    
    if (nombre !== "") {
        registrarNombre(nombre, servicio);
        actualizarListaClientes();
        document.getElementById('nombre').value = "";
        Swal.fire({
            title: 'Registro Exitoso',
            text: `${nombre} ha solicitado ${servicio}`,
            icon: 'success',
            confirmButtonText: 'OK'
        });
    } else {
        Swal.fire({
            title: 'Error',
            text: 'Por favor, ingresa un nombre.',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    }
});

document.getElementById('calcular').addEventListener('click', () => {
    const tiempoEspera = calcularTiempoEspera();
    document.getElementById('tiempoEspera').textContent = tiempoEspera + " minutos";
    Swal.fire({
        title: 'Tiempo de Espera',
        text: `El tiempo de espera total es de ${tiempoEspera} minutos`,
        icon: 'info',
        confirmButtonText: 'OK'
    });
});

function registrarNombre(nombre, servicio) {
    console.log(nombre + " ha solicitado " + servicio);
    if (contadorNombres[nombre]) {
        contadorNombres[nombre].push(servicio);
    } else {
        contadorNombres[nombre] = [servicio];
    }
    sessionStorage.setItem('contadorNombres', JSON.stringify(contadorNombres));
}

function calcularTiempoEspera() {
    let tiempoEspera = 0;

    for (const nombre in contadorNombres) {
        const serviciosCliente = contadorNombres[nombre];
        for (const servicio of serviciosCliente) {
            const servicioEncontrado = ServiciosOfrecidos.find(s => s.NombreServicio === servicio);
            if (servicioEncontrado) {
                tiempoEspera += servicioEncontrado.Duracion;
            }
        }
    }

    return tiempoEspera;
}

function actualizarListaClientes() {
    const listaClientes = document.getElementById('listaClientes');
    listaClientes.innerHTML = "";

    for (const nombre in contadorNombres) {
        const li = document.createElement('li');
        li.textContent = `${nombre}: ${contadorNombres[nombre].join(", ")}`;
        listaClientes.appendChild(li);
    }
}

// Inicializar la lista de clientes al cargar la página
actualizarListaClientes();
