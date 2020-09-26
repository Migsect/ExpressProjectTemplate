
console.log("Hello World");

const elements: HTMLElement[] = [
    document.getElementById("1"),
    document.getElementById("2"),
    document.getElementById("3"),
    document.getElementById("4"),
    document.getElementById("5"),
    document.getElementById("6"),
    document.getElementById("7"),
    document.getElementById("8"),
    document.getElementById("9"),
    document.getElementById("0"),
    document.getElementById("+"),
    document.getElementById("-")
]

const output = document.getElementById("output");

for (let element of elements) {
    element.addEventListener("click", () => {
        const character = element.id;
        output.innerHTML += character;
    });
}