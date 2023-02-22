// Este es el punto de entrada de tu aplicacion

import { changeView } from './routers.js';

const inicio = () => {
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};

window.addEventListener('load', inicio);
