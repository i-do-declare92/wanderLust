//Beginning of Hot Deals Carousel

const carousel = document.querySelector("[data-target='carousel']");
const cardz = carousel.querySelector("[data-target='cardz']");
const leftButton = document.querySelector("[data-action='slideLeft']");
const rightButton = document.querySelector("[data-action='slideRight']");
const cardzz = document.querySelectorAll(".cardz");

const cardCount = carousel.querySelectorAll("[data-target='cardz']").length;

// Define an offset property to dynamically update by clicking the button
// as well as a maxX property so the carousel knows when to stop at the upper limit

let offset = 0;
let carouselWidth;
let cardMarginRight;
let maxX;

function updateCarouselSize() {
	carouselWidth = carousel.offsetWidth;
	const cardStyle = cardz.currentStyle || window.getComputedStyle(cardz);
	cardMarginRight = Number(cardStyle.marginRight.match(/\d+/g)[0]);

	maxX = -(
		(cardCount / 1) * carouselWidth +
		cardMarginRight * (cardCount / 1) -
		carouselWidth -
		cardMarginRight
	);
}

updateCarouselSize();

// Function to update the carousel position
function updateCarouselTransform() {
	carousel.style.transform = `translateX(${offset}px)`;
}

// Event listener for window resize
window.addEventListener("resize", () => {
	updateCarouselSize();
	updateCarouselTransform();
});

// Add the click events
leftButton.addEventListener("click", function () {
	if (offset !== 0) {
		offset += carouselWidth + cardMarginRight;
		updateCarouselTransform();
	}
});
rightButton.addEventListener("click", function () {
	console.log(offset);
	console.log(maxX);
	if (offset !== maxX) {
		offset -= carouselWidth + cardMarginRight;
		updateCarouselTransform();
		console.log(offset);
		console.log(maxX);
	} else if (offset <= maxX) {
		offset = 0;
		updateCarouselTransform();
	}
});

// //Reveals the more info button
cardzz.forEach((card) => {
	const revealButton = card.querySelector(".reveal-btn");
	revealButton.addEventListener("click", () => {
		card.classList.toggle("active");
		console.log("test");
	});
});

//End of Hot Deals Carousel

// Beginning of FAQs card flip logic

let faq_card = document.getElementById("flip");
let faq_card2 = document.getElementById("flip2");
let faq_card3 = document.getElementById("flip3");
let faq_card4 = document.getElementById("flip4");
let faq_card5 = document.getElementById("flip5");
let faq_card6 = document.getElementById("flip6");

document.getElementById("flip_btn").addEventListener(
	"click",
	function () {
		faq_card.classList.toggle("flipped");
		adjustFlipCardHeights();
	},
	false
);

document.getElementById("flip_btn2").addEventListener(
	"click",
	function () {
		faq_card.classList.toggle("flipped");
		adjustFlipCardHeights();
	},
	false
);

document.getElementById("flip_btn3").addEventListener(
	"click",
	function () {
		faq_card2.classList.toggle("flipped");
		adjustFlipCardHeights();
	},
	false
);

document.getElementById("flip_btn4").addEventListener(
	"click",
	function () {
		faq_card2.classList.toggle("flipped");
		adjustFlipCardHeights();
	},
	false
);

document.getElementById("flip_btn5").addEventListener(
	"click",
	function () {
		faq_card3.classList.toggle("flipped");
		adjustFlipCardHeights();
	},
	false
);

document.getElementById("flip_btn6").addEventListener(
	"click",
	function () {
		faq_card3.classList.toggle("flipped");
		adjustFlipCardHeights();
	},
	false
);

document.getElementById("flip_btn7").addEventListener(
	"click",
	function () {
		faq_card4.classList.toggle("flipped");
		adjustFlipCardHeights();
	},
	false
);

document.getElementById("flip_btn8").addEventListener(
	"click",
	function () {
		faq_card4.classList.toggle("flipped");
		adjustFlipCardHeights();
	},
	false
);

document.getElementById("flip_btn9").addEventListener(
	"click",
	function () {
		faq_card5.classList.toggle("flipped");
		adjustFlipCardHeights();
	},
	false
);

document.getElementById("flip_btn10").addEventListener(
	"click",
	function () {
		faq_card5.classList.toggle("flipped");
		adjustFlipCardHeights();
	},
	false
);

document.getElementById("flip_btn11").addEventListener(
	"click",
	function () {
		faq_card6.classList.toggle("flipped");
		adjustFlipCardHeights();
	},
	false
);

document.getElementById("flip_btn12").addEventListener(
	"click",
	function () {
		faq_card6.classList.toggle("flipped");
		adjustFlipCardHeights();
	},
	false
);

function adjustFlipCardHeights() {
	const flipCards = document.querySelectorAll(".flipper");

	flipCards.forEach((flipCard) => {
		const frontContainer = flipCard.querySelector(".faqs-card:not(.back)");
		const backContainer = flipCard.querySelector(".faqs-card.back");

		const isFlipped = flipCard.classList.contains("flipped");

		const contentContainer = isFlipped ? backContainer : frontContainer;
		const contentHeight = contentContainer.clientHeight;

		flipCard.style.height = contentHeight + "px";
	});
}

// Function to run when all resources are loaded
window.addEventListener("load", () => {
	adjustFlipCardHeights(); // Initial adjustment after all resources are loaded

	// Attach event listener to window resize
	window.addEventListener("resize", adjustFlipCardHeights);
});

// End of FAQs card flip logic

// Beginning of mobile navbar logic

let nav = document.querySelector(".nav");
let navContain = document.querySelector("#mobile-nav-contain");

function hamburgerNav(bar) {
	if (nav.style.display === "block") {
		nav.style.display = "none";
		navContain.style.backgroundColor = "transparent";
	} else {
		nav.style.display = "block";
		navContain.style.backgroundColor = "#01afd1";
	}

	bar.classList.toggle("change");
}

// End of mobile navbar logic
