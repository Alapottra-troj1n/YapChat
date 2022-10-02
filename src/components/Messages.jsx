import React from 'react';
import Message from './Message';

const Messages = () => {
    return (
        <div className="max-h-[70vh] overflow-scroll overflow-x-hidden min-h-[70vh]" >
                <Message/>
        </div>
    );
};

export default Messages;