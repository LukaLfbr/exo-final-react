import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Game from "./pages/Game";
import Home from "./pages/Home";
import "./index.css";
import Results from "./pages/Results";
import LoginForm from "./pages/LoginForm"; // Import du nouveau composant

const App = () => {
  return (
    <Router>
      <div>
        <h1>Jeu de Yams</h1>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/results" element={<Results />} />
          <Route path="/admin" element={<LoginForm />} />{" "}
          {/* Nouvelle route pour le formulaire de connexion */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
