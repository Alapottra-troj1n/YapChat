import React, { useContext} from 'react';
import { BsFillCameraVideoFill,BsThreeDots } from 'react-icons/bs';
import { MdGroupAdd } from 'react-icons/md';
import { ChatContext } from '../context/ChatContext';
const ChatNav = () => {

    const {data} = useContext(ChatContext)
    console.log(data)

    return (
        <div className="p-7 lg:gap-10 gap-3 bg-slate-600 flex justify-between items-center">
            <div>
            <h2 className="text-slate-200 font-semibold" >{data?.user.displayName}</h2>
            </div>

            <div className="flex lg:gap-4 gap-2" >
                    <BsFillCameraVideoFill className='text-xl text-slate-200 cursor-pointer' />
                    <MdGroupAdd className='text-xl text-slate-200 cursor-pointer' />
                    <BsThreeDots className='text-xl text-slate-200 cursor-pointer' />
            </div>

        </div>
    );
};

export default ChatNav;