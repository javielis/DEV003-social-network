export default () => {
  const home = `
    <header>
    <h1> APRENDE Y COMPARTE</h1>
    </header>
    <div class="logo">
        <img src="imagenes/logo.jpg" id = 'logos'  >
    </div>
    <p>Ingresa tu nombre</p>
  <input class="nombre" id ='nombre'></input>
  <div> 
  <a href="#/tipsbelleza" name="ingresar" id= "botonIngresar" type="button" >INGRESAR</a>
  </div> `;
  const divElement = document.createElement('div');
  divElement.innerHTML = home;
  return divElement;
  // console.log(divElement)
 
};

