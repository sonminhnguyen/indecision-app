const promise = new Promise((revolve, reject) => {
  setTimeout(() => {
    // resolve('This is my resolve data');
    // resolve({
    //   name: 'andrew',
    //   age: 26
    // });
    reject('Something went wrong!')
  }, 5000);
});

console.log('before');

// promise.then((data) => {
//   console.log('1', data);
// }).catch((error) => {
//   console.log('error', error)
// });

promise.then((data) => {
  console.log('1', data);
}, (error) => {
  console.log('error', error)
});

console.log('before');