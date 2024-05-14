import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dice: Array.from({ length: 5 }, () => Math.floor(Math.random() * 6) + 1),// random initial values
  // rollsLeft: 3,
  rollsLeft: 50, // test
  scores: {
    suite:0,
    carre: 0,
    yams:0
  },
  selectedDice: Array(5).fill(true)
};

const yamsSlice = createSlice({
  name: "yams",
  initialState,
  reducers: {
    // rollDice(state) {
    //   handleDiceRoll(state);
    // },
    toggleDiceSelection(state, action) {
      state.selectedDice[action.payload] = !state.selectedDice[action.payload];
    },
    rollDice(state) {
      state.dice = state.dice.map((value, index) =>
        state.selectedDice[index] ? Math.floor(Math.random() * 6) + 1 : value
      );
      state.rollsLeft -= 1;
    },
    resetDiceSelection(state) {
      state.selectedDice.fill(true);
    }
    
  },
});

function handleDiceRoll(state){
  state.dice = state.dice.map(() => Math.floor(Math.random() * 6) + 1);
      state.rollsLeft -= 1;

      // Count the frequency of each die value
      const counts = {};
      state.dice.forEach(num => counts[num] = (counts[num] || 0) + 1);

      // Check for Yams (five of a kind)
      if (Object.values(counts).includes(5)) {
        state.scores.yams += 1;
      }

      // Check for Four of a Kind (carre)
      if (Object.values(counts).includes(4)) {
        state.scores.carre += 1;
      }

      // Check for Large Straight (suite)
      const sortedDice = [...state.dice].sort();
      if (sortedDice.join(',') === '1,2,3,4,5' || sortedDice.join(',') === '2,3,4,5,6') {
        state.scores.suite += 1;
      }
}

export const { rollDice, toggleDiceSelection, resetDiceSelection } = yamsSlice.actions;

export default yamsSlice.reducer;
