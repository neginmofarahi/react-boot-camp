import React, { useState } from "react";

const App = () => {
  const [names, setNames] = useState([]);
  const [randomName, setRandomName] = useState("");

  const handleInputChange = (event) => {
    const { value } = event.target;
    setNames(value.split(",").map((name) => name.trim()));
  };

  const handleRandomizeClick = () => {
    const randomIndex = Math.floor(Math.random() * names.length);
    setRandomName(names[randomIndex]);
  };

  return (
    <div>
      <h1>Random Name Generator</h1>
      <input
        type="text"
        placeholder="Enter 5 names (comma-separated)"
        onChange={handleInputChange}
      />
      <button onClick={handleRandomizeClick}>Randomize</button>
      {randomName && (
        <p>
          Randomly selected name: <strong>{randomName}</strong>
        </p>
      )}
    </div>
  );
};

export default App;
