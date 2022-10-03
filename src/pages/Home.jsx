import React from 'react';
import Chat from '../components/Chat';
import Sidebar from '../components/Sidebar';

const Home = () => {
    return (
        <div className="lg:p-0 px-5">
            <div className="grid grid-cols-[30%,60%] lg:grid-cols-2 h-auto max-w-5xl " >
                <Sidebar/>
                <Chat/>
            </div>
        </div>
    );
};

export default Home;