
/*  -------------
   |  HOME PAGE |
   -------------
*/

// =====================================================

// carousel and images
const carouselContainer = document.querySelector('.carousel-container');
const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");

// buttons
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");

// counter
let counter = 1;
const size = carouselImages[0].clientWidth;
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'; // start on the first pic

// button event listeners
nextBtn.addEventListener('click', ()=> {
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'; // moves image
});

prevBtn.addEventListener('click', ()=> {
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', ()=> { // goes off after each animation transition on carouselSlide
    if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = 'none'; // takes off transition so you can translate to original picture
        counter = carouselImages.length - 2; // updates counter (2 dupe images)
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    } else if (carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});


// reloads page after user re-sizes it, since the carousel doesn't resize actively
let resized;
window.addEventListener('resize', ()=> {
    clearTimeout(resized);
    resized = setTimeout(doneResizing, 500);
});

doneResizing = () => {
    window.location.reload();
}

// =====================================================

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

