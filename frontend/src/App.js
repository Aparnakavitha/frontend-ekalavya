import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Student from "./pages/student/Student";

function App() {
  return (
    <Router>
      <div>
        <div className="App">
          <header className="App-header"></header>
          <Student />
        </div>
      </div>
    </Router>
  );
}

export default App;
