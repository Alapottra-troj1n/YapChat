import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase.init';
const Login = () => {
    const [err, setErr] = useState('');



    const navigate = useNavigate();


    const handleLogin = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password);

        try {


            await signInWithEmailAndPassword(auth, email, password);
            setErr('')
            navigate('/')






        } catch (error) {
            setErr(error.message)
        }



    }




    return (
        <div>
            <div className=" mx-auto p-16 bg-white  rounded-lg">
                <div className="pb-10">
                    <div className="flex justify-center">
                        <img src="https://cdn-icons-png.flaticon.com/512/1041/1041916.png" className="w-20" alt="" />
                    </div>
                    <h2 className="text-center text-2xl font-bold text-gray-700">YapChat</h2>
                    <h2 className="text-center">Login</h2>
                </div>

                <div>
                    <form onSubmit={handleLogin} className="flex flex-col  gap-6 ">
                        <div>
                            <input type="email" className="w-80 h-10 p-3 border-b-2" placeholder="Email" name="email" id="" />
                        </div>

                        <div>
                            <input type="password" className="w-80 h-10 p-3 border-b-2" placeholder="Password" name="password" id="" />
                        </div>

                        <input type="submit" className="px-4 py-2 bg-fuchsia-300 font-semibold rounded text-white cursor-pointer hover:bg-fuchsia-400 transition-all " value="Login" />
                        <h2 className="text-red-500" >{err}</h2>

                        <div className="flex gap-2">
                            <h2>Chat with Friends ? </h2>
                            <Link className="font-semibold text-fuchsia-400" to='/register' >Register</Link>
                        </div>


                    </form>

                </div>

            </div>
        </div>
    );
};

export default Login;