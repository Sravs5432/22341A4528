import { Routes, Route } from "react-router-dom";
import UrlShortener from "./pages/UrlShortener";
import UrlStats from "./pages/UrlStats";
import RedirectHandler from "./pages/RedirectHandler";

function App() {
  return (
    <Routes>
      <Route path="/" element={<UrlShortener />} />
      <Route path="/stats" element={<UrlStats />} />
      <Route path="/:shortcode" element={<RedirectHandler />} />
    </Routes>
  );
}

export default App;
