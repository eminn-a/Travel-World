import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { UserProvider } from "../contexts/authContext";

const RouterLayout = () => {
  return (
    <UserProvider>
      <Navbar />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </UserProvider>
  );
};

export default RouterLayout;
