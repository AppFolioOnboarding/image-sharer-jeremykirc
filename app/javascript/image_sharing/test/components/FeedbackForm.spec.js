/* eslint-env mocha */
/* eslint-disable no-unused-expressions */

import { mount } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';

import FeedbackForm from '../../components/FeedbackForm';
import FeedbackStore from '../../stores/FeedbackStore';

describe('<FeedbackForm />', () => {
  let store;
  let wrapper;
  let form;
  let nameInput;
  let commentInput;

  beforeEach(() => {
    store = new FeedbackStore();
    wrapper = mount(<FeedbackForm feedbackStore={store} />);
    form = wrapper.find('form');
    nameInput = form.find('#name');
    commentInput = form.find('#comment');
  });

  it('should render correctly', () => {
    expect(form.length).to.equal(1);
    expect(nameInput.length).to.equal(1);
    expect(nameInput.prop('value')).to.equal('');
    expect(commentInput.length).to.equal(1);
    expect(commentInput.prop('value')).to.equal('');
  });

  it('should save input change to store', () => {
    expect(nameInput.prop('value')).to.equal('');
    nameInput.simulate('change', { target: { name: 'name', value: 'John Doe' } });
    expect(store.formData.name).to.equal('John Doe');
    expect(commentInput.prop('value')).to.equal('');
    commentInput.simulate('change', { target: { name: 'comment', value: 'test comment' } });
    expect(store.formData.comment).to.equal('test comment');
  });

  it('should call feedback service on form submit', () => {
    nameInput.simulate('change', { target: { name: 'name', value: 'John Doe' } });
    commentInput.simulate('change', { target: { name: 'comment', value: 'test comment' } });
    const submitButton = form.find('button');
    sinon.stub(wrapper.instance().feedbackService, 'submitFeedback');
    submitButton.simulate('submit', { preventDefault() {} });
    expect(wrapper.instance().feedbackService.submitFeedback.calledOnce).to.be.true;
  });
});
