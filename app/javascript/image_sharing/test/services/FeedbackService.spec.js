/* eslint-env mocha */

import assert from 'assert';
import sinon from 'sinon';

import FeedbackStore from '../../stores/FeedbackStore';
import FeedbackService from '../../services/FeedbackService';
import * as helper from '../../utils/helper';

describe('FeedbackService', () => {
  let sandbox;
  let store;
  let service;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    store = new FeedbackStore();
    service = new FeedbackService(store);
  });

  afterEach(() => {
    sandbox.restore();
    store = null;
    service = null;
  });

  it('should fail submit feedback and set error flash message', () => {
    const error = new Error();
    error.data = { message: 'test error message' };
    const responseData = Promise.reject(error);
    sandbox.stub(helper, 'post').returns(responseData);
    return service.submitFeedback().then(() => {
      assert.deepStrictEqual(
        store.flashMessage,
        { type: 'danger', message: 'test error message' }
      );
    });
  });

  it('should succeed submit feedback and set success flash message', () => {
    const responseData = Promise.resolve({ message: 'test success message' });
    sandbox.stub(helper, 'post').returns(responseData);
    const formData = { name: 'John Doe', comments: 'test comment' };
    return service.submitFeedback(formData).then(() => {
      assert.deepStrictEqual(
        store.flashMessage,
        { type: 'success', message: 'test success message' }
      );
    });
  });
});
