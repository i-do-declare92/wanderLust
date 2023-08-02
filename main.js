
//Beginning of Hot Deals Carousel

const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.card1');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const cardWidth = cards[0].offsetWidth; // Get the width of the cards
const numCards = cards.length;
const numVisibleCards = 3; // Number of visible cards in the carousel
let currentIndex = numCards - numVisibleCards;
let isCarouselPaused = false;



// Function to slide the carousel
function slideCarousel() {
  const offset = -currentIndex * cardWidth;
  carousel.style.transition = 'transform 0.3s ease';
  carousel.style.transform = `translateX(${offset}px)`;

  // Reset carousel to the first card when reaching the end
  if (currentIndex === numCards) {
    setTimeout(() => {
      carousel.style.transition = 'none';
      carousel.style.transform = `translateX(${-(numVisibleCards * cardWidth)}px)`;
      currentIndex = numCards - numVisibleCards;
    }, 300);
  }

  // Reset carousel to the last card when reaching the beginning
  if (currentIndex === -1) {
    setTimeout(() => {
      carousel.style.transition = 'none';
      carousel.style.transform = `translateX(${-(numCards - 1) * cardWidth}px)`;
      currentIndex = numCards - 1;
    }, 300);
  }
}

// Function to handle previous button click
function showPreviousCard() {
  currentIndex = (currentIndex - 1);
  slideCarousel();
}

// Function to handle next button click
function showNextCard() {
  currentIndex = (currentIndex + 1);
  slideCarousel();
}


// Add click event listeners to the navigation buttons
prevButton.addEventListener('click', showPreviousCard);
nextButton.addEventListener('click', showNextCard);

function resumeCarousel() {
  isCarouselPaused = false;
  setTimeout(slideCarousel, 1000); // Resume sliding after 5 seconds
}

slideCarousel();



//Reveals the more info button
cards.forEach(card => {
    const revealButton = card.querySelector('.reveal-btn');
    revealButton.addEventListener('click', () => {
        card.classList.toggle('active');
    });
});

//Funciton to hide carousel buttons
function handleScroll() {
    const carouselContainer = document.querySelector('.carousel-contain');
    const carouselOffset = carouselContainer.offsetTop;
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > carouselOffset) {
      prevButton.style.display = 'none';
      nextButton.style.display = 'none';
    } else {
      prevButton.style.display = 'block';
      nextButton.style.display = 'block';
    }
  }
  
  // Add scroll event listener to hide buttons when scrolling
  window.addEventListener('scroll', handleScroll);




//End of Hot Deals Carousel

// Beginning of FAQs card flip logic

let faq_card = document.getElementById("flip");
let faq_card2 = document.getElementById("flip2");
let faq_card3 = document.getElementById("flip3");

document.getElementById("flip_btn").addEventListener(
  "click",
  function () {
    faq_card.classList.toggle("flipped");
  },
  false
);

document.getElementById("flip_btn2").addEventListener(
  "click",
  function () {
    faq_card.classList.toggle("flipped");
  },
  false
);

document.getElementById("flip_btn3").addEventListener(
  "click",
  function () {
    faq_card2.classList.toggle("flipped");
  },
  false
);

document.getElementById("flip_btn4").addEventListener(
  "click",
  function () {
    faq_card2.classList.toggle("flipped");
  },
  false
);

document.getElementById("flip_btn5").addEventListener(
  "click",
  function () {
    faq_card3.classList.toggle("flipped");
  },
  false
);

document.getElementById("flip_btn6").addEventListener(
  "click",
  function () {
    faq_card3.classList.toggle("flipped");
  },
  false
);

// End of FAQs card flip logic