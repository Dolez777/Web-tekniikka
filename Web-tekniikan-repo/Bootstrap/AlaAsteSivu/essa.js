document.querySelector("#checkResults").addEventListener("click", check);

function check() {

    again.style.visibility = "visible";

    let question1 = document.querySelector('input[name = question1]:checked');

    if (question1.value == "manna") {
        document.getElementById("manna").classList.toggle("colorWrong")
    }
    if (question1.value == "sanna") {
        document.getElementById("sanna").classList.toggle("colorRight")
    }
    if (question1.value == "anna") {
        document.getElementById("anna").classList.toggle("colorWrong")
    }

    let question2 = document.querySelector('input[name = question2]:checked');

    if (question2.value == "kotka") {
        document.getElementById("kotka").classList.toggle("colorWrong")
    }
    if (question2.value == "lokki") {
        document.getElementById("lokki").classList.toggle("colorWrong")
    }
    if (question2.value == "joutsen") {
        document.getElementById("joutsen").classList.toggle("colorRight")
    }

    let question3 = document.querySelector('input[name = question3]:checked');

    if (question3.value == "venaja") {
        document.getElementById("venaja").classList.toggle("colorRight")
    }
    if (question3.value == "tanska") {
        document.getElementById("tanska").classList.toggle("colorWrong")
    }
    if (question3.value == "viro") {
        document.getElementById("viro").classList.toggle("colorWrong")
    }

    let question4 = document.querySelector('input[name = question4]:checked');

    if (question4.value == "oulu") {
        document.getElementById("oulu").classList.toggle("colorWrong")
    }
    if (question4.value == "tampere") {
        document.getElementById("tampere").classList.toggle("colorWrong")
    }
    if (question4.value == "turku") {
        document.getElementById("turku").classList.toggle("colorRight")
    }

    let question5 = document.querySelector('input[name = question5]:checked');

    if (question5.value == "nerds") {
        document.getElementById("nerds").classList.toggle("colorWrong")
    }
    if (question5.value == "birds") {
        document.getElementById("birds").classList.toggle("colorRight")
    }
    if (question5.value == "herds") {
        document.getElementById("herds").classList.toggle("colorWrong")
    }
}