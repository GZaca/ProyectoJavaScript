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

// // Ciclo principal
// let sumaPrecios = 0;
// let ticket = []
// while (true) {
//     // Solicitamos al usuario ingresar una opción
//     let opcion = prompt('Ingresa una opción:\n1. Ver información de una prenda\n2. Ver stock ordenado por precio de mayor a menor\n3. Salir e imprimir ticket');

//     // Opción seleccionada
//     if (opcion === '1') {
//         // Generamos la lista de opciones de prendas para mostrar en el prompt
//         let opciones = 'Opciones de prendas disponibles:\n\n';
//         for (let i = 0; i < stock.length; i++) {
//             opciones += `${i + 1}. ${stock[i].nombre}\n`;
//         }

//         // Solicitamos al usuario seleccionar una opción y obtener su información
//         let opcionSeleccionada = prompt(`${opciones}\nIngresa el número de la prenda para ver su información:`);

//         // Verificamos si la opción seleccionada es válida
//         if (opcionSeleccionada >= 1 && opcionSeleccionada <= stock.length) {
//             let prendaSeleccionada = stock[opcionSeleccionada - 1];

//             let informacionPrenda = prendaSeleccionada.obtenerInformacion();
//             let precioConIVA = prendaSeleccionada.obtenerPrecioConIVA();

//             informacionPrenda += `\nPrecio con IVA: $${precioConIVA.toFixed(2)}`;
//             alert(informacionPrenda);

//             sumaPrecios += prendaSeleccionada.precio;
//             ticket.push (prendaSeleccionada.nombre);
//         } else {
//             alert('La opción seleccionada no es válida, volvemos al home.');
//         }
//     } else if (opcion === '2') {
//         // Ordenamos el stock por precio de mayor a menor utilizando el método sort
//         stock.sort(function (a, b) {
//             return b.precio - a.precio;
//         });

//         // Mostramos el stock ordenado 
//         let listaStock = 'Stock ordenado por precio de mayor a menor (sin IVA):\n\n';
//         for (let i = 0; i < stock.length; i++) {
//             listaStock += `${stock[i].nombre} - Precio: $${stock[i].precio}\n`;
//         }
//         alert(listaStock);
//     } else if (opcion === '3') {
//         alert("Gracias por navegar, su ticket ha sido impreso en consola")

//         console.log(ticket.join('\n '));
//         console.log('La suma de los precios consultados (sin IVA) es: $' + sumaPrecios.toFixed(2));

//         break; 
//     } else {
//         alert('Opción no válida');
//     }
// }
// Salimos del ciclo e imrpimimos en consola si el usuario elige la opción "Salir"


function crearCarritoDinamico() {
    
    const botonesAgregar = document.querySelectorAll('.agregar');
    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', () => {
            const nombre = boton.dataset.nombre;
            const precio = parseFloat(boton.dataset.precio);

            // Datos en el localStorage
            const producto = { nombre, precio };
            let productosEnCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
            productosEnCarrito.push(producto);
            localStorage.setItem('carrito', JSON.stringify(productosEnCarrito));

            // Mostrar el carrito dinámicamente
            const carritoDiv = document.createElement('div');
            carritoDiv.classList.add('carrito');

            const tituloCarrito = document.createElement('h2');
            tituloCarrito.innerText = 'Carrito de Compras';
            carritoDiv.appendChild(tituloCarrito);

            const listaCarrito = document.createElement('ul');
            listaCarrito.classList.add('lista-carrito');
            carritoDiv.appendChild(listaCarrito);

            const totalCarrito = document.createElement('p');
            totalCarrito.classList.add('total');
            let total = 0;
            productosEnCarrito.forEach(producto => {
                total += producto.precio;
                const itemCarrito = document.createElement('li');
                itemCarrito.innerText = `${producto.nombre} - $${producto.precio.toFixed(2)}`;
                listaCarrito.appendChild(itemCarrito);
            });
            totalCarrito.innerHTML = `Total: $<span id="total">${total.toFixed(2)}</span>`;
            carritoDiv.appendChild(totalCarrito);

            // Si el carrito ya existe, eliminarlo para actualizarlo
            const carritoExistente = document.querySelector('.carrito');
            if (carritoExistente) {
                carritoExistente.remove();
            }

            
            document.body.appendChild(carritoDiv);
        });
    });
}

// Llamar a la función para crear el carrito dinámico cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', crearCarritoDinamico);

