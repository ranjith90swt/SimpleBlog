import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Home from "../pages/Home";
import ContactUs from "../Components/ContactUs";

const router = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        children:[
            {
                path:'/about',
                element: <About/>
            },
            {
                path: '/',
                element:<Home/>
            },
            {
                path: '/contactus',
                element: <ContactUs/>
            }
           
        ]
        
    }
])

export default router