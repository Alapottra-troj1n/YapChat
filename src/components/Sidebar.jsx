import React from 'react';
import Chats from './Chats';
import Navbar from './Navbar';
import Search from './Search';

const Sidebar = () => {
    return (
        <div className=" bg-slate-600 rounded-l-xl flex flex-col gap-5">
            <Navbar/>
            <Search/>
            <Chats/>
        </div>
    );
};

export default Sidebar;