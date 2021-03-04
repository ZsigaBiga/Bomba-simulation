'use strict'

var velSzam =Math.floor(Math.random() * (101-1)) + 1;

let enSzamom = '';
var id = 0;
var szam = 60;


function egy() {
    enSzamom += document.getElementById('1').value;
    document.getElementById("bevSzam").innerText  = enSzamom;
}

function ketto() {
    enSzamom += document.getElementById('2').value;
    document.getElementById("bevSzam").innerText  = enSzamom;
}

function harom() {
    enSzamom += document.getElementById('3').value;
    document.getElementById("bevSzam").innerText  = enSzamom;
}

function negy() {
    enSzamom += document.getElementById('4').value;
    document.getElementById("bevSzam").innerText  = enSzamom;
}

function ot() {
    enSzamom += document.getElementById('5').value;
    document.getElementById("bevSzam").innerText  = enSzamom;
}

function hat() {
    enSzamom += document.getElementById('6').value;
    document.getElementById("bevSzam").innerText  = enSzamom;
}

function het() {
    enSzamom += document.getElementById('7').value;
    document.getElementById("bevSzam").innerText  = enSzamom;
}

function nyolc() {
    enSzamom += document.getElementById('8').value;
    document.getElementById("bevSzam").innerText  = enSzamom;
}

function kilenc() {
    enSzamom += document.getElementById('9').value;
    document.getElementById("bevSzam").innerText  = enSzamom;
}

function nulla() {
    enSzamom += document.getElementById('0').value;
    document.getElementById("bevSzam").innerText  = enSzamom;
}



function bevitel() {

    if(parseInt(enSzamom) == velSzam) {
        stopSzamlalo();
        document.getElementById("allapot").innerText = "Állapot: A bomba hatástalanítva!";
        document.getElementById("allapot").style.color =  "green";
        var defuse = new Audio("sounds/bomb-defuse.mp3");
        defuse.play();
    }
    else {
        document.getElementById("allapot").innerText = "Állapot: helytelen kód, ";
        document.getElementById("allapot").style.color =  "red";
    }

    if(enSzamom > velSzam) {
        document.getElementById("allapot").innerText += " a kód kisebb mint a beütött számsorozat."
        document.getElementById("allapot").style.color =  "red";
    }else if (enSzamom < velSzam) {
        document.getElementById("allapot").innerText += " a kód nagyobb mint a beütött számsorozat."
        document.getElementById("allapot").style.color =  "red";
    }
}

function torles() {
    document.getElementById("bevSzam").innerText = "";
    enSzamom = '';
}

function szamlalo() {
    id = 0;
    szam = 60;
    
    id = setInterval(function() {
        document.getElementById("szamlalo").innerText = --szam;
        if(szam == 0){
            clearInterval(id);
            document.getElementById("szamlalo").innerText = "MEGHALTÁL ÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁ";
            var kaboom = new Audio('sounds/kaboom.mp3');
            kaboom.play();
        }
    }, 1000)
}

function stopSzamlalo() {
    clearInterval(id);
}

function kezdes() {
    var audio = new Audio('sounds/bomb-plant.mp3');
    audio.play();
    szamlalo();
}