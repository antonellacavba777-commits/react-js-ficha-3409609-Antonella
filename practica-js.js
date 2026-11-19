console.log("\n==========================================");
console.log("          RETO 1        ");

function calcularTotal(precio, cantidad) {
    const total = precio * cantidad;
    return total;
}

const resultado = calcularTotal(50000, 3);
console.log(resultado);

//////suma/////

function sumar(a, b) {
    const total = a + b;
    return total;
}
const resultadoSuma = sumar(12, 7);
console.log("suma", resultadoSuma);

//////resta/////
function restar(a, b) {
  const total = a - b;
  return total;
}
const resultadoResta = restar(10, 2);
console.log("resta:", resultadoResta);

////multiplicar////

function multiplicar(a, b) {
  const total = a * b;
  return total;
}
const resultadoMultiplicacion = multiplicar(5, 5);
console.log("multiplicación", resultadoMultiplicacion);

/////dividir/////
function dividir(a, b) {
  const total = a / b;
  return total;
}
const resultadoDivision = dividir(66, 3);
console.log("división", resultadoDivision);

/////promedio//////

function calcularPromedio(nota1, nota2, nota3) {
  const total = (nota1 + nota2 + nota3) / 3;
  return total;
}
const resultadoPromedio = calcularPromedio(5, 3, 4);
console.log("promedio", resultadoPromedio);

/*
El console.log() es nada más para mostrar el resultado en la pantalla y verlo nosotros,
mientras que el return es el que guarda el resultado para poder usarlo en el resto del programa.
*/

////reto 2/////

console.log("\n==========================================");
console.log("          RETO 2        ");

const aplicarIva = precio => precio * 1.19;
console.log("Con IVA:", aplicarIva(10000));

// 2. Tarea: Convertir a arrow functions
const cuadrado = numero => numero * numero;

const esMayorEdad = edad => edad >= 18;

const nombreCompleto = (nombre, apellido) => `${nombre} ${apellido}`;

console.log("Cuadrado de 4:", cuadrado(4));
console.log("¿Es mayor de edad (20)?:", esMayorEdad(22));
console.log("Nombre completo:", nombreCompleto("Antonella", "Caviedes"));

console.log("\n==========================================");
console.log("          RETO 3        ");

 
const productos = [
  { id: 1, nombre: 'Mouse', precio: 50000, categoria: 'Perifericos', stock: 5 },
  { id: 2, nombre: 'Teclado', precio: 90000, categoria: 'Perifericos', stock: 0 },
  { id: 3, nombre: 'Monitor', precio: 650000, categoria: 'Pantallas', stock: 3 },
  { id: 4, nombre: 'Audífonos Gamer', precio: 120000, categoria: 'Accesorios', stock: 10 },
  { id: 5, nombre: 'Portátil Core i5', precio: 2500000, categoria: 'Computadores', stock: 2 },
  { id: 6, nombre: 'Silla Ergonómica', precio: 450000, categoria: 'Muebles', stock: 0 },
  { id: 7, nombre: 'Memoria USB 64GB', precio: 35000, categoria: 'Almacenamiento', stock: 15 },
  { id: 8, nombre: 'Disco Duro SSD 1TB', precio: 320000, categoria: 'Almacenamiento', stock: 4 },
  { id: 9, nombre: 'Tarjeta Gráfica', precio: 1800000, categoria: 'Componentes', stock: 1 },
  { id: 10, nombre: 'Impresora Multifuncional', precio: 600000, categoria: 'Perifericos', stock: 0 }
];

console.log("Total de productos registrados:", productos.length);
console.log("Primer producto:", productos[0].nombre);



console.log("\n==========================================");
console.log("             RETO 4          ");


productos.forEach((producto, indice) => {
  console.log(`${indice + 1}. ${producto.nombre} - $${producto.precio} - stock: ${producto.stock}`);
});

console.log("\n==========================================");
console.log("             RETO 5               ");


// 1. Precios con IVA (precio × 1.19)
const preciosConIva = productos.map(producto => producto.precio * 1.19);
console.log("Precios con IVA:", preciosConIva);

