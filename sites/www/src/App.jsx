import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Backoffice from "./pages/Backoffice/Backoffice";
import "./App.css";

function App() {
  return (
    <>
      <main className="bg-body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/backoffice" element={<Backoffice />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
