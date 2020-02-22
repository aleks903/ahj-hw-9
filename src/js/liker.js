/* eslint-disable class-methods-use-this */
export default class Liker {
  init() {
    const btnLiker = document.querySelector('.liker-btn');
    const elBorderImg = document.querySelector('.border-img');

    btnLiker.addEventListener('click', (evt) => {
      evt.preventDefault();
      const rnd = Math.floor(Math.random() * 4) + 1;
      const elImg = document.createElement('img');
      elImg.src = './img/heart.png';
      elImg.className = 'liker-img';
      elImg.style.animationName = `heart${rnd}`;
      elBorderImg.appendChild(elImg);
      elImg.addEventListener('animationend', () => {
        elBorderImg.removeChild(elImg);
      });
    });
  }
}
