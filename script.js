'use strict';

const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const btnCloseModal = document.querySelector(`.close-modal`);
//querySelector matches only the first element even if there are multiple same class
const btnsOpenModal = document.querySelectorAll(`.show-modal`);
console.log(btnsOpenModal);

for(let i = 0; i < btnsOpenModal.length; i++)
  console.log(btnsOpenModal[i].textContent);
