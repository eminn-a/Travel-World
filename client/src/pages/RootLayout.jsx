import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const RouterLayout = () => {
  return (
    <>
      <Navbar />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </>
  );
};

export default RouterLayout;
