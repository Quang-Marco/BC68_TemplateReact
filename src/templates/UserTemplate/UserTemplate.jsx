import { useEffect, useState } from "react";
import Header from "./../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "./../../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

const UserTemplate = () => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 700);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header />
      {isScroll && <Navbar />}
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop
        className="hover:bg-green-500 duration-300 flex items-center justify-center"
        width="16"
        height="16"
        smooth
      />
    </>
  );
};

export default UserTemplate;
