import "./App.css";
import AdminBatchSearch from "./layouts/admin-batches/components/AdminBatchSearch";
import AdminEventAction from "./layouts/admin-event/components/AdminEventAction";
import AdminMentorAction from "./layouts/admin-mentor/components/AdminMentorAction";
import AdminStudentAction from "./layouts/admin-student/components/AdminStudentAction";
import AdminBatchAction from "./layouts/admin-batches/components/AdminBatchAction";
import AdminSkillAction from "./layouts/admin-skill/components/AdminSkillAction";
import AdminStudentGreeting from "./layouts/admin-student/components/AdminStudentGreeting";
import AdminStudentProfile from "./layouts/admin-student/components/AdminStudentProfile";
import Mentor from "./pages/admin/Mentor/Mentor";
import Event from "./pages/admin/Events/Event";

function App() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <h3>Hello Super21</h3>
          <h1>Lets start</h1>
          {/* <div>
            <Mentor/>
          </div> */}
          <div>
            <Event/>
          </div>
          {/* <div>
          <AdminStudentAction/>
          </div>
          <div>
          <AdminMentorAction/>
          </div>
          <div>
          <AdminEventAction/>
          </div>
          <div>
          <AdminBatchSearch/>
          </div>
          <div>
          <AdminBatchAction/>
          </div>
          <div>
            <AdminSkillAction/>
          </div>
          <div>
            <AdminStudentGreeting/>
          </div>
          <div>
            <AdminStudentProfile/>
            </div> */}
        </header>
      </div>
    </div>
  );
}

export default App;
