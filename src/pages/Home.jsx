import React from 'react';
import Chat from '../components/Chat';
import Sidebar from '../components/Sidebar';

const Home = () => {
    return (
        <div>
            <div className="grid grid-cols-2 h-auto" >
                <Sidebar/>
                <Chat/>
            </div>
        </div>
    );
};

export default Home;