const div1 = document.createElement("div");

const ul = document.createElement("ul");

const li_1 = document.createElement("a");
li_1.href = "https://instagram.com/intocode";
li_1.textContent = "наш инстаграм";

const li_2 = document.createElement("a");
li_2.href = "https://intocode.ru";
li_2.textContent = "Наш сайт";


ul.append(li_1, li_2);
div1.append(ul);

console.log(ul);
