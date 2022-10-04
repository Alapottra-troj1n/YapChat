import React, { useState } from 'react';

const Search = () => {


    const [ username, setUsername] = useState('');
    const [user, setUser] = useState(null);
    const [err,setErr] = useState('');

    console.log(username);


    return (
        <div>
            <input type="text" name="search" onChange={(e) => setUsername(e.target.value) } className=" p-2 pl-5 w-full bg-slate-500 cursor-pointer " placeholder="Find a user" />
        </div>
    );
};

export default Search;