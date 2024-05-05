import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from "../pages/home";
import App from "../App";
import Product from "../pages/product";
import Login from "@/pages/Login";
import ForgotPassword from "@/pages/forgotPassword";
import Register from "@/pages/Register";
import News from "@/pages/news";
import {
  BePatner,
  Business,
  Culture,
  Earth,
  Health,
  Innovation,
  Sports,
  Travel,
  Video,
  Weather
} from "@/pages/SubNavPages/export.js"

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "login",
          element: <Login />
        },
        {
          path: "/forget-password",
          element: <ForgotPassword />
        },
        {
          path: "/sign-up",
          element: <Register />
        },
        {
          path: "/news",
          element: <News />
        },
        {
          path: "/sports",
          element: <Sports />
        },
        {
          path: "/business",
          element: <Business />
        },
        {
          path: "/Innovation",
          element: <Innovation />
        },
        {
          path: "/culture",
          element: <Culture />
        },
        {
          path: "/travel",
          element: <Travel />
        },
        {
          path: "/earth",
          element: <Earth />
        },
        {
          path: "/video",
          element: <Video />
        },
        {
          path: "/weather",
          element: <Weather />
        },
        {
          path: "/health",
          element: <Health />
        },
        {
          path: "/bepatner",
          element: <BePatner />
        }
      ]
    }
  ]
);

export default router