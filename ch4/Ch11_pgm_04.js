// The Ch11_pgm_03 promise has been settled with resolve. Let us another example when the promise is settled with reject.

// Creating a promise
const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS'];
    if (skills.includes('Node')) {
      resolve('fullstack developer'); // Resolving the promise with a success message
    } else {
      reject('Something wrong has happened'); // Rejecting the promise with an error message
    }
  }, 2000);
});

// Consuming the promise
doPromise
  .then(result => {
    console.log(result); // This will log the success message if the promise is resolved
  })
  .catch(error => {
    console.error(error); // This will log the error message if the promise is rejected
  });

// After 2 seconds it will print:
// Something wrong has happened



    // Something wrong has happened