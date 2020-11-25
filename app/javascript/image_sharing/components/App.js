import React from 'react';
import PropTypes from 'prop-types';
import { inject } from 'mobx-react';

import Header from './Header';
import Footer from './Footer';
import FeedbackForm from './FeedbackForm';

const App = ({ stores }) => (
  <div>
    <Header title='Tell us what you think' />
    <FeedbackForm feedbackStore={stores.feedbackStore} />
    <Footer text='Copyright: AppFolio Inc. Onboarding' />
  </div>
);

App.propTypes = {
  stores: PropTypes.object.isRequired
};

export default inject('stores')(App);
