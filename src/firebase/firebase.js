import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

// const config = {
//   apiKey: "AIzaSyC3tNjUb4qnipTTEMhdqdTchUj1W0lhMhg",
//   authDomain: "expensify-1ad6f.firebaseapp.com",
//   databaseURL: "https://expensify-1ad6f.firebaseio.com",
//   projectId: "expensify-1ad6f",
//   storageBucket: "expensify-1ad6f.appspot.com",
//   messagingSenderId: "964276643978",
//   appId: "1:964276643978:web:adf510f940cd8ce1d4e573",
//   measurementId: "G-JFMECB61M3"
// };

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses').on('child_change', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })



// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
    
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//   });

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
  
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
// });

// database.ref('expenses').push({
//   description: 'Rent',
//   note: '',
//   amount: 109500,
//   createdAt: 76890345892
// });

// database.ref('expenses').push({
//   description: 'Phone bill',
//   note: '',
//   amount: 5900,
//   createdAt: 87834524763
// });


// database.ref('notes').push({
//   title: 'To do',
//   body: 'Go for a run'
// });

// const firebaseNotes = {
//   notes: {
//     '12': {
//       title: 'First note!',
//       body: 'This is my note'
//     },
//     '761ase': {
//       title: 'Another note',
//       body: 'This is my note'
//     }
//   }
// };

// const notes = [{
//   id: '12',
//   title: 'First note!',
//   body: 'This is my note'
// }, {
//   id: '761ase',
//   title: 'Another note',
//   body: 'This is my note'
// }];

// database.ref('notes').set(notes);
// database.ref()


// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// })

//FETCHING
// database.red()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   }).catch((e) => {
//     console.log('Error fetching date', e)
//   })

//   // on keep update if the database changing but once dont do it
// const onValueChange = database.ref()
//   .on('value', (snapshot) => {
//     console.log(snapshot.val());
//   }, (e) => {
//     console.log('Error with data fetching', e)
//   })

// database.ref().on('value', )

// setTimeout(() => {
//   database.ref('age').set(29);
// }, 3500);  

// setTimeout(() => {
//   database.ref.off(onValueChange);
// }, 7000);  

// setTimeout(() => {
//   database.ref('age').set(29);
// }, 10500);  

// UPDATE
// database.ref().update({
//   name: 'Mike',
//   age: 29,
//   job: 'Software developer',
//   isSingle: null,
//   'location/city': 'Boston'
// });

//REMOVE
// database.ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('data was removed')
//   }).catch((e) => {
//     console.log('data not removed', e)
//   })

// database.red('isSingle').set(null);

// ADD
// database.ref().set({
//   name: 'Andrew Mead',
//   age: 26,
//   isSingle: false,
//   location: {
//     city: '{hiladelphia',
//     country: 'USA'
//   }
// }).then(() => {
//   console.log('Data is saved');
// }).catch((e) => {
//   console.log('This failed.', e)
// });

// // database.ref.set('this is my data');

// database.ref('age').set(27);
// database.ref('location/city').set('New York');

// database.ref('attributes').set({
//   height: 73,
//   weight: 150
// }).then(() => {
//   console.log('Second set call worked');
// }).catch((e) => {
//   console.log('Things didnt for the second error', e);
// });