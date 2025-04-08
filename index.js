// Template ID: template_gvhvc8p
// Service ID: service_n4ii1op
// API Keys- Public ID: qtEPA0tv66HXKZZVW

let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1/20;

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;
    console.log(x, y);

    for (let i = 0; i < shapes.length; i++) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`;
    }
}

function contact(event) {
    event.preventDefault();

    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    loading.classList += " modal__overlay--visible";

    emailjs
        .sendForm(
            'service_n4ii1op', 
            'template_gvhvc8p', 
            event.target, 
            'qtEPA0tv66HXKZZVW'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
            console.log('it worked')
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert("The email service is temporarily unavailable. Please contact me directly at adrianit248@gmail.com");
        })
}

function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    else {
        isModalOpen = true;
        // toggle modal
        document.body.classList += " modal--open";
    }
}

function toggleContrast() {
    contrastToggle = !contrastToggle
    if (contrastToggle) {
        document.body.classList += " dark-theme"; 
        console.log('its dark');
    }
    else {
        document.body.classList.remove("dark-theme");
        console.log('its light');
    }
}