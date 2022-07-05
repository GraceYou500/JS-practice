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

const wait = function (second) {
  return new Promise(function (resolve) {
    setTimeout(resolve, second * 1000);
  });
};

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolove, reject) {
    const imgHtml = document.createElement('img');

    imgHtml.addEventListener('load', function () {
      // console.log(`imageLoaded: ${imgPath}`);
      imgHtml.classList.add('images');
      imgContainer.appendChild(imgHtml);

      resolove(imgHtml);
    });

    imgHtml.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });

    imgHtml.src = imgPath;
  });
};

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

// Challenge 3
// PART 1
// const loadNPause = async function (imgPath1, imgPath2) {
//   try {
//     const img1 = await createImage(imgPath1);
//     console.log('Image1 loaded', img1);
//     await wait(2);
//     img1.style.display = 'none';
//     const img2 = await createImage(imgPath2);
//     console.log(img2);
//     await wait(2);
//     img2.style.display = 'none';
//   } catch (err) {
//     err => console.error(err);
//   }
// };

// loadNPause('img/img-1.jpg', 'img/img-2.jpg');

// PART 2
const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    console.log('image3', imgs);

    const imgParallel = await Promise.all(imgs);
    console.log(imgParallel);

    // imgParallel.map(imgel => imgel.classList.add('parallel'));
    imgParallel.forEach(imgEl => imgEl.classList.add('parallel'));
  } catch (err) {
    console.log(err);
  }
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
