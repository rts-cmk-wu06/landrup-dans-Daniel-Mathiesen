// React router dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import WelcomePage from "./pages/Welcome";
import ActivitiesPage from "./pages/Activities";
import ActivityDetailPage from "./pages/ActivityDetails";
import SearchPage from "./pages/Search";
import CalenderPage from "./pages/Calender";
import ActivityParticipantsDetailPage from "./pages/ActivityParticipantsDetail"
import LoginPage from "./pages/Login";

function App() {
  return (
    <div className="App"> 
      <Router>
        <Routes>
          <Route exact path="/" element={<WelcomePage />} />
          <Route exact path="/activities" element={<ActivitiesPage />} />
          <Route exact path="/activity/:classId" element={<ActivityDetailPage />} />
          <Route exact path="/search" element={<SearchPage />} />
          <Route exact path="/calender" element={<CalenderPage />} />
          <Route exact path="/calender/participants/:classId" element={<ActivityParticipantsDetailPage />} />
          <Route exact path="/login" element={<LoginPage />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
