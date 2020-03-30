/*  --------------------
   |   GALLERY PAGE    |
   --------------------
*/

// ====== HEAD SHOTS ======

// buttons from DOM
const backBtn1 = document.querySelector('.overlay1 button');
const backBtn2 = document.querySelector('.overlay2 button');
const backBtn3 = document.querySelector('.overlay3 button');
const backBtn4 = document.querySelector('.overlay4 button');
const backBtn5 = document.querySelector('.overlay5 button');
const backBtn6 = document.querySelector('.overlay6 button');
const backBtn7 = document.querySelector('.overlay7 button');

console.log('button: ', backBtn2);

// images from DOM
const image1 = document.querySelector('.image-grid img:nth-of-type(1)');
const image2 = document.querySelector('.image-grid img:nth-of-type(2)');
const image3 = document.querySelector('.col2 img:first-of-type');
const image4 = document.querySelector('.col2 img:last-of-type');
const image5 = document.querySelector('.col3 img:first-of-type');
const image6 = document.querySelector('.col3 img:last-of-type');
const image7 = document.querySelector('.col4 img:first-of-type');

// overlay element
const overlay = document.querySelector('.art-overlay');
 
// individual sections from DOM
const image1Sect = document.querySelector('.overlay1');
const image2Sect = document.querySelector('.overlay2');
const image3Sect = document.querySelector('.overlay3');
const image4Sect = document.querySelector('.overlay4');
const image5Sect = document.querySelector('.overlay5');
const image6Sect = document.querySelector('.overlay6');
const image7Sect = document.querySelector('.overlay7');


// event listeners to open the overlay when a specific image is clicked
image1.addEventListener('click', ()=> {
    overlay.removeAttribute('hidden');
    image1Sect.removeAttribute('hidden');
});
image2.addEventListener('click', ()=> {
    overlay.removeAttribute('hidden');
    image2Sect.removeAttribute('hidden');
});
image3.addEventListener('click', ()=> {
    overlay.removeAttribute('hidden');
    image3Sect.removeAttribute('hidden');
});
image4.addEventListener('click', ()=> {
    overlay.removeAttribute('hidden');
    image4Sect.removeAttribute('hidden');
});
image5.addEventListener('click', ()=> {
    overlay.removeAttribute('hidden');
    image5Sect.removeAttribute('hidden');
});
image6.addEventListener('click', ()=> {
    overlay.removeAttribute('hidden');
    image6Sect.removeAttribute('hidden');
});
image7.addEventListener('click', ()=> {
    overlay.removeAttribute('hidden');
    image7Sect.removeAttribute('hidden');
});


// eventlisteners for the various back buttons
backBtn1.addEventListener('click', ()=> {
    overlay.setAttribute('hidden',"");
    image1Sect.setAttribute('hidden',"");
});
backBtn2.addEventListener('click', ()=> {
    overlay.setAttribute('hidden',"");
    image2Sect.setAttribute('hidden',"");
});
backBtn3.addEventListener('click', ()=> {
    overlay.setAttribute('hidden',"");
    image3Sect.setAttribute('hidden',"");
});
backBtn4.addEventListener('click', ()=> {
    overlay.setAttribute('hidden',"");
    image4Sect.setAttribute('hidden',"");
});
backBtn5.addEventListener('click', ()=> {
    overlay.setAttribute('hidden',"");
    image5Sect.setAttribute('hidden',"");
});
backBtn6.addEventListener('click', ()=> {
    overlay.setAttribute('hidden',"");
    image6Sect.setAttribute('hidden',"");
});
backBtn7.addEventListener('click', ()=> {
    overlay.setAttribute('hidden',"");
    image7Sect.setAttribute('hidden',"");
});


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
