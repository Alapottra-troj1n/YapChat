import React from 'react';
import ChatNav from './ChatNav';
import Messages from './Messages';


const Chat = () => {
    return (
        <div className=" bg-slate-200 rounded-r-xl overflow-hidden flex flex-col ">
            <ChatNav/>
            <Messages/>
        </div>
    );
};

export default Chat;