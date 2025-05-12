import { Outlet } from "react-router";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";

const CommonLayout = () => {
  return (
    <>
      <Navbar />
      <main className="w-full">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default CommonLayout;
