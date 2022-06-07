const elem = document.createElement('ul')
elem.classList.add("list")
elem.insertAdjacentText('afterbegin', "<li>Привет мир!</li>")
console.log(elem);