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
header.before(message); // add the element as simbling, before the header element
// header.after(message);// same

// Delete elements
document.querySelector('.btn--close-cookie');
addEventListener('click', function () {
  message.remove(); // recent way to remove element.
  // message.parentElement.removeChild(message); // the way to remove element before
});
