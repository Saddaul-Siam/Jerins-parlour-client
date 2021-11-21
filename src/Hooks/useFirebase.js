import { useState } from 'react';
import initializeFirebase from "../Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

initializeFirebase();

const useFirebase = () => {
  const [error, setError] = useState('')


  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const registerUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        setError(error.message)
      });
  };

  const loginUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const logOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      setError(error.message);
    });
  }


  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      }).catch((error) => {
        setError(error.message);
      });
  }

  return {
    registerUser,
    loginUser,
    logOut,
    error,
    signInWithGoogle,


  }
};

export default useFirebase;







