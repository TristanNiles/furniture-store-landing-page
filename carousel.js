let carouselCardsContainer = document.querySelector('.carousel__cards-container');
let carouselCards = carouselCardsContainer.children;
let carouselIndicators = document.querySelector('.carousel__indicators-container').children;
let cardWidth = carouselCards[0].getBoundingClientRect().width;
let leftButton = document.querySelector('.carousel__controls--left');
let rightButton = document.querySelector('.carousel__controls--right');
let currentCardIx = 0;

//function for handling left and right carousel button clicks
function carouselButton(direction) {
    if ((currentCardIx == 0 && direction == 'left') || (currentCardIx == carouselCards.length - 1 && direction == 'right')) {
        console.log("button fail");
        return;
    }
    
    let distance = -1 * (currentCardIx + 1) * (cardWidth + 24);
    if (direction == 'left') {
        distance = -1 * (currentCardIx - 1) * (cardWidth + 24)
    }

    carouselCardsContainer.style.transform = 'translateX(' + distance + 'px)';
    carouselCards[currentCardIx].classList.remove('current-card');
    carouselIndicators[currentCardIx].classList.remove('carousel__indicator--selected');

    
    currentCardIx = direction == 'left' ? currentCardIx - 1 : currentCardIx +  1; //inc ix if right, dec if left

    carouselCards[currentCardIx].classList.add('current-card');
    carouselIndicators[currentCardIx].classList.add('carousel__indicator--selected');
}