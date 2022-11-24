import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import BMgame from "pages/BMgame";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/bmgame" element={<BMgame />} />
      </Routes>
    </Router>
  );
}

export default App;
