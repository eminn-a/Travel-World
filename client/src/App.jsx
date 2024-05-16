import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import CatalogItem from "./pages/Catalog";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <CatalogItem />
      <Footer />
    </>
  );
}

export default App;
