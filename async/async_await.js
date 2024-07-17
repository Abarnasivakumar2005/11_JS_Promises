// Square function example
const square = async function (n) {
  return n * n;
}

(async () => {
  const value = await square(2);
  console.log(value); // 4
})();

// Fetching API data

const url = 'https://restcountries.com/v2/all';

// Using promise method
fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => console.error(error));

// Using async and await
const fetchData = async () => {
  try {
    const response = await fetch(url);
    const countries = await response.json();
    console.log(countries);
  } catch (err) {
    console.error(err);
  }
}

console.log('===== async and await');
fetchData();
