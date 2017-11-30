import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDhkDVSbEHBXEpJvd3w7X1mw-np1eyT87Q',
  authDomain: 'expensify-394eb.firebaseapp.com',
  databaseURL: 'https://expensify-394eb.firebaseio.com',
  projectId: 'expensify-394eb',
  storageBucket: 'expensify-394eb.appspot.com',
  messagingSenderId: '858322187124'
};

firebase.initializeApp(config);

const database = firebase.database();

// database.ref('expenses').push({
//   description: 'coffee',
//   note: 'good coffee',
//   amount: 3.5,
//   createdAt: 1000
// });

// database.ref('expenses').push({
//   description: 'water bill',
//   note: 'moderate',
//   amount: 5,
//   createdAt: 1500
// });

// database.ref('expenses').push({
//   description: 'rent',
//   note: '',
//   amount: 500,
//   createdAt: 2000
// });

database.ref('expenses').on('value', (snapshot) => {
  const expenses = [];
  snapshot.forEach((childSnapshot) => {
    expenses.push({
      id: childSnapshot.key,
      ...childSnapshot.val()
    });
  });
  console.log(expenses);
});

database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// const onValueChange = database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job}`);
// }, (err) => {
//   console.log('This failed.', err);
// });

// setTimeout(() => {
//   database.ref().update({ job: 'Junior software developer' });
// }, 3000);

// setTimeout(() => {
//   database.ref().off('value', onValueChange);
// }, 6000);

// setTimeout(() => {
//   database.ref().update({ job: 'Senior software developer' });
// }, 9000);

// database.ref()
//   // read the DB for once
//   .once('value')
//   .then((snapshot) => {
//     // Promise will return a snapshot of the DB
//     // call snapshot.val to access the data
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(err => console.log('This failed.', err));

// ref() get a reference to the root of the DB
// database.ref().set({
//   name: 'Lucas Weng',
//   age: 28,
//   job: 'Software developer',
//   stressLevel: 5,
//   location: {
//     city: 'Taipei',
//     country: 'Taiwan'
//   }
// }).then(() => {
//   console.log('Data saved');
// }).catch((err) => {
//   console.log('This failed.', err);
// });

// database.ref().update({
//   stressLevel: null,
//   'location/city': 'Taipei'
// });
