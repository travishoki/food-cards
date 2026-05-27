import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { App } from "./App";
import { FoodPage } from "./FoodPage/FoodPage";
import { FoodsPage } from "./FoodsPage/FoodsPage";
import "./index.scss";

const router = createBrowserRouter([
	{
		children: [
			{ element: <FoodsPage />, index: true },
			{ element: <FoodPage />, path: "food/:foodName" },
			{ element: <FoodsPage />, path: ":location" },
			{ element: <FoodPage />, path: ":location/food/:foodName" },
		],
		element: <App />,
		path: "/",
	},
]);

createRoot(document.getElementById("root")!).render(
	<RouterProvider router={router} />,
);
