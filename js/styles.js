var burger = document.querySelector('.header__burger')
var mobile = document.querySelector('.mobile__screen')

burger.addEventListener('click' , function() {
    burger.classList.toggle('crossed')
    mobile.classList.toggle('visible')
})