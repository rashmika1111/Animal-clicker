import React, { useState } from "react";
import { animals } from "./data/AnimalsDb"; 
import "./App.css";

function App() {
  const [currentAnimal, setCurrentAnimal] = useState(animals[0]);
  const [result, setResult] = useState("...");

 
  const handleAnimalClick = (selectedAnimal) => {
    if (selectedAnimal.name === currentAnimal.name) {
      setResult("WIN");
    } else {
      setResult("LOSE");
    }
    setCurrentAnimal(selectedAnimal); // Update current animal
  };

  return (
    <div className="app">
      <h1>Animal Matching Game</h1>
      <div className="game-layout">
      
        <div className="left-section">
          <div className="result-section">
            <h3>Result</h3>
            <p>{result}</p>
          </div>
          <div className="animal-name-section">
            <h3>Animal Name</h3>
            <p>{currentAnimal.name}</p>
          </div>
        </div>

       
        <div className="right-section">
          <table className="animal-table">
            <tbody>
              {Array.from({ length: 4 }, (_, rowIndex) => (
                <tr key={rowIndex}>
                  {animals
                    .slice(rowIndex * 4, rowIndex * 4 + 4)
                    .map((animal) => (
                      <td
                        key={animal.name}
                        className="animal-card"
                        onClick={() => handleAnimalClick(animal)}
                      >
                        
                        <img
                          src={require(`./assets/${animal.img}`)}
                          alt={animal.name}
                        />
                      </td>
                    ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
