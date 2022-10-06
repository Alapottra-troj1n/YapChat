import { doc, onSnapshot } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { db } from '../firebase.init';

const Chats = () => {

    const {currentUser} = useContext(AuthContext);

    const [chats, setChats] = useState([]);

    useEffect(() => {

        const getChats = () => {
            const unsub = onSnapshot(doc(db, 'userChats', currentUser.uid), (doc) => {
                setChats(doc.data());
            });
        

        return () => {
            unsub();
        }
    }

        currentUser.uid && getChats();

    }, [currentUser.uid])

    console.log(chats)


    return (
        <div className="p-5 flex flex-col lg:gap-5">

          {
            Object.entries(chats)?.map(chat => (

                <div key={chat[0]} className="flex items-center lg:gap-5 gap-2 p-3 rounded-md flex-col lg:flex-row" >
                <div style={{ backgroundImage: `url(${chat[1].userInfo.photoURL})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} className="lg:h-16 lg:w-16 h-8 w-8  rounded-full" >
                </div>
                <div className="text-white">
                    <h2 className="lg:text-xl text-md font-semibold" >{chat[1].userInfo.displayName}</h2>
                    <div className="hidden md:block">
                        <h2>okey dude I will try</h2>
                    </div>
                </div>
            </div>


            ))
          }




        </div>
    );
};

export default Chats;