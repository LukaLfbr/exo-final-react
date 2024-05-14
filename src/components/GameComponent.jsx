// src/components/GameComponent.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { rollDice } from "../store/yamsSlice";

const GameComponent = () => {
  const dice = useSelector((state) => state.yams.dice);
  const rollsLeft = useSelector((state) => state.yams.rollsLeft);
  const dispatch = useDispatch();

  // Vérifie si tous les dés ont la même valeur
  const checkYams = () => {
    return dice.every((val) => val === dice[0]);
  };

  // Vérifie si les dés forment une grande suite
  const checkGrandeSuite = () => {
    const sortedDice = dice.slice().sort();
    return (
      sortedDice[0] === 1 &&
      sortedDice[1] === 2 &&
      sortedDice[2] === 3 &&
      sortedDice[3] === 4 &&
      sortedDice[4] === 5
    );
  };

  // Vérifie si les dés forment un carré
  const checkCarre = () => {
    const counts = {};
    dice.forEach((val) => {
      counts[val] = (counts[val] || 0) + 1;
    });
    return Object.values(counts).some((count) => count >= 4);
  };

  const handleTakeResult = () => {
    let result = "";

    if (checkYams()) {
      result = "Yams";
    } else if (checkGrandeSuite()) {
      result = "Grande suite";
    } else if (checkCarre()) {
      result = "Carré";
    } else {
      result = "Perdu";
    }

    // Redirection vers la page de résultats avec le résultat en paramètre
    history.push("/result", { result });
  };

  return (
    <div>
      <div>Dés: {dice.join(", ")}</div>
      <div>Lancers restants: {rollsLeft}</div>
      <button onClick={() => dispatch(rollDice())} disabled={rollsLeft === 0}>
        Lancer les dés
      </button>
      <button onClick={handleTakeResult}>Prendre le résultat</button>
    </div>
  );
};

export default GameComponent;
