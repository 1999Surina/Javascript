// JavaScript Assignment 2: Promise, async and await

/**
 *  Assume we are fetching the data from a rest endpoint in the get data function.
 *  we can simulate the same by replacing the setTimeout with fetch api and executing the same in a browser.
 *
 **/

/*

function getData(uld) {
  setTimeout(() => {
    console.log("Fetched the data!");
    return "skc@gmail.com";
  }, 4000);
}
 console.log("start");
  var email = getData("skc");
  console.log('Email id of the user id is:' + email); 
  console.log("end");

*/
// How do you solve this problem. How can we wait for till the function execution is completed, so that we can have correct email at line 10?

function getData(uid) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      console.log("Fetched the data!");
      return resolve("skc@gmail.com");
    }, 4000);
  });
}
async function getDataAsync() {
  console.log("start");
  var email = await getData("skc");
  console.log("Email id of the user id is:" + email);
  console.log("end");
}

getDataAsync();