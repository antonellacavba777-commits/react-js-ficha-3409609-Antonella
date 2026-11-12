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