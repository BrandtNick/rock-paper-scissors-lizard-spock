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

import {
  PLAYS,
} from '../constants';

import type {GameResult, Player} from '../types';

const handleGameLogic = (
  playerOne: Player,
  playerTwo: Player,
): string => {
  if (playerOne.move === playerTwo.move) {
    return 'It\'s a tie!';
  }
  const plays: string[] = PLAYS[playerOne.move];
  if (plays.includes(playerTwo.move)) {
    return `${playerOne.name} wins!`;
  }

  return `${playerTwo.name} wins!`;
};

const getPlayersTotalResultNumbers = (
  history: GameResult[],
) => {
  const playerOneWins = history.filter(({result, playerOne}) => result.includes(playerOne.name)).length;
  const playerTwoWins = history.filter(({result, playerTwo}) => result.includes(playerTwo.name)).length;
  const ties = history.filter(({result}) => result.includes('tie')).length;
  console.log({history, playerOneWins, playerTwoWins, ties});

  return {
    playerOneWins,
    playerTwoWins,
    ties,
  };
};

export {
  handleGameLogic,
  getPlayersTotalResultNumbers,
};
