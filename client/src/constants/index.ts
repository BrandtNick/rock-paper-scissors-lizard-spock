/*
  Scissors cuts Paper
  Paper covers Rock
  Rock crushes Lizard
  Lizard poisons Spock
  Spock smashes Scissors
  Scissors decapitates Lizard
  Lizard eats Paper
  Paper disproves Spock
  Spock vaporizes Rock
  Rock crushes Scissors
*/

const MOVES = {
  scissors: 'scissors',
  paper: 'paper',
  rock: 'rock',
  lizard: 'lizard',
  spock: 'spock',
} as const;

const MOVE_IMAGES = {
  scissors: '✌️',
  paper: '🖐',
  rock: '🪨',
  lizard: '🦎',
  spock: '🖖',
} as const;

const ALL_MOVES = [
  MOVES.scissors,
  MOVES.paper,
  MOVES.rock,
  MOVES.lizard,
  MOVES.spock,
] as const;

const PLAYS = {
  scissors: [MOVES.paper, MOVES.lizard],
  paper: [MOVES.rock, MOVES.spock],
  rock: [MOVES.lizard, MOVES.scissors],
  lizard: [MOVES.spock, MOVES.paper],
  spock: [MOVES.scissors, MOVES.rock],
};

export {
  MOVES,
  MOVE_IMAGES,
  ALL_MOVES,
  PLAYS,
};
