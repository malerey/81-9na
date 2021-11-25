// API 

const tarjetas = document.querySelector("#tarjetas")

// codigo ASINCRONO 

  fetch("https://api.themoviedb.org/3/trending/tv/week?api_key=986cb57c124ba1dd4bd40f4efe74ae25")
  .then((res) => {

    return res.json()
  })
  .then((data) => {
    console.log(data)

  crearTarjetaSerie(data.results)
    
  }) 


const crearTarjetaSerie = (array) => {
  const html = array.reduce((acc, curr) => {
    return acc + `
    <div class="tarjeta">
     <h2>${curr.name}</h2>
      <p>${curr.overview}</p>
     <p>${curr.vote_average}</p>
     </div>
     `
  }, "")
  tarjetas.innerHTML = html
}
