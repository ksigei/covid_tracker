import { GET_COUNTRIES } from '../actions';

const initState = {
  countries: [],
};

const countriesReducer = (state = initState.countries, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return action.payload;
    default:
      return state;
  }
};

export default countriesReducer;
