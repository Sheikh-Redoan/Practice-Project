import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import CommonLayout from "../layouts/CommonLayout";
import ServicePage from "../pages/Services/ServicePage";
import AboutPage from "../pages/About/AboutPage";
import ContactPage from "../pages/Contact/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CommonLayout/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/services",
        element: <ServicePage/>,
      },
      {
        path: "/about_us",
        element: <AboutPage/>,
      },
      {
        path: "/contact",
        element: <ContactPage/>,
      },
    ],
  },
  {
    path: "/sign-in",
    element: <div>Your element name</div>,
  },
]);

export default router;
