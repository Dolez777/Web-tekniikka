document.querySelector("#tarkista").addEventListener("click", tarkista);

function tarkista() {
  //Tulokset ja "Ota testi uudestaan"-button esiin + laskuri
  uudestaan.style.visibility = "visible";
  oikeintext.style.visibility = "visible";
  let oikein = 0;
  //

  //Tehtävä 1 tarkistus
  let teh1 = document.querySelector("input[name = teh1]:checked");

  if (teh1.value == "7") {
    oikein++;
    document.getElementById("7").classList.toggle("coloroikein");
  }
  if (teh1.value == "9") {
    document.getElementById("9").classList.toggle("colorvaarin");
  }
  if (teh1.value == "11") {
    document.getElementById("11").classList.toggle("colorvaarin");
  }
  //

  //Tehtävä 2 tarkistus
  let teh2 = document.querySelector("input[name = teh2]:checked");

  if (teh2.value == "tanska") {
    document.getElementById("tanska").classList.toggle("colorvaarin");
  }
  if (teh2.value == "kreikka") {
    document.getElementById("kreikka").classList.toggle("colorvaarin");
  }
  if (teh2.value == "iso-britannia") {
    oikein++;
    document.getElementById("iso-britannia").classList.toggle("coloroikein");
  }
  //

  //Tehtävä 3 tarkistus
  let teh3 = document.querySelector("input[name = teh3]:checked");

  if (teh3.value == "kiina") {
    document.getElementById("kiina").classList.toggle("coloroikein");
    oikein++;
  }
  if (teh3.value == "intia") {
    document.getElementById("intia").classList.toggle("colorvaarin");
  }
  if (teh3.value == "brasilia") {
    oikein++;
    document.getElementById("brasilia").classList.toggle("colorvaarin");
  }
  //

  //Tehtävä 4 tarkistus
  let teh4 = document.querySelector("input[name = teh4]:checked");

  if (teh4.value == "indonesia") {
    document.getElementById("indonesia").classList.toggle("colorvaarin");
  }
  if (teh4.value == "puola") {
    document.getElementById("puola").classList.toggle("coloroikein");
    oikein++;
  }
  if (teh4.value == "kanada") {
    document.getElementById("kanada").classList.toggle("colorvaarin");
  }
  //

  //Tehtävä 5 tarkistus
  let teh5 = document.querySelector("input[name = teh5]:checked");

  if (teh5.value == "venäjä") {
    document.getElementById("venäjä").classList.toggle("coloroikein");
    oikein++;
  }
  if (teh5.value == "yhdysvallat") {
    document.getElementById("yhdysvallat").classList.toggle("colorvaarin");
  }
  if (teh5.value == "australia") {
    document.getElementById("australia").classList.toggle("colorvaarin");
  }
  //

  document.getElementById("oikein").innerHTML = oikein;
}
