import firebase from 'firebase/app';
import 'firebase/firestore';    //for database
import 'firebase/auth'; //for authentication

const config = {
    apiKey: "AIzaSyAON7wHP-MmYI05JrMdZNnXWQRl2dP_Ow0",
    authDomain: "profiletracker-eb7d0.firebaseapp.com",
    databaseURL: "https://profiletracker-eb7d0.firebaseio.com",
    projectId: "profiletracker-eb7d0",
    storageBucket: "profiletracker-eb7d0.appspot.com",
    messagingSenderId: "830976312223",
    appId: "1:830976312223:web:816a3fb7bb9c7bd12f33aa",
    measurementId: "G-MH9Q5HJVVX"
  };

  firebase.initializeApp(config);

  //this entire function 'createUserProfileDocument' takes data on the form from the user and puts it inside our db
  //it serves the create purpose from CRUD

  export const createUserProfileDocument = async (userAuth, additionalData) => {    //this userAuth object is coming from App.js
    //in App.js, in componentDidMount method, userAuth is passed to createUserProfileDocument as user!!
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);   //assigning userRef to user table in firestore db
    // then we await the userRef with .get() to get the data in user table in a snapshot object
  
    const snapShot = await userRef.get();    //retrieving the data from firestore, this gets us back a snapshot object
  
    if (!snapShot.exists) {      //if the user doesn't actually exists, then we create the user in our database
                                  //we are filling the database with the data that we get from userAuth object
      const { displayName, email } = userAuth;
      const createdAt = new Date();     //adding date in our db table of when the user is created/logged in
      //this try-catch block is for
      //doing an asynchronous request to our db to store this data
      try {
        await userRef.set({        //.set gives the create functionality of CRUD, it is creating the table in db
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };

  export const postComment = async commUser => {
    console.log(commUser);
    //console.log(commUser.currUser)
    if(!commUser.currentUser) return
    const userComment = firestore.doc(`comments/${commUser.currentUser.createdAt}`);

    //const snapShot = await userComment.get();

    const { comment } = commUser;
    const createdAt = new Date();
    const commentBy = commUser.currentUser.displayName;

    try {
        await userComment.set({        //.set gives the create functionality of CRUD, it is creating the table in db
          comment,
          createdAt,
          commentBy
        });
    } catch (error) {
        console.log('error posting comment', error.message);
    }

    return userComment;
  };


  //configuring the firebase for using the google authentication

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();   // gives access to GoogleAuth Provider class from authentication library (auth)
  provider.setCustomParameters({ prompt: 'select_account'});    //we walways want to trigger google prompt whenever we use the google auth
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
