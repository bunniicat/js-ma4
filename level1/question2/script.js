/*let cardContainer = document.createElement("div");
let cardId1 = document.createElement("h2");
let cardId2 = document.createElement("h2");
let cardTitle = document.createElement("h1");
let cardStatus = document.createElement("p");

cardId1.innerHTML = "userId TEST";
cardId2.innerHTML = "Id TEST";
cardTitle.innerHTML = "Title TEST";
cardStatus.innerHTML = "False TEST";
    
cardContainer.appendChild(cardId1);
cardContainer.appendChild(cardId2);
cardContainer.appendChild(cardTitle);
cardContainer.appendChild(cardStatus);
document.body.appendChild(cardContainer);

fetch("https://jsonplaceholder.typicode.com/todos")
.then (function(response){
    return response.json();
})

.then (function(response){
    console.log(response[0]);
    cardId1.innerHTML = response[0].userId;
    cardId2.innerHTML = response[0].id;
    cardTitle.innerHTML = response[0].title;
    cardStatus.innerHTML = response[0].completed;
    
})*/

fetch("https://jsonplaceholder.typicode.com/todos")
.then (function(response){
    return response.json();
})

.then (function(response){  
    console.log(response);
    
    for(let i=0; i<response.length; i++) {
    addTodo(response[i].userId, response[i].id, response[i].title, response[i].completed);
}
});

function addTodo(userId, Id, title, completed) {
    let cardContainer = document.createElement("div");
    
    let cardId1 = document.createElement("h2");
    cardId1.innerHTML = userId;
    cardContainer.appendChild(cardId1);
    
    let cardId2 = document.createElement("h3");
    cardId2.innerHTML = Id;
    cardContainer.appendChild(cardId2);
    
    let cardTitle = document.createElement("h1");
    cardTitle.innerHTML = title;
    cardContainer.appendChild(cardTitle);
    
    let cardStatus = document.createElement("p");
    cardStatus.innerHTML = completed;
    cardContainer.appendChild(cardStatus);
    
    document.body.appendChild(cardContainer);
}
