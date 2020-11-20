import React, { useState } from 'react';
import submitFeedback from '../utils/feedback_helper.js';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    comment: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    submitFeedback(formData);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className='row'>
        <div className='col-6'>
          <label htmlFor='name'>
            Your Name
            <input
              required
              id='name'
              name='name'
              type='text'
              value={formData.name}
              onChange={handleInputChange}
              className='form-control'
            />
          </label>
        </div>
        <div className='col-12'>
          <label htmlFor='comment'>
            Comment
            <textarea
              required
              id='comment'
              name='comment'
              value={formData.comment}
              onChange={handleInputChange}
              className='form-control'
            />
          </label>
        </div>
        <div className='col-12 submit-btn-container'>
          <button className='btn btn-primary' type='submit'>Submit</button>
        </div>
      </div>
    </form>
  );
};

export default FeedbackForm;
