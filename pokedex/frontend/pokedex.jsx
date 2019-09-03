import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

//testing codes
import { fetchAllPokemons } from './util/api_util';
import { receiveAllPokemons, requestAllPokemons } from './actions/pokemon_actions';
import { selectAllPokemons } from './reducers/selectors';
//testing codes

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  const store = configureStore();
  ReactDOM.render(<h1>Pokedex</h1>, rootEl);

  //testing codes
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchAllPokemons = fetchAllPokemons;
  window.receiveAllPokemons = receiveAllPokemons;
  window.requestAllPokemons = requestAllPokemons;
  window.selectAllPokemons = selectAllPokemons;
  //testing codes
});