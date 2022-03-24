var card1;
var card2;
var card3;

function numGen() {
  return Math.floor(Math.random() * 13);
}

function makeCards() {
  card1 = numGen();
  card2 = numGen();
  card3 = numGen();
}

function cardValidation() {
  while (card1 > card2) {
    card1 = numGen();
  }
  while (card1 === card3 || card3 === card2) {
    card3 = numGen();
  }
}
export function card1Value() {
  makeCards();
  cardValidation();

  return card1;
}
export function card2Value() {
  return card2;
}

export function card3Value() {
  return card3;
}
