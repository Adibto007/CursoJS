
//sacar tamaño de un texto
let texto = "pepe";
document.write("Tamaño del texto es: " + texto.length);

//sacar letra por su posicion
document.write(`<br>`);
document.write(`<br>`);
document.write("La letra en la posicion 1 es: " + texto[0]);

let string = "javaScript";

//convertir a mayusculas
document.write(`<br>`);
document.write(`<br>`);
document.write("Mayusculas: " + string.toUpperCase());

//convertir a minusculas
document.write(`<br>`);
document.write(`<br>`);
document.write("Minusculas: " + string.toLowerCase());

//sacar cierta parte del texto
document.write(`<br>`);
document.write(`<br>`);
document.write("Texto truncado: " + string.substr(4, 6));

//Verifica si el texto tiene un argumento 
document.write(`<br>`);
document.write(`<br>`);
document.write("la palabra javaScript contiene la palabara java? : " + string.includes("java"));

//Reemplaza una parte del texto
document.write(`<br>`);
document.write(`<br>`);
document.write("Texto reemplazado: " + string.replace("java","python"));

//quitar espacios entre textos
document.write(`<br>`);
document.write(`<br>`);
let palabra1 = "hola             a todos";
document.write("Esspacios recortados: " + palabra1.trim());

//cortar palabras
document.write(`<br>`);
document.write(`<br>`);
document.write("Palabra recortada : " + palabra1.split("hola"));
