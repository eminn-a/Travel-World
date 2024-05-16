import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Catalog from "./pages/Catalog";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <Catalog />
      <Footer />
    </>
  );
}

export default App;
