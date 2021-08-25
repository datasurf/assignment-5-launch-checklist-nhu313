// Write your JavaScript code here!

//const { myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {
   let formSub = document.getElementById("formSubmit");

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch();

   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      const planet = pickPlanet(listedPlanets);
      addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
   });

   // get the form
   // add a listener to when the form submit
  //  form.addEventListener('submit', function(event) {
      // if it's not, preventDefault
      // get the value for each of the input field
      // let pilotInput = this.document.querySelector("input[name=pilotName]");
      // const pilotValue = pilotInput.value

      // let list = document.getElementById('faultyItems');
      // formSubmission(document, list, pilotValue, copilotValue, fuelLevelValue, cargoLevelValue)

    formSub.addEventListener('click', event => {
        event.preventDefault();
        let pilotInput = document.querySelector("input[name='pilotName']");
        let coPilotInput = document.querySelector("input[name='copilotName']");
        let fuelInput = document.querySelector("input[name='fuelLevel']");
        let cargoInput = document.querySelector("input[name='cargoMass']");
 
        let pilotValue = pilotInput.value;
        let coPilotIValue= coPilotInput.value;
        let fuelValue = fuelInput.value;
        let cargoValue = cargoInput.value;
        let list = document.getElementById("faultyItems");
 
        formSubmission(document, list, pilotValue, coPilotIValue, fuelValue, cargoValue);
    }); 
});