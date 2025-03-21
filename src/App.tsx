import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ComingSoon from "./pages/comingSoon";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ComingSoon />} />
      </Routes>
    </Router>
  );
}

export default App;
