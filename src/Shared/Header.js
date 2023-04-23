import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../firebase.init';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const menuItems = <>
        <li><Link to='/'>Blogs</Link></li>
        <li><Link to='/allservices'>Services</Link></li>
        <li><Link to='/'>About me</Link></li>
        <li><Link to='/'>My reviews</Link></li>
    </>

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
                    <a herf="" alt="" class="btn btn-ghost normal-case text-xl">ZILLUR</a>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal px-1">
                        {menuItems}
                    </ul>
                </div>
                <div class="navbar-end">
                    <div class="dropdown">
                        {
                            user ? <>
                                <label tabindex="0" class="btn m-1">{user.displayName}</label>
                                {/* <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 2</a></li>
                                </ul> */}
                            </>
                                :
                                <button>Login</button>

                        }

                    </div>
                    <Link to="login" className='btn btn-ghost'></Link>
                </div>
            </div>
        </div>
    );
};

export default Header;