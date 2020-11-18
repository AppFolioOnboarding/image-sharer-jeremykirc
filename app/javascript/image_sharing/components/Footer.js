import PropTypes from 'prop-types';
import React from 'react';

const Footer = ({ text }) => (
  <footer>
    <p id='copyright'>{text}</p>
  </footer>
);

Footer.propTypes = {
  text: PropTypes.string.isRequired
};

export default Footer;
