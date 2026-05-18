import { createRoot } from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { CategoryMenu } from "./CategoryMenu/CategoryMenu";
import { FoodPage } from "./FoodPage/FoodPage";
import { FoodsPage } from "./FoodsPage/FoodsPage";
import "./index.css";

function App() {
    return (
        <>
            <h1 id="top">Food Cards</h1>
            <CategoryMenu />
            <Outlet />
        </>
    );
}

const router = createBrowserRouter([
    {
        children: [
            { element: <FoodsPage />, index: true },
            { element: <FoodPage />, path: "food/:foodName" },
            { element: <FoodsPage />, path: ":topCategory" },
            { element: <FoodPage />, path: ":topCategory/food/:foodName" },
            { element: <FoodsPage />, path: ":topCategory/:subCategory" },
            {
                element: <FoodPage />,
                path: ":topCategory/:subCategory/food/:foodName",
            },
        ],
        element: <App />,
        path: "/",
    },
]);

createRoot(document.getElementById("root")!).render(
    <RouterProvider router={router} />,
);
