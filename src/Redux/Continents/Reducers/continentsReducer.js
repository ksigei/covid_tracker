import { GET_CONTINENTS } from '../actions';

const initState = {
  continents: [],
};

const continentsReducer = (state = initState.continents, action) => {
  switch (action.type) {
    case GET_CONTINENTS:
      return action.payload;
    default:
      return state;
  }
};

export default continentsReducer;
