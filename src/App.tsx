import { Outlet } from "react-router-dom";

import { AppTitle } from "./AppTitle/AppTitle";
import { CardViewProvider } from "./context/CardViewContext";
import { FoodFiltersProvider } from "./context/FoodFiltersProvider";

export const App = () => (
	<CardViewProvider>
		<FoodFiltersProvider>
			<AppTitle />
			<Outlet />
		</FoodFiltersProvider>
	</CardViewProvider>
);
