import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        loader: () => fetch('/public/data.json')

    }
])

export default router;