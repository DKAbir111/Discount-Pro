import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import HomeLayout from "../layouts/HomeLayout";
import BrandsPage from "../components/Pages/BrandsPage";
import CouponPage from "../components/Pages/CouponPage";
import Login from "../components/Pages/Login";
import Register from "../components/Pages/Register";

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
                element: <BrandsPage />,
            },
            {
                path: '/brand/:id',
                element: <CouponPage />,
                loader: ({ params }) => fetch(`/public/data.json`).then(res => res.json()).then(data => data.find(brand => brand._id === params.id)),
            },
            {
                path: '/auth/login',
                element: <Login />
            },
            {
                path: '/auth/register',
                element: <Register />
            },

        ]

    }
])

export default router;