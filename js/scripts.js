'use strict'

console.log('Empieza el programa')

// ------------------- VARIABLES GLOBALES ------------------------

// capturamos el formulario de introduccion de socios - Ejercicio 1
const formulario = document.querySelector('#formNombre')

// Capturamos el contenedor donde escribiremos los socios - Ejercicio 2
const contenedorEscribirSocios = document.getElementById(
  'contenedorPintarSocios'
)

// const fs = require('fs');

// Array para añadir los socios
var socios = new Array();

// Clase para encapsular datos de Socios.
class Socio {
  constructor(id, nombre, apellido) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
  }
}

// ------------------- FUNCIONES ------------------------

// EJERCICIO 1

/* 
  Metodo para añadir socios al array 
  cuando arranca la pagina web.
*/
function aniadirSociosInicialesArray () {
  // Cargar el fichero JSON, parsearlo a objetos tipo "socio" y añadirlos al array.
  let jsonStr = '[{"id":1,"nombre":"Andoni","apellido":"Larrieta"},{"id":2,"nombre":"Jon","apellido":"Agirre"},{"id":3,"nombre":"Patxi","apellido":"Mujika"}]';
  let jsonObj = JSON.parse(jsonStr);

  for (let socio of jsonObj) {
    socios.push(new Socio(socio.id, socio.nombre, socio.apellido));
  }

  // socios = JSON.parse(fs.readFileSync("./datosSocios.json"));
}

/*
  Meotodo para capturar los datos del socio introducidor en el formulario
*/
function capturarDatosSocio () {
  // Recoger los el nombre y apellido del HTML.
  // Crear el socio y añadirlo al array.
  crearSocio(
    document.getElementById("fnombre").value,
    document.getElementById("fapellido").value);
  
  console.log(socios);
}

/* 
  Metodo para crear un socio pasandole el nombre y el apellido
  y añadirlo al array
 */
function crearSocio (nombre, apellido) {
  // Crear objeto socio
  // Añadir el objeto al array
  socios.push(new Socio(crearID(), nombre, apellido));
}

/*
  Metodo para crear el ID del socio en funcion del ultimo
  ID que hay en el array de socios.
*/
function crearID () {
  // Mirar el id del ultimo socio del array y sumarle uno
  return socios.length + 1;
}

// EJERCICIO 2

/*
  Metodo que elimina la lista previamente pintada en el contenedor asignado 
  para pintar socios, recorre el array con un bucle y pinta los socios 
*/
function pintarListaSocios () {
  var sociosStr = "<ul>";

  // Borramos todo lo que hay en el div
  contenedorEscribirSocios.innerHTML = "";

  // Bucle para recorrer y pintar el array de socios
  socios.forEach(socio => {
    sociosStr += "<li>Socio numero " + socio.id + ": " + socio.nombre + " " + socio.apellido + "</li>";
  });

  sociosStr += "</ul>";

  // Debemos añadir los socios a la pagina web
  contenedorEscribirSocios.innerHTML = sociosStr;
}

// ------------------- MAIN ------------------------

// Añadimos los socios iniciales cuando empieza el programa
aniadirSociosInicialesArray();

console.log('Acaba el programa')
