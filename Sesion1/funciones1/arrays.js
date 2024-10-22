//Extraer variables de inputs
function ver(){
    let names = document.getElementById("inputNOMBRE").value;
    let age = document.getElementById("inputEDAD").value;
    
    let nombre = {nombres: names, edad: age};
    document.write(nombre.nombres + " " + nombre.edad);
}

//declaracion de arrays
let numeros = [15,80,650,50.50,-10];
document.write("Numeros del array: "+ numeros);

//eliminar ultimo dato del array
document.write("<br>");
document.write("<br>");
numeros.pop();
document.write("Ultima dato eliminado: " + numeros);

//agregar nuevo numero al array
document.write("<br>");
document.write("<br>");
numeros.push(-10);
document.write("Dato agregado: " + numeros);

//eliminar primer elemento
document.write("<br>");
document.write("<br>");
numeros.shift();
document.write("Primer valor eliminado: " + numeros);

//Agregar elemento al principio
document.write("<br>");
document.write("<br>");
numeros.unshift(4);
document.write("Primer valor agregado: " + numeros);

//organizar array en orden alfabetico
let nombres = ["Juan", "Maria", "Pedro", "Ana"];
document.write("<br>");
document.write("<br>");
document.write("Array sin ordenar alfabeticamente: " + nombres);
nombres.sort();
document.write("<br>");
document.write("<br>");
document.write("Array ordenado alfabeticamente: " + nombres);