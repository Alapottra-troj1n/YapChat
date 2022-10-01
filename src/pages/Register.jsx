import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className=" mx-auto p-16 bg-white  rounded-lg">
                <div className="pb-10">
                    <div className="flex justify-center">
                    <img src="https://cdn-icons-png.flaticon.com/512/1041/1041916.png" className="w-20" alt="" />
                    </div>
                    <h2 className="text-center text-2xl font-bold text-gray-700">YapChat</h2>
                    <h2 className="text-center">Registration Form</h2>
                </div>

                <div>
                    <form className="flex flex-col  gap-6 ">
                        <div>
                            <input type="email" className="w-80 h-10 p-3 border-b-2" placeholder="Email" name="email" id="" />
                        </div>
                        <div>
                            <input type="text" className="w-80 h-10 p-3 border-b-2" placeholder="Username" name="username" id="" />
                        </div>

                        <div>
                            <input type="password" className="w-80 h-10 p-3 border-b-2" placeholder="Password" name="password" id="" />
                        </div>

                        <div>
                            <input type="file" className='hidden' name="image" id="image" />
                            <label className="cursor-pointer font-semibold text-gray-600 flex items-center"htmlFor="image"><img src="https://cdn-icons-png.flaticon.com/512/5460/5460486.png" className='w-10' alt="" /> Upload Profile</label>
                        </div>

                        <input type="submit" className="px-4 py-2 bg-fuchsia-300 font-semibold rounded text-white cursor-pointer hover:bg-fuchsia-400 transition-all " value="Register" />
            
                          
                         <div className="flex gap-2">
                            <h2>Already Have an Account ? </h2>
                            <Link className="font-semibold text-fuchsia-400" to='/' >Login</Link>
                         </div>
                 

                    </form>

                </div>

            </div>
        </div>
    );
};

export default Register;