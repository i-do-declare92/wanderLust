
//Beginning of Hot Deals Carousel

// JavaScript to add carousel functionality
const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.card1');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const cardWidth = cards[0].offsetWidth; // Get the width of the cards

cards.forEach(card => {
    const revealButton = card.querySelector('.reveal-btn');
    revealButton.addEventListener('click', () => {
        card.classList.toggle('active');
    });
});
let currentIndex = 0;

// Function to slide the carousel
function slideCarousel() {
  const offset = -currentIndex * cardWidth;
  carousel.style.transition = 'transform 0.3s ease';
  carousel.style.transform = `translateX(${offset}px)`;
}

// Function to handle previous button click
function showPreviousCard() {
  if (currentIndex > 1) {
    currentIndex--;
    slideCarousel();
  }
}

// Function to handle next button click
function showNextCard() {
  if (currentIndex < cards.length - 1) {
    currentIndex++;
    slideCarousel();
  }
}

// Add click event listeners to the navigation buttons
prevButton.addEventListener('click', showPreviousCard);
nextButton.addEventListener('click', showNextCard);
//End of Hot Deals Carousel
