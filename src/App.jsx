import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Placement from "./pages/Placement/Placement";
import Hire from "./pages/Hire/Hire";
import BookFreeTrial from "./pages/BookFreeTrial/BookFreeTrial";
import PlacementForm from "./pages/PlacementForm/PlacementForm";
import Hireform from "./pages/HireForm/Hireform";
import Loader1 from "./pages/Loader/Loader1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/placement" element={<Placement />} />
        <Route exact path="/hire" element={<Hire />} />
        <Route exact path="/bookfreetrial" element={<BookFreeTrial />} />
        <Route exact path="/placement-form" element={<PlacementForm />} />

        <Route exact path="/hire-form" element={<Hireform />} />
        <Route exact path="/loader" element={<Loader1 />} />
      </Routes>

      {/* <LandingPage /> */}
    </BrowserRouter>
  );
}

export default App;
