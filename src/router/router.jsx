import {
    createBrowserRouter,
    
  } from "react-router-dom";

import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AllJobs from "../pages/AllJobs/AllJobs";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'register',
            element:<Register></Register>
        },
        {
          path:"login",
          element:<Login></Login>
        },
        {
          path:'alljobs',
          element:<AllJobs></AllJobs>
        }
      ]
    },
  ]);

  export default router;