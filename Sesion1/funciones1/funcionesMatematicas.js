

//redondear al numero mas cercano 
document.write(`<br>`);
document.write(`<br>`); 
const pi = Math.PI;
document.write("numero redondeado" + Math.round(pi));

//redondear hacia abajo
document.write(`<br>`);
document.write(`<br>`); 
document.write("numero redondeado hacia abajo" + Math.floor(pi));
    
//redondear hacia arriba
document.write(`<br>`);
document.write(`<br>`); 
document.write("numero redondeado hacia arriba" + Math.ceil(pi));
    
//devuelve el valor minimo
document.write(`<br>`);
document.write(`<br>`); 
document.write("Valor minimo" + Math.min(-3, 3, 10, 1));

//devuelve el valor minimo
document.write(`<br>`);
document.write(`<br>`); 
document.write("Valor maximo" + Math.max(-3, 3, 10, 1));

//numero aleatorio dentro de un rango
document.write(`<br>`);
document.write(`<br>`); 
document.write("Numero random" + Math.round(Math.random()*11));

//pasa un negativo a positiv
document.write(`<br>`);
document.write(`<br>`); 
document.write("Numero positivo" + Math.abs(-5));

//sacar raiz cuadrada
document.write(`<br>`);
document.write(`<br>`); 
document.write("Raiz cuadrada de 100 es: " + Math.sqrt(100));

//potenciar
document.write(`<br>`);
document.write(`<br>`); 
document.write("Resultado de 2 elevado a 3 es: " + Math.pow(2, 3));

//pasar de texto a numero
document.write(`<br>`);
document.write(`<br>`);

let numero = "20";
let numeroInt = parseInt(numero);
let numeroFloat = parseFloat(numero);

document.write("Numero convertido de string a entero: " + numeroInt);

document.write(`<br>`);

document.write("Numero convertido de string a decimal: " + numeroFloat);
