import { makeAutoObservable } from 'mobx';

export default class FeedbackStore {
  constructor() {
    this.formData = {
      name: '',
      comment: '',
    };
    this.flashMessage = {
      type: null,
      message: null,
    };
    makeAutoObservable(this);
  }

  setFormData(attr, value) {
    this.formData[attr] = value;
  }

  setFlashMessage(type, message) {
    this.flashMessage.type = type;
    this.flashMessage.message = message;
  }
}
