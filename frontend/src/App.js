
import './App.css';
import Card from './Components/SkillUser/SkillUser';
const skills = {
  miniHeading: "Student",
  mainHeading: "John Doe",
  skills: ["Java", "HTML"],
  handleClick: (e) => {
    console.log("clicked");
  },
};
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Hello Super21</h3>
        <h1>Lets start</h1>
        <Card {...skills}/>    

      </header>
      </div>
  );
}

export default App;
