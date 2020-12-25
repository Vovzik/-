const body = document.querySelector('body');
const home_items = document.querySelectorAll('.home_items');
const home_itemsText = document.querySelectorAll('.home_items-text');
const svg = document.querySelectorAll('svg');




if (body.clientWidth <= 900) {
  body.classList.add('touch');

} else {
  body.classList.add('mouse')
}




//accardion
const accardion_itemsCheckFlex = document.getElementsByClassName('accardion_items-checkFlex');
const accardion_checkblockClick = document.getElementsByClassName('accardion_check-blockClick');
const accardion_itemsflex = document.getElementsByClassName('accardion_items-flex');
const accardion_colorClick = document.getElementsByClassName('accardion_colorClick');




for (let i = 0; i < accardion_itemsCheckFlex.length; i++) {
  accardion_itemsCheckFlex[i].addEventListener('click', accardion);

  function accardion() {

    accardion_itemsflex[i].classList.toggle('opend');

    accardion_checkblockClick[i].classList.toggle('opend');

    accardion_colorClick[i].classList.toggle('opend');
  };
};




//accardion_2
const about_itemsCheckFlex = document.getElementsByClassName('about_items-checkFlex');
const about_checkblockClick = document.getElementsByClassName('about_check-blockClick');
const about_itemsflexBox = document.getElementsByClassName('about_items-flexBox');
const about_colorClick = document.getElementsByClassName('about_colorClick');



for (let i = 0; i < about_itemsCheckFlex.length; i++) {
  about_itemsCheckFlex[i].addEventListener('click', about);

  function about() {

    about_itemsflexBox[i].classList.toggle('opend');

    about_checkblockClick[i].classList.toggle('opend');

    about_colorClick[i].classList.toggle('opend');
  };
};


//burger menu

const accardion_burger = document.getElementsByClassName('accardion_burger');
const accardion_burgerPolosa1 = document.getElementsByClassName('accardion_burger-polosa1');
const accardion_burgerPolosa = document.getElementsByClassName('accardion_burger-polosa');
const accardion_burgerPolosa3 = document.getElementsByClassName('accardion_burger-polosa3');
const accardion_menu = document.getElementsByClassName('accardion_menu');


for (let i = 0; i < accardion_burger.length; i++) {
  accardion_burger[i].addEventListener('click', burger);

  function burger() {
    accardion_menu[i].classList.toggle('opend');
    accardion_burgerPolosa1[i].classList.toggle('opend');
    accardion_burgerPolosa[i].classList.toggle('opend');
    accardion_burgerPolosa3[i].classList.toggle('opend');
  }
}



//кастомный select

const about_checkSpanSelect = document.getElementsByClassName('about_check-spanSelect');
const about_checkSpanOptionse = document.getElementsByClassName('about_check-spanOptionse');
const option = document.getElementsByClassName('option');


for (let i = 0; i < about_checkSpanSelect.length; i++) {
  about_checkSpanSelect[i].addEventListener('click', selected);

  function selected() {
    about_checkSpanOptionse[i].classList.toggle('opend');
  }
}

for (let i = 0; i < option.length; i++) {
  option[i].addEventListener('click', selects);

  function selects() {
    about_checkSpanSelect[0].innerHTML = option[i].querySelector('label').innerHTML;
  }
}

