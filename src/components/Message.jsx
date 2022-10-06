import React, { useContext, useEffect, useRef } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';

const Message = ({ message }) => {
    const { currentUser } = useContext(AuthContext)
    const { data } = useContext(ChatContext);
    const ref = useRef();
    useEffect(() => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    }, [message]);
    console.log(currentUser)
    return (
        <div className="py-3 px-5 " ref={ref}>
            <h2 className='font-semibold text-sm my-2' >{message.senderId === currentUser.uid
                ? 'You'
                : data.user.displayName}</h2>
            <div className="flex items-center gap-3 " >
                <div >
                    {/* profilepic */}
                    <div style={{
                        backgroundImage: `url(${message.senderId === currentUser.uid
                            ? currentUser.photoURL
                            : data.user.photoURL})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'
                    }} className="bg-red-200 h-10 w-10 rounded-full" >
                    </div>

                </div>

                <div className='px-7 py-2 m-1 rounded-t-xl rounded-br-xl bg-white ' >
                    {/* message */}
                    <h2 className="font-semibold text-sm lg:text-md" >{message.text}</h2>

                </div>
            </div>
            <div className='py-5 lg:w-40 md:w-28 w-28 ml-14' >
                {message.img && <img src={message.img} className="rounded-md" alt="" />}
            </div>



            <div>
                {/* time */}
               
            </div>
        </div>
    );
};

export default Message;