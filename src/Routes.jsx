import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";

export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element:<Home></Home>
        },
        {
            path: 'about',
            element:<About></About>
        },
        {
            path:'projects',
            element:<Projects></Projects>
        },
        {
            path:'contact',
            element: <Contact></Contact>
        }
      ]
    },
    
  ]);