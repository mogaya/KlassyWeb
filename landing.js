var loginbtn = document.querySelector(".login");
loginbtn.addEventListener("click", function (e) { window.location.href = "./products.php";});

// Start Slide Show JS
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
// End Slide Show JS

//Start Product Carousel Js
const carouselWrapper = document.querySelector(".carousel-wrapper");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

prevButton.addEventListener("click", () => {
  carouselWrapper.scrollBy({
    left: -200,
    behavior: "smooth",
  });
});

nextButton.addEventListener("click", () => {
  carouselWrapper.scrollBy({
    left: 200,
    behavior: "smooth",
  });
});
//End Product Carousel Js

//Start Increament Js
const counters = document.querySelectorAll('.counter')
const count = document.getElementById('count')

count.addEventListener("mouseenter", (e) => {
  counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText

        const increment = target /200

        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = target
        }
    }

    updateCounter()
  })
})


//End Increament Js

//Start Product Carousel Js
const carouselWrapperTwo = document.querySelector(".carousel-wrapper-Two");
const prevButtonTwo = document.querySelector(".prev-button-Two");
const nextButtonTwo = document.querySelector(".next-button-Two");

prevButtonTwo.addEventListener("click", () => {
  carouselWrapperTwo.scrollBy({
    left: -200,
    behavior: "smooth",
  });
});

nextButtonTwo.addEventListener("click", () => {
  carouselWrapperTwo.scrollBy({
    left: 200,
    behavior: "smooth",
  });
});
//End Product Carousel Js

// Start Testimonials JS
let slideIndexText = 1;
showSlidesText(slideIndexText);

function plusSlides(n) {
    showSlidesText(slideIndexText += n);
}

function currentSlide(n) {
    showSlidesText(slideIndexText = n);
}

function showSlidesText(n) {
  let i;
  let slidesText = document.getElementsByClassName("mySlidesText");
  let dotsTest = document.getElementsByClassName("dotTest");
  if (n > slidesText.length) {slideIndexText = 1}    
  if (n < 1) {slideIndexText = slidesText.length}
  for (i = 0; i < slidesText.length; i++) {
    slidesText[i].style.display = "none";  
  }
  for (i = 0; i < dotsTest.length; i++) {
    dotsTest[i].className = dotsTest[i].className.replace(" dots-active", "");
  }
  slidesText[slideIndexText-1].style.display = "block";  
  dotsTest[slideIndexText-1].className += " dots-active";
}
// End Testimonials JS

//Start Logo Carousel Js

const carouselWrapperLogo = document.querySelector(".carousel-wrapper-Logo");
const prevButtonLogo = document.querySelector(".prev-button-Logo");
const nextButtonLogo = document.querySelector(".next-button-Logo");

prevButtonLogo.addEventListener("click", () => {
  carouselWrapperLogo.scrollBy({
    left: -200,
    behavior: "smooth",
  });
});

nextButtonLogo.addEventListener("click", () => {
  carouselWrapperLogo.scrollBy({
    left: 200,
    behavior: "smooth",
  });
});

// const carouselWrapperLogo = document.querySelector(".carousel-wrapper-Logo");
// const prevButtonLogo = document.querySelector(".prev-button-Logo");
// const nextButtonLogo = document.querySelector(".next-button-Logo");

// prevButtonLogo.addEventListener("click", () => {
//   carouselWrapperLogo.scrollBy({
//     left: -300,
//     behavior: "smooth",
//   });
// });

// nextButtonLogo.addEventListener("click", () => {
//   carouselWrapperLogo.scrollBy({
//     left: 300,
//     behavior: "smooth",
//   });
// });
//End Logo Carousel Js