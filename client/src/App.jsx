import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import AboutPage from "./pages/AboutPage";
import CatalogPage from "./pages/CatalogPage";
import ContactsPage from "./pages/ContactsPage";
import HomePage from "./pages/HomePage";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <>
      <Navbar />
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
