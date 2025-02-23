import "./App.css";
import heroes from "../public/heroes.json";
import Header from "./components/Header.jsx";
import Card from "./components/Card.jsx";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        {heroes.map((hero, index) => (
          <Card key={index} hero={hero} />
        ))}
      </div>
    </div>
  );
}

export default App;
