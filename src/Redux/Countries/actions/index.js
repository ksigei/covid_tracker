/* eslint-disable array-callback-return */
import axios from 'axios';

export const GET_COUNTRIES = 'GET_COUNTRIES';
export const getCountries = () => async (dispatch) => {
  const getCountries = await axios.get('https://corona.lmao.ninja/v3/covid-19/countries');
  const countries = await getCountries.data;
  const countriesArr = [];
  countries.map((country) => {
    countriesArr.push({
      id: country.country,
      country: country.country,
      cases: country.cases,
      todayCases: country.todayCases,
      deaths: country.deaths,
      todayDeaths: country.todayDeaths,
      recovered: country.recovered,
      todayRecovered: country.todayRecovered,
      active: country.active,
      critical: country.critical,
      tests: country.tests,
      population: country.population,
      continent: country.continent,
      flag: country.countryInfo.flag,
    });
  });
  dispatch({
    type: GET_COUNTRIES,
    payload: countriesArr,
  });
};

export default { GET_COUNTRIES, getCountries };
