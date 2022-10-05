import React, { useState } from 'react';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../firebase.init';

const Search = () => {


    const [username, setUsername] = useState('');
    const [user, setUser] = useState(null);
    const [err, setErr] = useState(false);


    const handleSearch = async () => {
        setUser(null)
        const q = query(collection(db, "users"), where("displayName", "==", username));
     
        try {
            const querySnapshot = await getDocs(q);
            console.log(querySnapshot)
            querySnapshot.forEach((doc) => {
                setUser(doc.data());
                console.log(doc.data());
            });
        } catch (error) {
            setErr(true);
            console.error(error);
        }

    }

    console.log(username);

    const handleKey = (e) => {
       
        e.code === "Enter" && handleSearch();
    }

    return (
        <>
            <div>
                <input type="text" name="search" onKeyDown={handleKey} onChange={(e) => setUsername(e.target.value)} className=" p-2 pl-5 w-full bg-slate-500 cursor-pointer " placeholder="Find a user" />
            </div>
            {err && <h2 className="text-red-500 text-center" >User not found</h2>}

            {
                user && <div className="flex items-center lg:gap-5 gap-2 p-3 rounded-md flex-col lg:flex-row bg-slate-500 hover:bg-slate-700  cursor-pointer transition-all" >
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