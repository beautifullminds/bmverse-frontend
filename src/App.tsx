import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import BMgame from "pages/BMgame";
import BMgalaxy from "pages/BMgalaxy";
import BMmusic from "pages/BMmusic";
import BMcard from "pages/BMcard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/bmgame" element={<BMgame />} />
        <Route path="/bmgalaxy" element={<BMgalaxy />} />
        <Route path="/bmmusic" element={<BMmusic />} />
        <Route path="/bmcard" element={<BMcard />} />
      </Routes>
    </Router>
  );
}

export default App;
