import {createStore} from 'redux';

const initialState = {
  loading: false,
  name: 'Hairinisa Pratiwi',
  address: 'Bintaro',
};

const reducer = (state = initialState, action) => {
  if (action.type === 'SET_LOADING') {
    return {
      ...state,
      loading: action.value,
    };
  }
  if (action.type === 'SET_NAME') {
    return {
      ...state,
      name: 'Azzamy',
    };
  }
  return state;
};

const store = createStore(reducer);

export default store;
