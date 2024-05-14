import { Link } from "react-router-dom";
import DiceGame from "../components/DiceGame";

const Home = () => {
  return (
    <div>
      <DiceGame />
      <h2>Bienvenue au jeu de Yams !</h2>
      <p>Commencez à jouer en cliquant sur le bouton ci-dessous :</p>
      <Link to="/game">
        <button>Commencer le jeu</button>
      </Link>
    </div>
  );
};

export default Home;
