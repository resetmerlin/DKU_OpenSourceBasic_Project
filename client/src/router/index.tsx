import { createHashRouter } from "react-router-dom";
import { HomePage } from "../components/home";
import { AboutPage } from "../components/about";

const router = createHashRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  { path: "/about", element: <AboutPage /> },
]);

export default router;
