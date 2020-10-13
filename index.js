document.addEventListener("DOMContentLoaded", () => {
    createForm();
    fetchUsers()
})

const BASE_URL ="http://127.0.0.1:3000"

// read = fetch users index

function fetchUsers(){
    fetch(`${BASE_URL}/users`)
    .then(resp => resp.json())
    .then(users => {
        for (const user of users){
            let u = new User(user.id, user.first_name, user.last_name, user.user_name, user.email)
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
    First name: <input type="text" id="first_name"><br>
    Last name: <input type="text" id="last_name"><br>
    Username: <input type="text" id="user_name"><br>
    Email: <input type="text" id="email"><br>
    <input type="submit" value="Create User">
    </form>
    `
    //use a label tag for the above
    usersForm.addEventListener("submit", userFormSubmission)
}

function userFormSubmission(){
    debugger
}



// delete = delete a user
