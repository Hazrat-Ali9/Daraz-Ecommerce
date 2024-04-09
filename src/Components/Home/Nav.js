import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {Link, useNavigate} from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Nav = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
    console.log(user)
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${query}`);
  };


    return (
      <div>
      <div className="navbar bg-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabindex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li tabindex="0">
                <a className="justify-between">
                  Parent
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-4xl font-bold text-black mx-16">
            electro
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
              <div className="flex rounded">
              <form onSubmit={handleSubmit}>
      <div className="relative">
        <input
          type="search"
          id="search-dropdown"
          className="block p-2.5 w-96 text-sm text-gray-900 rounded-r-full border-t-2 border-b-2 border-yellow-400"
          placeholder="Search All Product"
          value={query}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="absolute top-0 right-0 p-2.5 w-16 text-sm font-medium text-white bg-yellow-400 rounded-r-full border border-yellow-400 hover:bg-blue-800"
        >
          <svg
            aria-hidden="true"
            className="w-6 h-6 mx-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </div>
    </form>
              </div>
          

            <li className="mx-16">
              <a>
                <img
                  src="https://static-00.iconduck.com/assets.00/compare-states-icon-256x256-d2kb9dqb.png"
                  alt=""
                  className="w-5 h-5"
                />
              </a>
            </li>
            <li className="-mx-16">
              <a>
                <img
                  src="https://icons-for-free.com/iconfiles/png/256/heart+like+love+icon-1320196394606128344.png"
                  alt=""
                  className="w-5 h-5"
                />
              </a>
            </li>
            <li className="mx-16">
              <a>
                <img
                  src="https://w7.pngwing.com/pngs/290/731/png-transparent-computer-icons-user-username-avatar-person-skill.png"
                  alt=""
                  className="w-5 h-5"
                />
              </a>
            </li>
            <li className="">
              <a>
                <img
                  src="https://www.bankcheckingsavings.com/wp-content/uploads/2016/01/shopping-cart-trick.png"
                  alt=""
                  className="w-6 h-6"
                />
              </a>
            </li>
        
          </ul>
        </div>
        <div className="navbar-end">
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {user && (
                <li>
                  <h1 class="justify-between text-md">
                    {user.displayName}
                    <span class="badge">New</span>
                  </h1>
                </li>
              )}

              <li>Settings</li>
              {user ? (
                <li><button className="btn btn-ghost" onClick={logout}>
                  Sign Out
                </button></li>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </ul>
        </div>
      </div>
    </div>
    );
};

export default Nav;