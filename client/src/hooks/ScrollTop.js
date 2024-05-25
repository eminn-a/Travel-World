import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const scrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log("Navigated to:", pathname);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

export default scrollToTop;
