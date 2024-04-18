import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import useAdmin from "../../Hook/useAdmin";
const Nav = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const [user, userLoading] = useAuthState(auth);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isVendor, setIsVendor] = useState(false);

  useEffect(() => {
    if (user) {
      fetchUserRole(user.email);
    }
  }, [user]);

  const fetchUserRole = async (email) => {
    try {
      const adminResponse = await fetch(`http://localhost:7000/admin/${email}`);
      const adminData = await adminResponse.json();
      setIsAdmin(adminData.admin);

      const vendorResponse = await fetch(
        `http://localhost:7000/vendor/${email}`
      );
      const vendorData = await vendorResponse.json();
      setIsVendor(vendorData.vendor);
    } catch (error) {
      console.error("Error fetching user roles:", error);
    }
  };

  const logout = () => {
    signOut(auth);
    navigate("/");
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
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
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
          <a className="btn btn-ghost text-xl">E-Commerce</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <Link to="/">
              <li>
                <a>Home</a>
              </li>
            </Link>
            <form onSubmit={handleSubmit} class="max-w-md mx-auto">
              <label
                for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div class="relative">
                <input
                  value={query}
                  onChange={handleChange}
                  type="search"
                  id="default-search"
                  class="block w-full p-3 ps-20 text-sm text-gray-900 border border-gray-500 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500"
                />
                <button
                  type="submit"
                  class="text-white absolute end-2.5 bottom-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </form>
            {user && !isAdmin && !isVendor && (
              <Link to="/roles">
                <li>
                  <a>Apply For Role</a>
                </li>
              </Link>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              {user ? (
                <div className="navbar-end">
                  {isAdmin ? (
                    <Link to="/approved">
                      <li>
                        <a className="btn btn-ghost text-md">Admin Dashboard</a>
                      </li>
                    </Link>
                  ) : isVendor ? (
                    <Link to="/myRole">
                      <li>
                        <a className="btn btn-ghost text-md">
                          Vendor Dashboard
                        </a>
                      </li>
                    </Link>
                  ) : (
                    <Link to="/user">
                      <li>
                        {" "}
                        <a className="btn btn-ghost text-xl">User Dashboard</a>
                      </li>
                    </Link>
                  )}
                  <div className="flex gap-5 px-5 mt-3">
                    <li>
                      <a onClick={logout} className="btn text-sm">
                        Log Out
                      </a>
                    </li>
                  </div>
                </div>
              ) : (
                <Link to="/login" className="btn">
                  Login
                </Link>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
