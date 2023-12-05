const apiUrl = 'https://www.swapi.tech/api/'

const getPeople = async () => {
  const resp = await fetch(apiUrl + 'people');
  const people = await resp.json();
  console.log(people);

  if (people.message !== "ok") {
    const fragment = document.createElement("h1");
    fragment.textContent = 'error ' + people.message;
    return fragment
  }

  const ul = document.createElement("ul");

  for (el of people.results) {
    console.log(el);
    const li = document.createElement("li");
    li.appendChild(hero(el))
    ul.appendChild(li)
  }

  return ul
}

const hero = (val) => {
  const { uid, name } = val || {}
  const hero = document.createElement("a");
  hero.className = 'hero'
  hero.setAttribute('id', uid)
  hero.setAttribute('href', 'hero.html?id=' + uid)
  hero.textContent = name
  return hero
}

const getHero = async () => {
  const resp = await fetch(apiUrl + 'people/1');
  const hero = await resp.json();
  console.log(hero);

  if (hero.message !== "ok") {
    const fragment = document.createElement("h1");
    fragment.textContent = 'error ' + hero.message;
    return fragment
  }

  const head = document.createElement("h1");
  head.textContent = 'Hero'
  return head
}