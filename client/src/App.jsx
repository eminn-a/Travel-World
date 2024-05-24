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
      <Toaster position="bottom-right" reverseOrder={false} richColor />

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
