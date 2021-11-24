import { useEffect, useState } from 'react';
import initializeFirebase from "../Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";

initializeFirebase();

const useFirebase = () => {
  const [error, setError] = useState('')
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState(true);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const registerUser = (email, password) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        // save to database
        saveUser(user.email, user.displayName, 'POST');
      })
      .catch((error) => {
        setError(error.message)
      })
      .finally(() => {
        setIsLoading(false);
      })
  };

  const loginUser = (email, password) => {
    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // const user = userCredential.user;
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      })
  };

  const logOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      setError(error.message);
    });
  }


  const signInWithGoogle = (location, navigate) => {
    setIsLoading(true)
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;

        // save to database
        saveUser(user.email, user.displayName, 'PUT');
        setAuthError("");
        const destination = location?.state?.from || '/';
        navigate(destination)
      }).catch((error) => {
        setAuthError(error.message)
      })
      .finally(() => setIsLoading(false))
  }

  // onAuthStateChanged 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({})
      }
      setIsLoading(false);
    });
    return () => unsubscribe
  }, [auth]);

  // save user information
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch(`http://localhost:5000/users`, {
      method: method,
      headers: { 'content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(result => console.log(result))
  };

  return {
    user,
    registerUser,
    loginUser,
    logOut,
    error,
    signInWithGoogle,
    isLoading,
    authError,


  }
};

export default useFirebase;








