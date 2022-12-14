import { signOut } from 'firebase/auth';
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { auth } from '../firebase.init';

const Navbar = () => {
    const {currentUser} = useContext(AuthContext);




    return (
        <div className="flex lg:flex-row flex-col gap-3 lg:gap-10 p-5 ">
            <div className="flex items-center gap-2 justify-center" >
            <img src="https://cdn-icons-png.flaticon.com/512/1041/1041916.png" className="w-10" alt="" />
                <h2 className="text-xl font-semibold text-white hidden lg:block" >YapChat</h2>
            </div>

            <div className="flex lg:flex-row flex-col items-center gap-3">
                <div style={{ backgroundImage: `url(${currentUser.photoURL})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} className="bg-red-200 h-10 w-10 rounded-full" >
                </div>
                <h2 className="text-md font-semibold text-white">{currentUser.displayName}</h2>
                <div>
                <button className="px-4 py-1 bg-slate-200 font-semibold text-gray-700 rounded-md" onClick={() => signOut(auth)} >logout</button>
                </div>
            </div>


        </div>
    );
};

export default Navbar;