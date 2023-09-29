import { useState } from "react";
import "./App.css";

const arr = ["play cricket", "play video games", "read book"];

function App() {
  const [checkBoxArray, setCheckBoxArray] = useState(arr);
  const [isChecked, setIsChecked] = useState([]);

  const handelChange = (item) => {
    if (!isChecked.includes(item)) setIsChecked([...isChecked, item]);
    else {
      setIsChecked(isChecked.filter((isCheckedItem) => isCheckedItem !== item));
    }
  };

  const handelDeleteBtn = (iteam) => {
    setCheckBoxArray(
      checkBoxArray.filter((checkBoxItem) => checkBoxItem !== iteam)
    );
  };

  return (
    <div className="box">
      {checkBoxArray.map((item) => (
        <label key={item} className="checkbox-label">
          <input
            type="checkbox"
            value={item}
            className="checkbox-input"
            onChange={() => handelChange(item)}
          />
          {item}
          <button
            className={`${isChecked.includes(item) ? "" : "invisible"}`}
            onClick={() => handelDeleteBtn(item)}
          >
            delete
          </button>
        </label>
      ))}
    </div>
  );
}

export default App;
