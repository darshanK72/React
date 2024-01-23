import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import About from "./Components/About/About.jsx";
import Home from "./Components/Home/Home.jsx";
import Search from "./Components/Search/Search.jsx";
import User from "./Components/User/User.jsx";
import "./index.css";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       { path: "/about", element: <About /> },
//       { path: "/home", element: <Home /> },
//       { path: "/search", element: <Search /> },
//       { path: "/user/:userId", element: <User /> },
//     ],
//   },
// ]);


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path="/about" element={<About/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/search" element={<Search/>}/>
      <Route path="/user/:userId" element={<User/>}/>
    </Route> 
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
