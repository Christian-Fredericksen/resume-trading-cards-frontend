const BASE_URL ="http://127.0.0.1:3000"

document.addEventListener("DOMContentLoaded", () => {
    createForm();
    navbar()
}) 


// read = fetch users index

function fetchUsers(){
    fetch(`${BASE_URL}/users`)
    .then(resp => resp.json())
    .then(users => {
        for (const user of users){
            let u = new User(user.id, user.name, user.username, user.email)
            u.renderUser();
        }
    })
}



// create = create a new user
// ~create a form
// ~add an event listener
// ~once the form is submitted => fetch 'POST' to my backend
// ~do something with the returned object

function createForm(){
    let usersForm = document.getElementById("users-form")

    usersForm.innerHTML +=
    `
    <form> 
    <label for="name">Name: </label><input type="text" id="name"><br>
    <label for="username">Username: <input type="text" id="username"><br>
    <label for="email">Email: <input type="text" id="email"><br>
    <input type="submit" value="Create User">
    </form>
    `
    usersForm.addEventListener("submit", userFormSubmission)
}

function userFormSubmission(e){
    e.preventDefault();
    let name = document.getElementById("name").value
    let username = document.getElementById("username").value
    let email = document.getElementById("email").value
    let user = {
        name: name,
        username: username,
        email: email
    }

    fetch(`${BASE_URL}/users`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(resp => resp.json())
    .then(user =>{
        let u = new User(user.id, user.name, user.username, user.email)
        clearScreen();
        u.renderUser();
})
}



// delete = delete a user

// let buttons = document.getElementsByClassName("delete-button")
// for (const button of buttons){
//     button.addEventListener("click", () =>{
//     })
// }

function deleteUser(){
    let userId = parseInt(event.target.dataset.id)

    fetch(`${BASE_URL}/users/${userId}`, {
        method: 'DELETE'
    })
    fetchUsers();
    clearScreen() 

    // this.location.reload()
}

// CREATE CARD

function cardsForm(){
    let cardsForm = document.getElementById("cards-form")

    cardsForm.innerHTML +=
    `
    <form> 
    <label for="name">Name: </label><input type="text" id="name"><br>
    <label for="phone">Phon: <input type="text" id="phone"><br>
    <label for="email">Email: <input type="text" id="email"><br>
    <label for="bio">Bio: <input type="text" id="bio"><br>
    <input type="submit" value="Create Card">
    </form>
    `
    cardsForm.addEventListener("submit", cardsFormSubmission)
}
function cardsFormSubmission(e){
    e.preventDefault();
    let name = document.getElementById("name").value
    let phone = document.getElementById("phone").value
    let email = document.getElementById("email").value
    let bio = document.getElementById("bio").value
    let card = {
        name: name,
        phone: phone,
        email: email,
        bio: bio
    }

    fetch(`${BASE_URL}/cards`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(card)
    })
    .then(resp => resp.json())
    .then(card =>{
        let c = new Card(card.id, card.name, card.email, card.bio)
        c.renderCard();
})
}
function putCardsOnDom(card){
    let cardsContainer = document.getElementById("cards-container")

    cardsContainer.innerHTML += 
    `
    <h2 class="subheader">All Games </h2>
    <h4 class="favorites-link">View My Favorites ♡</h4>
    
    `
    card.forEach(c => {
        cardsContainer.innerHTML += new Card(c).renderCard()
    })
}

function clearScreen(){
    const usersForm = document.getElementById("users-form")
    usersForm.innerHTML=""
    const usersData = document.getElementById("users-container")
    usersData.innerHTML=""
    const cardsForm = document.getElementById("cards-form")
    cardsForm.innerHTML=""
    const cardData = document.getElementById("cards-container")
    cardData.innerHTML=""

}

function navbar() {
    const users = document.getElementById("users-nav")
    let usersContainer = document.getElementById("users-container")
    users.addEventListener("click", () => {
    clearScreen();
    usersContainer.innerHTML +=
    `
        <h4>All Users in Database</h4>

    `
        fetchUsers()
    })
    const home = document.getElementById("home-nav")
    home.addEventListener("click", () => {
        clearScreen();
        createForm();
    })
}

