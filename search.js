//VARIABLES
let dogList = document.getElementById('doggoDropDown');
let dogImage = document.getElementById('listImageContainer');
let moreInfo = document.getElementById('more-info-btn');
let favdogs;

//EVENTLISTENERS
getBreed();
moreInfo.addEventListener('click',getImage);
moreInfo.addEventListener('click',getInfo);

//FETCH CALLS
function getBreed() {
    fetch('https://api.thedogapi.com/v1/breeds')
    .then(response => response.json())
    .then(data => dataGetBreed(data))
    .catch (error => console.error(error));
}

function getImage() {
    fetch('https://api.thedogapi.com/v1/images/search?25b751ef-1996-454d-94ca-b8befef33c26'+dogList.value)
    .then(response => response.json())
    .then(data => dataGetImage(data))
    .catch (error => console.error(error));
}

function getInfo(){
    document.getElementById('moreInfoBreed').innerHTML = "";
    document.getElementById('listImageContainer').innerHTML = "";

    fetch('https://api.thedogapi.com/v1/breeds/'+dogList.value)
    .then(response => response.json())
    .then(data => dataGetInfo(data))
    .catch (error => console.error(error));
}



//HELPER FUNCTIONS
function dataGetBreed(data) {
    for (let i= 0; i < data.length; i++) {
    let text = "<option value='" + data[i].id + "'>" + data[i].name + "</option>";
    document.getElementById('doggoDropDown').innerHTML += text;
    console.log(data[i].name);
  

    }

}

function dataGetImage(data) {
    let text = "<img id='dog' src='" + data[0].url + "'width= '400px' height= '300px'>";
    document.getElementById('listImageContainer').innerHTML += text;
    //console.log(data.url);
}

function dataGetInfo(data){
    let text = "<tr><td><strong>Breed name: </strong>"+"<br/>"+"<br/>"+ data.name +"</td>";

    text += "<td><strong>Bred for: </strong>" +"<br/>"+"<br/>"+ data.bred_for +"</td>";

    text += "<td><strong>Life span: </strong>" + "<br/>"+"<br/>"+ data.life_span +"</td>";

    text += "<td><strong>Temperament: </strong>" +"<br/>"+"<br/>"+ data.temperament +"</td>";

    text += "<td><strong>Origin: </strong>" + "<br/>"+"<br/>"+ data.origin +"</td></tr>";

    //text += "<p><strong>Weight: </strong>" + data.weight +"</p>";
    //text += "<p><strong>Height: </strong>" + data.height +"</p>";
    document.getElementById('moreInfoBreed').innerHTML += text;
}

/*function notifyUser(error){
    const errorContainer = document.querySelector('.alert');
    errorContainer.innerHTML = `There was an error with the server request (${error}). <br> Click the button again.`;
    errorContainer.style.display = 'block';
    setTimeout(()=>{
      errorContainer.innerHTML = '';
      errorContainer.style.display ='none';
    },4000)
  }*/

// Highlight buttons
//let list = document.getElementById("navBarList");
let listItems = document.getElementsByClassName("nav-item");
for (let i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener("click", function() {
  let current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

//LOCAL STORAGE- FAVOURITE
let favourite = document.getElementById('fav-btn');
favourite.addEventListener('click', function(){
  let dogimg = document.getElementById('dog').getAttribute('src');
    favdogs.push(dogimg);
  localStorage.setItem('dogimage', favdogs);
  //let favdog = JSON.parse(localStorage.getItem('favourite'));

})