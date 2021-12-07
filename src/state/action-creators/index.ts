import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";

export const searchPokemon = () => {
	return async (dispatch: Dispatch<Action>) => {
		dispatch({ type: ActionType.SEARCH_POKEMON });
		try {
			const { data } = await axios.get(
				"https://pokeapi.co/api/v2/pokemon/?limit=12"
			);
			const mons = data.results.map((i:any)=>i.name)

			dispatch({
				type: ActionType.SEARCH_POKEMON_SUCCESS,
				payload: mons,
			});
		} catch (err) {
			dispatch({ type: ActionType.SEARCH_POKEMON });
		}
	};
};

