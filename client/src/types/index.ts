import {MOVES} from '../constants';

interface Player {
  name: string;
  move: keyof typeof MOVES;
}

interface GameResult {
  playerOne: Player;
  playerTwo: Player;
  result: string;
}

export type {
  Player,
  GameResult,
};

