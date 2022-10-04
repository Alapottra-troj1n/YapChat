import React from 'react';
import { MdOutlineAddPhotoAlternate } from 'react-icons/md';
import { CgAttachment } from 'react-icons/cg';
const Input = () => {




    
    return (
        <div className="bg-white relative" >
            <input type="text" className="h-16 p-4 w-full" placeholder="Type Something" />

            <div className="absolute top-1/2 -right-8 transform -translate-x-1/2 -translate-y-1/2 ">
                <div className="flex items-center gap-3" >
                    <CgAttachment className='text-xl text-slate-600 cursor-pointer' />
                    <MdOutlineAddPhotoAlternate className="text-xl text-slate-600 cursor-pointer"  />
                    <button className=' text-sm rounded-lg  px-5 py-2 text-white bg-gray-500 hover:bg-slate-700 transition-all' >Send</button>
                </div>

            </div>
        </div>
    );
};

export default Input;