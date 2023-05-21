serverVerbs = ["GET", "GET", "GET", "POST", "GET", "POST"];
serverPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout"];
serverResponses = [
  "Welcome to WEB700 Assignment 1",
  "This assignment was prepared by Student Name",
  "Student Name: Student Email",
  "User Logged In",
  "Main Panel",
  "Logout Complete"
];

function httpRequest(httpVerb, path) {
  for (let i = 0; i < serverPaths.length; i++) {
    if (serverVerbs[i] === httpVerb && serverPaths[i] === path) {
      return `200: ${serverResponses[i]}`;
    }
  }
  return `404: Unable to process ${httpVerb} request for ${path}`;
}

console.log(httpRequest("POST", "/logout"));
console.log(httpRequest("GET", "/about"));
console.log(httpRequest("PUT", "/"));

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function automateTests(){
  testVerbs = ["GET","POST"]
  testPaths = ["/","/about","/contact","/login","/panel","/logout","/randompath1","/randompath2"]

  function randomRequest(){
    randVerb =  testVerbs[getRandomInt(testVerbs.length)]
    randPath =  testPaths[getRandomInt(testPaths.length)]
    console.log(httpRequest(randVerb,randPath))

  }
  setInterval(randomRequest, 1000);
}
automateTests();