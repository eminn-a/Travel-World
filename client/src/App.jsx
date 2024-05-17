import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About";
import CatalogItem from "./pages/Catalog";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <CatalogItem />
      <About />
      <Footer />
    </>
  );
}

export default App;
