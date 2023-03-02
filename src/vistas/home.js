export default () => {
  // const home = `
  //   <header>
  //   <h1> APRENDE Y COMPARTE</h1>
  //   </header>
  //   <div class="logo">
  //       <img src="imagenes/logo.jpg" id = 'logos'  >
  //   </div>
  //   <p>Ingresa tu nombre</p>
  // <input class="nombre" id ='nombre'></input>
  // <div>
  // <a href="#/tipsbelleza" name="ingresar" id= "botonIngresar" type="button" >INGRESAR</a>
  // </div> `;
  // const divElement = document.createElement('div');
  // divElement.innerHTML = home;
  // return divElement;
  // // console.log(divElement)

  const div = document.createElement('div');
  div.className = ('div');

  // creando mi imagen con su class
  const imagen = document.createElement('img');
  imagen.className = 'imagen';

  // creando mi input con su class
  const parrafo = document.createElement('p');
  parrafo.textContent = 'nombre';
  const input = document.createElement('input');
  input.className = 'inputBienvenidos';

  const buttonIngreso = document.createElement('button');
  buttonIngreso.className = 'BotonBienvenidos';

  imagen.src = 'imagenes/logo.jpg';
  parrafo.textContent = 'NOMBRE';
  input.textContent = 'input';
  buttonIngreso.textContent = 'BIENVENIDOS';

  div.appendChild(imagen);
  div.appendChild(parrafo);
  div.appendChild(input);
  div.appendChild(buttonIngreso);

  buttonIngreso.addEventListener('click', () => {
    console.log('INGRESO');
  });

  return div;
};
