import React from "react";
import Pokedex from "./Pokedex";
import { Provider } from "react-redux";
import { store } from "../state";
import { Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<Provider store={store}>
			<Routes>
				<Route path={'/'} element={<Pokedex/>} />
			</Routes>
		</Provider>
	);
};

export default App;
