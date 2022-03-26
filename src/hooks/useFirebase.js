import { useEffect, useState } from 'react';
import initializeAuthentication from '../pages/Login/Login/Firebase/firebase.init';
import { updateProfile, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

initializeAuthentication();
const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);


    const registerUser = (email, password, displayName, history) => {

        setIsLoading(true)
        console.log('displayName',displayName)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newUser = {email,displayName}
                setUser(newUser)
                //sendData
                saveUser(email, displayName,'POST');
                updateProfile(auth.currentUser, {
                    displayName: displayName
                }).then(() => {
                }).catch((error) => {
                })
                history.replace('/');
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));

    }
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }
    const signInWithGoogle = (location, history) => {
        const GoogleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, GoogleProvider)
            .then((result) => {
                saveUser(user.email,user.displayName,'PUT');
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            }).catch((error) => {
                setAuthError(error.message);
            });

    }

    useEffect(() => {

        const unChange = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return (() => unChange)
    }, [])


    useEffect(()=>{
        fetch(`https://sleepy-forest-29303.herokuapp.com/users/${user.email}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setAdmin(data.admin)})
        
    },[user.email])

    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }
    const saveUser = (email,displayName,method) => {
        const user = { email,displayName };
        fetch('https://sleepy-forest-29303.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }


    return {
        user
        , loginUser
        , isLoading
        , authError
        , logout
        , registerUser
        , signInWithGoogle
        , admin
        , saveUser

    }
};

export default useFirebase;