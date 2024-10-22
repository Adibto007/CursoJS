let nombre, edad, numero1, numero2;

nombre = prompt("Digite su nombre");
edad = prompt("Digite su edad");
numero1 = prompt("Digite un numero");
numero2 = prompt("Digite otro numero");


document.write("Su nombre es: " + nombre.toUpperCase() + "<br>");

if(nombre.includes("a") || nombre.includes("A")){
    document.write("Su nombre contiene la letra 'A'" + "<br>");
}else{
    document.write("Su nombre no contiene la letra A'" + "<br>")
}
document.write("Su nombre tiene " + nombre.length + " letras" + "<br>")
document.write("Letras reemplazadas: " + nombre.replace(/a/g, 'x').toUpperCase()+ "<br>")

if(edad>=18){

    document.write("numero 1 redondeado: "+ Math.round(numero1) + "<br>");
    document.write("numero 2 redondeado: "+ Math.round(numero2) + "<br>");
    document.write("La raiz cuadrada del numero 1 es: "+ Math.sqrt(numero1) + "<br>");
    document.write("numero 1 elevado al numero 2: "+ Math.pow(numero1,numero2) + "<br>");
    document.write("Numero mayor: "+ Math.max(numero1,numero2) + "<br>");
    if(numero2<0){
        document.write("Negativo a postivo: "+ Math.abs(numero2) + "<br>");
    }

    document.write("numero aleatorio con tope del mayor numero ingresado: "+ Math.round(Math.random()*Math.max(numero1,numero2))+ "<br>");


}else{
    alert("No tienes edad para hacer funciones matematicas")
}