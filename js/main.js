$(document).ready(function() {
    $('.slider').slick({
        arrows: false,
        dots: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 10000,
        asNavFor: '.slider-less'

    });

    $('.slider-less').slick({
        arrows: false,
        dots: false,
        adaptiveHeight: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        asNavFor: '.slider'
    })
})


/* Navbar */
const headerContainer = document.querySelector('header .container');

const menuBtn = document.querySelector('.menu').addEventListener('click', () => {
    headerContainer.classList.toggle('active');

    checkClass();

})


function checkClass() {
    const  editImg = document.querySelector('.logo img');
    const  editImgBurger = document.querySelector('.menu img');

    if (headerContainer.classList.contains('active')) {
        editImg.setAttribute('src', 'assets/img/logo-menu.png');
        editImgBurger.setAttribute('src', 'assets/img/close.png');
    }
    else  {
        editImg.setAttribute('src', 'assets/img/logo.png');
        editImgBurger.setAttribute('src', 'assets/img/menu.png');
    }
}
















