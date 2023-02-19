import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../views/Auth/Login/Login";
import Registration from "../views/Auth/Registration/Registration";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/auth/login',
        element: <Login />
    },
    {
        path: '/auth/registration',
        element: <Registration />
    },
]) 