// VARIABLES
let randomButton = document.getElementById('randombutton');


//EVENTLISTENERS
randomButton.addEventListener('click', getRandomDoggo);



//FETCH CALLS
function getRandomDoggo() {
    fetch(' https://api.thedogapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => dataRandomDoggo(data))
        .catch (error => console.error(error));

}





/// HELPER FUNCTIONS
function dataRandomDoggo(data) {
    if (data[0].breeds[0] != undefined) {

        let text = "<img class='randomImage' src='" + data[0].url + "'>";
        text += "<h1 class='randomImage'>" + data[0].breeds[0].name + "</h1>";
        document.getElementById('randomImageContainer').innerHTML = text;

    }
}

// function notifyUser(error){
//     const errorContainer = document.querySelector('.alert');
//     errorContainer.innerHTML = `There was an error with the server request (${error}). <br> Click the button again.`;
//     errorContainer.style.display = 'block';
//     setTimeout(()=>{
//       errorContainer.innerHTML = '';
//       errorContainer.style.display ='none';
//     },4000)
//   }


// Highlight buttons
let list = document.getElementById("navBarList");
let listItems = list.getElementsByClassName("nav-item");
for (var i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener("click", function() {
  let current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}



