import './styles.css';

console.log("Successful setup?");

function component() {
    const element = document.createElement("div");
    element.textContent = "Hello, world!";
    element.classList.add("hello");
    return element;
}

document.body.appendChild(component());