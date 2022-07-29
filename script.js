let menuBtn = document.querySelector('.menu-btn')
let navlinks = document.querySelector('.navlinks')
menuBtn.addEventListener('click', () => {
   navlinks.classList.toggle('mobile-menu')
})