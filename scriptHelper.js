// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
  const target = document.getElementById("missionTarget");
  target.innerHTML = `
  <h2>Mission Destination</h2>
  <ol>
      <li>Name: ${name}</li>
      <li>Diameter: ${diameter}</li>
      <li>Star: ${star}</li>
      <li>Distance from Earth: ${distance} </li>
      <li>Number of Moons: ${moons}</li>
  </ol>
  <img src=${imageUrl}>
  `

  // get the missionTarget div
  // set the inner HTML to this
  // fill in the information that is passed in
   // Here is the HTML formatting for our mission target div.
   /*
    `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
                `
   */
}
  //check if the test Input is empty
    // if it is, return 'Empty'
  // check if it's not a number isNaN
    // return 'Not a Number'
  // else
    // return 'Is a Number'
  
function validateInput(testInput) {
  if (testInput === ""){
    return 'Empty';
  } else if (isNaN(testInput)){
    return 'Not a Number';
  } else {
    return 'Is a Number';
  }
}

    // check if any of the values are empty
    // if (validateInput(pilotValue) === 'Empty' || validateInput(copilotValue) === 'Empty')
    // alert user that they need to fill out all the fields alert('message')
  // check if fuelLevelValue and cargoLevelValue are not numbers
    // alert the user that must enter valid input


  // set the list.style.visibility = 'visible'
  // get the pilot status, update the inner HTML to say `Pilot ${pilotValue} is ready for launch`
  // get the copilot status, update the inner HTML to say `CoPilot ${copilotValue} is ready for launch`
  // check if the fuel level is less 10,000
    // change launchStatus to "Shuttle not ready for launch", and color to red
    // change the fuelStatus to "Fuel level too low for launch"

  // check if the cargo level is more than 10,000
    // change launchStatus to "Shuttle not ready for launch", and color to red
    // change the cargoStatus to "Cargo level too high for launch"

    // if both fuel and cargo are good
      // change the launchStatus to "Shuttle is Ready for Launch" and color to green


function formSubmission(document, list, pilotValue, copilotValue, fuelLevelValue, cargoLevelValue) {
  
  let fuelStat = document.getElementById("fuelStatus");
  let cargoStat = document.getElementById("cargoStatus");
  let launchStat = document.getElementById("launchStatus");
  let pilotStat = document.getElementById("pilotStatus");
  let copilotStat = document.getElementById("copilotStatus");

  if (validateInput(document) === 'Empty'||validateInput(list) === 'Empty'||validateInput(pilotValue) === 'Empty'||validateInput(copilotValue) === 'Empty'||validateInput(fuelLevelValue) === 'Empty'||validateInput(cargoLevelValue) === 'Empty'){
    alert('All fields required.');
  } else if (validateInput(fuelLevelValue) === 'Not a Number'||validateInput(cargoLevelValue) === 'Not a Number'){
    alert('Fuel Level (L) and Cargo Mass (kg) must be a number value.');
  }

  list.style.visibility = 'visible';
  pilotStat.innerHTML = `Pilot ${pilotValue} is ready for launch`;
  copilotStat.innerHTML = `CoPilot ${copilotValue} is ready for launch`;

  if (fuelLevelValue < 10000){
    launchStat.innerHTML = 'Shuttle not ready for launch';
    launchStat.style.color = 'red';
    fuelStat.innerHTML = 'Fuel level too low for launch';
  } else if (cargoLevelValue > 10000){
    launchStat.innerHTML = 'Shuttle not ready for launch';
    launchStat.style.color = 'red';
    cargoStat.innerHTML = 'Cargo level too high for launch';
  } else {
    launchStat.innerHTML = 'Shuttle ready for launch';
    launchStat.style.color = 'green';
  }
}

async function myFetch() {
    let planetsReturned;

  planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then(function (response) {
      // get the json from the response
      return response.json();
  })
  return planetsReturned;
}

function pickPlanet(planets) {
  let index;
  index = Math.floor(Math.random() * planets.length);
  return planets[index];

  // randomly pick a planet from the array
  // Math random for index
};

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
