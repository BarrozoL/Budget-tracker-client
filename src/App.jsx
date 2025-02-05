import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import CurrentMonthPage from "./pages/CurrentMonthPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />

        <Route exact path="/months/:monthName" element={<CurrentMonthPage />} />
      </Routes>
    </Router>
  );
}

export default App;
