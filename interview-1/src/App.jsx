import CountryCapitalGame from "./components/CountryCapitalGame";

function App() {
  return (
    <div className="flex flex-wrap justify-center items-center h-screen bg-grey gap-2 ">
      <CountryCapitalGame data={{ Germany: "Berlin", France: "Paris" }} />
    </div>
  );
}

export default App;
