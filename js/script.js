const terror = document.getElementById("terror")
const accion = document.getElementById("accion")
const comedia = document.getElementById("comedia")
const drama = document.getElementById("drama")
const cienciaFiccion = document.getElementById("cienciaFiccion")

const template = (peli) => 
  `<li>
    <img src=${peli.image} alt=${peli.title}/>
    <article>
      <h3>${peli.title}</h3>
      <div>
        <span>${peli.year}</span>
        <span>${peli.rating}</span>
      </div>
    </article>
  </li>`

function createPeliList (category) {
  const pelisCategory = moviesData.filter(peli => peli.category === category)
  return pelisCategory.map(peli => template(peli)).join('')
}

createPeliList("Acción")

accion.innerHTML = createPeliList("Acción")
terror.innerHTML = createPeliList("Terror")
comedia.innerHTML = createPeliList("Comedia")
drama.innerHTML = createPeliList("Drama")
cienciaFiccion.innerHTML = createPeliList("Ciencia Ficción")


