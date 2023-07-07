//DOM Render Function
function renderOneAnimal(animal){
  //Build Animal  
  let card = document.createElement('li')
  card.className = 'card'
  card.innerHTML = `
  <img class="img" src="${animal.imageUrl}">
  <div class="content">
    <h4>${animal.name}</h4>
    <p>
    $<span class= "donation-count"> ${animal.donations} </span> Donated
    </p>
    <p>${animal.description} </p>
  </div>
  <div>
    <button class="btn"> Donate $10 </button>
    <button class="btn"> Donate $10 </button>

  </div>
  `
  //Add animal card to DOM
  document.querySelector('#animal-list').appendChild(card)
}

//Initial render
//Get data and render animals to the DOM
 function initialize() {
    animalData.forEach(animal => renderOneAnimal(animal))
 }
 initialize()