import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContinents } from '../Redux/Continents/actions';
import './Sass/Continents.scss';

function Continents() {
  const dispatch = useDispatch();
  const continents = useSelector((state) => state.continents);
  useEffect(() => {
    dispatch(getContinents());
  }, []);
  return (
    <div className="container">
      {continents.map((continent) => (
        <div key={continent.id} className="card">
          <div className="flex">
            <h3 className="#">{continent.continent}</h3>
          </div>
          <div className="flex">
            <h3>Population:</h3>
            <h3 className="t_bg">{continent.population}</h3>
          </div>
          <div className="flex">
            <h3>Cases:</h3>
            <h3 className="t_bg">{continent.cases}</h3>
          </div>
          <div className="flex">
            <h3>Active:</h3>
            <h3 className="t_bg">{continent.active}</h3>
          </div>
          <div className="flex">
            <h3>Deaths:</h3>
            <h3 className="t_bg">{continent.deaths}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Continents;
