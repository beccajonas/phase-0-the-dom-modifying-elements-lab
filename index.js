// Write your code here!
const parentElement = document.querySelector("body");
const mainElement = document.getElementById("main");
parentElement.removeChild(mainElement);
const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerHTML = "Becca is the champion";
