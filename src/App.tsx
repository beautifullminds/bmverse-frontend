import { Routes, Route } from "react-router-dom";

import "./App.scss";
import BMlanding from "pages/BMblocks/BMlanding";
import BMgame from "pages/BMblocks/BMgame";
import BMgalaxy from "pages/BMblocks/BMgalaxy";
import BMmusic from "pages/BMblocks/BMmusic";
import BMcard from "pages/BMblocks/BMcard";
import BMmega from "pages/BMblocks/BMmega";
import BMjewel from "pages/BMblocks/BMjewel";
import BMlearn from "pages/BMblocks/BMlearn";
import BMcollab from "pages/BMblocks/BMcollab";
import BMpolicy from "pages/BMblocks/BMpolicy";
import AntverseMint from "pages/BMmints/AntverseMint";

function App() {
  return (
    <Routes>
      <Route path="/" element={<BMlanding />} />
      <Route path="/bmgame" element={<BMgame />} />
      <Route path="/bmgalaxy" element={<BMgalaxy />} />
      <Route path="/bmmusic" element={<BMmusic />} />
      <Route path="/bmcard" element={<BMcard />} />
      <Route path="/bmmega" element={<BMmega />} />
      <Route path="/bmjewel" element={<BMjewel />} />
      <Route path="/bmlearn" element={<BMlearn />} />
      <Route path="/bmllabs" element={<BMcollab />} />
      <Route path="/bmp" element={<BMpolicy />} />
      <Route path="/antversemint" element={<AntverseMint />} />
    </Routes>
  );
}

export default App;
