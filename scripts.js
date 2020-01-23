const DOG_URL = "https://dog.ceo/api/breeds/image/random";
const doggos = document.querySelector(".doggos");


function loadDog() {
  const promise = fetch(DOG_URL);
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
loadDog();

document.querySelector(".add-doggo").addEventListener("click", loadDog);
