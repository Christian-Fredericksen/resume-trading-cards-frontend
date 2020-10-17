 class User{
     constructor(id, name, username, email){
         this.id = id;
         this.name = name;
         this.username = username;
         this.email = email;
     }

     // an instance method that is going to render the object to the DOM

     renderUser() {
         let usersDiv = document.getElementById("users-container")
         usersDiv.innerHTML +=
         `
         <ul>
         <h3>Username: ${this.username}</h3>
         <li> Name: ${this.name}<br>
              Email: ${this.email}<br><br>
         </li> 
         </ul>
         <button class="delete-button" data-id=${this.id} onclick="deleteUser()">Delete User</button> <button>Create Card</button>
         `
     }
 }