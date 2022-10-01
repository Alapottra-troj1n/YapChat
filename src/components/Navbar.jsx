import React from 'react';

const Navbar = () => {
    return (
        <div className="flex gap-10">
            <div className="flex items-center" >
                <h2 className="text-xl font-semibold text-white" >YappChat</h2>
            </div>

            <div className="flex items-center gap-3">
                <div style={{ backgroundImage: 'url(profile.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} className="bg-red-200 h-10 w-10 rounded-full" >
                </div>
                <h2 className="text-md font-semibold text-white">Alapottra</h2>
                <div>
                <button className="px-4 py-1 bg-fuchsia-400 text-white rounded-md">logout</button>
                </div>
            </div>


        </div>
    );
};

export default Navbar;