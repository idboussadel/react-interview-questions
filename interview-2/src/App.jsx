import { useState } from "react";
import "./App.css";

const countries = [
  { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
  { name: "United States", value: "US", cities: ["New York", "Los Angeles"] },
  { name: "Japan", value: "JP", cities: ["Tokyo", "Osaka"] },
];

function App() {
  const [cities, setCities] = useState(["Delhi", "Mumbai"]);

  const handelChange = (countryName) => {
    const selectedCountry = countries.find(
      (country) => country.name === countryName
    );
    setCities(selectedCountry.cities);
  };

  return (
    <div className="box">
      <select onChange={(e) => handelChange(e.target.value)}>
        {countries.map((country) => (
          <option key={country.value} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>
      <select>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
}

export default App;
