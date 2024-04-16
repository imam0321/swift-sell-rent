import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import About from "../pages/About/About";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
    {
      path: '/',
      element: <Home></Home>
    },
    {
      path: '/about',
      element: <About></About>
    },
    {
      path: '/signIn',
      element: <SignIn></SignIn>
    },
    {
      path: '/signUp',
      element: <SignUp></SignUp>
    }
    ]
  },
]);
