
import { Admin_Login } from './Admin/Pages/Admin-Login/Index';
import './App.css';
import { User_Login } from './User/Pages/User-Login/Index';
import { createBrowserRouter, RouterProvider}from "react-router-dom";
import { User_Register } from './User/Pages/User-Register/Index';
import { Studio_Register } from './Studio/Pages/Studio-Register/Index';
import { Studio_home } from './Studio/Pages/studio_home';
import { Viewdetails } from './Studio/Pages/client_details';
import { Studio_Listing } from './User/Pages/Studios-List/';
import { Studio_Details } from './User/Pages/Studio-Details';
import { Admin_Panel } from './Admin/Pages/Admin Panel';
import { Admin_View } from './Admin/Pages/User View';
import { Book_Details } from './User/Pages/Book_details';
import { View_Details } from './User/Pages/View_details';
import { Studio_Login } from './Studio/Pages/Studio-Login/Index';
import { Studio_View } from './Admin/Pages/studio view';



const router = createBrowserRouter([
  {
    path:"/",
    element: <div><User_Login/></div>
  },
  
  {
    path:"/studio_register",
    element: <div><Studio_Register/></div>
  },
  

  {
    path:"/studio/login",
    element: <div><Studio_Login/></div>
  },
  {
    path:"/studio/register",
    element: <div><Studio_Register/></div>
  },
 
  {
    path:"/admin/login",
    element: <div><Admin_Login/></div>
  },

  {
    path:"/admin/panel",
    element: <div><Admin_Panel/></div>
  },
  {
    path:"/user/view/:id",
    element: <div><Admin_View/></div>
  },
  {
    path:"/studio/view/:id",
    element: <div><Studio_View/></div>
  },
  {
    path:"/user/register",
    element: <div><User_Register/></div>
  },
  {
    path:"/user/bookdetails",
    element: <div><Book_Details/></div>
  },
  {
    path:"/Studio/home",
    element: <div><Studio_home/></div>
  },
  {
    path:"/clientdetails/:id",
    element: <div><Viewdetails/></div>
  },
  {
    path:"/user/viewdetails",
    element: <div><View_Details/></div>
  },
  {
    path:"/user/studiolist",
    element: <div><Studio_Listing/></div>
    
  },
  {
    path:"/user/studiodetails/:id/",
    element: <div><Studio_Details/></div>
  }


]);

function App() {
  return(<RouterProvider router={router} />)
  
}

export default App;
