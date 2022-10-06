import { doc, onSnapshot } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import { ChatContext } from '../context/ChatContext';
import { db } from '../firebase.init';
import Message from './Message';

const Messages = () => {
    const [messages, setMessage] = useState([]);
    const {data} = useContext(ChatContext);


    useEffect(()=> {

        const unsub =onSnapshot(doc(db,'chats', data.chatId), (doc)=> {

            doc.exists() && setMessage(doc.data().message);

        })

        return () => {
            unsub();
        }

    },[data.chatId])

    return (
        <div className="max-h-[70vh] overflow-scroll overflow-x-hidden min-h-[70vh]" >
            {messages.map(m => (
                <Message message={m} />

            ))}
             
        </div>
    );
};

export default Messages;