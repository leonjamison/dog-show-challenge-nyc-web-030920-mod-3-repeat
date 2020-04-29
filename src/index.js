const endPoint = 'http://localhost:3000/dogs'
// const updateUrl = `http://localhost:3000/dogs/${id}`
const tableBody = document.getElementsByTagName('tbody')
// console.log(tableBody)
const form = document.getElementsByTagName('form')
// console.log(form)




document.addEventListener('DOMContentLoaded', () => {


renderDogs()


document.addEventListener('click', (e) => {
    if(e.target.textContent === 'Edit' ){ 
        let dogInfo = form[0]
        let target = e.target.closest('tr')
        console.log(target)
        dogInfo.dataset.id = target.dataset.id
        dogInfo.name.value = target.dataset.name 
        dogInfo.breed.value = target.dataset.breed
        dogInfo.sex.value = target.dataset.sex 
    }else if (e.target.value === 'Submit'){
        // e.preventDefault()
        let dogInfo = form[0]
        console.log(dogInfo)
        // console.log(e.target.parent)
        // dogInfo.dataset.id 
        // dogInfo.name.value  
        // dogInfo.breed.value
        // dogInfo.sex.value
        updateDog(dogInfo)
        dogInfo.reset()
        
    
    }



})




})

function renderDogs(){

    fetch(endPoint)
    .then(resp => resp.json())
    .then(dogs => dogs.forEach((dog) => {
        // console.log(dogs)
        createDog(dog)
        
    }))


}

function createDog(dog){
    let tableRow = document.createElement('tr')
    tableRow.dataset.id = `${dog.id}`
    tableRow.dataset.name = `${dog.name}`
    tableRow.dataset.breed = `${dog.breed}`
    tableRow.dataset.sex = `${dog.sex}`
    tableRow.innerHTML = 
 `<tr><td>${dog.name} </td> <td>${dog.breed}</td> <td>${dog.sex}</td> <td><button>Edit</button></td></tr>`
    
 tableBody[0].appendChild(tableRow)
}

function updateDog(dogInfo){
    let id = dogInfo.dataset.id
    console.log(id)
    fetch(`http://localhost:3000/dogs/${id}`, {
        method: 'PATCH',
        headers:
    {
        "content-type": 'application/json',
        "accept": 'application/json'
    },
        body: JSON.stringify({
            'name': `${dogInfo.name.value}`,
            'breed': `${dogInfo.breed.value}`,
            'sex': `${dogInfo.sex.value}`
        })
        // .then(resp => resp.json)
        // .then(dog => createDog(dog))
    })
    // dogInfo.reset()
}