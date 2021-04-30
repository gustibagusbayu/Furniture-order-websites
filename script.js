$(document).ready(function(){
    $('.navbar-nav').on('click', 'a', function(){
        $('.navbar-nav a.active').removeClass('active');
        $(this).addClass('active');
    }) 
}) 

// scroll trigger
gsap.registerPlugin(ScrollTrigger)

// navbar
gsap.from('.navbar-brand, .navbar-toggler', {opacity: 0, duration: 0.6, delay: 0.3, y: 10}) 
gsap.from('.nav-item', {opacity: 0, duration: 0.6, delay: 0.2, y: 30, stagger: 0.2}) 

// hero
gsap.from('.textHero h1', {opacity: 0, duration: 0.6, delay: 0.2, x: -30})
gsap.from('.textHero p', {opacity: 0, duration: 0.6, delay: 0.6, x: -30})
gsap.from('.textHero a', {opacity: 0, duration: 0.6, delay: 0.8, y: -30})
gsap.from('.imageHero img', {opacity: 0, duration: 0.6, delay: 0.5, x: 30})

// services
gsap.from('.sofa1', {opacity: 0, duration: 0.5, delay: 0.4, x: -30}) 
gsap.from('.sofa2', {opacity: 0, duration: 0.5, delay: 0.7, y: -30}) 
gsap.from('.lamp', {opacity: 0, duration: 0.5, delay: 1, y: 30}) 
gsap.from('.textServices h1', {opacity: 0, duration: 0.4, delay: 0.5, y: 30}) 
gsap.from('.textServices p', {opacity: 0, duration: 0.4, delay: 0.7, y: 30}) 
gsap.from('.textServices li', {opacity: 0, duration: 0.4, delay: 0.9, y: -30, stagger: 0.2}) 

// blog
gsap.from('#blog h1', {opacity: 0, duration: 0.4, delay: 0.3, y: -30}) 
gsap.from('.left img', {opacity: 0, duration: 0.6, delay: 0.5, x: -30}) 
gsap.from('.right img', {opacity: 0, duration: 0.6, delay: 0.5, x: 30})
gsap.from('.left h2, .left p, .left a', {opacity: 0, duration: 0.7, delay: 0.6, x: -30, stagger: 0.2}) 
gsap.from('.right h2, .right p, .right a', {opacity: 0, duration: 0.7, delay: 0.6, x: 30, stagger: 0.2}) 

// download
gsap.from('.textDownload h1, .textDownload p', {opacity: 0, duration: 0.7, delay: 0.6, y: -30, stagger: 0.2})
gsap.from('.android', {opacity: 0, duration: 0.7, delay: 0.6, x: -30})
gsap.from('.apple', {opacity: 0, duration: 0.7, delay: 0.8, x: -30})
gsap.from('.imageDownload h1', {opacity: 0, duration: 0.7, delay: 0.4, x: 30})
gsap.from('.mockup', {opacity: 0, duration: 0.7, delay: 0.8, x: 30})

// footer
gsap.from('.credit', {opacity: 0, duration: 0.5, delay: 0.3, y: -30})
gsap.from('.support', {opacity: 0, duration: 0.6, delay: 0.5, y: -30})
gsap.from('.about', {opacity: 0, duration: 0.7, delay: 0.7, y: -30})
gsap.from('.contact', {opacity: 0, duration: 0.8, delay: 0.9, y: -30})
gsap.from('.copyright', {opacity: 0, duration: 0.9, delay: 0.7, y: 30})