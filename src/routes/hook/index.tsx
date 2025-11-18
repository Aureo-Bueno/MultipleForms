import { createBrowserRouter } from "react-router-dom";
import { FormName } from "../../pages/FormName";
import { FormLevelProgram } from "../../pages/FormLevelProgram";
import { FormContact } from "../../pages/FormContact";
import { NotFound } from "../../pages/NotFound";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <FormName />,
    },
    {
      path: "/level-program",
      element: <FormLevelProgram />,
    },
    {
      path: "/contact",
      element: <FormContact />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ],
  {
    basename: "/",
  }
);
