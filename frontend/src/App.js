import "./App.css";
import EducationalQualification from "./layouts/common/components/EducationalQualification";
import StudentProfileInfo from "./layouts/student-profile/components/StudentProfileInfo";
import Upcoming from "./layouts/student-profile/components/Upcoming"

function App() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <h3>Hello Super21</h3>
          <h1>Lets start</h1>
          <StudentProfileInfo />
          <EducationalQualification />
          <Upcoming />
        </header>
      </div>
    </div>
  );
}

export default App;
