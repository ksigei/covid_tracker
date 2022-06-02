import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCountries } from '../Redux/Countries/actions';
import './Sass/Details.scss';

const Details = () => {
  const { countryName } = useParams();
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  useEffect(() => {
    dispatch(getCountries());
  }, []);
  return (
    <div className="container">
      {countries.map((country) => (
        <div key={country.id}>
          {country.country === countryName && (
            <div>
              <div className="flex">
                <h3 className="title">Country:</h3>
                <h3 className="#">{country.country}</h3>
              </div>
              <img src={country.flag} alt="covid-images" />
              <div className="flex">
                <h3 className="title">Population:</h3>
                <h3 className="t_bg">{country.population}</h3>
              </div>
              <div className="flex">
                <h3 className="title">Cases:</h3>
                <h3 className="t_bg">{country.cases}</h3>
              </div>
              <div className="flex">
                <h3 className="title">Cases Today:</h3>
                <h3 className="t_bg">{country.todayCases}</h3>
              </div>
              <div className="flex">
                <h3 className="title">Deaths:</h3>
                <h3 className="t_bg">{country.deaths}</h3>
              </div>
              <div className="flex">
                <h3 className="title">Deaths Today:</h3>
                <h3 className="t_bg">{country.todayDeaths}</h3>
              </div>
              <div className="flex">
                <h3 className="title">Recovered:</h3>
                <h3 className="t_bg">{country.recovered}</h3>
              </div>
              <div className="flex">
                <h3 className="title">Recovered Today:</h3>
                <h3 className="t_bg">{country.todayRecovered}</h3>
              </div>
              <div className="flex">
                <h3 className="title">Active:</h3>
                <h3 className="t_bg">{country.active}</h3>
              </div>
              <div className="flex">
                <h3 className="title">Critical:</h3>
                <h3 className="t_bg">{country.critical}</h3>
              </div>
              <div className="flex">
                <h3 className="title">Tests:</h3>
                <h3 className="t_bg">{country.tests}</h3>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Details;
