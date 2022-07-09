import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FaShoppingCart } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import auth from '../firebase.config';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { signOut } from "firebase/auth";

const Header = () => {

  const [user] = useAuthState(auth);
  const state = useSelector((state) => state.addItems)
    return (
      <div>
        <div class="navbar bg-orange-300 py-5 px-10">
          <div class="navbar-start">
            <div class="dropdown">
              <label tabindex="0" class="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
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
                class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li tabindex="0">
                  <a class="justify-between">
                    Parent
                    <svg
                      class="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                    </svg>
                  </a>
                  <ul class="p-2">
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
            <a
              class="btn btn-ghost normal-case text-xl"
              className="text-3xl font-bold"
            >
              UniqueStyle
            </a>
          </div>
          <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal p-0">
              <li>
                <Link className="text-xl font-semibold" to="/">
                  Home
                </Link>
              </li>
              <li>
                <a className="text-xl font-semibold">About</a>
              </li>

              <li>
                <a className="text-xl font-semibold">Products</a>
              </li>
              <Link to="/dashboard">
                <li>
                  <a className="text-xl font-semibold">Dashboard</a>
                </li>
              </Link>

              {!user ? (
                <li>
                  <Link to="/login" className="text-xl font-semibold">
                    Login
                  </Link>
                </li>
              ) : (
                <li>
                  <a
                    className="text-xl font-semibold"
                    onClick={() => signOut(auth)}
                  >
                    Logout
                  </a>
                </li>
              )}
            </ul>
          </div>
          <div className="navbar-end">
            <span className="cart-icon flex">
              <Link to="/cart" className="flex items-center">
                <span>
                  {" "}
                  <FaShoppingCart />
                </span>
                <span class="badge">{state?.length}</span>
              </Link>
            </span>
            <span className="cart-icon">
              <Link to="/dashboard">
                {" "}
                <FaUserAlt />
              </Link>
            </span>
          </div>
        </div>
      </div>
    );
};

export default Header;