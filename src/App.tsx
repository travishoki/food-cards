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
			</FoodFiltersProvider>
		</FoodsProvider>
	</CardViewProvider>
);
