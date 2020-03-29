/*  --------------------
   |  COMMMISSION PAGE |
   --------------------
*/

// variables from DOM
const iconNav = document.querySelector('.commission-container nav ul li:first-of-type');
const bustNav = document.querySelector('.commission-container nav ul li:nth-of-type(2)');
const fullbodyNav = document.querySelector('.commission-container nav ul li:nth-of-type(3)');
const refSheetNav = document.querySelector('.commission-container nav ul li:nth-of-type(4)');
const digiPaintingNav = document.querySelector('.commission-container nav ul li:nth-of-type(5)');
const environmentNav = document.querySelector('.commission-container nav ul li:nth-of-type(6)');
const addOnsNav = document.querySelector('.commission-container nav ul li:nth-of-type(7)');


iconNav.addEventListener('click', ()=> {
    window.scrollTo(0, 200);
});

bustNav.addEventListener('click', ()=> {
    window.scrollTo(0,600);
});

fullbodyNav.addEventListener('click', ()=> {
    window.scrollTo(0,1000);
});

refSheetNav.addEventListener('click', ()=> {
    window.scrollTo(0,1400);
});

digiPaintingNav.addEventListener('click', ()=> {
    window.scrollTo(0,1900);
});

environmentNav.addEventListener('click', ()=> {
    window.scrollTo(0,2300);
});

addOnsNav.addEventListener('click', ()=> {
    window.scrollTo(0,2800);
});