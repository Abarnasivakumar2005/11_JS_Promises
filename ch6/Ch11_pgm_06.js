const catsAPI = 'https://api.thecatapi.com/v1/breeds';

const fetchCatNames = async () => {
  try {
    const response = await fetch(catsAPI);
    const cats = await response.json();
    
    const catNames = cats.map(cat => cat.name);
    console.log(catNames);
  } catch (err) {
    console.error(err);
  }
}

fetchCatNames();
