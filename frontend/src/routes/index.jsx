import { createBrowserRouter, createRoutesFromElements, Route, Router, Routes } from "react-router-dom";
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
  Weather,
  Election
} from "@/pages/SubNavPages/export.js"
import { useSelector } from "react-redux";

// const istrue = useSelector(state=>state.auth.isAuthenticated)
// const auth = {'token':istrue}
const router = createBrowserRouter(
  
createRoutesFromElements(

      
      <Route path="/" element={<App/>}>
      <Route path="" element ={<Home/>}/>
      <Route path="/news" element={<News/>}/>
      
      <Route path="/login" element={<Login/>}/>
      <Route path="/forgot-password" element={<ForgotPassword/>}/>
      <Route path="/sign-up" element={<Register/>}/>
      <Route path="/news/business" element={<Business/>}/>
      <Route path="/news/technology" element={<Innovation/>}/>
      <Route path="/news/technology/:title" element={<Innovation/>}/>
      <Route path="/news/travel" element={<Travel/>}/>
      <Route path="/news/travel/:title" element={<Travel/>}/>
       <Route path ="/create-post" element={<BePatner/>}/> 
      
      <Route path ="/news/health" element={<Health/>}/>
      <Route path ="/news/health/:title" element={<Health/>}/>
      <Route path ="/news/video" element={<Video/>}/>
      <Route path="/news/weather" element={<Weather/>}/>
      <Route path="/news/earth" element={<Earth/>}/>
      <Route path="/news/earth/:title" element={<Earth/>}/>
      <Route path="/news/culture" element={<Culture/>}/>
      <Route path="/news/culture/:title" element={<Culture/>}/>
      <Route path="/news/sports" element={<Sports/>}/>
      <Route path="/news/sports/:title" element={<Sports/>}/>
      <Route path="/news/general-election-2024" element={<Election/>}/>
      <Route path="/news/general-election-2024/:title" element={<Election/>}/>
     </Route>
      
  
  
)    
);

export default router

// [
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "login",
//         element: <Login />
//       },
//       {
//         path: "/forget-password",
//         element: <ForgotPassword />
//       },
//       {
//         path: "/sign-up",
//         element: <Register />
//       },
//       {
//         path: "/news",
//         element: <News />
//       },
//       {
//         path: "/sports",
//         element: <Sports />
//       },
//       {
//         path: "/business",
//         element: <Business />
//       },
//       {
//         path: "/Innovation",
//         element: <Innovation />
//       },
//       {
//         path: "/culture",
//         element: <Culture />
//       },
//       {
//         path: "/travel",
//         element: <Travel />
//       },
//       {
//         path: "/earth",
//         element: <Earth />
//       },
//       {
//         path: "/video",
//         element: <Video />
//       },
//       {
//         path: "/weather",
//         element: <Weather />
//       },
//       {
//         path: "/health",
//         element: <Health />
//       },
//       {
//         path: "/bepatner",
//         element: auth.token? <BePatner /> :<Login/>
//       },
      
//     ]