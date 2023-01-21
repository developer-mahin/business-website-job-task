import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Contact from "../Pages/ContactUs/Contact";
import Home from "../Pages/Home/home/Home";
import Pricing from "../Pages/Pricing/Pricing";
import ProductsPage from "../Pages/Products/ProductsPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/products",
                element: <ProductsPage></ProductsPage>
            },
            {
                path: "/pricing",
                element: <Pricing></Pricing>
            },
            {
                path: "/contact_us",
                element: <Contact></Contact>
            }
        ]
    }
])

export default router;