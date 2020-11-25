import { Provider } from 'mobx-react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import FeedbackStore from './stores/FeedbackStore';

const stores = {
  feedbackStore: new FeedbackStore()
};
const feedbackRoot = document.getElementById('feedback-root');

if (feedbackRoot) {
  ReactDOM.render(
    <Provider stores={stores}>
      <App />
    </Provider>,
    feedbackRoot
  );
}
