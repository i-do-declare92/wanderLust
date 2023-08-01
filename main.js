


// JavaScript to add carousel functionality
const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.card1');
const revealButtons = document.querySelectorAll('.reveal-btn');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

cards.forEach(card => {
    const revealButton = card.querySelector('.reveal-btn');
    revealButton.addEventListener('click', () => {
        card.classList.toggle('active');
    });
});
const cardWidth = cards[0].offsetWidth; // Get the width of the cards
const carouselWidth = carousel.offsetWidth;
const visibleCards = Math.floor(carouselWidth / cardWidth); // Number of visible cards
let currentIndex = 0;

// Function to slide the carousel
function slideCarousel() {
  const offset = -currentIndex * cardWidth;
  carousel.style.transform = `translateX(${offset}px)`;
}

// Function to center the chosen card
function centerChosenCard() {
  const centerOffset = carouselWidth / 20 - cardWidth / 20;
  carousel.style.transform = `translateX(${centerOffset - currentIndex * cardWidth}px)`;
}

// Function to handle previous button click
function showPreviousCard() {
  if (currentIndex > 0) {
    currentIndex--;
    slideCarousel();
  }
}

// Function to handle next button click
function showNextCard() {
  if (currentIndex < cards.length - visibleCards) {
    currentIndex++;
    slideCarousel();
  }
}

// Add click event listeners to the reveal buttons
revealButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    currentIndex = index;
    centerChosenCard();
  });
});

// Add click event listeners to the navigation buttons
prevButton.addEventListener('click', showPreviousCard);
nextButton.addEventListener('click', showNextCard);

// Call the function initially to center the first card
centerChosenCard();

// Add window resize event to re-center the chosen card when the window size changes
window.addEventListener('resize', () => {
  const newCarouselWidth = carousel.offsetWidth;
  if (newCarouselWidth !== carouselWidth) {
    currentIndex = Math.min(currentIndex, cards.length - visibleCards);
    carouselWidth = newCarouselWidth;
    centerChosenCard();
  }
});
