import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./custom/Header";
import Cities from "./modulesComps/Cities";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/cities" element={<Cities />} />
      </Routes>
    </Router>
  );
}

export default App;
