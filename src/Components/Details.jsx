import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCountries } from '../Redux/Countries/actions';
import './Sass/Countries.scss';

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
              <div>
                <h3>Country:</h3>
                <h3 className="#">{country.country}</h3>
              </div>
              <img src={country.flag} alt="covid-images" />
              <div>
                <h3>Population:</h3>
                <h3 className="t_bg">{country.population}</h3>
              </div>
              <div>
                <h3>Cases:</h3>
                <h3 className="t_bg">{country.cases}</h3>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Details;
