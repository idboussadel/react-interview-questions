import { useState } from "react";
import "./App.css";

const options = ["football", "video games", "bascketball"];
const days = ["weekday", "weekend"];

function App() {
  const [day, setDay] = useState(null);
  const [hobbie, sethobbie] = useState(null);

  const handelChangeHobbies = (hobbie) => {
    sethobbie(hobbie);
  };
  const handelChangeDays = (day) => {
    setDay(day);
  };

  return (
    <div className="box">
      <div className="hobbies">
        {options.map((option) => (
          <label key={option}>
            <input
              type="radio"
              name="hobbies"
              value={option}
              onChange={() => handelChangeHobbies(option)}
            />
            {option}
          </label>
        ))}
      </div>
      <div className="days">
        {days.map((day) => (
          <label key={day}>
            <input
              type="radio"
              name="days"
              value={day}
              onChange={() => handelChangeDays(day)}
            />
            {day}
          </label>
        ))}
      </div>
      <p>{hobbie && day && `${hobbie} on ${day}`}</p>
    </div>
  );
}

export default App;
