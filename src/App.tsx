import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./comps/header";
import Cities from "./parts_of_comps/cities";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="bg-[#010101] text-[#f6f4ee] min-h-[100vh] overflow-hidden">
              <Header />
            </div>
          }
        />
        <Route
          path="/cities"
          element={
            <div className="bg-[#010101] text-[#f6f4ee] min-h-[100vh] overflow-hidden">
              <Cities />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
