// Creating a promise
const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS'];
    if (skills.length > 0) {
      resolve(skills); // Resolving the promise with the skills array
    } else {
      reject('Something wrong has happened'); // Rejecting the promise with an error message
    }
  }, 2000);
});

// Consuming the promise
doPromise
  .then(result => {
    console.log(result); // This will log the skills array if the promise is resolved
  })
  .catch(error => {
    console.log(error); // This will log the error message if the promise is rejected
  });

// After 2 seconds it will print:
// ["HTML", "CSS", "JS"]
