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

const cardData = [
	{ cardId: "flip", frontBtnId: "flip_btn", backBtnId: "flip_btn2" },
	{ cardId: "flip2", frontBtnId: "flip_btn3", backBtnId: "flip_btn4" },
	{ cardId: "flip3", frontBtnId: "flip_btn5", backBtnId: "flip_btn6" },
	{ cardId: "flip4", frontBtnId: "flip_btn7", backBtnId: "flip_btn8" },
	{ cardId: "flip5", frontBtnId: "flip_btn9", backBtnId: "flip_btn10" },
	{ cardId: "flip6", frontBtnId: "flip_btn11", backBtnId: "flip_btn12" },
	// Add more card data objects as needed
];

cardData.forEach((data) => {
	const card = document.getElementById(data.cardId);
	const frontBtn = document.getElementById(data.frontBtnId);
	const backBtn = document.getElementById(data.backBtnId);

	frontBtn.addEventListener("click", () => {
		card.classList.toggle("flipped");
		adjustFlipCardHeights();
	});

	backBtn.addEventListener("click", () => {
		card.classList.toggle("flipped");
		adjustFlipCardHeights();
	});
});

function adjustFlipCardHeights() {
	// const flipCards = document.querySelectorAll(".flipper");

	// flipCards.forEach((flipCard) => {
	// 	const frontContainer = flipCard.querySelector(".faqs-card:not(.back)");
	// 	const backContainer = flipCard.querySelector(".faqs-card.back");

	// 	const isFlipped = flipCard.classList.contains("flipped");

	// 	const contentContainer = isFlipped ? backContainer : frontContainer;
	// 	const contentHeight = contentContainer.clientHeight;

	// 	flipCard.style.height = contentHeight + "px";
	// });
	console.log('test')
}

// Function to run when all resources are loaded
window.addEventListener("load", () => {
	adjustFlipCardHeights(); // Initial adjustment after all resources are loaded

	// Attach event listener to window resize
	window.addEventListener("resize", adjustFlipCardHeights);
});

// End of FAQs card flip logic

// Beginning of mobile navbar logic

let nav = document.querySelector(".deskNav");
let navContain = document.querySelector("#mobile-nav-contain");
let navButton = document.querySelector(".mobile-nav");
let mobNav = document.querySelector(".mobNav");

// Restores the desktop navbar if viewport width is increased after closing mobile navbar
function restoreDesktopNav(width) {
	if (width < 768 && navContain.classList.contains("open")) {
		nav.style.display = "none";
		mobNav.style.display = "block";
	} else if (width < 768 && !navContain.classList.contains("open")) {
		nav.style.display = "none";
		mobNav.style.display = "none";
	} else {
		nav.style.display = "block";
	}
}

window.addEventListener("resize", () => {
	const width = window.innerWidth;

	restoreDesktopNav(width);
});

// Opens and closes mobile navbar when menu button is pressed
function hamburgerNav() {
	if (navContain.classList.contains("open")) {
		mobNav.style.display = "none";
		navContain.style.backgroundColor = "transparent";
	} else {
		mobNav.style.display = "block";
		navContain.style.backgroundColor = "#01afd1";
	}

	navContain.classList.toggle("open");
	navButton.classList.toggle("change");
}

// Closes mobile navbar if you click anywhere outside of it.
document.addEventListener("click", (event) => {
	if (
		event.target.closest("#mobile-nav-contain") === null &&
		navContain.classList.contains("open")
	) {
		mobNav.style.display = "none";
		navContain.style.backgroundColor = "transparent";
		navContain.classList.toggle("open");
		navButton.classList.toggle("change");
	}
});

// End of mobile navbar logic
