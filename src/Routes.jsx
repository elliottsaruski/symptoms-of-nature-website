import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Feed from "./pages/Feed";
import Artists from "./pages/Artists";
import Frontpage from "./pages/Frontpage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Frontpage />}>
      <Route index path="/feed" element={<Feed />} />
      <Route path="/artists" element={<Artists />}>
        {/* <Route path=""/> */}
      </Route>
    </Route>
  )
);

export default router;
