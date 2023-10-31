// // Write your code here!


// const element = document.createElement("div");
// document.body.append(element);

// const ul = document.createElement("ul");
// for (let i = 0; i <=2; i++) {
//     const li = document.createElement("li");
//     li.textContent = (i + 1).toString();
//     ul.append(li);
// }

// element.append(ul);

// const element2 = document.getElementById("main");
// element2.style.height = "600px";
// element2.style.backgroundColor = "#27647B";
// element2.style.fontSize = "24px";
// element2.style.marginLeft = "30px";
// element2.style.lineHeight = 2;
// element2.className = "pet-listing dog";
// element2.classList.remove("dog");
// element2.classList.add("cat", "sale")

const main = document.getElementById('main')
function deleteMain(element) {
    element.remove()
}
deleteMain(main);


const newHeader = document.createElement('h1')
newHeader.id = 'victory';
newHeader.innerHTML = "Becca is the champion";


// const parentElement = document.querySelector("body");
// const mainElement = document.getElementById("main");
// parentElement.removeChild(mainElement);
// const newHeader = document.createElement("h1");
// newHeader.id = "victory";
// newHeader.innerHTML = "Becca is the champion";