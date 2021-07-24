import cardTpl from '../src/templates/card.hbs';
import cards from './menu.json';

const galeryContainerCard = document.querySelector('.js-menu');
const chageThemeBtn = document.querySelector('#theme-switch-toggle');
const cardsMarkup = cardTpl(cards);
galeryContainerCard.insertAdjacentHTML('beforeend', cardsMarkup);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
chageThemeBtn.addEventListener('change', switchTheme);

function switchTheme(e) {
  if (e.target.checked) {
    localStorage.setItem('theme', Theme.DARK);
    document.body.classList.add(Theme.DARK);
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
    document.body.classList.remove(Theme.DARK);
  }
}
function getThemeOnPageLoad() {
  if (localStorage.getItem('theme') === Theme.DARK) {
    chageThemeBtn.checked = true;
    document.body.classList.toggle(Theme.DARK);
  }
}
getThemeOnPageLoad();
