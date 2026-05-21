import { Outlet } from "react-router-dom";

import { CardViewProvider } from "./context/CardViewContext";

export const App = () => (
	<CardViewProvider>
		<h1 id="top">Food Cards</h1>
		<Outlet />
	</CardViewProvider>
);
