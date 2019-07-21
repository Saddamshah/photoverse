const nav = document.querySelector('nav');
const mobileNav = document.querySelector('.mobile-nav');
const menuBtn = document.querySelector('.menu-btn');
const container = document.querySelector('.container');
const navLinks = document.querySelectorAll('.mobile-nav a');
const galleryImages = document.querySelectorAll('.gallery img');
const activeImage = document.querySelector('.active-image img');

//Navigation Scrolling Animation

window.addEventListener('scroll', function () {
    if(this.pageYOffset > 100) {
        nav.classList.add('scrolled')
    } else {
        nav.classList.remove('scrolled')
    }
})

//Menu Btn Animation

container.addEventListener('click', function () {
    this.classList.toggle('active')

    if(this.classList.contains('active')) {
        mobileNav.classList.add('active')
    } else {
        mobileNav.classList.remove('active')
    }
})

navLinks.forEach(link => (link.addEventListener('click', function () {
    container.classList.remove('active');
    mobileNav.classList.remove('active');
})))

// Gallery image
galleryImages.forEach(image => (image.addEventListener('click', updateActiveImage)))

function updateActiveImage(e) {
    activeImage.src = e.target.src
}