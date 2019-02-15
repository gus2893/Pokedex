import { combineReducers } from 'redux';
import PokemonReducer from './PokemonReducer';

export default combineReducers({
    pokemon: PokemonReducer
});