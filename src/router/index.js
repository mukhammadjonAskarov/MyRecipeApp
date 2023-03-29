import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../views/Auth/Login/Login";
import Registration from "../views/Auth/Registration/Registration";
import RecipeItem from "../components/RecipeItem/RecipeItem";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:id",
    element: <RecipeItem />,
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/registration",
    element: <Registration />,
  },
]);
