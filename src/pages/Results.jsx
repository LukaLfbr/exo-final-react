import { useSelector } from "react-redux";
import { useGetWinPastriesQuery } from "../features/pastry";

function Results() {
  const scores = useSelector((state) => state.yams.scores);

  const conditions = [
    { key: 'yams', label: 'un yams', reward: 3 },
    { key: 'carre', label: 'un carré', reward: 2 },
    { key: 'suite', label: 'une suite', reward: 1 }
  ];
  
  const result = conditions.find(condition => scores[condition.key] > 0);
  const { data: pastries, error, isLoading } = useGetWinPastriesQuery(result ? result.reward : undefined);
  
  // Test :
  // const { data: pastries, error, isLoading } = useGetWinPastriesQuery(3); 


  return (
    <div>
      <h1>Résultats</h1>
      {!result ? (
        <p>Dommage, vous retenterez votre chance la prochaine fois !</p>
      ) : (
        <>
          <p>Bravo ! Vous avez fait <strong>{result.label}</strong>. Vous avez donc gagné <strong>{result.reward} {result.reward > 1 ? 'pâtisseries' : 'pâtisserie'}!</strong></p>
          {pastries && (
            <div className="pastryWonList">
              {pastries.map((pastry, index) => (
                <div key={index} className="wonPastry">{pastry.name}</div>
              ))}
            </div>
          )}
        </>
      )}
      <table>
        <thead>
          <tr>
            <th>Combinaisons</th>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
        {conditions.map((cond, i) => (
        <tr key={i}>
          <td>{cond.key}</td>
          <td>{scores[cond.key]}</td>
        </tr>
      ))}
        </tbody>
      </table>
    </div>
  );
}

export default Results;
