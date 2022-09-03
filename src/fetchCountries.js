const COUNTRY_URL = 'https://restcountries.com/v3.1/name/';
const fields = 'fields=name,capital,population,flags,languages'

export function fetchCountries(name) {
   return fetch(`${COUNTRY_URL}${name}?${fields}`)
     .then(response => response.json())
   
     .catch(error => console.log(error));
}

