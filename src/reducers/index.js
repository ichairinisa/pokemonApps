import {combineReducers} from "redux";
const DefaultState = {
    loading: false,
    data: [],
    errorMsg: "",
    count: 0
  };
  
  const PokemonListReducer = (state = DefaultState, action) => {
    switch (action.type) {
      case "POKEMON_LIST_LOADING":
        return {
          ...state,
          loading: true,
          errorMsg: ""
        };
      case "POKEMON_LIST_FAIL":
        return {
          ...state,
          loading: false,
          errorMsg: "unable to get pokemon"
        };
      case "POKEMON_LIST_SUCCESS":
        return {
          ...state,
          loading: false,
          data: action.payload.results,
          errorMsg: "",
          count: action.payload.count
        };case "POKEMON_MULTIPLE_LOADING":
        return {
          ...state,
          loading: true,
          errorMsg: ""
        };
      case "POKEMON_MULTIPLE_FAIL":
        return {
          ...state,
          loading: false,
          errorMsg: "unable to find pokemon"
        };
      case "POKEMON_MULTIPLE_SUCCESS":
        return {
          ...state,
          loading: false,
          errorMsg: "",
          data: {
            ...state.data,
            [action.pokemonName]: action.payload
          }
        };
      default:
        return state
    }
  };
  
  export default combineReducers(PokemonListReducer);