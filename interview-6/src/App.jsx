import { useState } from "react";
import "./App.css";

const cardArray = ["1", "2", "3", "1", "2", "3"];

const getRandomArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const initializeCards = (cardArray) => {
  return getRandomArray(cardArray).map((item, index) => ({
    value: item,
    id: index,
    state: "default",
  }));
};

function App() {
  const [cards, setCards] = useState(initializeCards(cardArray));
  const [isSelected, setIsSelected] = useState(null);
  const [isClickable, setIsClickable] = useState(true);

  const handleMatch = (item) => {
    setIsSelected(null);
    setCards((prevCards) =>
      prevCards.filter((card) => item.value !== card.value)
    );
    setIsClickable(true);
  };

  const handleMismatch = () => {
    setIsSelected(null);
    setCards((prevCards) =>
      prevCards.map((card) => ({ ...card, state: "default" }))
    );
    setIsClickable(true);
  };

  const handelSubmit = ({ value, id }) => {
    if (!isClickable) return;
    if (!isSelected) {
      setIsSelected({ value, id });
      setCards((prevCards) =>
        prevCards.map((card) =>
          id === card.id ? { ...card, state: "selected" } : card
        )
      );
    } else {
      if (isSelected.value === value) {
        setIsClickable(false);
        setCards((prevCards) =>
          prevCards.map((card) =>
            id === card.id ? { ...card, state: "selected" } : card
          )
        );
        setTimeout(() => handleMatch({ value }), 200);
      } else {
        setIsClickable(false);
        setCards((prevCards) =>
          prevCards.map((card) =>
            id === card.id || card.id === isSelected.id
              ? { ...card, state: "selected" }
              : card
          )
        );
        setTimeout(handleMismatch, 1000);
      }
    }
  };

  return (
    <>
      <div className="container">
        {cards.map(({ value, state, id }, index) => (
          <div
            key={index}
            className="card"
            onClick={() => handelSubmit({ value, id })}
          >
            {state === "default" ? "" : value}
          </div>
        ))}
      </div>
      <p>{cards.length === 0 ? "Congratulations!" : ""}</p>
    </>
  );
}

export default App;
