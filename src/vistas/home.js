export default () => {
  const home = `
    <header>
    <h1> APRENDE Y COMPARTE</h1>
    </header>
    <div class="logo">
        <img src="imagenes/logo.jpg" >
    </div>
    <p>Ingresa tu nombre</p>
  <input class="texto"></input>
  <div> 
  <button name="ingresar" id= "botonIngresar" type="button">INGRESAR</button>
  </div>
      `;
  const divElement = document.createElement('div');
  divElement.innerHTML = home;
  // console.log(divElement)
  return divElement;
};

// document.getElementById('botonIngresar').addEventListener('click', ingresar);

// function ingresar(){
// Lograr que la funcion me lleve a la ruta correspondiente 
// lograr que la funcion estando en la ruta me personalice la bienvenda 

// }
