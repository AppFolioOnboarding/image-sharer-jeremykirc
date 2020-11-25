import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ title }) => (
  <header>
    <a href='/'>Back</a>
    <h1 className='text-center'>{title}</h1>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
