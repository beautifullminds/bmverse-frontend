import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.scss";
import BMlanding from "pages/BMblocks/BMlanding";
import BMgame from "pages/BMblocks/BMgame";
import BMgalaxy from "pages/BMblocks/BMgalaxy";
import BMmusic from "pages/BMblocks/BMmusic";
import BMcard from "pages/BMblocks/BMcard";
import BMmega from "pages/BMblocks/BMmega";
import BMjewel from "pages/BMblocks/BMjewel";
import BMlearn from "pages/BMblocks/BMlearn";
import AntverseMint from "pages/BMmints/AntverseMint";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BMlanding />
  },
  {
    path: "/bmgame",
    element: <BMgame />
  },
  {
    path: "/bmgalaxy",
    element: <BMgalaxy />
  },
  {
    path: "/bmmusic",
    element: <BMmusic />
  },
  {
    path: "/bmcard",
    element: <BMcard />
  },
  {
    path: "/bmmega",
    element: <BMmega />
  },
  {
    path: "/bmjewel",
    element: <BMjewel />
  },
  {
    path: "/bmlearn",
    element: <BMlearn />
  },
  {
    path: "/antversemint",
    element: <AntverseMint />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
