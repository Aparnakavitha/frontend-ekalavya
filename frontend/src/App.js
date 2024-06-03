import "./App.css";
import AdminMentorAction from "./layouts/admin-mentor/components/AdminMentorAction";
import AdminStudentAction from "./layouts/admin-student/components/AdminStudentAction";

function App() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <h3>Hello Super21</h3>
          <h1>Lets start</h1>
          <AdminStudentAction/>
          <AdminMentorAction/>
        </header>
      </div>
    </div>
  );
}

export default App;
