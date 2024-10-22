//creacion de un objeto
var Auto = {
    marca: "Ford",
    modelo: "Mustang",
    anio: 2015,
    color: "Rojo",
    precio: 25000,
    radio: ['fm','mp4','usb']
}

// document.write("marca: " + Auto.radio);

//clases

class Persona{
    nombre = 'homero';
    apellido = 'simpson';
    direccion = 'ave. siempreviva 742';
    telefono = 5551234;
    email = 'amantedelacomida@gmail.com';

    trabajar(){
        return 'trabaja en la planta nuclear';
    }
    estudiar(){
        return 'estudia en la universidad';
    }
}

const homero = new Persona();

// document.write(homero.nombre);


//poo clase date

const fecha = new Date();
document.write(fecha);
document.write("<br>");
//extrae solo el dia
document.write("Hoy es: " + fecha.getDate());
document.write("<br>");
//extrae solo el mes
document.write("El mes es: " + fecha.getMonth()+1);
document.write("<br>");
//extrae solo el año
document.write("El año es: " + fecha.getFullYear());
document.write("<br>");
//extrae hora y minutos
document.write("La hora es: " + fecha.getHours() +": " + fecha.getMinutes());