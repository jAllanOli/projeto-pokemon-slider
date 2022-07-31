const btnAvancar = document.getElementById('btn-foward');
const btnVoltar = document.getElementById('btn-back');
const cards = document.querySelectorAll('.card');
let cardDisplayed = 0;

function hideSelectedCard() {
    const cardSelected = document.querySelector('.selected');
    cardSelected.classList.remove('selected');
}

function showCard(cardIndex) {
    cards[cardIndex].classList.add('selected');
}

btnAvancar.addEventListener('click', function () {
    if (cardDisplayed === cards.length - 1) return

    hideSelectedCard();

    cardDisplayed++;
    showCard(cardDisplayed);
    if (cardDisplayed >= 2) {
        cardDisplayed = -1;
    }
})

btnVoltar.addEventListener('click', function () {
    if (cardDisplayed <= 0) {
        cardDisplayed = 4;
    }
    if (cardDisplayed === 0) return;

    hideSelectedCard();

    cardDisplayed--;
    showCard(cardDisplayed);
})

