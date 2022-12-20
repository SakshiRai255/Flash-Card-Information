let userText = document.getElementById("usertext");
let addCard = document.getElementById("addCard");
addCard.addEventListener("click", function () {
  let text = localStorage.getItem("text");
  if (text == null) {
    textObj = [];
  } else {
    textObj = JSON.parse(text);
  }
  textObj.push(userText.value);
  localStorage.setItem("text", JSON.stringify(textObj));
  userText.value = "";
  console.log(textObj);
  showCard();
});

function showCard() {
  let text = localStorage.getItem("text");
  if (text == null) {
    textObj = [];
  } else {
    textObj = JSON.parse(text);
  }
  let insertCard = "";
  textObj.forEach(function (element, index) {
    insertCard += `<div class="card my-3 mx-2" style="width: 250px;">
        <div class="card-body">
          <h6 class="card-title">Card ${index + 1}</h6>
          <p class="card-text">${element}</p>
          <button class="btn btn-primary" onclick="deleteCard(${index})">Delete</button>
        </div>
      </div>`;
  });
  let cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = insertCard;
}

function deleteCard(index) {
  let text = localStorage.getItem("text");
  if (text == null) {
    textObj = [];
  } else {
    textObj = JSON.parse(text);
  }
  textObj.splice(index, 1);
  localStorage.setItem("text", JSON.stringify(textObj));
  showCard();
}

let deleteAllCard = document.getElementById("deleteAllCard");
deleteAllCard.addEventListener('click',function(){
let text = localStorage.getItem("text");
if (text == null) {
  textObj = [];
} else {
  textObj = JSON.parse(text);
}
textObj = [];
localStorage.setItem("text", JSON.stringify(textObj));
showCard();
});