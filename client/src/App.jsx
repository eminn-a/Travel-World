import { Routes, Route } from "react-router-dom";
import useScrollToTop from "./hooks/useScrollToTop";

import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import AboutPage from "./pages/AboutPage";
import CatalogPage from "./pages/CatalogPage";
import ContactsPage from "./pages/ContactsPage";
import HomePage from "./pages/HomePage";

import { Toaster } from "react-hot-toast";

function App() {
  useScrollToTop();

  return (
    <>
      <Navbar />
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{
          success: {
            iconTheme: {
              primary: "white",
              secondary: "black",
            },
            style: {
              background: "#92E981",
            },
          },
          error: {
            style: {
              background: "#ffb3b8",
            },
          },
          style: {
            borderRadius: "50px",
            fontSize: "20px",
            fontWeight: "600",
            padding: "15px 70px",
          },
        }}
      />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
