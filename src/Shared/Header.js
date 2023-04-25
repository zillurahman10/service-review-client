import React from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const [signOut, outLoading, outError] = useSignOut(auth);

    const menuItems = <>
        <li><Link to='/'>Blogs</Link></li>
        <li><Link to='/'>About me</Link></li>
        <li><Link to='/myreviews'>My reviews</Link></li>
    </>

    // navigate to home after user loged in
    // const navigate = useNavigate()
    // if (user) {
    //     navigate('/')
    // }

    // logOut function
    // const handleLogOut = () => {
    //     signOut()
    // }

    return (
        <div>
            <div class="navbar bg-base-100">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to="/" class="btn btn-ghost normal-case text-xl">ZILLUR</Link>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal px-1">
                        {menuItems}
                    </ul>
                </div>
                <div class="navbar-end">
                    <div class="dropdown dropdown-end">
                        {
                            user ? <>
                                <label tabindex="0" class="btn m-1">{user.displayName || user.email.slice(0, 1)}</label>
                                <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><a>Profile</a></li>
                                    <li><button onClick={() => signOut()}>Log Out</button></li>
                                </ul>
                            </>
                                :
                                <Link to="login" className='btn btn-ghost'><button>Login</button></Link>

                        }

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Header;