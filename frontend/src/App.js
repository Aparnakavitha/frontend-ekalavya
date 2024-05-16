import Filter from './Components/Filter/Filter';
import './App.css';

function App() {
  const handleDropClick = (selectedOption) => {
    console.log("Selected option:", selectedOption);
  };

  const heading = "q";
  const content = [
    "rc",
    "",
    "",
    "",
  ];

  return (
    <div className="App">
      {/* <h1>My Application</h1> */}
      <Filter Heading={heading} Content={content} handleDropClick={handleDropClick} />
    </div>
  );
}
export default App;
