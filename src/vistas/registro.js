export default () => {
  const registro = `
    <header>
    <h1>APRENDE Y COMPARTE</h1>
  </header>
  <div class="logo">
        <img src="imagenes/logo.jpg" >
    </div>
  <p>CORREO</p>
  <input class="texto"></input>
  <p>CONTRASEÑA</p>
  <input class="texto"></input>
  </div>
  <div> 
  <button name="bienvenidos" type="button">BIENVENIDOS</button>
  </div>`;
  const divElement = document.createElement('div');
  divElement.innerHTML = registro;
  // console.log(divElement)
  return divElement;
};
