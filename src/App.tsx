import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import "./App.css";
import BMgame from "pages/BMgame";
import BMgalaxy from "pages/BMgalaxy";
import BMmusic from "pages/BMmusic";
import BMcard from "pages/BMcard";
import BMmega from "pages/BMmega";
import BMjewel from "pages/BMjewel";
import BMlearn from "pages/BMlearn";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/bmgame" />} />
        <Route path="/bmgame" element={<BMgame />} />
        <Route path="/bmgalaxy" element={<BMgalaxy />} />
        <Route path="/bmmusic" element={<BMmusic />} />
        <Route path="/bmcard" element={<BMcard />} />
        <Route path="/bmmega" element={<BMmega />} />
        <Route path="/bmjewel" element={<BMjewel />} />
        <Route path="/bmlearn" element={<BMlearn />} />
      </Routes>
    </Router>
  );
}

export default App;
