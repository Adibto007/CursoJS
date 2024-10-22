//condicional if-else y ciclo for

let nombre, edad, N;

nombre =prompt("ingrese su nombre");
edad =prompt("ingrese su edad");
N = prompt("Ingrese la cantidad de numeros que quiere imprimir")

if(nombre == "juan" || nombre == "juancho" && edad>=18){
    for(let i=0; i<=N; i++){
        document.write(i);
        document.write("<br>");
    }
}else{
    document.write("No estas habilitado para hacer esta funcion");
}


//switch con ciclo while

let opcion = parseInt(prompt("Digite la opcion 1 para saludar o digite la 2 para despedirse"));
let x =0;
switch(opcion){
    
    case 1: 
        let opcionc1 = parseInt(prompt("Digite la cantidad de veces que quieres saludar"));
        while(x<opcionc1){
            document.write("Hola buenas como estas");
            document.write("<br>");
            x++;
        }
        
    break;

    case 2: 
        let opcionc2 = parseInt(prompt("Digite la cantidad de veces que quieres despedirte"));
        while(x<opcionc2){
            document.write("Adios");
            document.write("<br>");
            x++;
        }
    break;

    default:
        document.write("Digite un numero valido");
        document.write("<br>");
    break;

}

//for in 

let palabra = 'javaScript';

for(let i in palabra){
    document.write(i);
    document.write(palabra[i]);
    document.write("<br>");
}