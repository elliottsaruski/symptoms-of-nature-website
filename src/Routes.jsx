import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Feed from "./pages/Feed";
import Artists from "./pages/Artists";
import Frontpage from "./pages/Frontpage";
import ArtistProfilePage from "./pages/ArtistProfilePage";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Frontpage />}>
      <Route path="/feed" element={<Feed />} />
      <Route path="/artists">
        <Route index element={<Artists />} />
        <Route path=":id" element={<ArtistProfilePage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />}></Route>
    </Route>
  )
);

export default router;
