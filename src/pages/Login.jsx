import React from 'react';

const Login = () => {
    return (
        <div>
            <div className="bg-emerald-400 w-2/5 mx-auto p-7 rounded-lg">

                    <h2 className="text-center">YapChat</h2>
                <div>
                    <form>
                        <div>
                            <label>Email</label>
                            <input type="email" name="email" id="" />
                        </div>

                        <div>
                            <label>Password</label>
                            <input type="password" name="password" id="" />
                        </div>

                        <div>
                            <input type="file" name="" id="" />
                        </div>
                        <input type="submit" value="Login" />

                    </form>

                </div>

            </div>
        </div>
    );
};

export default Login;