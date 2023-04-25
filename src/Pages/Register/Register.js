import React from 'react';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate()

    const handleCreateUser = e => {
        e.preventDefault()

        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value

        createUserWithEmailAndPassword(email, password)
        // if (user || gUser) {
        //     navigate('/')
        // }
    }


    return (
        <div>
            <div className=''>
                <div class="hero min-h-screen bg-base-200">
                    <div class="hero-content flex-col lg:flex-row">
                        <div className='glass p-12 w-50 rounded-lg'>
                            <form onSubmit={handleCreateUser}>
                                <label htmlFor="input">Name</label>
                                <br />
                                <input className='input input-bordered w-full' type="text" placeholder='Name' name='name' />
                                <br />
                                <label htmlFor="input">Email</label>
                                <br />
                                <input type="email" name="email" className='input input-bordered w-full max-w-xs' placeholder='Email' />
                                <label htmlFor="input">Password</label>
                                <br />
                                <input type="password" name="password" className='input input-bordered w-full max-w-xs' placeholder='Password' />
                                <input className='btn btn-outline btn-neutral w-full mt-5 ' type="submit" value="Register" />
                            </form>
                            <p className='text-center'>---------- or ----------</p>
                            <button onClick={() => signInWithGoogle()} className='btn btn-outline btn-primary w-full'>Sign in with GOOGLE</button>
                            <p className='mt-8 text-center'>New in this website? <Link className='underline' to='/register'>Create an account</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;