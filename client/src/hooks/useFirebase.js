import {useState, useEffect} from 'react'
import {GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth'
import firebaseInitapp from '../Firebase/firebase.init'

firebaseInitapp();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user);
            }else {
                setUser('Some was wrong...');
            }
        })
    }, [])


     // Google Provider
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    // Google SignIn
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result.user);
            })
            .catch((error) =>  {
                setError(error.message);
            })
    }

    // Logout funcation
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
                window.location = '/'
            })
            .catch((eror) => {
                setError(error.message)
            })
    }

    

    return {user, error, handleGoogleSignIn, handleSignOut}

}

export default useFirebase
