 class User{
     constructor(id, first_name, last_name, user_name, email){
         this.id = id;
         this.first_name = first_name;
         this.last_name = last_name;
         this.user_name = user_name;
         this.email = email;
     }

     // an instance method that is going to render the object to the DOM

     renderUser() {
         let usersDiv = document.getElementById("users-container")
         usersDiv.innerHTML +=
         `
         <ul>
         <h3>Username: ${this.user_name}</h3>
         <li> Name: ${this.first_name} ${this.last_name}<br>
              Email: ${this.email}<br><br>
         </li> 
         </ul>
         `
     }
 }