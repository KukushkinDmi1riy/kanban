// import firebase from 'firebase'

import firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

export const initialize = () => {
  var firebaseConfig = {
      apiKey: "AIzaSyA6ZB8IuqA9aNqn0k4o600doziAA-m10rQ",
      authDomain: "kanban-d1e1d.firebaseapp.com",
      databaseURL: "https://kanban-d1e1d.firebaseio.com",
      projectId: "kanban-d1e1d",
      storageBucket: "kanban-d1e1d.appspot.com",
      messagingSenderId: "638191723612",
      appId: "1:638191723612:web:3d19b06fa3c84fc5d37299",
      measurementId: "G-D0EBRXQZ05"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
}

export const createDesk = (name) => {
    const db = firebase.firestore();
    
    return db.collection("desks")
    .add({name})
    .then((docRef)=> docRef.get())
}

export const getDesks = () => {
    const db = firebase.firestore();
    return db.collection("desks").get().then((querySnapshot) => {
      const desks = [];
      querySnapshot.forEach((doc) => {
        desks.push({
          id: doc.id,
          name: doc.data().name
        });
      });
      return desks;
    });
}

export const deleteDesk = (id) => {
    const db = firebase.firestore();

    return db.collection("desks")
      .doc(id)
      .delete()
}

export const getColumns = (deskId) => {
    const db = firebase.firestore();

    return db.collection("columns").where('deskId', '==', deskId).get().then((querySnapshot) => {
      const columns = [];
      querySnapshot.forEach((doc) => {
        const {deskId, name} = doc.data();

        columns.push({
          id: doc.id,
          deskId,
          name
        });
      });
      return columns;
    });
}

export const deleteColumn = (id) => {
    const db = firebase.firestore();

     return db.collection("columns")
        .doc(id)
        .delete()
  }

  export const getCards = (columnId) => {
    const db = firebase.firestore();
    return db.collection("cards").
    where('columnId', '==', columnId).get().then((querySnapshot) => {
      const cards = [];
      querySnapshot.forEach((doc) => {
        const {columnId, name} = doc.data();

        cards.push({
          id: doc.id,
          columnId,
          name
        });
      });
      return cards;
    });
  }

export const deleteCard = (id) => {
    const db = firebase.firestore();

      return db.collection("cards")
        .doc(id)
        .delete()
}

export const createCard = (name, columnId) => {
    const db = firebase.firestore();
    
    return db.collection("cards")
    .add({name, columnId})
    .then((docRef)=> docRef.get())
}

export const createColumn = (name, deskId) => {

  const db = firebase.firestore();

  return db.collection("columns")
    .add({name, deskId})
    .then((docRef)=> docRef.get())
  }