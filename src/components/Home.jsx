import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>Bienvenue au jeu de Yams !</h2>
      <p>Commencez à jouer en cliquant sur le bouton ci-dessous :</p>
      <Link to="/game">
        <button>Commencer le jeu</button>
      </Link>
    </div>
  );
};

export default Home;
