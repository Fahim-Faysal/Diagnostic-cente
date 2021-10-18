import { useEffect, useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import initilizeAuthentication from "../Firebase/Firebase.init";

initilizeAuthentication()


const UseFirebase = () => {
      const [user, setuser] = useState({})
      const [error, setError] = useState('')

      const googleProvider = new GoogleAuthProvider()
      const auth = getAuth()



      const GoogleSignIn = () => {
            signInWithPopup(auth, googleProvider)
                  .then(result => {
                        console.log(result.user)
                        setuser(result.user)
                  })
                  .catch(error => {
                        setError(error.messeage)
                  })
      }

      useEffect(() => {
            onAuthStateChanged(auth, (user) => {
                  if (user) {
                        setuser(user)
                  }
                  else {
                        setuser({})
                  }
            })
      }, [])


      const googleSignOut = () => {
            signOut(auth)
                  .then(() => {
                        setuser({})
                  })
      }

      return {
            user,
            error,
            GoogleSignIn,
            googleSignOut
      }
}
export default UseFirebase