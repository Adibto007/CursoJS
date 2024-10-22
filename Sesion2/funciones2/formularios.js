
// let contador =0;

// function incrementar(){
//     contador++;
//     alert("valor: " + contador)
// }

//----------------------------------------------------------------//

// // input validacion
// let control =0;
// let contrasena= 'pepe';

// function validarUsuario(){
//     let clave = document.getElementById("contrasena").value;
//     if(clave != contrasena){
//         alert("Contraseña incorrecta");
//         control++;
//         if(control == 3){
//             alert("Has excedido el numero de intentos permitidos");
//             document.getElementById("contrasena").disabled = true;
//             document.getElementById("usuario").disabled = true;
//         }

//     }else{
//         window.open("http://www.google.com");

//     }
// }

//----------------------------------------------------------------//

// // select option color semaforo
// function cambiarColor(){
//     let seleccion = document.getElementById("select1");
//     document.getElementById("text1").value = seleccion.selectedIndex +1;
//     document.getElementById("text2").value = seleccion.options[seleccion.selectedIndex].text;
//     document.getElementById("text3").value = seleccion.options[seleccion.selectedIndex].value;
// }

//----------------------------------------------------------------//

// // input tipo checkbox ¿que lenguaje conoces?
// function mostrarLenguaje(){
//     let cantidad = 0;
//     if(document.getElementById("check1").checked){
//         cantidad++;
//     }
//     if(document.getElementById("check2").checked){
//         cantidad++;
//     }
//     if(document.getElementById("check3").checked){
//         cantidad++;
//     }
//     if(document.getElementById("check4").checked){
//         cantidad++;
//     }
//     if(document.getElementById("check5").checked){
//         cantidad++;
//     }

//     alert("Conoces: " + cantidad + " Lenguajes");
// }

//----------------------------------------------------------------//

// //input tipo radio escoge horario
// function mostrarHorario(){
//     if(document.getElementById("radio1").checked){
//         alert("El horario es de 8:00 a 12:00");
//     }else if(document.getElementById("radio1").checked){
//         alert("El horario es de 2:00 a 10:00");
//     }else{
//         alert("El horario es de 10:00 a 6:00");
//     }
// }

//----------------------------------------------------------------//

// //textarea 
// let area = document.getElementById("comentarios");
// area.style.resize = "none";

// function comentar(){
//     if(document.getElementById("comentarios").value.length > 100){
//         alert("El comentario es muy largo, solo puede tener 100 caracteres");
//     }else{
//         alert("Comentario enviado correctamente");
//     }
// }

//----------------------------------------------------------------//

// //onfocus en formulario
// function vaciar(control){
//     control.value = "";
// }

// function verificar(){
//     alert("datos confirmados")
// }

//----------------------------------------------------------------//

// //onblur en formulario
// function f_focus(){
//     document.getElementById("nombre").value = "";
//     document.getElementById("nombre").style.background = "none";
// }

// function f_blur(){
//     if(document.getElementById("nombre").value == ""){
//         document.getElementById("nombre").style.background = "red";
//         alert("El nombre es obligatorio");
//     };
    
// }

//----------------------------------------------------------------//

//textarea contador de caracteres

// //colocando action listener keyup estamos escuchando las teclas de nuestro pc
// document.getElementById("texto").addEventListener("keyup", caracteres);

// function caracteres(){
//     let cant = document.getElementById("texto").value.length;
//     let disponibles = 20 - parseInt(cant);
//     document.getElementById("cantidad").innerHTML = disponibles;

//     if(disponibles == 0){
//         swal("cantidad de caracteres agotados");
//     }
// }