
import './App.css';
import './Components/Inputbox/Input';

import Input from './Components/Inputbox/Input';

function App() {
  const inputData = {
    label: 'Enter email addresses', 
    width: "800px",
    height: "57px",
    placeholders: ['Address 1', 'Address 2', 'Address 3'] 
}
  return (
    <div className="App">
      <header className="App-header">
        <h3>Hello Super21</h3>
        <h1>Lets start</h1>
        <Input{...inputData}/>
      </header>
    </div>
  );
}

export default App;
