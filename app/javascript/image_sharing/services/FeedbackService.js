import { post } from '../utils/helper';

export default class FeedbackService {
  constructor(store) {
    this.store = store;
  }

  submitFeedback = formData =>
    post('/api/feedbacks', formData)
      .then((data) => {
        this.store.setFlashMessage('success', data.message);
      })
      .catch((error) => {
        this.store.setFlashMessage('danger', error.data.message);
      });
}
