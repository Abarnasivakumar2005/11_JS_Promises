const countriesAPI = 'https://restcountries.com/v2/all';

// Function to fetch and display country details
const fetchCountries = async () => {
  try {
    const response = await fetch(countriesAPI);
    const countries = await response.json();
    
    countries.forEach(country => {
      const { name, capital, languages, population, area } = country;
      console.log(`Country: ${name}`);
      console.log(`Capital: ${capital}`);
      console.log(`Languages: ${languages.map(lang => lang.name).join(', ')}`);
      console.log(`Population: ${population}`);
      console.log(`Area: ${area}`);
      console.log('------------------------');
    });
  } catch (err) {
    console.error(err);
  }
}

fetchCountries();
