import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

let feedbackRoot = document.getElementById('feedback-root');
if (feedbackRoot) {
  ReactDOM.render(
    <App />,
    feedbackRoot
  );
}
