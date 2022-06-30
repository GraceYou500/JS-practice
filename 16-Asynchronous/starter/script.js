'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row">
        <span>👫</span>${(+data.population / 1000000).toFixed(1)}M people
      </p>
      <p class="country__row">
        <span>🗣️</span>${data.languages[0].name}
      </p>
      <p class="country__row">
        <span>💰</span>${data.currencies[0].name}
      </p>
    </div>
  </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
};

///////////////////////////////////////

// // AJAX call
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     // as soon as the data arravied, the callback function will be called
//     console.log(this.responseText);

//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
//   <article class="country">
//     <img class="country__img" src="${data.flag}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row">
//         <span>👫</span>${(+data.population / 1000000).toFixed(1)}M people
//       </p>
//       <p class="country__row">
//         <span>🗣️</span>${data.languages[0].name}
//       </p>
//       <p class="country__row">
//         <span>💰</span>${data.currencies[0].name}
//       </p>
//     </div>
//   </article>`;

//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('Portugal');
// getCountryData('usa');
// getCountryData('china');

//////////////////////////////////////////////////////////////////////////
// Callback Hell

// const getCountryAndNeighbour = function (country) {
//   // AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     // as soon as the data arravied, the callback function will be called
//     // console.log(this.responseText);

//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // Render country 1
//     renderCountry(data);

//     // Get Neibour country 2
//     const [neighbour] = data.borders;

//     if (!neighbour) return;

//     // AJAX call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);

//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// // getCountryAndNeighbour('Portugal');
// // getCountryAndNeighbour('usa');
// getCountryAndNeighbour('china');

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 second passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//     }, 1000);
//   }, 1000);
// }, 1000);

///////////////////////////////////////////////////////////////////////

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v2/name/${country}`);
// request.send();

// Fetch API
const request = fetch('https://restcountries.com/v2/name/china');
console.log(request);

// Consume promise
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`) // calling fetch function like this, will immideately return a promise. as soon as we start the request.  pending -> settle
//     .then(function (
//       response // then method can get response of the fetch method (handle the promise). response here is the resulted value.
//     ) {
//       return response.json(); // read response, it also return a promise.
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]); // take the data to render to the DOM.
//     });
// };

const getJSON = function (url, errorMsg = 'Sth went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`); // Promises immidiately reject

    return response.json();
  });
};

// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//       console.log(response);

//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`); // Promises immidiately reject

//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);

//       const neighbour = data[0].borders[0];

//       if (!neighbour) return;

//       // Country 2
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(response =>
//       // then for fulfilled promises
//       response.json()
//     )
//     .then(data => {
//       console.log(data);
//       renderCountry(data, 'neighbour');
//     })
//     .catch(err => {
//       // catch when rejection promise
//       console.log(`${err} 💥💥💥`);
//       renderError(`Something went wrong💥💥💥 ${err.message}.`);
//     })
//     .finally(() => (countriesContainer.style.opacity = 1));
// };

///////////////////////////////////////////////////////////////////////////////
// handle error in Promises ( lose internet connection)

const getCountryData = function (country) {
  // Country 1

  getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found ')
    .then(data => {
      console.log('here0');
      renderCountry(data[0]);

      console.log('here1');
      console.log('here1.5', data[0].borders);
      const neighbour = data[0].borders;
      console.log('here5', data);

      console.log('here4', neighbour);

      if (!Array.isArray(neighbour) || !neighbour.length) {
        console.log('hvgfeiswhfcv');
        const er = new Error('No neighbour found!');
        console.log('here2', er);
        throw new Error('No neighbour found!'); // will immi reject the promise, until found catch handler.
      }

      // Country 2
      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbour[0]}`,
        'Country not found '
      );
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      // catch when rejection promise
      // console.error(err);
      renderError(`Something went wrong💥💥💥 ${err.message}.`);
    })
    .finally(() => (countriesContainer.style.opacity = 1));
};

btn.addEventListener('click', function () {
  getCountryData('portugal');
});

getCountryData('australia');
