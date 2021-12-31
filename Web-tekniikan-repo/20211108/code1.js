let button = document.querySelector("button");

button.addEventListener("click", buttonClicked);

function buttonClicked(e) {
    e.preventDefault();
    let elem = document.createElement("p");
    elem.textContent = "Uusi elementti";
    document.querySelector("body").appendChild(elem);
}
