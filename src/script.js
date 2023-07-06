//DOM Render Function
function renderOneAnimal(animal){
  //Build Animal  
  let card = document.createElement('li')
  card.className = 'card'
  card.innerHTML = `
  <img src="${animal.Url}">
  <div class="content">
    <h4>${animal.name}</h4>
    <p>
    $span class= "donation-count"> ${animal.donation} </span> Donated
    </p>
    <p>${animal.description} </p>
  </div>
  `
    console.log(card)
  //Add animal card to DOM
//   document.querySelector('animal-list').appendChild(card)
}

//Initial render
//Get data and render animals to the DOM
 function initialize() {
    animalData.forEach(animal => renderOneAnimal(animal))
 }
 initialize()