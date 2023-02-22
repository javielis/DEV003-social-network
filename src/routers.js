/* eslint-disable indent */
import { componentes } from './vistas/componente.js';

export const changeView = (route) => {
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (route) {
    case '#/registro': { return container.appendChild(componentes.registro()) };
    case '#/tipsbelleza': { return container.appendChild(componentes.tipsbelleza()) };
    case '#/': { return container.appendChild(componentes.home()) };
    default:
    break;
  }
  // console.log(route);
  return '';
};
