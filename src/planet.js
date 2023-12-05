const apiUrl = 'https://www.swapi.tech/api/'

const getPlanet = async (id) => {
  const resp = await fetch(apiUrl + 'planets/' + id);
  const hero = await resp.json();
  console.log(hero.result.properties);

  if (hero.message !== "ok") {
    const fragment = document.createElement("h1");
    fragment.textContent = 'error ' + hero.message;
    return fragment
  }

  const { name, population, gravity } = hero.result.properties
  const fragment = document.createDocumentFragment();

  const head = document.createElement("h1");
  head.textContent = name
  fragment.appendChild(head);

  const pop = document.createElement("p");
  pop.textContent = `Population: ${population}`
  fragment.appendChild(pop);

  const grav = document.createElement("p");
  grav.textContent = `Gravity: ${gravity}`
  fragment.appendChild(grav);

  return fragment
}