export default (saludo) => {
  // const tipsbelleza = `
  //     ${saludo}

  //     <div class="logo">
  //           <img src="imagenes/logo.jpg" >
  //       </div>
  //     <p>Escribenos tus tips</p>
  //     <input class="texto"></input>
  //     <div>
  //     <a id ="ingresar" href="#/" name="enviar" type="button">ENVIAR</a>
  //     </div>`;
  // const divElement = document.createElement('div');

  // divElement.innerHTML = tipsbelleza;
  // // console.log(divElement)
  // return divElement;
//  aqui estamos creando mis botones imput y agregando mis imagenes
// creando botones y debajo creado su classs para usar en css
  const div = document.createElement('div');
  div.className = ('div');
  const buttonEnviar = document.createElement('button');
  buttonEnviar.className = 'boton';
  const buttonEliminar = document.createElement('button');
  buttonEliminar.className = 'butonEli';
  const buttonEditar = document.createElement('button');
  buttonEditar.className = 'butoEditar';
  // creando mi imagen con su class
  const imagen = document.createElement('img');
  imagen.className = 'imagen';
  // creando mi input con su class
  const input = document.createElement('input');
  input.className = 'input';

  // de esta forma especifico o agrego texto o imagen a mis botones o pantalla.
  imagen.src = 'imagenes/logo.jpg';
  input.textContent = 'input';
  buttonEnviar.textContent = 'ENVIAR';
  buttonEliminar.textContent = 'ELIMINAR';
  buttonEditar.textContent = 'EDITAR';


  //  aqui estamos agregando todo a nuestro div en nuestro html de forma dinamica.
  div.appendChild(imagen);
  div.appendChild(input);
  div.appendChild(buttonEnviar);
  div.appendChild(buttonEliminar);
  div.appendChild(buttonEditar);

  buttonEnviar.addEventListener('click', () => {
    console.log('hola');
  });

  buttonEditar.addEventListener('click', () => {
    console.log('editar')
  });

  buttonEliminar.addEventListener('click', () => {
    console.log('eliminar');
  
  });
  return div;
};

// cambiar con crearElemnt
//  luego darle evento a el boton
// https://www.youtube.com/watch?v=EXI-Mo1HDnM
// eslint-disable-next-line max-len
// 1. pasar el HTML de tipsbelleza a "createElement", "appendChild" etc.- (investigar como añadir ids y clases)
// 2. hacer el add evento listener al boton
