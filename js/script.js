// toggle class active
const navbarnav = document.querySelector('.navbar-nav');

//Ketika hamburger menu di klik
document.querySelector('#hamburger-menu'). onclick = () => {
navbarnav.classList.toggle('active');
};

//Klik di luar sidebar untuk menghilangkan nav
const hamburger = document. querySelector('#hamburger-menu');

document. addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarnav.contains(e.target)) {

        navbarnav.classList.remove('active');

    }
    let navbarvan = document.querySelector('.navbar-van');
    document.querySelector('#search'). onclick = () => {
        navbarvan.classList.toggle('active');
        
    }
    const navbarvin = Document.querySelector('.navbarvin')
    document.querySelector('#shopping-cart'). onclick = () => {
        navbarvin.classList.toggle('active');
    }
});
const productButton = document.querySelector(".productButton");
const productButton1 = document.querySelector(".productButton1");
const productButton2 = document.querySelector(".productButton2");
const productButton3 = document.querySelector(".productButton3");
const productButton4 = document.querySelector(".productButton4");
const productButton5 = document.querySelector(".productButton5");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});
productButton1.addEventListener("click", () => {
  payment.style.display = "flex";
});
productButton2.addEventListener("click", () => {
  payment.style.display = "flex";
});
productButton3.addEventListener("click", () => {
  payment.style.display = "flex";
});
productButton4.addEventListener("click", () => {
  payment.style.display = "flex";
});
productButton5.addEventListener("click", () => {
  payment.style.display = "flex";
});
close.addEventListener("click", () => {
  payment.style.display = "none";
});
