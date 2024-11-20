import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import HomeLayout from "../layouts/HomeLayout";
import BrandsPage from "../components/Pages/BrandsPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <HomeLayout />,
                loader: () => fetch('/public/data.json'),
            },
            {
                path: '/brands',
                element: <BrandsPage />
            }
        ]

    }
])

export default router;