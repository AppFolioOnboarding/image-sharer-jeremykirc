/* eslint-env mocha */

import assert from 'assert';
import { mount } from 'enzyme';
import React from 'react';

import App from '../../components/App';
import FeedbackStore from '../../stores/FeedbackStore';

describe('<App />', () => {
  it('should render correctly', () => {
    const feedbackStore = new FeedbackStore();
    const stores = { feedbackStore };
    const wrapper = mount(<App stores={stores} />);
    assert(wrapper.contains('Tell us what you think'));
    assert(wrapper.contains('Copyright: AppFolio Inc. Onboarding'));
  });
});
