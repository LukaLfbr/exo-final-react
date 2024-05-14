import { useState } from 'react';
import Dice from './Dice';

const DiceGame = () => {
  const [diceNumber, setDiceNumber] = useState(1);
  const [isRolling, setIsRolling] = useState(false);

  const rollDice = () => {
    setIsRolling(true); // Enable rolling
    const newNumber = Math.floor(Math.random() * 6) + 1;
    setDiceNumber(newNumber);
    setTimeout(() => setIsRolling(false), 8 * 150 + 100); // Disable rolling after the animation ends
  };

  return (
    <div className='diceList'>
      <button onClick={rollDice}>Roll Dice</button>
      <Dice number={diceNumber} rolling={isRolling} />
      <Dice number={diceNumber} rolling={isRolling} />
      <Dice number={diceNumber} rolling={isRolling} />
      <span>Lol</span>
    </div>
  );
};

export default DiceGame;
