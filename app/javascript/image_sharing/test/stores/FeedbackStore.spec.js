/* eslint-env mocha */

import assert from 'assert';
import FeedbackStore from '../../stores/FeedbackStore';

describe('FeedbackStore', () => {
  let store;

  beforeEach(() => {
    store = new FeedbackStore();
  });

  afterEach(() => {
    store = null;
  });

  it('should set name in formData', () => {
    store.setFormData('name', 'John Doe');
    assert.strictEqual(store.formData.name, 'John Doe');
  });

  it('should set comments in formData', () => {
    store.setFormData('comments', 'test comment');
    assert.strictEqual(store.formData.comments, 'test comment');
  });

  it('should set flashMessage', () => {
    store.setFlashMessage('success', 'test message');
    assert.strictEqual(store.flashMessage.type, 'success');
    assert.strictEqual(store.flashMessage.message, 'test message');
  });
});
