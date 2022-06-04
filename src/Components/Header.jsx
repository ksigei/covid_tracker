import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMicrophone, faCog } from '@fortawesome/fontawesome-free-solid';
import './Sass/Header.scss';

function Header() {
  return (
    <nav>
      <Link to="/"><FontAwesomeIcon icon={faHome} /></Link>
      <h3>Coronavirus Tracker</h3>
      <div className="nav-right">
        <FontAwesomeIcon icon={faMicrophone} />
        <FontAwesomeIcon icon={faCog} />
      </div>
    </nav>
  );
}

export default Header;
