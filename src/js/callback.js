/* eslint-disable class-methods-use-this */
export default class Callback {
  init() {
    const elCallbackForm = document.querySelector('.callback-form');
    const elCloseCallback = document.querySelector('.callback-close');
    const elCallCallback = document.querySelector('.call-callack');

    elCallCallback.addEventListener('click', () => {
      elCallbackForm.classList.remove('hidden');
      elCallCallback.classList.add('hidden');
    });

    elCloseCallback.addEventListener('click', () => {
      elCallCallback.classList.remove('hidden');
      elCallbackForm.classList.add('hidden');
    });
  }
}
