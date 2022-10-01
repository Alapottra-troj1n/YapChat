import React from 'react';
import Chat from '../components/Chat';
import Sidebar from '../components/Sidebar';

const Home = () => {
    return (
        <div>
            <div className="flex" >
                <Sidebar/>
                <Chat/>
            </div>
        </div>
    );
};

export default Home;