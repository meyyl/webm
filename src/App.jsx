import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthUI from "./pages/Login";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<AuthUI />} />
        {/* <Route path="/register" element={<RegisterPage />} />
        <Route path="/product" element={<Product />} />
        <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
