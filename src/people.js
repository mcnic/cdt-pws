window.onload = async function (e) {
  const main = document.querySelector('#main')
  const people = await getPeople()
  main.appendChild(people);
}