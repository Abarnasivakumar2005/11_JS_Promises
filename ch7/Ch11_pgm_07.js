const catsAPI = 'https://api.thecatapi.com/v1/breeds';

const fetchAverageCatWeight = async () => {
  try {
    const response = await fetch(catsAPI);
    const cats = await response.json();

    const totalWeight = cats.reduce((sum, cat) => {
      const weightRange = cat.weight.metric.split(' - ').map(Number);
      const averageWeight = (weightRange[0] + weightRange[1]) / 2;
      return sum + averageWeight;
    }, 0);

    const averageWeight = totalWeight / cats.length;
    console.log(`Average weight of cats in metric units: ${averageWeight.toFixed(2)} kg`);
  } catch (err) {
    console.error(err);
  }
}

fetchAverageCatWeight();


const countriesAPI = 'https://restcountries.com/v2/all';

const fetchLargestCountries = async () => {
  try {
    const response = await fetch(countriesAPI);
    const countries = await response.json();

    const largestCountries = countries
      .sort((a, b) => b.area - a.area)
      .slice(0, 10);

    largestCountries.forEach(country => {
      console.log(`${country.name} - Area: ${country.area} km²`);
    });
  } catch (err) {
    console.error(err);
  }
}

fetchLargestCountries();

const fetchTotalLanguages = async () => {
    try {
      const response = await fetch(countriesAPI);
      const countries = await response.json();
  
      const languageSet = new Set();
      countries.forEach(country => {
        country.languages.forEach(language => {
          languageSet.add(language.name);
        });
      });
  
      console.log(`Total number of official languages in the world: ${languageSet.size}`);
    } catch (err) {
      console.error(err);
    }
  }
  
  fetchTotalLanguages();
  