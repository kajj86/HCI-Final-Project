/* QUANTITY BUTTONS */

const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const num = document.querySelector(".num");

const maxNumber = 10;
let value = 1;

if(plus && minus && num){

    plus.addEventListener("click", () => {
        if (value < maxNumber) {
            value++;
            num.innerText = value;
        }
    });

    minus.addEventListener("click", () => {
        if (value > 1) {
            value--;
            num.innerText = value;
        }
    });

}

/* HERO SLIDER */

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index){

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

if(slides.length > 0){

    setInterval(() => {

        currentSlide++;

        if(currentSlide >= slides.length){
            currentSlide = 0;
        }

        showSlide(currentSlide);

    }, 4000);

}

const iconCart = document.querySelector('.cart');
const closeCart = document.querySelector('.close-cart');

if(iconCart){

    iconCart.addEventListener('click', (e) => {

        e.preventDefault();

        document.body.classList.add('activeTabCart');
    });

}

if(closeCart){

    closeCart.addEventListener('click', () => {

        document.body.classList.remove('activeTabCart');

    });

}

/* ADD TO CART BUTTON */

const addCartBtn = document.querySelector('.add-cart-btn');

if(addCartBtn){

    addCartBtn.addEventListener('click', () => {

        document.body.classList.add('activeTabCart');

    });

}