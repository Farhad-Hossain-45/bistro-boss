/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import { createContext } from "react";
import auth from "../../firebase/firebase.config";


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    const provider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        return signInWithPopup(auth, provider)
    }

    const signOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log(currentUser)
            setLoading(false)

        })
        return () => {
            return unsubscribe()
        }
    }, [])

    const userInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        signOut

    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;