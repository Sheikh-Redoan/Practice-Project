import { Outlet } from "react-router";
import Footer from "../shared/Footer/Footer";

const CommonLayout = () => {
  return (
    <>
      <main className="w-full">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default CommonLayout;
