/* eslint-disable indent */
import { componentes } from './vistas/componente.js';

export const changeView = (route) => {
  let saludo;
  if (route === '#/tipsbelleza') {
   saludo = document.getElementById('nombre');
  }
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (route) {
    case '#/registro': { return container.appendChild(componentes.registro()); }
    case '#/tipsbelleza': {
       return container.appendChild(componentes.tipsbelleza(saludo.value));
      }
    case '#/': {
     return container.appendChild(componentes.home());
        }
    default:
    break;
  }
  // console.log(route);
  return '';
};
