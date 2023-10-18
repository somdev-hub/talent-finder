import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Placement from "./pages/Placement/Placement";
import Hire from "./pages/Hire/Hire";
import BookFreeTrial from "./pages/BookFreeTrial/BookFreeTrial";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/placement" element={<Placement />} />
        <Route exact path="/hire" element={<Hire />} />
        <Route exact path="/bookfreetrial" element={<BookFreeTrial />} />
      </Routes>

      {/* <LandingPage /> */}
    </BrowserRouter>
  );
}

export default App;
