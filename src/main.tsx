import { createRoot } from "react-dom/client"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import { CategoryMenu } from "./CategoryMenu/CategoryMenu"
import { FoodPage } from "./FoodPage/FoodPage"
import { FoodsPage } from "./FoodsPage/FoodsPage"
import "./index.css"

function App() {
    return (
        <>
            <h1 id="top">Food Cards</h1>
            <CategoryMenu />
            <Outlet />
        </>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <FoodsPage /> },
            { path: "food/:foodName", element: <FoodPage /> },
            { path: ":topCategory", element: <FoodsPage /> },
            { path: ":topCategory/:subCategory", element: <FoodsPage /> },
        ],
    },
])

createRoot(document.getElementById("root")!).render(<RouterProvider router={router} />)
