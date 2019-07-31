let refreshButton = document.getElementById('grid');



refreshButton.addEventListener('click',createImageGrid);


function createImageGrid(){
    fetch(' https://api.thedogapi.com/v1/images/search')
    .then(response => response.json())
    .then(data => datacreateGrid(data))
    .catch(error=> console.error(error));
  }

  //createGrid
function datacreateGrid(data){
  let text = "<div class='card mb-4 box-shadow'>"+
  "<div class='card-header'>"+
    "<h4 class='my-0 font-weight-normal'>" + data.name + 
    "</h4></div><div class='card-body'><img id='dog' src="+ data.url +" class='img-fluid'/> </div></div>"; 
     
    document.getElementById('imageGrid').innerHTML += text; 
  //?????
}



//LOCAL STORAGE

let favourite = document.getElementById('fav-btn');
favourite.addEventListener('click', function(){
  let dogimg = document.getElementById('dog').getAttribute('src');
  localStorage.setItem('dogimage', dogimg);
  //let favdog = JSON.parse(localStorage.getItem('favourite'));

})
favourite.innerHTML = favourite.url;