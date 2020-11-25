import React from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';

const FlashMessage = ({ feedbackStore }) => (
  feedbackStore.flashMessage.message &&
  <div className={`alert alert-${feedbackStore.flashMessage.type}`}>
    {feedbackStore.flashMessage.message}
  </div>
);

FlashMessage.propTypes = {
  feedbackStore: PropTypes.object.isRequired
};

export default observer(FlashMessage);
