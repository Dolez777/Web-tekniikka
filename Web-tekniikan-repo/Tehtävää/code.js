//Hae element by id
var elem = document.getElementById("header");
var elem2 = document.querySelector("#header");

//Hae elementtejä
var list_items = document.getElementsByTagName("li");

//
var item = document.querySelector("li");
var items = document.querySelectorAll("li");

var spessut = document.querySelectorAll(".special");

var lista = document.querySelector(".special");
lista.document.querySelector("li").textContent = "lol";

//toinen itemi
var secondItem = items[1];

secondItem.textContent = "Toka";

for (let i = 0; i < items.length; i++) {
    items[i].textContent = "<h1>" + i + "</h1>";
}

//Tulosta ekan li teksti
var lista = document.querySelector("li");
console.log(lista.childNodes[0].nodeValue);
