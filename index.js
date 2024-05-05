var textos = [
    {txt: "Magnetico de bobina movil", valorTxt: 1},
    {txt: "Magnetico de iman movil", valorTxt: 2},
    {txt: "Magnetoelectrico con rectificador", valorTxt: 3},
    {txt: "Magnetoelectrico con termoelemento", valorTxt: 4},
    {txt: "Magnetoelectrico diferencial", valorTxt: 5},
    {txt: "Electromagnetico", valorTxt: 6},
    {txt: "Electromagnetico diferencial", valorTxt: 7},
    {txt: "Electromagnetico de vibración", valorTxt: 8},
    {txt: "Electrodinamico sin hierro", valorTxt: 9},
    {txt: "Ferrodinamico", valorTxt: 10},
    {txt: "Ferrodinamico diferencial", valorTxt: 11},
    {txt: "De induccion", valorTxt: 12},
    {txt: "De induccion diferencial", valorTxt: 13},
    {txt: "Electrostatico", valorTxt: 14},
    {txt: "Electrotermico de hilo caliente", valorTxt: 15},
    {txt: "Electrotermico bimetalico", valorTxt: 16},
    {txt: "Instrumento de corriente continua", valorTxt: 17},
    {txt: "Instrumento de corriente alterna", valorTxt: 18},
    {txt: "Instrumento de corriente continua y alterna", valorTxt: 19},
    {txt: "Instrumento de corriente trifásica de 1 sistema", valorTxt: 20},
    {txt: "Instrumento de corriente trifásica de 2 sistemas", valorTxt: 21},
    {txt: "Instrumento de corriente trifásica de 3 sistemas", valorTxt: 22},
    {txt: "Posición obligatoria horizontal", valorTxt: 23},
    {txt: "Posición obligatoria vertical", valorTxt: 24},
    {txt: "Posición inclinada", valorTxt: 25},
    {txt: "Instrumento con aislamiento probado con 2Kv", valorTxt: 26},
    {txt: "Instrumento con aislamiento probado con 500v", valorTxt: 27},
    {txt: "Instrumento no sometido a prueba de aislamiento", valorTxt: 28},
    {txt: "Atención: No tocar durante el trabajo", valorTxt: 29},
    {txt: "Atención: No utilizar antes de consultar instrucciones", valorTxt: 30},
    {txt: "Blindaje magnético", valorTxt: 31},
    {txt: "Blindaje electrostático", valorTxt: 32}
];

var valorAleatorioTxt1 = Math.floor(Math.random() * 32) + 1;
var valorAleatorioTxt2 = Math.floor(Math.random() * 32) + 1;
if (valorAleatorioTxt2 == valorAleatorioTxt1) {
    valorAleatorioTxt2 = Math.floor(Math.random() * 32) + 1;
};
var valorAleatorioTxt3 = Math.floor(Math.random() * 32) + 1;
if (valorAleatorioTxt3 == valorAleatorioTxt1 || valorAleatorioTxt3 == valorAleatorioTxt2) {
    valorAleatorioTxt3 = Math.floor(Math.random() * 32) + 1;
};

function generacionDeRespuestas() {
    var rtaBoton1 = document.getElementById("rtaBoton1");
    var rtaBoton2 = document.getElementById("rtaBoton2");
    var rtaBoton3 = document.getElementById("rtaBoton3");
    for (var texto1 of textos) {
        if (texto1.valorTxt == valorAleatorioTxt1) {
            rtaBoton1.textContent = texto1.txt;
            rtaBoton1.dataset.valor = valorAleatorioTxt1;
            for (var texto2 of textos) {
                if (texto2.valorTxt == valorAleatorioTxt2) {
                    rtaBoton2.textContent = texto2.txt;
                    rtaBoton2.dataset.valor = valorAleatorioTxt2;
                for (var texto3 of textos) {
                        if (texto3.valorTxt == valorAleatorioTxt3) {
                            rtaBoton3.textContent = texto3.txt;
                            rtaBoton3.dataset.valor = valorAleatorioTxt3;
                            break;
                        };
                    };
                };
            };
        } else {
            continue;
        };
    };  
    generacionDeImagen();
};

