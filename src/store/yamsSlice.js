// src/store/yamsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dice: Array(5).fill(0), // valeurs des dés
  rollsLeft: 3, // nombre de lancers restants
  scores: {
    /* scores des différentes combinaisons */
  },
};

const yamsSlice = createSlice({
  name: "yams",
  initialState,
  reducers: {
    rollDice(state) {
      // Générer de nouvelles valeurs pour les dés
      state.dice = state.dice.map(() => Math.floor(Math.random() * 6) + 1);
      state.rollsLeft -= 1;
    },
    // Autres actions pour le jeu de Yams
  },
});

export const { rollDice } = yamsSlice.actions;

export default yamsSlice.reducer;
