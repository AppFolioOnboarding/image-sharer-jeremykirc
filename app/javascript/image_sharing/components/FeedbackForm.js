import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import FeedbackService from '../services/FeedbackService';
import FlashMessage from './FlashMessage';

@observer
export default class FeedbackForm extends Component {
  constructor(props) {
    super(props);
    this.feedbackService = new FeedbackService(props.feedbackStore);
    this.feedbackStore = props.feedbackStore;
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange = (e) => {
    this.feedbackStore.setFormData(e.target.name, e.target.value);
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    this.feedbackService.submitFeedback(this.feedbackStore.formData);
  };

  render() {
    return (
      <>
        <FlashMessage feedbackStore={this.feedbackStore} />
        <form onSubmit={this.handleFormSubmit}>
          <div className='row'>
            <div className='col-6'>
              <label htmlFor='name'>
                Your Name
                <input
                  id='name'
                  name='name'
                  type='text'
                  value={this.feedbackStore.formData.name}
                  onChange={this.handleInputChange}
                  className='form-control'
                />
              </label>
            </div>
            <div className='col-12'>
              <label htmlFor='comment'>
                Comment
                <textarea
                  id='comment'
                  name='comment'
                  value={this.feedbackStore.formData.comment}
                  onChange={this.handleInputChange}
                  className='form-control'
                />
              </label>
            </div>
            <div className='col-12 submit-btn-container'>
              <button className='btn btn-primary' type='submit'>Submit</button>
            </div>
          </div>
        </form>
      </>
    );
  }
}

FeedbackForm.propTypes = {
  feedbackStore: PropTypes.object.isRequired
};
