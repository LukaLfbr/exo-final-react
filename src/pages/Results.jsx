import { useSelector } from "react-redux";

function Results() {
  const scores = useSelector((state) => state.yams.scores);

  const conditions = [
    { key: 'yams', label: 'un yams', reward: 3 },
    { key: 'carre', label: 'un carré', reward: 2 },
    { key: 'suite', label: 'une suite', reward: 1 }
  ];

  const result = conditions.find(condition => scores[condition.key] > 0);

  return (
    <div>
      <h1>Résultats</h1>
      {!result ? (
        <p>Dommage, vous retenterez votre chance la prochaine fois !</p>
      ) : (
        <p>Bravo ! Vous avez fait <strong>{result.label}</strong>. Vous avez donc gagné <strong>{result.reward} {result.reward > 1 ? 'pâtisseries' : 'pâtisserie'} !</strong></p>
      )}
    </div>
  );
}

export default Results;