// 2. Nombres en mayúscula
const nombresMayuscula = productos.map(producto => producto.nombre.toUpperCase());
console.log("Nombres en mayúscula:", nombresMayuscula);

// 3. Resumen de productos en texto
const resumenProductos = productos.map(producto => `${producto.nombre} cuesta $${producto.precio}`);
console.log("Resumen de productos:", resumenProductos);


console.log("\n==========================================");
console.log("             RETO 6                 ");




// Ejemplos base del taller
const disponibles = productos.filter(producto => producto.stock > 0);
console.log("Productos disponibles (stock > 0):", disponibles);

const producto3 = productos.find(producto => producto.id === 3);
console.log("Producto con id 3:", producto3);

// 1. Filtrar productos con precio mayor a $100.000
const mayoresA100Mil = productos.filter(producto => producto.precio > 100000);
console.log("Precio mayor a $100.000:", mayoresA100Mil);

// 2. Filtrar productos con precio entre $50.000 y $200.000
const entre50MilY200Mil = productos.filter(
  producto => producto.precio >= 50000 && producto.precio <= 200000
);
console.log("Precio entre $50.000 y $200.000:", entre50MilY200Mil);

// 3. Filtrar únicamente una categoría escogida por ti (ej. 'Perifericos')
const perifericos = productos.filter(producto => producto.categoria === 'Perifericos');
console.log("Categoría Perifericos:", perifericos);

// 4. Buscar el producto con id 5
const producto5 = productos.find(producto => producto.id === 5);
console.log("Producto con id 5:", producto5);

// 5. Crear una función buscarProducto(id) que use find() y retorne el producto
const buscarProducto = id => productos.find(producto => producto.id === id);
console.log("Buscar producto con id 8:", buscarProducto(8));


console.log("\n==========================================");
console.log("               RETO 7:         ");

// 1. ¿Existe algún producto agotado?
const hayAgotados = productos.some(producto => producto.stock === 0);
console.log("¿Existe algún producto agotado?:", hayAgotados);

// 2. ¿Existe algún producto con precio mayor a $1.000.000?
const mayorAUnMillon = productos.some(producto => producto.precio > 1000000);
console.log("¿Existe algún producto con precio mayor a $1.000.000?:", mayorAUnMillon);

// 3. ¿Todos los productos tienen precio mayor que cero?
const preciosValidos = productos.every(producto => producto.precio > 0);
console.log("¿Todos los productos tienen precio mayor que cero?:", preciosValidos);

// 4. ¿Todos los productos tienen stock mayor o igual que cero?
const stockValido = productos.every(producto => producto.stock >= 0);
console.log("¿Todos los productos tienen stock mayor o igual que cero?:", stockValido);

// 5. Calcular el valor total del inventario
const valorInventario = productos.reduce(
  (total, producto) => total + producto.precio * producto.stock,
  0
);
console.log("Valor total del inventario: $" + valorInventario);




console.log("\n==========================================");
console.log("       RETO 8:                    ");


// 12.1 Template literals
console.log(`El producto ${productos[0].nombre} cuesta $${productos[0].precio}`);

// 12.2 Desestructuración
const { nombre, precio, stock } = productos[0];
console.log("Desestructurado:", nombre, precio, stock);

// 12.3 Spread (copia actualizando stock de productos[0])
const productoActualizado = {
  ...productos[0],
  stock: 8
};
console.log("Producto original [0]:", productos[0]);
console.log("Producto actualizado [0]:", productoActualizado);

// 12.4 Operador ternario
const estado = productoActualizado.stock > 0 ? 'Disponible' : 'Agotado';
console.log("Estado:", estado);

// --- TAREA ---
// Copia del producto en índice 1 ('Teclado', que tenía stock: 0 y precio: 90000)
const tecladoModificado = {
  ...productos[1],
  precio: 115000,
  stock: 6
};

const estadoTeclado = tecladoModificado.stock > 0 ? 'Disponible' : 'Agotado';
console.log(
  `Producto: ${tecladoModificado.nombre} | Precio: $${tecladoModificado.precio} | Estado: ${estadoTeclado}`
);

// Comprobación: el objeto original en productos[1] no cambió
console.log("Original productos[1] intacto:", productos[1]);
