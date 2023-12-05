const apiUrl = 'https://www.swapi.tech/api/'

const getHero = async (id) => {
  const resp = await fetch(apiUrl + 'people/' + id);
  const hero = await resp.json();
  console.log(hero.result.properties);

  if (hero.message !== "ok") {
    const fragment = document.createElement("h1");
    fragment.textContent = 'error ' + hero.message;
    return fragment
  }

  const { name, gender, homeworld } = hero.result.properties
  const fragment = document.createDocumentFragment();

  const head = document.createElement("h1");
  head.textContent = `${name}/${gender}`
  fragment.appendChild(head);

  const home = document.createElement("a");
  home.setAttribute('href', '/planet.html?id=' + id)
  home.textContent = 'homeworld'
  fragment.appendChild(home);

  return fragment
}