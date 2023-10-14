
//Event Listeners
document.querySelector('#animal-form').addEventListener('submit',
handleSubmit)

//Event handlers
function handleSubmit(e) {
  e.preventDefault()
  let animalObj = {
    name:e.target.name.value,
    imageUrl:e.target.image_url.value,
    description:e.target.description.value,
    donations: 0
  }
  renderOneAnimal(animalObj)
  adoptAnimal(animalObj)
}

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
  <div class="buttons">
    <button id="donate"> Donate $10 </button>
    <button id="set_free"> Set Free </button>

  </div>
  `

  card.querySelector('#donate').addEventListener('click', () =>{
    animal.donations += 10
    card.querySelector('span').textContent = animal.donations
    updateDonation(animal)
  })

  card.querySelector('#set_free').addEventListener('click', () =>{
    animal.set_free = 0
    card.remove()
    deleteAnimal(animal.id)
  })
  //Add animal card to DOM
  document.querySelector('#animal-list').appendChild(card)
}

//Fetch Request
//Get Data and Render our Animals to the DOM
function getAllAnimals() {
  fetch('http://localhost:3000/animalData')
  .then(res => res.json())
  .then(animalData => animalData.forEach(animal => renderOneAnimal(animal)))
  // console.log('before fetch returns')
}

function adoptAnimal(animalObj){

  fetch('http://localhost:3000/animalData',{
    method:'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body:JSON.stringify(animalObj)
  })
  .then(res => res.json())
  .then(animal => console.log(animal))

}

function updateDonation(animalObj){
  fetch(`http://localhost:3000/animalData/${animalObj.id}`,{
    method:'PATCH',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(animalObj)
  })
  .then(res => res.json())
  .then(animal => console.log(animalObj))
}

function deleteAnimal(id){
  fetch(`http://localhost:3000/animalData/${id}`,{
    method:'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(animal => console.log(animal))
}

//Initial render
//Get data and render animals to the DOM
 function initialize() {
    // animalData.forEach(animal => renderOneAnimal(animal))
    getAllAnimals()
    // console.log('after get all animals')
 }


 initialize()
 