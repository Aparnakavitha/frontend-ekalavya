import React from "react";
import Skillsearch from "./layouts/mentor-skill/components/Skillsearch";
import "./App.css";
import { skillcard } from "./layouts/mentor-skill/components/skillData";

function App() {
  const handleSearch = (query) => {
    console.log("Search query:", query);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h3>Hello Super21</h3>
        <h1>Let's start</h1>
        <Skillsearch
          heading="Skills"
          subheading="add skills to students"
          searchBarPlaceholder="Student Name/Student ID"
          skillcard={skillcard}
          onSearch={handleSearch}
        />
      </header>
    </div>
  );
}

export default App;
