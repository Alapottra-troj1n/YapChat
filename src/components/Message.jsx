import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';

const Message = ({message}) => {
    const {currentUser} = useContext(AuthContext)
    const {data} = useContext(ChatContext);

    return (
        <div className="py-7 px-5" >
            <div className="flex items-center gap-3 " >
                <div >
                    {/* profilepic */}
                    <div style={{ backgroundImage: 'url(profile.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} className="bg-red-200 h-10 w-10 rounded-full" >
                    </div>

                </div>
                <div className='px-7 py-2 m-1 rounded-t-xl rounded-br-xl bg-white ' >
                    {/* message */}
                    <h2 className="font-semibold text-sm lg:text-md" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolor dolore aliquid sed voluptas hic! Repudiandae numquam repellendus.</h2>

                </div>
            </div>
            <div className='py-5 lg:w-40 md:w-28 w-28 ml-14' >
                <img src="profile.jpg" className="rounded-md" alt="" />
            </div>



            <div>
                {/* time */}
                <h2 className="text-sm text-slate-600" >Just Now</h2>
            </div>
        </div>
    );
};

export default Message;