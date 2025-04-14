import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthUI from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Badges from "./pages/Badges";
import Calendar from "./pages/Calendar";
import CourseNotes from "./pages/CourseNotes";
import BackpackSettings from "./pages/BackpackSettings";
import NewEventModal from "./pages/NewEventModal";
import DayView from "./pages/DayView";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<AuthUI />} />
        <Route path="/badges" element={<Badges />} /> 
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/course-notes" element={<CourseNotes />} />
        <Route path="/backpack-settings" element={<BackpackSettings />} />
        <Route path="/new-event-modal" element={<NewEventModal />} />
        <Route path="/day-view" element={<DayView />} />
        {/* <Route path="/register" element={<RegisterPage />} />
        <Route path="/product" element={<Product />} />
        <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
