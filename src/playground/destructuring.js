//
//  Object destructuring
//
// const person = {
//   name: 'Andrew',
//   age: 26,
//   location: {
//     city: 'Philadelphia',
//     temp: 92
//   }
// };

// const name = person.name;
// const age = person.age;
// console.log(`${person.name} is ${person.age}.`);

// const {name: firstName = 'Anonymous', age} = person;
// console.log(`${firstName} is ${age}.`);

// const {city, temp: temperature} = person.location;

// if(city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`)
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// }

// const { name: publisherName = 'Self-Publisher' } = book.publisher;

// console.log(publisherName);

const add = ({ a, b }, c) => {
  return a + b + c;
}

console.log(add({ a: 1, b: 12 }, 100));

//
// Array destructuring
//

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennylvania', '19147']

// const [street, city, state, zip] = address;
const [, city, state = 'New York'] = address;

// console.log(`You are in ${address[1]} ${address[2]}.`);
console.log(`You are in ${city} ${state}.`);