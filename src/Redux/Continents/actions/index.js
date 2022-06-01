/* eslint-disable array-callback-return */
import axios from 'axios';

export const GET_CONTINENTS = 'CET_CONTINENTS';
export const getContinents = () => async (dispatch) => {
  const getContinents = await axios.get('https://corona.lmao.ninja/v3/covid-19/continents');
  const continents = await getContinents.data;
  const continentsArr = [];
  continents.map((continent) => {
    continentsArr.push({
      id: continent.continent,
      continent: continent.continent,
      cases: continent.cases,
      deaths: continent.deaths,
      active: continent.active,
      tests: continent.tests,
      population: continent.population,
      countries: continent.countries,
    });
  });
  dispatch({
    type: GET_CONTINENTS,
    payload: continentsArr,
  });
};

export default { GET_CONTINENTS, getContinents };
