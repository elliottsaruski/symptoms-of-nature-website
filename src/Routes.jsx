import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Frontpage from "./pages/Frontpage";
import Feed from "./pages/Feed";
import Artists from "./pages/Artists";
import ArtistProfilePage from "./pages/ArtistProfilePage";
import NotFoundPage from "./pages/NotFoundPage";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Frontpage />}>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<AboutPage />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/roster">
        <Route index element={<Artists />} />
        <Route path=":id" element={<ArtistProfilePage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />}></Route>
    </Route>
  )
);

export default router;
