import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyDYY1k8lpQO6AaTuw7LSCeCs0xXwyqp9pY",
    authDomain: "crwn-db-b7912.firebaseapp.com",
    projectId: "crwn-db-b7912",
    storageBucket: "crwn-db-b7912.appspot.com",
    messagingSenderId: "593455426393",
    appId: "1:593455426393:web:5ecac9517d196cfe4bfa48",
    measurementId: "G-GDL354VW1X"
};

export const createUserProfileDocument = async(userAuth, additionalData) => {

    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get()

    //console.log(snapShot);

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {

            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore  = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;