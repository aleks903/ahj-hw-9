import Collapse from './collapse.js';
import Callback from './callback.js';
import Liker from './liker.js';

const collapse = new Collapse();
collapse.init();

const callback = new Callback();
callback.init();

const liker = new Liker();
liker.init();

const elButtons = document.querySelector('.buttons');
const elements = document.querySelectorAll('.elements');
const elCollapse = document.querySelector('.collapse');
const elCallback = document.querySelector('.callback');
const elLker = document.querySelector('.liker');

elButtons.addEventListener('click', (event) => {
  for (const item of elements) {
    item.classList.add('none');
  }
  const elClassList = event.target.id;
  if (elClassList === 'callback') {
    elCallback.classList.remove('none');
  } else if (elClassList === 'liker') {
    elLker.classList.remove('none');
  } else {
    elCollapse.classList.remove('none');
  }
});
