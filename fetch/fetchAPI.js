const countriesAPI = 'https://restcountries.com/v2/all';
const catsAPI = 'https://api.thecatapi.com/v1/breeds';

// Fetching and printing country data
fetch(countriesAPI)
  .then(response => response.json())
  .then(countries => {
    console.log(countries);

    // Find the 10 largest countries by area
    const largestCountries = countries
      .sort((a, b) => b.area - a.area)
      .slice(0, 10);
    console.log('10 Largest Countries by Area:');
    largestCountries.forEach(country => {
      console.log(`${country.name} - Area: ${country.area} km²`);
    });

    // Count total number of official languages in the world
    const languageSet = new Set();
    countries.forEach(country => {
      country.languages.forEach(language => {
        languageSet.add(language.name);
      });
    });
    console.log(`Total number of official languages in the world: ${languageSet.size}`);
  })
  .catch(error => console.error(error));

// Fetching and printing cat data
fetch(catsAPI)
  .then(response => response.json())
  .then(cats => {
    const totalWeight = cats.reduce((sum, cat) => {
      const weightRange = cat.weight.metric.split(' - ').map(Number);
      const averageWeight = (weightRange[0] + weightRange[1]) / 2;
      return sum + averageWeight;
    }, 0);

    const averageWeight = totalWeight / cats.length;
    console.log(`Average weight of cats in metric units: ${averageWeight.toFixed(2)} kg`);
  })
  .catch(error => console.error(error));
