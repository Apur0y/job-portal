import {
    createBrowserRouter,
    
  } from "react-router-dom";

import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AllJobs from "../pages/AllJobs/AllJobs";
import Job from "../pages/AllJobs/Job";

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
          element:<AllJobs></AllJobs>,
          loader: ()=> fetch("http://localhost:3000/alljobs")
        },
        {
          path:'alljobs/:id',
          element:<Job></Job>,
          loader: async ({params})=>{
            const response = await fetch(`http://localhost:3000/alljobs/${params.id}`)
              if(!response.ok){
                throw new Error("Job not found!");
              }
              return response.json();
                        }
          },
        
      ]
    },
  ]);

  export default router;