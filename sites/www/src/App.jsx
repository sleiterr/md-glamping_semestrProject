import {
  Navigate,
  useLocation,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Stay from "./pages/Stay/Stay";
import StayView from "./pages/StayView/StayView";
import ContactForm from "./pages/ContactForm/ContactForm";
import ContactConfirmation from "./components/FormContact/ContactConfirmation";
import Footer from "./components/Footer/Footer";
import Backoffice from "./pages/Backoffice/Backoffice";
import "./App.css";

function App() {
  const location = useLocation();
  const hideLayout = location.pathname === "/contact-confirmation";

  return (
    <>
      {!hideLayout && <Header />}
      <main className="bg-body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stay" element={<Stay />} />
          <Route path="/stayview/:id" element={<StayView />} />
          <Route path="/contact-form" element={<ContactForm />} />
          <Route
            path="/contact-confirmation"
            element={<ContactConfirmation />}
          />
          <Route path="/backoffice" element={<Backoffice />} />
        </Routes>
      </main>
      {!hideLayout && <Footer />}
    </>
  );
}

export default App;
