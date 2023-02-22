export default () => {
  const tipsbelleza = `
    <header>
   
  </header>
  <div class="logo">
        <img src="imagenes/logo.jpg" >
    </div>
  <p>Escribenos tus tips</p>
  <input class="texto"></input>
  <div> 
  <button name="enviar" type="button">ENVIAR</button>
  </div>`;
  const divElement = document.createElement('div');
  divElement.innerHTML = tipsbelleza;
  // console.log(divElement)
  return divElement;
};
