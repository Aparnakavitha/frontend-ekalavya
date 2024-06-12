import "./App.css";
import RouterComponent from "./routes/Router";

function App() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          {/* <h3>Hello Super21</h3>
          <h1>Lets start</h1> */}
          <RouterComponent/>
        </header>
      </div>
    </div>
  );
}

export default App;
