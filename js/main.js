//************************Pre-entrega 1 y 2 *************************************************** */


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
// class Prenda {
//     constructor(nombre, precio, tipo, talle) {
//         this.nombre = nombre;
//         this.precio = precio;
//         this.tipo = tipo;
//         this.talle = talle;
//     }

// //Metodos
//     obtenerInformacion() {
//         return `Nombre: ${this.nombre}\nPrecio: $${this.precio}\nTipo: ${this.tipo}\nTalle: ${this.talle}`;
//     }

//     obtenerPrecioConIVA() {
//         return this.precio * 1.21;
//     }
// }

// // Creamos el array "stock" para almacenar las prendas
// const stock = [
//     new Prenda('Camiseta', 6500, 'Manga Larga', 'M'),
//     new Prenda('Pantalón', 9500, 'Largo', 'L'),
//     new Prenda('Zapatillas', 20000, 'Lona varios colores', '38-43'),
//     new Prenda('Remera', 5500, 'Manga Corta', 'S/M/L'),
//     new Prenda('Short', 7000, 'Baño', 'S/M'),
// ];

// function segundaEntrega() {
// // // Ciclo principal
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
//     }
// }

// //Salimos del ciclo e imrpimimos en consola si el usuario elige la opción "Salir"


// //********************Pre-entrega 3 ***************** */


// // Guardar información en el localStorage

// function guardarEnLocalStorage(nombre, precio) {
//     const item = { nombre, precio };
//     let items = JSON.parse(localStorage.getItem('itemsSeleccionados')) || [];
//     items.push(item);
//     localStorage.setItem('itemsSeleccionados', JSON.stringify(items));
// }

// // Función para mostrar el contenido del carrito

// function mostrarCarrito() {
//     const prendaSeleccionada = document.getElementById('itemsSeleccionados');
//     const totalCarrito = document.getElementById('total');

//     // Obtener desde el localStorage
//     const itemsSeleccionados = JSON.parse(localStorage.getItem('itemsSeleccionados'));

//     // Limpiar el contenido previo del carrito
//     prendaSeleccionada.innerHTML = '';
//     totalCarrito.textContent = '';

//     if (itemsSeleccionados && itemsSeleccionados.length > 0) {
//         const titulo = document.createElement('h3');
//         titulo.textContent = 'Prendas seleccionadas:';
//         prendaSeleccionada.appendChild(titulo);

//         // Crear una lista para mostrar los items seleccionados
//         const lista = document.createElement('ul');
//         let total = 0;
//         itemsSeleccionados.forEach(item => {
//             const listaItem = document.createElement('li');
//             listaItem.textContent = `${item.nombre} - $${item.precio}`;
//             lista.appendChild(listaItem);
//             total += item.precio;
//         });

//         prendaSeleccionada.appendChild(lista);
//         totalCarrito.textContent = total;
//     } else {
//         prendaSeleccionada.textContent = 'No hay items seleccionados';
//     }
// }


// // Función para borrar todo lo seleccionado
// function borrarSeleccion() {
//     localStorage.removeItem('itemsSeleccionados');
//     mostrarCarrito(); // Actualizar el carrito después de borrar
// }

// // Eventos para los botones

// document.addEventListener('DOMContentLoaded', () => {
//     const addButtons = document.querySelectorAll('.add-btn');
//     const finalizarBtn = document.getElementById('finalizar-btn');
//     const arrepentimientoBtn = document.getElementById('arrepentimiento-btn');

//     addButtons.forEach(button => {
//         button.addEventListener('click', () => {
//             const nombre = button.dataset.nombre;
//             const precio = parseInt(button.dataset.precio);
//             guardarEnLocalStorage(nombre, precio);

//             // Mostrar el carrito actualizado después de agregar un producto
//             mostrarCarrito();
//         });
//     });

//     finalizarBtn.addEventListener('click', () => {
//         mostrarCarrito()
//         console.log("Muchas gracias por su compra ");
//     });

//     arrepentimientoBtn.addEventListener('click', () => {
//         borrarSeleccion();
//     });
// });

// //.........................................................................................................

let productos = [];

fetch("./js/productos.json")
    .then(response => response.json())
    .then(data => {
        productos = data;
        cargarProductos(productos);
    })


    // DOM

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numeroCarro = document.querySelector("#numeroCarro");
const aside = document.querySelector("aside");


botonesCategorias.forEach(boton => boton.addEventListener("click", () => {
    aside.classList.remove("aside-visible");
}))

// Vaciar y cargar productos

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

// Interaccion con las categorias o todos los productos

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});


// Dar funcion a los botones nuevamente

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

// Carrito

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumeroCarrito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {

    Toastify({
        text: "Producto agregado",
        duration: 3000,
        close: true,
        gravity: "bottom", 
        position: "right", 
        stopOnFocus: true, 
        style: {
            background: "linear-gradient(to right, #785ce9, #4e1420 )",
            borderRadius: "2rem",
            textTransform: "uppercase",
            fontSize: ".75rem"
        },
        offset: {
            x: '1.5rem', 
            y: '1.5rem' 
        },
        onClick: function () { } 
    }).showToast();

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    //Creamos cantidades para el total carrito y guardamos en local 

    if (productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumeroCarrito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

//Mostrar en pantalla cantidad de elementos en carrito

function actualizarNumeroCarrito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numeroCarro.innerText = nuevoNumerito;
}