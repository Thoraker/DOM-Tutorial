let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
// your code here
let selector = document.getElementById("mySelect");

window.onload = () => {
    for (let i in countries) {
    let aux = document.createElement("option");
    aux.text = countries[i];
    selector.appendChild(aux);
};};

selector.addEventListener("change", x =>
    alert(selector.value));