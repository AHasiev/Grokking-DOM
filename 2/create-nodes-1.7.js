const arr = [
    {
      name: 'Google',
      url: 'https://google.com'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com'
    },
    { 
      name: 'intocode',
      url: 'https://intocode.ru'
    },
  ];

  const ul = document.createElement("ul");

function render(arr) {
  for (let i = 0; i < arr.length; i++) {
    const li = document.createElement("li");  
    const tagA = document.createElement("a")
    ul.append(li);
    li.append(tagA);

    tagA.href = arr[i].url
    tagA.textContent = arr[i].name
    
  }
}
document.body.append(ul);
render(arr)
