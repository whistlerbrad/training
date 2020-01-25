// main api random image url
const DOG_URL = "https://dog.ceo/api/breeds/image/random";
// api breeds url
const BREEDS_URL = "https://dog.ceo/api/breeds/list/all";
const JSON_URL = "https://jsonplaceholder.typicode.com/albums/1/photos";
// divs
const doggos = document.querySelector(".doggos");
const breeds = document.querySelector(".breeds");
const albumDiv = document.querySelector(".album");
// select message
const selectMessage = "Choose one";
// promise for select breed option
const promiseBreeds = fetch(BREEDS_URL);
const promiseAlbums = fetch(JSON_URL);


promiseAlbums
  .then(function(responseAlbums) {
    const processingPromiseAlbums = responseAlbums.json();
    return processingPromiseAlbums;
  })

  .then(function(processingPromiseAlbums) {
    let albums = processingPromiseAlbums;
    // let breed = processedResponse.message;
    // let returnedBulldog = Object(bulldog);
    let returnedAlbums = Object(albums);

    albumDiv.innerHTML = '';
    returnedAlbums.forEach((item, i) => {
      let id = item.id;
      let url = item.url;
      let title = item.title;
      if (i <= 10){

      const img = document.createElement("img");
      const contentTitle = document.createElement("P");
      img.src = url;
      img.alt = title;
      contentTitle.innerHTML = `${title}`; 
      albumDiv.appendChild(img);
      albumDiv.appendChild(contentTitle);
          console.log(title);
      }
    });


    // returnedBreeds.unshift(selectMessage);
    // for( breed in returnedBreeds ) {
    //     breeds.add( new Option( returnedBreeds[breed] ) );
    // };
});



promiseBreeds
  .then(function(response) {
    const processingPromise = response.json();
    return processingPromise;
  })

  .then(function(processedResponse) {
    let bulldog = processedResponse.message.bulldog;
    let breed = processedResponse.message;
    let returnedBulldog = Object(bulldog);
    let returnedBreeds = Object.keys(breed);


    returnedBulldog.forEach((item, i) => {
      console.log(item);
    });


    returnedBreeds.unshift(selectMessage);
    for( breed in returnedBreeds ) {
        breeds.add( new Option( returnedBreeds[breed] ) );
    };
});

/*
  // example of forEach loop
    returnedBreeds.forEach(myFunction);
    function myFunction(item, index) {
      breeds.innerHTML += index + ":" + item + "<br>";
    }
*/

// main image function with promise
function loadDog(url) {
  const promise = fetch(url);
  document.querySelector(".doggos").innerHTML = "Loading..";

  promise
    .then(function(response) {
      const processingPromise = response.json();
      console.table(response);
      return processingPromise;
    })
    .then(function(processedResponse) {
      const img = document.createElement("img");
      console.table(processedResponse);
      img.src = processedResponse.message;
      img.alt = "Cute doggo";
      doggos.innerHTML = '';
      doggos.appendChild(img);
    });
}

// auto load a dog
loadDog(DOG_URL);

// fetch another button
document.querySelector(".add-doggo").addEventListener("click", function() {
  loadDog(DOG_URL);
});

// Choose a breed select option
breeds.addEventListener("change", loadByBreed);

function loadByBreed() {
    let = selectedBreed = this.value
    console.log('You selected: ', selectedBreed);
    if (selectedBreed === selectMessage){
        console.log("Bad Choice");
        selectedBreed = "husky";
    }
    let selectedUrl = `https://dog.ceo/api/breed/${selectedBreed}/images/random`;
    console.table('You selected: ', selectedUrl);
    loadDog(selectedUrl);
}
