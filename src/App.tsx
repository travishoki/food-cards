import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

import { AppTitle } from "./AppTitle/AppTitle";
import { CardViewProvider } from "./context/CardViewContext";
import { FoodFiltersProvider } from "./context/FoodFiltersProvider";
import { FoodsProvider } from "./context/FoodsProvider";

export const App = () => (
	<CardViewProvider>
		<FoodsProvider>
			<FoodFiltersProvider>
				<AppTitle />
				<Outlet />
				<Toaster position="bottom-center" />
			</FoodFiltersProvider>
		</FoodsProvider>
	</CardViewProvider>
);
