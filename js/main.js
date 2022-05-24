class Pelicula {
    constructor(titulo, duracion, director, linkTrailer) {
      this.titulo = titulo;
      this.duracion = duracion;
      this.director = director;
      this.linkTrailer = linkTrailer;
    }
  }
  let peliculas = JSON.parse(localStorage.getItem("peliculas")) ?? [];
  document.getElementById("formulario-pelicula").addEventListener("submit", agregarPelicula);
  
  function agregarPelicula(e) {
    e.preventDefault();
    const formulario = new FormData(e.target);
    const titulo = formulario.get("titulo");
    const duracion = formulario.get("duracion");
    const director = formulario.get("director");
    const linkTrailer = formulario.get("linkTrailer");
  
    const pelicula = new Pelicula(titulo, duracion, director, linkTrailer);
    
    if(camposCorrectos(pelicula)) {
      peliculas.push(pelicula)
      localStorage.setItem("peliculas", JSON.stringify(peliculas));
      mostrarPeliculas();
      e.target.reset();
    }
  }
  
  function mostrarPeliculas() {
    let listadodePeliculas = document.getElementById("listadodePeliculas");
    listadodePeliculas.innerHTML = "";
  
    peliculas.forEach(({titulo, duracion,director, linkTrailer}) => {
      let li = document.createElement("li");
      li.innerHTML = `
      <hr> 
      ${titulo} - 
      ${duracion && duracion + " minutos -"}
      ${director && director + " - "}
      <a href="${linkTrailer}" target="blank">Ver trailer</a>`;
  
      const botonBorrar = document.createElement("button");
      botonBorrar.innerText = "Borrar";
      botonBorrar.classList.add("btn", "btn-danger");
      botonBorrar.addEventListener("click", () => {
        eliminarPelicula(titulo);
      })
      li.appendChild(botonBorrar);
      
      listadodePeliculas.appendChild(li);
    });
  }
  
  function eliminarPelicula(titulo) {
    swal({
        title: '¿Estas seguro?',
        icon: 'warning',
        buttons: ["Detente!", "¡Hazlo!"],
      }).then((result) => {
     if (result.isConfirmed) {
        let peliculas = peliculas.filter(item => item.titulo != titulo);
        localStorage.removeItem("peliculas", JSON.stringify(peliculas));
        mostrarPeliculas();
       swal({
          title: '¡Listo, Eliminado!',
          text: 'Tu película ha sido eliminada',
         icon: 'success'
       })   
      }
   })
  }
  
  mostrarPeliculas();