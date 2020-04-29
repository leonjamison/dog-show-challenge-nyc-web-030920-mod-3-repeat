const endPoint = 'http://localhost:3000/dogs'
const tableBody = document.getElementsByTagName('tbody')
// console.log(tableBody)
const form = document.getElementsByTagName('form')
console.log(form)



document.addEventListener('DOMContentLoaded', () => {


renderDogs()


document.addEventListener('click', (e) => {
    if(e.target.textContent === 'Edit' ){ 
        let dogInfo = form[0]
        let target = e.target.closest('tr')
        console.log(target)
        dogInfo.name.value = target.name
        dogInfo.breed.value = target.breed
        dogInfo.sex.value = target.sex
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
     `<tr><td value = 'name'>${dog.name} </td> <td>${dog.breed}</td> <td>${dog.sex}</td> <td><button>Edit</button></td></tr>`
        
     tableBody[0].appendChild(tableRow)
        
    }))


}