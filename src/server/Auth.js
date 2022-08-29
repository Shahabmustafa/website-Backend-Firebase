import { useContext,createContext, useEffect, useState } from "react";
import { GoogleAuthProvider,signInWithPopup,signOut,onAuthStateChanged } from "firebase/auth";
import {auth} from '../server/firebase-config';

const AuthContext = createContext()

export const AuthContextProvider = ({children})=>{
    const [User,setUser] = useState({});

    const googleSignIn =()=>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth,provider)
        // signInWithRedirect(auth,provider)
    };

    const logOut = () =>{
        signOut(auth)
    }

    useEffect(()=>{
        const AuthChange = onAuthStateChanged(auth,(currentUser)=>{
                setUser(currentUser)
                console.log('User',currentUser)
        });
        return()=>{
            AuthChange();
        }
    },[])
    return(
        <AuthContext.Provider value={{googleSignIn,logOut,User}}>
            {children}
        </AuthContext.Provider>
    )
}


export const UserAuth =()=>{
    return useContext(AuthContext)
}