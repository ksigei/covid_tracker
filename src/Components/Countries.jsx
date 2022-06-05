import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/fontawesome-free-solid';
import { getCountries } from '../Redux/Countries/actions';

import './Sass/Countries.scss';
import './Sass/SearchBar.scss';

const Countries = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  useEffect(() => {
    dispatch(getCountries());
  }, []);
  return (
    <>
      <form
        className="search-bar"
        onChange={(event) => setQuery(event.target.value)}
      >
        <div className="search-bar__wrapper">
          <input
            className="input"
            placeholder="Country Name"
          />
        </div>
      </form>
      <div className="container">
        {countries
          .filter((country) => country.country.toLowerCase().includes(query.toLowerCase()))
          .map((country) => (
            <div key={country.id} className="card">
              <img src={country.flag} alt="covid-images" />
              <div className="flex">
                <h3>Country:</h3>
                <h3 className="t_bg">{country.country}</h3>
              </div>
              <div className="flex">
                <h3>Cases:</h3>
                <h3 className="t_bg">{country.cases}</h3>
              </div>
              <div className="flex-end">
                <NavLink to={`/country/${country.country}`}>
                  <FontAwesomeIcon
                    className="icons"
                    icon={faArrowCircleRight}
                  />
                </NavLink>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Countries;
