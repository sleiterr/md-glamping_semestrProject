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
import Activities from "./pages/Activities/Activities";
import MyList from "./pages/MyList/MyList";
import ContactConfirmation from "./components/FormContact/ContactConfirmation";

import LoginPage from "./pages/LoginPage/LoginPage";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  const location = useLocation();
  const hideLayout = ["/contact-confirmation", "/login-page"].includes(
    location.pathname
  );

  return (
    <>
      {!hideLayout && <Header />}
      <main className="bg-body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stay" element={<Stay />} />
          <Route path="/stayview/:id" element={<StayView />} />
          <Route path="/contact-form" element={<ContactForm />} />
          <Route path="/login-page" element={<LoginPage />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/my-list" element={<MyList />} />
          <Route
            path="/contact-confirmation"
            element={<ContactConfirmation />}
          />
        </Routes>
      </main>
      {!hideLayout && <Footer />}
    </>
  );
}

export default App;
