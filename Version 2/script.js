const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const num = document.querySelector(".num");

const maxNumber = 10;
let value = 1;

plus.addEventListener("click",()=>{
    if (value < maxNumber) {
        value++;
        num.innerText = value;
    }
});

minus.addEventListener("click",()=>{
    if(value > 1) {
        value--;
        num.innerText = value;
    }
});

let iconCart = document.querySelector('.cart');

iconCart.addEventListener('click', () => {
    classList.toggle('activeTabCart');
})