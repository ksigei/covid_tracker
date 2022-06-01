import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers, legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import continentsReducer from './Continents/Reducers/continentsReducer';
import countriesReducer from './Countries/Reducers/countriesReducer';

const rootReducer = combineReducers({
  continents: continentsReducer,
  countries: countriesReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
