
 

function random(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//let joku = document.querySelector("input[name = teh1]:checked")


oikein = 0;

//***************************** */

document.getElementById("tulos").innerHTML = oikein + "/5";

function teht1(){
    
    let num1 = random(1, 10);
    let num2 = random(1, 10);

    let paikka = random(1, 3);
    chosen1 = paikka.toString();

    document.getElementById("teht1").innerHTML = num1 + " + " + num2;

    let ran1 = num1 + num2 - random(1, 10);
    let ran2 = num1 + num2 + random(1, 10);
    let ran3 = num1 + num2 - random(1, 10);
    let oike = num1 + num2;

    document.getElementById("1").innerHTML = ran1;
    document.getElementById("2").innerHTML = ran2;
    document.getElementById("3").innerHTML = ran3;

    document.getElementById(chosen1).innerHTML = oike;
    
    document.getElementById("ra1").value = ran1;
    document.getElementById("ra2").value = ran2;
    document.getElementById("ra3").value = ran3;

    vas = "ra"+ chosen1;   

    document.getElementById(vas).value = oike;
    
    
}

function tark1(){
    
    if(document.getElementById(vas).checked){
        document.getElementById("lasku1").style.backgroundColor = "green";
        document.getElementById("laske1").style.backgroundColor = "green";
        oikein++;
        
        document.getElementById("ra1").disabled = true;
        document.getElementById("ra2").disabled = true;
        document.getElementById("ra3").disabled = true;

        document.getElementById("tulos").innerHTML = oikein + "/5";

    }
    else{
        document.getElementById("lasku1").style.backgroundColor = "red";
        document.getElementById("laske1").style.backgroundColor = "red";

        document.getElementById("ra1").disabled = true;
        document.getElementById("ra2").disabled = true;
        document.getElementById("ra3").disabled = true;
    }
}

teht1();

/****************************** */



function teht2(){
    
    let num1 = random(1, 20);
    let num2 = random(1, 20);

    let paikka = random(4, 6);
    chosen2 = paikka.toString();

    document.getElementById("teht2").innerHTML = num1 + " + " + num2;

    let ran1 = num1 + num2 - random(1, 10);
    let ran2 = num1 + num2 + random(1, 10);
    let ran3 = num1 + num2 - random(1, 10);
    let oike = num1 + num2;

    document.getElementById("4").innerHTML = ran1;
    document.getElementById("5").innerHTML = ran2;
    document.getElementById("6").innerHTML = ran3;

    document.getElementById(chosen2).innerHTML = oike;
    
    document.getElementById("ra4").value = ran1;
    document.getElementById("ra5").value = ran2;
    document.getElementById("ra6").value = ran3;

    vas1 = "ra"+ chosen2;   

    document.getElementById(vas1).value = oike;
    
    
}

function tark2(){
    
    if(document.getElementById(vas1).checked){
        document.getElementById("lasku2").style.backgroundColor = "green";
        document.getElementById("laske2").style.backgroundColor = "green";
        oikein++;

        document.getElementById("ra4").disabled = true;
        document.getElementById("ra5").disabled = true;
        document.getElementById("ra6").disabled = true;

        document.getElementById("tulos").innerHTML = oikein + "/5";

    }
    else{
        document.getElementById("lasku2").style.backgroundColor = "red";
        document.getElementById("laske2").style.backgroundColor = "red";

        document.getElementById("ra4").disabled = true;
        document.getElementById("ra5").disabled = true;
        document.getElementById("ra6").disabled = true;
    }
}

teht2();

/****************************** */

function teht3(){
    
    let num1 = random(1, 30);
    let num2 = random(1, 30);

    let paikka = random(7, 9);
    chosen3 = paikka.toString();

    document.getElementById("teht3").innerHTML = num1 + " + " + num2;

    let ran1 = num1 + num2 - random(1, 10);
    let ran2 = num1 + num2 + random(1, 10);
    let ran3 = num1 + num2 - random(1, 10);
    let oike = num1 + num2;

    document.getElementById("7").innerHTML = ran1;
    document.getElementById("8").innerHTML = ran2;
    document.getElementById("9").innerHTML = ran3;

    document.getElementById(chosen3).innerHTML = oike;
    
    document.getElementById("ra7").value = ran1;
    document.getElementById("ra8").value = ran2;
    document.getElementById("ra9").value = ran3;

    vas2 = "ra"+ chosen3;   

    document.getElementById(vas2).value = oike;
    
    
}

function tark3(){

    
    if(document.getElementById(vas2).checked){
        document.getElementById("lasku3").style.backgroundColor = "green";
        document.getElementById("laske3").style.backgroundColor = "green";
        oikein++;

        document.getElementById("ra7").disabled = true;
        document.getElementById("ra8").disabled = true;
        document.getElementById("ra9").disabled = true;

        document.getElementById("tulos").innerHTML = oikein + "/5";
    }
    else
    {
        document.getElementById("lasku3").style.backgroundColor = "red";
        document.getElementById("laske3").style.backgroundColor = "red";

        document.getElementById("ra7").disabled = true;
        document.getElementById("ra8").disabled = true;
        document.getElementById("ra9").disabled = true;
    }
}

teht3();

/****************************** */

function teht4(){
    
    let num1 = random(4, 30);
    let num2 = random(6, 30);

    let paikka = random(10, 12);
    chosen4 = paikka.toString();

    document.getElementById("teht4").innerHTML = num1 + " + " + num2;

    let ran1 = num1 + num2 - random(1, 10);
    let ran2 = num1 + num2 + random(1, 10);
    let ran3 = num1 + num2 - random(1, 10);
    let oike = num1 + num2;

    document.getElementById("10").innerHTML = ran1;
    document.getElementById("11").innerHTML = ran2;
    document.getElementById("12").innerHTML = ran3;

    document.getElementById(chosen4).innerHTML = oike;
    
    document.getElementById("ra10").value = ran1;
    document.getElementById("ra11").value = ran2;
    document.getElementById("ra12").value = ran3;

    vas3 = "ra"+ chosen4;   

    document.getElementById(vas3).value = oike;
    
    
}

function tark4(){

    
    if(document.getElementById(vas3).checked){
        document.getElementById("lasku4").style.backgroundColor = "green";
        document.getElementById("laske4").style.backgroundColor = "green";
        oikein++;

        document.getElementById("ra10").disabled = true;
        document.getElementById("ra11").disabled = true;
        document.getElementById("ra12").disabled = true;

        document.getElementById("tulos").innerHTML = oikein + "/5";

    }
    else
    {
        document.getElementById("lasku4").style.backgroundColor = "red";
        document.getElementById("laske4").style.backgroundColor = "red";

        document.getElementById("ra10").disabled = true;
        document.getElementById("ra11").disabled = true;
        document.getElementById("ra12").disabled = true;
    }
}

teht4();


/****************************** */

function teht5(){
    
    let num1 = random(6, 33);
    let num2 = random(2, 38);

    let paikka = random(13, 15);
    chosen5 = paikka.toString();

    document.getElementById("teht5").innerHTML = num1 + " + " + num2;

    let ran1 = num1 + num2 - random(3, 14);
    let ran2 = num1 + num2 + random(6, 12);
    let ran3 = num1 + num2 - random(3, 22);
    let oike = num1 + num2;

    document.getElementById("13").innerHTML = ran1;
    document.getElementById("14").innerHTML = ran2;
    document.getElementById("15").innerHTML = ran3;

    document.getElementById(chosen5).innerHTML = oike;
    
    document.getElementById("ra13").value = ran1;
    document.getElementById("ra14").value = ran2;
    document.getElementById("ra15").value = ran3;

    vas4 = "ra"+ chosen5;   

    document.getElementById(vas4).value = oike;
    
    
}

function tark5(){

    
    if(document.getElementById(vas4).checked){
        document.getElementById("lasku5").style.backgroundColor = "green";
        document.getElementById("laske5").style.backgroundColor = "green";
        oikein++;

        document.getElementById("ra13").disabled = true;
        document.getElementById("ra14").disabled = true;
        document.getElementById("ra15").disabled = true;

        document.getElementById("tulos").innerHTML = oikein + "/5";

    }
    else
    {
        document.getElementById("lasku5").style.backgroundColor = "red";
        document.getElementById("laske5").style.backgroundColor = "red";

        document.getElementById("ra13").disabled = true;
        document.getElementById("ra14").disabled = true;
        document.getElementById("ra15").disabled = true;
    }
}

teht5();

function reset() {
    teht1();
    teht2();
    teht3();
    teht4();
    teht5();

    document.getElementById("lasku1").style.backgroundColor = "white";
    document.getElementById("laske1").style.backgroundColor = "white";

    document.getElementById("ra1").disabled = false;
    document.getElementById("ra2").disabled = false;
    document.getElementById("ra3").disabled = false;
    /************* */
    document.getElementById("lasku2").style.backgroundColor = "white";
    document.getElementById("laske2").style.backgroundColor = "white";

    document.getElementById("ra4").disabled = false;
    document.getElementById("ra5").disabled = false;
    document.getElementById("ra6").disabled = false;
    /************* */
    document.getElementById("lasku3").style.backgroundColor = "white";
    document.getElementById("laske3").style.backgroundColor = "white";

    document.getElementById("ra7").disabled = false;
    document.getElementById("ra8").disabled = false;
    document.getElementById("ra9").disabled = false;
    /************* */
    document.getElementById("lasku4").style.backgroundColor = "white";
    document.getElementById("laske4").style.backgroundColor = "white";

    document.getElementById("ra10").disabled = false;
    document.getElementById("ra11").disabled = false;
    document.getElementById("ra12").disabled = false;
    /************* */
    document.getElementById("lasku5").style.backgroundColor = "white";
    document.getElementById("laske5").style.backgroundColor = "white";

    document.getElementById("ra13").disabled = false;
    document.getElementById("ra14").disabled = false;
    document.getElementById("ra15").disabled = false;

    oikein = 0;
    document.getElementById("tulos").innerHTML = oikein + "/5";
    }