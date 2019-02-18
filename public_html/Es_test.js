/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var sx = Math.random() * 1000;
var alto = Math.random() * 100;
var indice = 0;

document.getElementById("arancia").style.left = sx + "px";
document.getElementById("arancia").style.top = alto + "px";
document.getElementById("arancere").style.left = "20px";
document.getElementById("arancere").style.top = "20px";

document.querySelector(".nord").onclick = function () {
    muovi("#arancia", 0, -5);

};
document.querySelector(".sud").onclick = function () {
    muovi("#arancia", 0, 5);

};
document.querySelector(".est").onclick = function () {
    muovi("#arancia", 5, 0);
};
document.querySelector(".ovest").onclick = function () {
    muovi("#arancia", -5, 0);
};




/**
 * 
 * @param {type} aran
 * @param {type} x
 * @param {type} y
 * @returns {undefined}
 * 
 */
function muovi(aran, x, y) {
    let naran = document.querySelector(aran);
    let pos1 = parseFloat(naran.style.left);
    let pos2 = parseFloat(naran.style.top);

    let nx = pos1 + x;
    let ny = pos2 + y;

    naran.style.left = nx + "px";
    naran.style.top = ny + "px";

    console.log(naran, nx, ny);
    
    controllacollisione("#arancia","#arancere");
}

document.querySelector("body").onkeydown = function (e) {

    console.log(e.which);

    let codicetasto = e.which;
    if (codicetasto == 40) {
        muovi("#arancere", 0, 10)
    }
    if (codicetasto == 38) {
        muovi("#arancere", 0, -10)
    }
    if (codicetasto == 39) {
        muovi("#arancere", 10, 0)

    }
    if (codicetasto == 37) {
        muovi("#arancere", -10, 0)

    }

}

function controllacollisione(selCss1, selCss2) {
    let oggetto1 = document.querySelector(selCss1);
    let pLeft = oggetto1.style.left;
    let x1 = parseFloat(pLeft);
    let pTop = oggetto1.style.top;
    let y1 = parseFloat(pTop);

    let oggetto2 = document.querySelector(selCss2);
    let pLeft2 = oggetto2.style.left;
    let x2 = parseFloat(pLeft2);
    let pTop2 = oggetto2.style.top;
    let y2 = parseFloat(pTop2);

    let distanza = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
   
    console.log("controlla collisione",selCss1,selCss2,distanza);
    
    if(distanza<10){
        alert("collisione tra i due oggetti")   
        return true;
    } else {
        return false;
    }


} 