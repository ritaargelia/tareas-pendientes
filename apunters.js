/* Comentarios de varias lineas */
// Comentario de una sola linea
//console.log('Hola Mundo');
//alert('Hola, desde un alert');
let nombre = "Rita";
//var apellido = "Garnica";
const pi = 3.1416;
//string nombre = "Juan";
//Tipos de datos
//No definido - undefined
let noDefinido;

let persona = {nombre : 'Aurora', apellido : 'Pinzon', edad : 20};
console.log(persona);

//Arrays - coleccion de varias personas
let personas = [
    {nombre:'Maria', apellido:'Rodriguez', edad:21},{nombre:'Daniela', apellido:'Lopez', edad:20},{nombre:'Fabiola', apellido:'Estudillo', edad:19},
    persona
]
console.log(personas);
console.log(personas[2]);

//Funciones JS - bloques de codigo o listado de instrucciones
//let a, b;
//a=prompt('Numero 1: ');
//b=prompt('Numero 2: ');
function suma(a, b) {
    return a + b;
}
let resultado = suma(6, 8);
console.log(resultado);

