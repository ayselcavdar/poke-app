export function getPokemon({ url }) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => {
        if (res.status === 200) return res.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((err) => console.error("Error: ", err));
  });
}
export async function getPokemons(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        resolve(data);
      })
      .catch((err) => console.error("Error: ", err));
  });
}
