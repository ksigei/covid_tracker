import React from 'react';
import Continents from './Continents';
// import Countries from './Countries';
import './Sass/Styles.scss';

function Home() {
  return (
    <div className="container">
      <Continents />
      {/* <Countries /> */}
    </div>
  );
}

export default Home;
