import { createRoot } from "react-dom/client";
import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from "react-router-dom";

import { App } from "./App";
import { FoodPage } from "./FoodPage/FoodPage";
import { FoodsPage } from "./FoodsPage/FoodsPage";
import "./index.scss";

const router = createBrowserRouter([
	{
		children: [
			{ element: <Navigate replace to="/main" />, index: true },
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
