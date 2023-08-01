
//Beginning of Hot Deals Carousel

const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.card1');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const cardWidth = cards[0].offsetWidth; // Get the width of the cards

let currentIndex = 0;

// Function to slide the carousel
function slideCarousel() {
  const offset = -currentIndex * cardWidth;
  carousel.style.transition = 'transform 0.3s ease';
  carousel.style.transform = `translateX(${offset}px)`;
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
  if (currentIndex < cards.length - 1) {
    currentIndex++;
    slideCarousel();
  }
}

// Add click event listeners to the navigation buttons
prevButton.addEventListener('click', showPreviousCard);
nextButton.addEventListener('click', showNextCard);
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
