import { useState, useEffect } from "react";
import "./App.css";

const getRandomColor = () => {
  const hexCharacters = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  let color = "";
  for (let i = 0; i < 6; i++) {
    color += hexCharacters[Math.floor(Math.random() * 16)];
  }
  return "#" + color;
};

const getRandomArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i + 1);
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

function App() {
  const [color, setColor] = useState(getRandomColor());
  const [choices, setChoices] = useState(
    getRandomArray([color, getRandomColor(), getRandomColor()])
  );
  const [sentence, setSentence] = useState(null);

  useEffect(() => {
    console.log("Color:", color);
    console.log("Choices:", choices);
    console.log("Sentence:", sentence);
  });

  const handelSubmit = (choice) => {
    if (choice === color) {
      setSentence("Correct");
      const newColor = getRandomColor();
      setColor(newColor);
      setChoices(
        getRandomArray([newColor, getRandomColor(), getRandomColor()])
      );
      setTimeout(() => {
        setSentence(null);
      }, 3000);
    } else {
      setSentence("Wrong");
      setTimeout(() => {
        setSentence(null);
      }, 3000);
    }
  };

  return (
    <div className="container">
      <div className="color-box" style={{ backgroundColor: color }}></div>
      <div className="color-choices">
        {choices.map((choice) => (
          <button key={choice} onClick={() => handelSubmit(choice)}>
            {choice}
          </button>
        ))}
      </div>
      <p
        className="answer"
        style={{ color: sentence === "Correct" ? "#4CAF50" : "#FF7F7F" }}
      >
        {sentence}
      </p>
    </div>
  );
}

export default App;
