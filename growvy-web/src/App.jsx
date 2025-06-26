import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Jobs from "./pages/Jobs";
import Pricing from "./pages/Pricing";
import Success from "./pages/Success";
import ScrollToTop from "./components/ScrollToTop";
import Maintenance from "./pages/Maintenance";
// other pages will be added later

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<Maintenance />} />
      </Routes>
    </Router>
  );
}

export default App;
