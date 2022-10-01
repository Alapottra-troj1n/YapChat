import React from 'react';

const Chats = () => {
    return (
        <div className="p-5 flex flex-col gap-5">

            <div className="flex items-center gap-5 bg-slate-500 p-3 rounded-md" >
                <div style={{ backgroundImage: 'url(profile.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} className="bg-red-200 h-16 w-16 rounded-full" >
                </div>
                <div className="text-white">
                        <h2 className="text-xl font-semibold" >Alapottra</h2>
                        <div>
                            <h2>okey dude I will try</h2>
                        </div>
                </div>
            </div>

            <div className="flex items-center gap-5 bg-slate-500 p-3 rounded-md" >
                <div style={{ backgroundImage: 'url(profile.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} className="bg-red-200 h-16 w-16 rounded-full" >
                </div>
                <div className="text-white">
                        <h2 className="text-xl font-semibold" >Alapottra</h2>
                        <div>
                            <h2>okey dude I will try</h2>
                        </div>
                </div>
            </div>

            <div className="flex items-center gap-5 bg-slate-500 p-3 rounded-md" >
                <div style={{ backgroundImage: 'url(profile.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} className="bg-red-200 h-16 w-16 rounded-full" >
                </div>
                <div className="text-white">
                        <h2 className="text-xl font-semibold" >Alapottra</h2>
                        <div>
                            <h2>okey dude I will try</h2>
                        </div>
                </div>
            </div>

            
        </div>
    );
};

export default Chats;