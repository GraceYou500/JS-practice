'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

// Selecting elements
console.log(document.documentElement); // all the HTML element here
console.log(document.head); // the head - not visible in webpage
console.log(document.body); // the body - whole visible area in webpage

const header = document.querySelector('.header'); // use more often
const allSections = document.querySelectorAll('.section'); // use more often  // will not change when DOM change, the allSections variable will stay same as when it was created. It didn't update itself. (NodeList)
console.log(allSections);

console.log(document.getElementById('section--1'));
const allButtons = document.getElementsByTagName('button'); // Can change with DOM change automatively. (HTML collection)
console.log(allButtons);

console.log(document.getElementsByClassName('btn')); // also create a life HTML collection.

// Creating and inserting elements

// .insertAdjacentHTML(); // a quick and easy way to create elements

const message = document.createElement('div'); // it is a life element living in the DOM, cannot be in multipal place at the same time.
console.log(message);
message.classList.add('cookie-message');

// message.textContent =
//   'We use cookies for improved functionality and analytics.';

message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

header.prepend(message);
// header.append(message); // move the message element from top to bottom. can only at one place at the same time.

// header.append(message.cloneNode(true)); // true means all the child elements will also be copied.

// Two more method
// header.before(message); // add the element as simbling, before the header element
// header.after(message);// same

// Delete elements
document.querySelector('.btn--close-cookie');
addEventListener('click', function () {
  message.remove(); // recent way to remove element.
  // message.parentElement.removeChild(message); // the way to remove element before
});

// Reference lecture - classes, attributes, styles

// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.backgroundColor); // only work for the style we set manually as inline style
console.log(getComputedStyle(message).height); // real style that show in webpage

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';
console.log(getComputedStyle(message).height);

document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.src);
console.log(logo.alt);
console.log(logo.className);

logo.alt = 'Beautiful mini logo';

// Non-standered => not work
// console.log(logo.designer);
console.log(logo.getAttribute('designer')); // Can get non-standard attributes
logo.setAttribute('company', 'Bankist'); // Create new attrobute: company = "Bankist"

console.log(logo.getAttribute('src')); // can get relative src as I write in HTML

const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));

const linkLocal = document.querySelector('.nav__link--btn');
console.log(linkLocal.href); // get the absolute href
console.log(linkLocal.getAttribute('href')); // can get relative href as I write in HTML

// Date attributes - attributes that start with word data.
console.log(logo.dataset.versionNumber); // data attributes always store in dataset object.

// Classes
logo.classList.add('c', 'j');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');

// Don't use this - will override all existing classes, only put this own element
logo.className = 'jonas';
