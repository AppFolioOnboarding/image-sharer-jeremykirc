/* eslint-env mocha */

import assert from 'assert';
import { mount } from 'enzyme';
import React from 'react';
import Footer from '../../components/Footer';

describe('<Footer />', () => {
  it('should render correctly', () => {
    const wrapper = mount(<Footer text='copyright' />);
    const footer = wrapper.find('footer');
    assert.strictEqual(footer.length, 1);

    const copyright = footer.find('#copyright');
    assert.strictEqual(copyright.length, 1);
    assert.strictEqual(copyright.text(), 'copyright');
  });
});
