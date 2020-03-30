// hamburger button
const closeBurger = document.querySelector('.burger-close');
const openBurger = document.querySelector('.burger-open');

// navigation
const navigation = document.querySelector('nav');

// social media
const socials = document.querySelector('footer');

// closes the nav
closeBurger.addEventListener('click', ()=> {
    navigation.style.display = "none";
    socials.style.display = "none";
    navigation.setAttribute('hidden',"");

});

// opens the nav
openBurger.addEventListener('click', ()=> {
    navigation.style.display = "flex";
    socials.style.display = "flex";
    navigation.removeAttribute('hidden');
});
