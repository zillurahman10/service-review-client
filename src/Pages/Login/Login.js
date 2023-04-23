import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    console.log(user);
    return (
        <div className=''>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <div className='glass p-12 w-50 rounded-lg'>
                        <form>
                            <label htmlFor="input">Email</label>
                            <br />
                            <input type="email" name="email" className='input input-bordered w-full max-w-xs' />
                            <label htmlFor="input">Password</label>
                            <br />
                            <input type="password" name="password" className='input input-bordered w-full max-w-xs' />
                            <p className='flex'>Forgot password?    <button className='underline'>Reset password</button></p>
                            <input className='btn btn-outline btn-neutral w-full mt-5 ' type="submit" value="Login" />
                        </form>
                        <p className='text-center'>---------- or ----------</p>
                        <button onClick={() => signInWithGoogle()} className='btn btn-outline btn-primary w-full'>Sign in with GOOGLE</button>
                        <p className='mt-8'>New in this website? <Link className='underline' to='/signup'>Create an account</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;