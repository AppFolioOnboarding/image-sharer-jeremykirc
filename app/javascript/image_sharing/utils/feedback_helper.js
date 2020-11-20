import { post } from '../utils/helper.js';

export default function submitFeedback(formData) {
  return post('/api/feedbacks', formData)
    .then(() => window.location.href = '/')
    .catch(error => console.error(error));
}
