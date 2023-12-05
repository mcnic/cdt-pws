const apiUrl = 'https://www.swapi.tech/api/'

const getPeople = async () => {
  const resp = await fetch(apiUrl + 'people');
  const people = await resp.json();

  if (people.message !== "ok") {
    const fragment = document.createElement("h1");
    fragment.textContent = 'error ' + people.message;
    return fragment
  }

  const ul = document.createElement("ul");

  for (el of people.results) {
    const li = document.createElement("li");
    li.appendChild(Hero(el))
    ul.appendChild(li)
  }

  return ul
}

const Hero = (val) => {
  const { uid, name } = val || {}
  const hero = document.createElement("a");
  hero.className = 'hero'
  hero.setAttribute('id', uid)
  hero.setAttribute('href', 'hero.html?id=' + uid)
  hero.textContent = name
  return hero
}
