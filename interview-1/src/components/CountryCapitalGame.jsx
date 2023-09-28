import { useState } from "react";

const randomArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const isPair = (options, isSelected, optionName) => {
  return options.filter(
    (opt) => !(opt.name === optionName || opt.name === isSelected)
  );
};

const isnotPair = (options, isSelected, optionName) => {
  return options.map((opt) => {
    if (opt.name === optionName) return { name: optionName, state: "wrong" };
    if (opt.name === isSelected) return { name: isSelected, state: "wrong" };
    return opt;
  });
};

const CountryCapitalGame = ({ data }) => {
  const capitals = Object.values(data);
  const countries = Object.keys(data);
  const [options, setOptions] = useState(
    randomArray(
      capitals.concat(countries).map((option) => ({
        name: option,
        state: "default",
      }))
    )
  );
  const [isSelected, setIsSelected] = useState(null);

  const isCountry = (opt) => {
    if (countries.includes(opt)) return true;
    return false;
  };

  const handelSubmit = (option) => {
    if (!isSelected) {
      setIsSelected(option.name);
      setOptions(
        options.map((opt) => {
          if (opt.name === option.name)
            return { name: option.name, state: "selected" };
          return { name: opt.name, state: "default" };
        })
      );
    } else {
      if (!isCountry(option.name) && !isCountry(isSelected)) {
        setOptions(isnotPair(options, isSelected, option.name));
      } else {
        if (isCountry(option.name)) {
          if (data[option.name] === isSelected) {
            setOptions(isPair(options, isSelected, option.name));
          } else {
            setOptions(isnotPair(options, isSelected, option.name));
          }
        } else {
          if (data[isSelected] === option.name) {
            setOptions(isPair(options, isSelected, option.name));
          } else {
            setOptions(isnotPair(options, isSelected, option.name));
          }
        }
      }
      setIsSelected(null);
    }
  };

  return (
    <>
      {options.map((option) => (
        <button
          key={option.name}
          onClick={() => handelSubmit(option)}
          className={`text-white text-xl p-2 m-1 rounded border-2 border-white hover:border-violet-600 transition duration-300 ${
            option.state === "default"
              ? "bg-grey"
              : option.state === "selected"
              ? "bg-blue"
              : option.state === "wrong"
              ? "bg-red"
              : ""
          }`}
        >
          {option.name}
        </button>
      ))}
      {options.length === 0 ? (
        <div className="text-white text-xl">Congratulations</div>
      ) : (
        ""
      )}
    </>
  );
};

export default CountryCapitalGame;
