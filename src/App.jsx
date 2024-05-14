import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GameComponent from "./components/GameComponent";
import Home from "./components/Home";
import ResultPage from "./components/ResultPage"; // Import du nouveau composant

const App = () => {
  return (
    <Router>
      <div>
        <h1>Jeu de Yams</h1>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/game" element={<GameComponent />} />
          <Route path="/result" element={<ResultPage />} />{" "}
          {/* Nouvelle route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
