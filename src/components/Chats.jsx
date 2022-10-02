import React from 'react';

const Chats = () => {
    return (
        <div className="p-5 flex flex-col lg:gap-5">

            <div className="flex items-center lg:gap-5 gap-2 p-3 rounded-md flex-col lg:flex-row" >
                <div style={{ backgroundImage: 'url(profile.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} className="lg:h-16 lg:w-16 h-8 w-8  rounded-full" >
                </div>
                <div className="text-white">
                        <h2 className="lg:text-xl text-md font-semibold" >Alapottra</h2>
                        <div className="hidden md:block">
                            <h2>okey dude I will try</h2>
                        </div>
                </div>
            </div>

            

            
        </div>
    );
};

export default Chats;