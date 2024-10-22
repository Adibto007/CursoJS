//temporizador

function comenzarTiempo(){
    let elementoSegundos =  1000 * document.getElementById("tiempoElegido").value;
    setTimeout(tiempoCumplido, elementoSegundos);
}

function tiempoCumplido(){
    document.getElementById("textoAlarma").style.color="green";
    document.getElementById("audioAlarma").play();
}

function comenzarReloj(){
    setInterval(tictac, 1000);
}

function tictac(){
    let fechaActual = new Date();
    let horas = fechaActual.getHours();
    let minutos = fechaActual.getMinutes();
    let segundos = String(fechaActual.getSeconds()).padStart(2,"0");
    let textoHora = horas + ":" + minutos + ":"  + segundos;
    document.getElementById("textoAlarma").textContent =textoHora;
}

//----------------------------------------------------------//

