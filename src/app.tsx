import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Page } from "./pages/page";

export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Page />} />
				<Route path="/User/:id/:post?" element={<Page />} />
			</Routes>
		</BrowserRouter>
	);
};
