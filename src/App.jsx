import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Placement from "./pages/Placement/Placement";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage/>} />
        <Route exact path="/placement" element={<Placement/>} />
      </Routes>

      {/* <LandingPage /> */}
    </BrowserRouter>
  );
}

export default App;
