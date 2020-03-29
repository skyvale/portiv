
// form and form element(s) from the DOM
const form = document.querySelector('.contact-page form');
const emailInput = document.querySelector('#email');

// submit button from DOM
const submitBtn = document.querySelector('.contact-page form button');

// html to be inserted on successful submit
const htmlTemplate = `
<form>
    <h2>Thank you for your interest in commissioning me!</h2>
    <p>I will get back to you within 24
    hours regarding your commission request.</p>
    <img src="art/etc/mascot_headshot.png" alt="happy chibi image of skylacuna mascot" style="width:400px;height:400px;margin:4rem auto 0;">
</form>
`;

// validate email
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// change the form on successful submit
submitBtn.addEventListener('click', (e)=> {
    e.preventDefault();

    const email = emailInput.value;
    if (validateEmail(email)) {
        form.innerHTML = htmlTemplate;
    } else {
        alert('Please provide a valid email address.');
    }

});