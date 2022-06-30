'use strict';
const whereAmI = function (lat, lng) {
  fetch(
    `https://geocode.xyz/${lat},${lng}?geoit=json&auth=820521518415195927368x92094`
  )
    .then(response => {
      if (!response.ok)
        throw new Error(
          `Cannot request more than 3 times per second ${response.status}`
        );
      return response.json();
    })
    .then(data => {
      console.log(`You are in ${data.city}, ${data.country}`);
      return fetch(`https://restcountries.com/v2/name/${data.country}`);
    })
    .then(response => {
      if (!response.ok) throw new Error(`Country not found ${response.status}`);
      return response.json();
    })
    .then(data => {
      console.log(data);
      renderCountry(data[0]);
    })
    .catch(err => console.error(`${err} 💥💥💥`));
};
whereAmI(' -33.933', ' 18.474');
whereAmI(19.037, 72.873);
whereAmI(52.508, 13.381);
whereAmI(' -33.933', ' 18.474');
