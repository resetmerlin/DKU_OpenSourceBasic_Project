import { createHashRouter } from "react-router-dom";
import { HomePage } from "../components/home";

const router = createHashRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

export default router;
