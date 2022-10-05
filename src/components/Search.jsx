import React, { useContext, useState } from 'react';
import { collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from "firebase/firestore";
import { db } from '../firebase.init';
import { AuthContext } from '../context/AuthContext';

const Search = () => {


    const [username, setUsername] = useState('');
    const [user, setUser] = useState(null);
    const [err, setErr] = useState(false);

    const {currentUser} = useContext(AuthContext)


    const handleSearch = async () => {
        setUser(null)
        const q = query(collection(db, "users"), where("displayName", "==", username));
     
        try {
            const querySnapshot = await getDocs(q);
            if(querySnapshot.empty) {
                setErr(true)
                return;
            }
            querySnapshot.forEach((doc) => {
                setUser(doc.data());
                console.log(doc.data());
            });
            setErr(false);
        } catch (error) {
            setErr(true);
            console.error(error);
        }

    }

    console.log(username);

    const handleKey = (e) => {
       
        e.code === "Enter" && handleSearch();
    }

    const handleSelect = async() => {

        const combinedId =
        currentUser.uid > user.uid
          ? currentUser.uid + user.uid
          : user.uid + currentUser.uid;
       
        try {
            const res = await getDoc(doc(db, 'chats', combinedId)); 

            if(!res.exists()) {
                //create a chat in chats collection
                await setDoc(doc(db, 'chats', combinedId), {message: []})

                await updateDoc(doc(db, 'userChats', currentUser.uid), {
                    [combinedId + ".userInfo"]: {
                        uid: user.uid,
                        displayName: user.displayName,
                        photoURL: user.photoURL
                    },
                    [combinedId + '.date'] : serverTimestamp()
                })

                await updateDoc(doc(db, 'userChats', user.uid), {
                    [combinedId + ".userInfo"]: {
                        uid: currentUser.uid,
                        displayName: currentUser.displayName,
                        photoURL: currentUser.photoURL
                    },
                    [combinedId + '.date'] : serverTimestamp()
                })
            }



        } catch (error) {
            console.log(error)
            setUser(null);
            setUsername("")
        }



    }

    return (
        <>
            <div>
                <input type="text" name="search" onKeyDown={handleKey} onChange={(e) => setUsername(e.target.value)} className=" p-2 pl-5 w-full bg-slate-500 cursor-pointer " placeholder="Find a user" />
            </div>
            {err && <h2 className="text-red-500 text-center font-semibold mt-2" >User not found</h2>}

            {
                user && <div onClick={handleSelect} className="flex items-center lg:gap-5 gap-2 p-3 rounded-md flex-col lg:flex-row bg-slate-500 hover:bg-slate-700  cursor-pointer transition-all shadow-md" >
                    <div style={{ backgroundImage: `url(${user.photoURL})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} className="lg:h-16 lg:w-16 h-8 w-8  rounded-full" >
                    </div>
                    <div className="text-white">
                        <h2 className="lg:text-xl text-md font-semibold" >{user.displayName}</h2>
                    </div>
                </div>

            }
        </>
    );
};

export default Search;