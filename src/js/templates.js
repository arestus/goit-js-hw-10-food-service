import itemsTemplate from '../templates/template.hbs';
import menuList from '../menu.json';

const markUp = itemsTemplate(menuList);

const ulmenuRef = document.querySelector('.js-menu');

ulmenuRef.insertAdjacentHTML('beforeend', markUp);
