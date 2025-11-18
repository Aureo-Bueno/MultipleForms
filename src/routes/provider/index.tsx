import { RouterProvider } from "react-router-dom";
import { router } from "../hook";

function RouterContextProvider() {
  return <RouterProvider router={router} />;
}

export { RouterContextProvider as Router };
