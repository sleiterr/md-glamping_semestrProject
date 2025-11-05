import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Backoffice from "./pages/Backoffice/Backoffice";
import Stay from "./pages/Stay/Stay";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main className="bg-body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/backoffice" element={<Backoffice />} />
          <Route path="/stay" element={<Stay />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
