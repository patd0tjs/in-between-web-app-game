var score = 0;
var round = 1;

export function getScore() {
  return score;
}

export function getRound() {
  return round;
}

function roundProgress() {
  round = round + 1;
}
