// src/components/GameComponent.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { rollDice } from "../store/yamsSlice";

const GameComponent = () => {
  const dice = useSelector((state) => state.yams.dice);
  const rollsLeft = useSelector((state) => state.yams.rollsLeft);
  const dispatch = useDispatch();

  return (
    <div>
      <div>Dés: {dice.join(", ")}</div>
      <div>Lancers restants: {rollsLeft}</div>
      <button onClick={() => dispatch(rollDice())} disabled={rollsLeft === 0}>
        Lancer les dés
      </button>
    </div>
  );
};

export default GameComponent;
