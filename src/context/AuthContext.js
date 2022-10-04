import { onAuthStateChanged } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase.init';

export const AuthContext = createContext();


export const AuthContextProvider = ({ children }) => {
    const [loading,setLoading] = useState(false);

    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        setLoading(true);

       const unsub = onAuthStateChanged(auth, (user) => {

            setCurrentUser(user);
            setLoading(false);
            console.log(user);
        })



        return () => {
            unsub();
        }


    }, [])


    return (
        <AuthContext.Provider value={{ currentUser, loading }}>
            {children}
        </AuthContext.Provider>
    )



};