const div1 = document.createElement("div");
div1.classList = "red";
const div2 = document.createElement("div");
div2.classList = "green";
div2.textContent = "Я вложен";
const div3 = document.createElement("div");
div3.classList = "blue";

div1.prepend(div2);
div2.prepend(div3);

console.log(div1);

// elem.insertAdjacentText('afterbegin', "<li>Привет мир!</li>")
