import React from 'react';
import Navbar from './Navbar';
import Search from './Search';

const Sidebar = () => {
    return (
        <div className="h-60 p-5 bg-slate-600 rounded-l-xl flex flex-col gap-5">
            <Navbar/>
            <Search/>
        </div>
    );
};

export default Sidebar;