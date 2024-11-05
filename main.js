document.addEventListener("DOMContentLoaded", function() {
    let text = document.querySelector(".continer .enter");
    let spanel = document.querySelector(".send");
    let datatxt = document.querySelector(".data");
    let section = document.querySelector(".Show");

    spanel.onclick = function() {
        section.innerHTML = ''; // Clear previous results

        if (text.value === "") {
            datatxt.innerHTML = "Please Enter Pound";
        } else if (isNaN(text.value)) {
            datatxt.innerHTML = "Please Enter Number Pound";
        } else {
            datatxt.innerHTML = ""; // Clear any previous messages
            let numberpound = parseFloat(text.value);

            let dollar = document.createElement("div");
            let nodeDollar = document.createTextNode(`Number of dollars: ${numberpound * 1.28}`);
            dollar.appendChild(nodeDollar);

            let euro = document.createElement("div");
            let nodeEuro = document.createTextNode(`Number of euros: ${numberpound * 1.18}`);
            euro.appendChild(nodeEuro);

            section.appendChild(dollar);
            section.appendChild(euro);
        }
    };
});