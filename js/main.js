$(document).ready(function(){

    $('.fa-bars').click(function(){
       $(this).toggleClass('fa-times');
       $('.navbar').toggleClass('nav-toggle');
   });

   $(window).on('load scroll',function(){
       $('.fa-bars').removeClass('fa-times');
       $('.navbar').removeClass('nav-toggle');
   });

   const counters = document.querySelectorAll('.counter');
   const speed = 120;
   counters.forEach(counter => {
   const updateCount = () => {
       const target = +counter.getAttribute('data-target');
       const count = +counter.innerText;
       const inc = target / speed;
       if (count < target) {
           counter.innerText = count + inc;
           setTimeout(updateCount, 1);
       } else {
           counter.innerText = target;
       }
   };
     updateCount();
  });

  (function ($) {
   "use strict";

   $(".clients-carousel").owlCarousel({
       autoplay: true,
       autoplayTimeout: 1500, // Set autoplay speed to 1.5 seconds
       dots: true,
       loop: true,
       responsive: { 0: { items: 2 }, 768: { items: 4 }, 900: { items: 6 } }
   });

   $(".testimonials-carousel").owlCarousel({
       autoplay: true,
       autoplayTimeout: 1500, // Set autoplay speed to 1.5 seconds
       dots: true,
       loop: true,
       responsive: { 0: { items: 1 }, 576: { items: 2 }, 768: { items: 3 }, 992: { items: 4 } }
   });

})(jQuery);


$(window).scroll(function () {
   if ($(this).scrollTop() > 100) {
       $('.back-to-top').fadeIn('slow');
   } else {
       $('.back-to-top').fadeOut('slow');
   }
});
$('.back-to-top').click(function () {
   $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
   return false;
});

// $('.accordion-header').click(function(){
//     $('.accordion .accordion-body').slideUp(500);
//     $(this).next('.accordion-body').slideDown(500);
//     $('.accordion .accordion-header span').text('+');
//     $(this).children('span').text('-');
// });
// Select all accordion headers
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const accordionBody = header.nextElementSibling;

        // Toggle the visibility of the accordion body
        if (accordionBody.style.display === 'block') {
            accordionBody.style.display = 'none';
        } else {
            accordionBody.style.display = 'block';
        }

        // Toggle the active state for styling (optional)
        header.classList.toggle('active');

        // Update the "+" icon to "-" and vice versa
        const icon = header.querySelector('span:last-child');
        if (icon.textContent === '+') {
            icon.textContent = '-';
        } else {
            icon.textContent = '+';
        }
    });
});

// $('.accordion-header').click(function() {
//    // Collapse all accordion bodies
//    $('.accordion-body').slideUp(500);
//    $('.accordion-header span').text('+');

//    // Check if the clicked header is already open
//    if ($(this).next('.accordion-body').is(':hidden')) {
//        $(this).next('.accordion-body').slideDown(500);
//        $(this).children('span').text('-');
//    }
// });

gsap.from("header", {
   duration: 1,
   y: -100,
   opacity: 0,
   ease: "power2.out"
});

gsap.from(".faq .heading", {
   duration: 1,
   y: -50,
   opacity: 0,
   ease: "power2.out"
});

gsap.from(".accordion", {
   duration: 0.5,
   y: 20,
   opacity: 0,
   stagger: 0.1,
   ease: "power2.out",
   scrollTrigger: {
       trigger: ".faq",
       start: "top 80%",
       toggleActions: "play none none reverse"
   }
});

gsap.from(".footer", {
   duration: 1,
   y: 50,
   opacity: 0,
   ease: "power2.out",
   scrollTrigger: {
       trigger: ".footer",
       start: "top 80%",
       toggleActions: "play none none reverse"
   }
});

gsap.from(".clients .section-header", {
   duration: 1,
   y: -50,
   opacity: 0,
   ease: "power2.out",
   scrollTrigger: {
       trigger: ".clients",
       start: "top 80%",
       toggleActions: "play none none reverse"
   }
});

gsap.from(".team .heading", {
   duration: 1,
   y: -50,
   opacity: 0,
   ease: "power2.out",
   scrollTrigger: {
       trigger: ".team",
       start: "top 80%",
       toggleActions: "play none none reverse"
   }
});

gsap.from(".contact .heading", {
   duration: 1,
   y: -50,
   opacity: 0,
   ease: "power2.out",
   scrollTrigger: {
       trigger: ".contact",
       start: "top 80%",
       toggleActions: "play none none reverse"
   }
});

$('a[href^="#"]').on('click', function(event) {
   event.preventDefault(); 

   const target = this.hash; 
   const $target = $(target); 

   $('html, body').animate({
       scrollTop: $target.offset().top 
   }, 800, 'swing'); 
});

$('#menu-toggle').click(function() {
   $('.navbar').toggleClass('active');
   $(this).toggleClass('fa-times'); 
});

$(document).click(function(event) {
   if (!$(event.target).closest('.navbar, #menu-toggle').length) {
       $('.navbar').removeClass('active'); 
       $('#menu-toggle').removeClass('fa-times'); 
   }
});


$(window).on('scroll', function() {
   $('.navbar').removeClass('active'); 
   $('#menu-toggle').removeClass('fa-times'); 
});
// Select elements
const privacyPolicyLink = document.getElementById('privacy-policy-link');
const popup = document.getElementById('popup');
const overlayy = document.getElementById('overlayy');
const closePopup = document.getElementById('close-popup');

// Show popup on clicking Privacy Policy link
privacyPolicyLink.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default anchor behavior
    popup.style.display = 'block';
    overlayy.style.display = 'block';
});

// Close popup on clicking the close button
closePopup.addEventListener('click', function () {
    popup.style.display = 'none';
    overlayy.style.display = 'none';
});

// Close popup when clicking on the overlayy
overlayy.addEventListener('click', function () {
    popup.style.display = 'none';
    overlayy.style.display = 'none';
});
});