let p = document.querySelector("p");
document.querySelector("button").addEventListener("click", buttonClick);

function buttonClick() {
    p.classList.toggle("colored");
}

function buttonClick2U() {
    p.style.backgroundColor = input.value;
}

let items = document.querySelectorAll("li");

for (const i in items) {
    if (i.textContent.includes("important")) {
        i.classList.add("important");
    }
}
