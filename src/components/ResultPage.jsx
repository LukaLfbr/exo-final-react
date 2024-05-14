import React from "react";
import { useLocation } from "react-router-dom";

const ResultPage = () => {
  const location = useLocation();
  const { result } = location.state;

  return (
    <div>
      <h2>Résultat</h2>
      <p>Vous avez {result === "Perdu" ? "perdu" : "gagné"}!</p>
      {result !== "Perdu" && <p>Combinaison réalisée : {result}</p>}
    </div>
  );
};

export default ResultPage;
