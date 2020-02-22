/* eslint-disable class-methods-use-this */
export default class Collapse {
  init() {
    const btnCollapse = document.querySelector('.button-collapse');
    const elCOllapse = document.querySelector('.collapse');

    btnCollapse.addEventListener('click', () => {
      elCOllapse.classList.toggle('active');
    });
  }
}
