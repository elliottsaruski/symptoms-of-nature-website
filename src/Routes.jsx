import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import LayoutPage from "./pages/LayoutPage";
import Artists from "./pages/Artists";
import ArtistProfilePage from "./pages/ArtistProfilePage";
import NotFoundPage from "./pages/NotFoundPage";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import IssuesPage from "./pages/IssuesPage";
import IssueLayout from "./pages/IssueLayout";
import HomePage from "./pages/HomePage";
import BlogPostFullPage from "./pages/BlogPostFullPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LayoutPage />}>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home">
        <Route index element={<HomePage />} />
        <Route path=":id" element={<BlogPostFullPage />} />
      </Route>
      <Route path="/about" element={<AboutPage />} />
      <Route path="/issues">
        <Route index element={<IssuesPage />} />
        <Route path=":id" element={<IssueLayout />} />
      </Route>
      <Route path="/roster">
        <Route index element={<Artists />} />
        <Route path=":id" element={<ArtistProfilePage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

export default router;
