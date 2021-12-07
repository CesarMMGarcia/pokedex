import React, { useState, useEffect } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const Pokedex: React.FC = () => {
	const [sorted, setSorted] = useState([]);
	const [original, setOriginal] = useState([]);
	const { searchPokemon } = useActions();
	const { loading, error, data } = useTypedSelector((state) => state.pokedex);

	useEffect(() => {
		searchPokemon();
		console.log(data);

	}, []);

	const onAlphabetizeClick = (): void => {
		setOriginal(data)
		setSorted(data.sort());
		console.log(original)
		console.log(sorted)
	};

	const onIdClick = (): void => {
		setSorted(data);
	};

	return (
		<div>
			<div>
				All the Pokemon!
				<div>
					<button onClick={onAlphabetizeClick}>Name</button>
					<button onClick={onIdClick}>ID</button>
				</div>
			</div>
			{error && <h3>{error}</h3>}
			{loading && <h3>loading...</h3>}
			{!error &&
				!loading &&
				data.map((name: any) => <div key={name}>{name}</div>)}
		</div>
	);
};

export default Pokedex;
