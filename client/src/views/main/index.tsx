import React from 'react';
import {
  Button,
  Flex,
  HStack,
  Input,
  Text,
} from '@chakra-ui/react';
import {ALL_MOVES, MOVES, MOVE_IMAGES} from '../../constants';
import {handleGameLogic, getPlayersTotalResultNumbers} from '../../utils';

import type {GameResult} from '../../types';

const Main = () => {
  const [playerOne, setPlayerOne] = React.useState('');
  const [playerTwo, setPlayerTwo] = React.useState('');
  const [playerOneMoveResult, setPlayerOneMoveResult] = React.useState<keyof typeof MOVES | null>(null);
  const [playerTwoMoveResult, setPlayerTwoMoveResult] = React.useState<keyof typeof MOVES | null>(null);
  const [result, setResult] = React.useState('');
  const [history, setHistory] = React.useState<GameResult[]>([]);

  const startGame = () => {
    if (!playerOne || !playerTwo) {
      alert('Please enter the players names');
      return;
    }

    const playerOneMove: keyof typeof MOVES = ALL_MOVES[Math.floor(Math.random() * ALL_MOVES.length)];
    const playerTwoMove: keyof typeof MOVES = ALL_MOVES[Math.floor(Math.random() * ALL_MOVES.length)];

    setPlayerOneMoveResult(playerOneMove);
    setPlayerTwoMoveResult(playerTwoMove);

    const playerOneInfo = {
      name: playerOne,
      move: playerOneMove,
    };
    const playerTwoInfo = {
      name: playerTwo,
      move: playerTwoMove,
    };
    const gameResult = handleGameLogic(playerOneInfo, playerTwoInfo);
    setResult(gameResult);
    setHistory([
      ...history,
      {
        playerOne: playerOneInfo,
        playerTwo: playerTwoInfo,
        result: gameResult,
      }
    ]);
  }

  const resetGame = () => {
    setPlayerOne('');
    setPlayerTwo('');
    setPlayerOneMoveResult(null);
    setPlayerTwoMoveResult(null);
    setResult('');
    setHistory([]);
  }

  return (
    <Flex
      p='50px'
      flexDir='column'
      alignItems="center"
      height='100vh'
      w='100vw'
      bg='#333'
    >
      <HStack
        w='500px'
        spacing='50px'
        justifyContent='center'
        color='#f1f1f1'
      >
        <Input
          w='160px'
          variant='flushed'
          placeholder='player 1'
          value={playerOne}
          onChange={(e) => setPlayerOne(e.target.value)}
        />
        <Input
          w='160px'
          variant='flushed'
          placeholder='player 2'
          value={playerTwo}
          onChange={(e) => setPlayerTwo(e.target.value)}
        />
      </HStack>
      <Flex
        align='center'
        justify='space-around'
      >
        <Button
          colorScheme="blue"
          size="lg"
          onClick={startGame}
          w='150px'
          m='20px'
        >
          Play!
        </Button>
        <Button
          colorScheme='grey'
          size='lg'
          onClick={resetGame}
          w='150px'
          m='20px'
        >
          Reset
        </Button>
      </Flex>
      {result && (playerOneMoveResult && playerTwoMoveResult) && (
        <Flex
          align='center'
          justify='center'
          flexDir='column'
          w='500px'
          justifyContent='center'
          color='#f1f1f1'
        >
          <Text fontSize='1.4em' m='50px'>{result}</Text>
          <Flex
            m='20px'
          >
            <Text fontSize='1.8em'><b>{playerOne}</b> {MOVE_IMAGES[playerOneMoveResult]}</Text>
            <Text fontSize='1.8em'> - </Text>
            <Text fontSize='1.8em'>{MOVE_IMAGES[playerTwoMoveResult]} <b>{playerTwo}</b></Text>
          </Flex>
        </Flex>
      )}
      {history.length !== 0 && (
        <Flex
          flexDir='column'
          align='center'
          justify='space-between'
          w='500px'
          h='400px'
          color='#f1f1f1'
        >
          <Text fontSize='1.8em'>
            <b>
            {getPlayersTotalResultNumbers(history).playerOneWins} - {getPlayersTotalResultNumbers(history).playerTwoWins}
            </b>
          </Text>
          <Flex
            flexDir='column'
            align='center'
            justify='flex-start'
            w='100%'
            h='300px'
            overflowX='auto'
            border='1px solid #444'
          >
            {history.map((game, index) => (
              <Flex
                key={index}
                fontSize='0.8em'
                flexDir='column'
                align='center'
                justify='center'
                w='90%'
                h='80px'
                color='#f1f1f1'
                borderRadius='5px'
                bg='#222'
                p='10px'
                m='10px 0 10px'
              >
                <Text fontSize='1.2em'><b>{game.playerOne.name}</b>: {MOVE_IMAGES[game.playerOne.move]}</Text>
                <Text fontSize='1.2em'><b>{game.playerTwo.name}</b>: {MOVE_IMAGES[game.playerTwo.move]}</Text>
                <Text fontSize='1.2em'>{game.result}</Text>
              </Flex>
            ))}
          </Flex>
        </Flex>
      )}
    </Flex>
  )
}

export default Main;
