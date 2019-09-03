import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";

export const receiveAllPokemons = (pokemons) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemons
});

export const requestAllPokemons = () => (dispatch) => {
    return APIUtil.fetchAllPokemons()
      .then(pokemons => dispatch(receiveAllPokemons(pokemons)))
};