var imagenesSrc = [
    {src: "<div class='espacioImg'><img src='IMAGENES/magneticoDeBobinaMovil.png' class='imagenes'></div>", valor: 1},
    {src: "<div class='espacioImg'><img src='IMAGENES/magneticoDeImanMovil.png' class='imagenes'></div>", valor: 2},
    {src: "<div class='espacioImg'><img src='IMAGENES/magnetoelectricoConRectificador.png' class='imagenes'></div>", valor: 3},
    {src: "<div class='espacioImg'><img src='IMAGENES/magnetoelectricoConTermoelemento.png' class='imagenes'></div>", valor: 4},
    {src: "<div class='espacioImg'><img src='IMAGENES/magnetoelectricoDiferencial.png' class='imagenes'></div>", valor: 5},
    {src: "<div class='espacioImg'><img src='IMAGENES/electromagnetico.png' class='imagenes'></div>", valor: 6},
    {src: "<div class='espacioImg'><img src='IMAGENES/electromagneticoDiferencial.png' class='imagenes'></div>", valor: 7},
    {src: "<div class='espacioImg'><img src='IMAGENES/electromagneticoDeVibracion.png' class='imagenes'></div>", valor: 8},
    {src: "<div class='espacioImg'><img src='IMAGENES/electrodinamicoSinHierro.png' class='imagenes'></div>", valor: 9},
    {src: "<div class='espacioImg'><img src='IMAGENES/ferrodinamico.png' class='imagenes'></div>", valor: 10},
    {src: "<div class='espacioImg'><img src='IMAGENES/ferrodinamicoDiferencial.png' class='imagenes'></div>", valor: 11},
    {src: "<div class='espacioImg'><img src='IMAGENES/deInduccion.png' class='imagenes'></div>", valor: 12},
    {src: "<div class='espacioImg'><img src='IMAGENES/deInduccionDiferencial.png' class='imagenes'></div>", valor: 13},
    {src: "<div class='espacioImg'><img src='IMAGENES/electrostatico.png' class='imagenes'></div>", valor: 14},
    {src: "<div class='espacioImg'><img src='IMAGENES/electrotermicoDeHiloCaliente.png' class='imagenes'></div>", valor: 15},
    {src: "<div class='espacioImg'><img src='IMAGENES/electrotermicoBimetalico.png' class='imagenes'></div>", valor: 16},
    {src: "<div class='espacioImg'><img src='IMAGENES/instrumentoDeCorrienteContinua.png' class='imagenes'></div>", valor: 17},
    {src: "<div class='espacioImg'><img src='IMAGENES/instrumentoDeCorrienteAlterna.png' class='imagenes'></div>", valor: 18},
    {src: "<div class='espacioImg'><img src='IMAGENES/instrumentoDeCorrienteContinuaYAlterna.png' class='imagenes'></div>", valor: 19},
    {src: "<div class='espacioImg'><img src='IMAGENES/instrumentoDeCorrienteTrifasica1Sistema.png' class='imagenes'></div>", valor: 20},
    {src: "<div class='espacioImg'><img src='IMAGENES/instrumentoDeCorrienteTrifasica2Sistemas.png' class='imagenes'></div>", valor: 21},
    {src: "<div class='espacioImg'><img src='IMAGENES/instrumentoDeCorrienteTrifasica3Sistemas.png' class='imagenes'></div>", valor: 22},
    {src: "<div class='espacioImg'><img src='IMAGENES/posicionObligatoriaHorizontal.png' class='imagenes'></div>", valor: 23},
    {src: "<div class='espacioImg'><img src='IMAGENES/posicionObligatoriaVertical.png' class='imagenes'></div>", valor: 24},
    {src: "<div class='espacioImg'><img src='IMAGENES/posicionInclinada.png' class='imagenes'></div>", valor: 25},
    {src: "<div class='espacioImg'><img src='IMAGENES/instrumentoConAislamientoProbadoCon2kv.png' class='imagenes'></div>", valor: 26},
    {src: "<div class='espacioImg'><img src='IMAGENES/instrumentoConAislamientoProbadoCon500v.png' class='imagenes'></div>", valor: 27},
    {src: "<div class='espacioImg'><img src='IMAGENES/instrumentoNoSometidoAPruebaDeAislamiento.png' class='imagenes'></div>", valor: 28},
    {src: "<div class='espacioImg'><img src='IMAGENES/riesgoDuranteElTrabajo.png' class='imagenes'></div>", valor: 29},
    {src: "<div class='espacioImg'><img src='IMAGENES/noUsarAntesDeConsultar.png' class='imagenes'></div>", valor: 30},
    {src: "<div class='espacioImg'><img src='IMAGENES/blindajeMagnetico.png' class='imagenes'></div>", valor: 31},
    {src: "<div class='espacioImg'><img src='IMAGENES/blindajeElectrostatico.png' class='imagenes'></div>", valor: 32},
];

var respuestasDef = [
    valorAleatorioTxt1,
    valorAleatorioTxt2,
    valorAleatorioTxt3
];
var numeroAleatorio = respuestasDef[Math.floor(Math.random() * respuestasDef.length)];

function generacionDeImagen() {
    var imagenGen = document.getElementById("img1");
    for (imagen of imagenesSrc) {
        if (imagen.valor == numeroAleatorio) {
            imagenGen.innerHTML = imagen.src; 
            break;
        } else {
            continue;
        };
    };
    let botonDeReinicio = document.getElementById("botonDeReinicio");
    botonDeReinicio.innerHTML = "<div><button class='botonesChicos' onclick='reiniciar()'>REINICIAR</button></div>";
};

function reiniciar() {
    location.reload();
};

function verificarRta1() {
    if (rtaBoton1.dataset.valor == numeroAleatorio) {
        rtaBoton1.style.backgroundColor = "#8f8";
        rtaBoton1.disable = true;
    } else {
        rtaBoton1.style.backgroundColor = "#f88";
        rtaBoton1.disable = true;
    }
};

function verificarRta2() {
    if (rtaBoton2.dataset.valor == numeroAleatorio) {
        rtaBoton2.style.backgroundColor = "#8f8";
        rtaBoton1.disable = true;
    } else {
        rtaBoton2.style.backgroundColor = "#f88";
        rtaBoton1.disable = true;
    }
};

function verificarRta3() {
    if (rtaBoton3.dataset.valor == numeroAleatorio) {
        rtaBoton3.style.backgroundColor = "#8f8";
        rtaBoton1.disable = true;
    } else {
        rtaBoton3.style.backgroundColor = "#f88";
        rtaBoton1.disable = true;
    }
};