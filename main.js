const body = document.querySelector ("body");
const button =document.querySelector("button");
const colors = ["black", "yellow", "green", "#328da8", "#a8a032", "#78405b", "#6ce0d9"];

button.addEventListener ("click", changeBackground);

let sıra = 0;

function changeBackground() {
   
    if (sıra == 7) sıra=0;
    const secilenrenk = colors[sıra];
    sıra++;
    body.style.backgroundColor = secilenrenk;

}