/* eslint-env mocha */

import assert from 'assert';
import { mount } from 'enzyme';
import React from 'react';

import FlashMessage from '../../components/FlashMessage';
import FeedbackStore from '../../stores/FeedbackStore';

describe('<FlashMessage />', () => {
  let store;

  beforeEach(() => {
    store = new FeedbackStore();
  });

  it('should render nothing without flash message', () => {
    const wrapper = mount(<FlashMessage feedbackStore={store} />);
    const alert = wrapper.find('.alert');
    assert.strictEqual(alert.length, 0);
  });

  it('should render alert with flash message', () => {
    store.setFlashMessage('success', 'test message');
    const wrapper = mount(<FlashMessage feedbackStore={store} />);
    const alert = wrapper.find('.alert');
    assert.strictEqual(alert.length, 1);
    assert.strictEqual(alert.text(), 'test message');
    assert(alert.hasClass('alert-success'));
  });
});
