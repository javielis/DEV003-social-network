export default (saludo) => {
  const tipsbelleza = `
      ${saludo}
      <div class="logo">
            <img src="imagenes/logo.jpg" >
        </div>
      <p>Escribenos tus tips</p>
      <input class="texto"></input>
      <div> 
      <a href="#/" name="enviar" type="button">ENVIAR</a>
      </div>`;
  const divElement = document.createElement('div');
  divElement.innerHTML = tipsbelleza;
  // console.log(divElement)
  return divElement;
};
// cambiar con crearElemnt
//  luego darle evento a el boton
// https://www.youtube.com/watch?v=EXI-Mo1HDnM
// eslint-disable-next-line max-len
// 1. pasar el HTML de tipsbelleza a "createElement", "appendChild" etc.- (investigar como añadir ids y clases)
// 2. hacer el add evento listener al boton
