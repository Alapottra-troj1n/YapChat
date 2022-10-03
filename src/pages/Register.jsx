import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from '../firebase.init';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';


const Register = () => {
    const [err, setErr] = useState('');


    const handleRegistration = async (e) => {
        e.preventDefault();


        const email = e.target.email.value;
        const username = e.target.username.value;
        const password = e.target.password.value;
        const file = e.target[3].files[0];

        console.log(email, username, password, file);



        try {

            const res = await createUserWithEmailAndPassword(auth, email, password);



            const storageRef = ref(storage, username);

            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                    
                (error) => {
                    setErr(error.message)
                },
                () => {

                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {

                            await updateProfile(res.user, {
                                displayName: username,
                                photoURL: downloadURL
                            });
                            await setDoc(doc(db, 'users', res.user.uid), {
                                uid: res.user.uid,
                                displayName: username,
                                email,
                                photoURL: downloadURL
                            });

                            await setDoc(doc(db, 'userChats', res.user.uid), {});
                          

                       



                    });





                }
            );











        } catch (err) {
            setErr(err.message)

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
                    <h2 className="text-center">Registration Form</h2>
                </div>

                <div>
                    <form onSubmit={handleRegistration} className="flex flex-col  gap-6 ">
                        <div>
                            <input type="email" className="w-80 h-10 p-3 border-b-2" placeholder="Email" name="email" />
                        </div>
                        <div>
                            <input type="text" className="w-80 h-10 p-3 border-b-2" placeholder="Username" name="username" />
                        </div>

                        <div>
                            <input type="password" className="w-80 h-10 p-3 border-b-2" placeholder="Password" name="password" />
                        </div>

                        <div>
                            <input type="file" className='hidden' name="file" id='image' />
                            <label className="cursor-pointer font-semibold text-gray-600 flex items-center" htmlFor="image"><img src="https://cdn-icons-png.flaticon.com/512/5460/5460486.png" className='w-10' alt="" /> Upload Profile</label>
                        </div>

                        <input type="submit" className="px-4 py-2 bg-fuchsia-300 font-semibold rounded text-white cursor-pointer hover:bg-fuchsia-400 transition-all " value="Register" />

                        {<h2 className="text-red-500" >{err}</h2>}


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