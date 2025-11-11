import {
  Navigate,
  useLocation,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useNavigate } from "react-router-dom";

import Header from "./components/Header/Header";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute ";
import ContactConfirmation from "./components/FormContact/ContactConfirmation";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import Stay from "./pages/Stay/Stay";
import StayView from "./pages/StayView/StayView";
import ContactForm from "./pages/ContactForm/ContactForm";
import Activities from "./pages/Activities/Activities";
import MyList from "./pages/MyList/MyList";
import Backoffice from "./pages/Backoffice/Backoffice";

import LoginPage from "./pages/LoginPage/LoginPage";

import "./App.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [token, setToken] = useLocalStorage("token", null);
  const location = useLocation();
  const navigate = useNavigate();
  const hideLayout = ["/contact-confirmation", "/login-page"].includes(
    location.pathname
  );

  console.log("Current token:", token);

  const handleLogin = (newToken) => {
    setToken(newToken);
  };

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("favorites");
    navigate("/");
  };

  return (
    <>
      {!hideLayout && <Header token={token} onLogout={handleLogout} />}
      <main className="bg-body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stay" element={<Stay />} />
          <Route path="/stayview/:id" element={<StayView />} />
          <Route path="/contact-form" element={<ContactForm />} />
          <Route
            path="/login-page"
            element={<LoginPage onLogin={handleLogin} />}
          />
          <Route path="/activities" element={<Activities />} />
          <Route
            path="/contact-confirmation"
            element={<ContactConfirmation />}
          />
          <Route
            path="/my-list"
            element={
              <ProtectedRoute allowedRoles={["admin", "guest"]}>
                <MyList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/backoffice"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <Backoffice />
              </ProtectedRoute>
            }
          />

          <Route />
        </Routes>
      </main>
      {!hideLayout && <Footer />}
      <ToastContainer position="top-center" autoClose={2500} />
    </>
  );
}

export default App;
