saludo();
saludo2();
saludo3("jhoan");
document.write("Funcion con return: " + suma(3,3))

//funcion normal

function saludo() {
    document.write("Hola mundo");
    document.write("<br>");
}

//llamar funcion dentro de funcion
function saludo2() {
    saludo();
    document.write("Este es el segundo saludo");
    document.write("<br>");
}

//funcion con parametro

function saludo3(nombre) {
    document.write("Hola " + nombre);
    document.write("<br>");
}

//funcion con return

function suma(a, b) {
    return a + b;
}

