
// JavaScript to add carousel functionality
const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.card1');
const revealButtons = document.querySelectorAll('.reveal-btn');

cards.forEach(card => {
    const revealButton = card.querySelector('.reveal-btn');
    revealButton.addEventListener('click', () => {
        card.classList.toggle('active');
    });
});

const cardWidth = cards[0].offsetWidth; // Get the width of the cards
let currentIndex = 0;

// Function to slide the carousel
function slideCarousel() {
  const offset = -currentIndex * cardWidth;
  carousel.style.transform = `translateX(${offset}px)`;
}

// Add click event listeners to the reveal buttons
revealButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    currentIndex = index;
    slideCarousel();
  });
});

// Function to center the chosen card
function centerChosenCard() {
  const carouselWidth = carousel.offsetWidth;
  const centerOffset = carouselWidth / 2 - cardWidth / 2;
  carousel.style.transform = `translateX(${centerOffset - currentIndex * cardWidth}px)`;
}

// Call the function initially to center the first card
centerChosenCard();

// Add window resize event to re-center the chosen card when the window size changes
window.addEventListener('resize', centerChosenCard);