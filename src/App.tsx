import "./App.css";
import Map from "./map";

const App = () => {
  return (
    <div className="App">
      <h1>Hi! 👋</h1>
      <p>
        This is a simple application to showcase some <em>Deck.gl</em> and{" "}
        <em>CARTO Maps</em> features.
      </p>
      <p>Move around by dragging your screen to navigate.</p>
      <Map />
    </div>
  );
};

export default App;
