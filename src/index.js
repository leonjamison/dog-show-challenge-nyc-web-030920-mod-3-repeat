const endPoint = 'http://localhost:3000/dogs'
const tableBody = document.getElementsByTagName('tbody')
// console.log(tableBody)
const form = document.getElementsByClassName('padding margin border-round border-grey')
console.log(form)



document.addEventListener('DOMContentLoaded', () => {


renderDogs()


document.addEventListener('click', (e) => {
    if(e.target.textContent === 'Edit' ){ 
        let dogInfo = form[0]
        console.log(e.target)
        // dogInfo.name = e.target.name.value
        // dogInfo.breed.value = e.target.breed.value
        // dogInfo.sex.value = e.target.sex.value 
    }


})




})

function renderDogs(){

    fetch(endPoint)
    .then(resp => resp.json())
    .then(dogs => dogs.forEach((dog) => {
        // console.log(dogs)
        let tableRow = document.createElement('tr')
        tableRow.dataset.id = `${dog.id}`
        tableRow.innerHTML = 
     `<tr><td>${dog.name} </td> <td>${dog.breed}</td> <td>${dog.sex}</td> <td><button>Edit</button></td></tr>`
        
     tableBody[0].appendChild(tableRow)
        
    }))


}