import {ActionType} from '../action-types';


interface SearchPokemonAction {
	type: ActionType.SEARCH_POKEMON;
}
interface SearchPokemonSuccessAction {
	type: ActionType.SEARCH_POKEMON_SUCCESS;
	payload: string[];
}
interface SearchPokemonErrorAction {
	type: ActionType.SEARCH_POKEMON_ERROR;
	payload: string;
}

export type Action =
	| SearchPokemonAction
	| SearchPokemonSuccessAction
	| SearchPokemonErrorAction;
