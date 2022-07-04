'use strict';

// Challenge 1

// const whereAmI = function (lat, lng) {
//   fetch(
//     `https://geocode.xyz/${lat},${lng}?geoit=json&auth=820521518415195927368x92094`
//   )
//     .then(response => {
//       if (!response.ok)
//         throw new Error(
//           `Cannot request more than 3 times per second ${response.status}`
//         );
//       return response.json();
//     })
//     .then(data => {
//       console.log(`You are in ${data.city}, ${data.country}`);
//       return fetch(`https://restcountries.com/v2/name/${data.country}`);
//     })
//     .then(response => {
//       if (!response.ok) throw new Error(`Country not found ${response.status}`);
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//       renderCountry(data[0]);
//     })
//     .catch(err => console.error(`${err} 💥💥💥`));
// };
// whereAmI(' -33.933', ' 18.474');
// whereAmI(19.037, 72.873);
// whereAmI(52.508, 13.381);
// whereAmI(' -33.933', ' 18.474');

// Challenge 2

// const wait = function (second) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, second * 1000);
//   });
// };

// const imgContainer = document.querySelector('.images');

// const createImage = function (imgPath) {
//   return new Promise(function (resolove, reject) {
//     const imgHtml = document.createElement('img');

//     imgHtml.addEventListener('load', function () {
//       console.log(`imageLoaded: ${imgPath}`);
//       imgHtml.classList.add('images');
//       imgContainer.appendChild(imgHtml);

//       resolove(imgHtml);
//     });

//     imgHtml.addEventListener('error', function () {
//       reject(new Error('Image not found'));
//     });

//     imgHtml.src = imgPath;
//   });
// };

// let currentImage;

// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImage = img;
//     console.log('Image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImage.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })

//   .then(img => {
//     currentImage = img;
//     console.log('Image 2 loaded');
//     return wait(2);
//   })
//   .then(() => (currentImage.style.display = 'none'))
//   .catch(e => console.error(e));
