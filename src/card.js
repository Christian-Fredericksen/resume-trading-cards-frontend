 class Card{
     constructor(cardAttributes){
         this.id = cardAttributes.id;
         this.img_src = cardAttributes.img_src;
         this.name = cardAttributes.name;
         this.phone = cardAttributes.phone;
         this.email = cardAttributes.email;
         this.bio = cardAttributes.bio;
     } 

     renderCard() {
        let cardsDiv = document.getElementById("cards-container")
        cardsDiv.innerHTML +=
        `
        <ul>
            <h2>${this.name} (${this.phone})</h2>
            <h4 class="email">${this.email}</h4> 
            <img src=${this.img_src} class="card-image" /></a>
            <p>${this.bio}<p>
            <button class="delete-button" data-id=${this.id} onclick="deleteCard()">Delete Card</button>
        </ul> 

        `
    }

     // an instance method that is going to render the object to the DOM
 }