import pokiApi from '../api/pokiApi';

export const fetchPokemon = pokemonId => async dispatch => {
   const response = await pokiApi.get(`pokemon/${pokemonId}`);

   dispatch({type: 'FETCH_POKEMON' , payload: response});
}