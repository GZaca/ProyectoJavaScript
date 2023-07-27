//************************Pre-entrega 1 *************************************************** */


// function sumaPrecios() {
//     let suma = 0
//     let precio = prompt('Hola, ingrese el precio del producto seleccionado. Cuando desee conocer el resultado de la suma de los distintos valores ingrese "ESC" ');
//     while (precio !== 'ESC') {
//          suma = suma + parseInt(precio);
//          precio = prompt('Ingrese el precio del producto (ingrese "ESC" para finalizar)');
//      }
//      return suma
//  }
//  let sumaDePrecios = sumaPrecios()
// alert("La suma total de los productos seleccionado es de " + sumaDePrecios);


//********************************************************* */
//**************** Pre-entrega 2*************************//




// Definimos la clase Prenda
class Prenda {
    constructor(nombre, precio, tipo, talle) {
        this.nombre = nombre;
        this.precio = precio;
        this.tipo = tipo;
        this.talle = talle;
    }

//Metodos
    obtenerInformacion() {
        return `Nombre: ${this.nombre}\nPrecio: $${this.precio}\nTipo: ${this.tipo}\nTalle: ${this.talle}`;
    }

    obtenerPrecioConIVA() {
        return this.precio * 1.21;
    }
}

// Creamos el array "stock" para almacenar las prendas
const stock = [
    new Prenda('Camiseta', 6500, 'Manga Larga', 'M'),
    new Prenda('Pantalón', 9500, 'Largo', 'L'),
    new Prenda('Zapatillas', 20000, 'Lona varios colores', '38-43'),
    new Prenda('Remera', 5500, 'Manga Corta', 'S/M/L'),
    new Prenda('Short', 7000, 'Baño', 'S/M'),
];

function segundaEntrega() {
// // Ciclo principal
let sumaPrecios = 0;
let ticket = []  
while (true) {
    // Solicitamos al usuario ingresar una opción
    let opcion = prompt('Ingresa una opción:\n1. Ver información de una prenda\n2. Ver stock ordenado por precio de mayor a menor\n3. Salir e imprimir ticket');

    // Opción seleccionada
    if (opcion === '1') {
        // Generamos la lista de opciones de prendas para mostrar en el prompt
        let opciones = 'Opciones de prendas disponibles:\n\n';
        for (let i = 0; i < stock.length; i++) {
            opciones += `${i + 1}. ${stock[i].nombre}\n`;
        }

        // Solicitamos al usuario seleccionar una opción y obtener su información
        let opcionSeleccionada = prompt(`${opciones}\nIngresa el número de la prenda para ver su información:`);

        // Verificamos si la opción seleccionada es válida
        if (opcionSeleccionada >= 1 && opcionSeleccionada <= stock.length) {
            let prendaSeleccionada = stock[opcionSeleccionada - 1];

            let informacionPrenda = prendaSeleccionada.obtenerInformacion();
            let precioConIVA = prendaSeleccionada.obtenerPrecioConIVA();

            informacionPrenda += `\nPrecio con IVA: $${precioConIVA.toFixed(2)}`;
            alert(informacionPrenda);

            sumaPrecios += prendaSeleccionada.precio;
            ticket.push (prendaSeleccionada.nombre);
        } else {
            alert('La opción seleccionada no es válida, volvemos al home.');
        }
    } else if (opcion === '2') {
        // Ordenamos el stock por precio de mayor a menor utilizando el método sort
        stock.sort(function (a, b) {
            return b.precio - a.precio;
        });

        // Mostramos el stock ordenado
        let listaStock = 'Stock ordenado por precio de mayor a menor (sin IVA):\n\n';
        for (let i = 0; i < stock.length; i++) {
            listaStock += `${stock[i].nombre} - Precio: $${stock[i].precio}\n`;
        }
        alert(listaStock);
    } else if (opcion === '3') {
        alert("Gracias por navegar, su ticket ha sido impreso en consola")

        console.log(ticket.join('\n '));
        console.log('La suma de los precios consultados (sin IVA) es: $' + sumaPrecios.toFixed(2));

        break;
    } else {
        alert('Opción no válida');
    }
    }
}
//Salimos del ciclo e imrpimimos en consola si el usuario elige la opción "Salir"


//********************Pre-entrega 3 ***************** */


// Guardar información en el localStorage

function guardarEnLocalStorage(nombre, precio) {
    const item = { nombre, precio };
    let items = JSON.parse(localStorage.getItem('itemsSeleccionados')) || [];
    items.push(item);
    localStorage.setItem('itemsSeleccionados', JSON.stringify(items));
}

// Función para mostrar el contenido del carrito

function mostrarCarrito() {
    const prendaSeleccionada = document.getElementById('itemsSeleccionados');
    const totalCarrito = document.getElementById('total');

    // Obtener desde el localStorage
    const itemsSeleccionados = JSON.parse(localStorage.getItem('itemsSeleccionados'));

    // Limpiar el contenido previo del carrito
    prendaSeleccionada.innerHTML = '';
    totalCarrito.textContent = '';

    if (itemsSeleccionados && itemsSeleccionados.length > 0) {
        const titulo = document.createElement('h3');
        titulo.textContent = 'Prendas seleccionadas:';
        prendaSeleccionada.appendChild(titulo);

        // Crear una lista para mostrar los items seleccionados
        const lista = document.createElement('ul');
        let total = 0;
        itemsSeleccionados.forEach(item => {
            const listaItem = document.createElement('li');
            listaItem.textContent = `${item.nombre} - $${item.precio}`;
            lista.appendChild(listaItem);
            total += item.precio;
        });

        prendaSeleccionada.appendChild(lista);
        totalCarrito.textContent = total;
    } else {
        prendaSeleccionada.textContent = 'No hay items seleccionados';
    }
}


// Función para borrar todo lo seleccionado
function borrarSeleccion() {
    localStorage.removeItem('itemsSeleccionados');
    mostrarCarrito(); // Actualizar el carrito después de borrar
}

// Eventos para los botones

document.addEventListener('DOMContentLoaded', () => {
    const addButtons = document.querySelectorAll('.add-btn');
    const finalizarBtn = document.getElementById('finalizar-btn');
    const arrepentimientoBtn = document.getElementById('arrepentimiento-btn');

    addButtons.forEach(button => {
        button.addEventListener('click', () => {
            const nombre = button.dataset.nombre;
            const precio = parseInt(button.dataset.precio);
            guardarEnLocalStorage(nombre, precio);

            // Mostrar el carrito actualizado después de agregar un producto
            mostrarCarrito();
        });
    });

    finalizarBtn.addEventListener('click', () => {
        mostrarCarrito()
        console.log("Muchas gracias por su compra ");
    });

    arrepentimientoBtn.addEventListener('click', () => {
        borrarSeleccion();
    });
});

