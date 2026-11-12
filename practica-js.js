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
console.log("             RETO 5: MAP()                ");
console.log("==========================================");

// 1. Precios con IVA (precio × 1.19)
const preciosConIva = productos.map(producto => producto.precio * 1.19);
console.log("Precios con IVA:", preciosConIva);

// 2. Nombres en mayúscula
const nombresMayuscula = productos.map(producto => producto.nombre.toUpperCase());
console.log("Nombres en mayúscula:", nombresMayuscula);

// 3. Resumen de productos en texto
const resumenProductos = productos.map(producto => `${producto.nombre} cuesta $${producto.precio}`);
console.log("Resumen de productos:", resumenProductos);