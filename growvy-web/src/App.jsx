import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Jobs from "./pages/Jobs";
// other pages will be added later

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/jobs" element={<Jobs />} />
      </Routes>
    </Router>
  );
}

export default App;
