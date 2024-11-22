import React, { useState } from "react";
import { animals } from "./data/AnimalsDb"; // Import the animal database
import "./App.css"; // Import CSS for styling

function App() {
  // Default animal (first in the array) and default result
  const [currentAnimal, setCurrentAnimal] = useState(animals[0]);
  const [result, setResult] = useState("...");

  // Handle click on an animal image
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
      <div className="game-container">
        {/* Result Section */}
        <div className="result-section">
          <h3>Result</h3>
          <p>{result}</p>
        </div>

        {/* Animal Name Section */}
        <div className="animal-name-section">
          <h3>Animal Name</h3>
          <p>{currentAnimal.name}</p>
        </div>

        {/* Animal Selection Section */}
        <div className="animal-selection-section">
          <h3>Select the Animal</h3>
          <div className="animal-grid">
            {animals.map((animal) => (
              <div
                key={animal.name}
                className="animal-card"
                onClick={() => handleAnimalClick(animal)}
              >
                <img src={animal.img} alt={animal.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
