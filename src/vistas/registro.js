export default () => {
//   const registro = `
//     <header>
//     <h1>APRENDE Y COMPARTE</h1>
//   </header>
//   <div class="logo">
//         <img src="imagenes/logo.jpg" >
//     </div>
//   <p>CORREO</p>
//   <input class="texto"></input>
//   <p>CONTRASEÑA</p>
//   <input class="texto"></input>
//   </div>
//   <div>
//   <button name="bienvenidos" type="button">BIENVENIDOS</button>
//   </div>`;
//   const divElement = document.createElement('div');
//   divElement.innerHTML = registro;
//   // console.log(divElement)
//   return divElement;

  // registro div para almacenar
  const div = document.createElement('div');
  div.className = ('div');
  const header = document.createElement('header');
  header.className = ('header');

  // creando mi imagen con su class
  const imagen = document.createElement('img');
  imagen.className = 'imagen';

  // creando mi input con su class
  const parrafo1 = document.createElement('p');
  parrafo1.textContent = 'nombre';
  const input1 = document.createElement('input');
  input1.className = 'inputRegistro';

  const parrafo2 = document.createElement('p');
  parrafo2.textContent = 'email';
  const input2 = document.createElement('input');
  input2.className = 'inputRegistro';

  const parrafo3 = document.createElement('p');
  parrafo3.textContent = 'constraseña';
  const input3 = document.createElement('input');
  input3.className = 'inputRegistro';

  const buttonRegistrar = document.createElement('button');
  buttonRegistrar.className = 'registrar';

  const buttonIngreso = document.createElement('button');
  buttonIngreso.className = 'ingreso';

  // de esta forma especifico o agrego texto o imagen a mis botones o pantalla.
  imagen.src = 'imagenes/logo.jpg';
  parrafo1.textContent = 'NOMBRE';
  input1.textContent = 'input';
  parrafo2.textContent = 'EMAIL';
  input2.textContent = 'input';
  parrafo3.textContent = 'CONTRASEÑA';
  input3.textContent = 'input';
  buttonIngreso.textContent = 'INGRESAR';
  buttonRegistrar.textContent = 'REGISTRAR';

  //  aqui estamos agregando todo a nuestro div en nuestro html de forma dinamica.
  div.appendChild(header);
  div.appendChild(imagen);
  div.appendChild(parrafo1);
  div.appendChild(input1);
  div.appendChild(parrafo2);
  div.appendChild(input2);
  div.appendChild(parrafo3);
  div.appendChild(input3);
  div.appendChild(buttonIngreso);
  div.appendChild(buttonRegistrar);

  buttonIngreso.addEventListener('click', () => {
    console.log('INGRESA');
  });

  buttonRegistrar.addEventListener('click', () => {
    console.log('RESGISTRAR');
  });

  return div;
};
