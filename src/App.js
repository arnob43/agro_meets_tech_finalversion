import './App.css';
import Forecast from "./components/Forecast/Forecast";
import './index.css';

function App() {
  return (
    <div className="App">
      <h1>Forecast-based farming App</h1>
      <main>
        {/* add weather fetching component */}
        <Forecast />
      </main>
      <footer>
        AGRO MEETS TECH : Mozaffar khider and Shilajit Datta
      </footer>
    </div>
  );
}

export default App;
