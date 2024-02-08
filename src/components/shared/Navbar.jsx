/* eslint-disable react-hooks/exhaustive-deps */
import { Link, NavLink } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineHomeWork } from "react-icons/md";
import { LuPhoneIncoming } from "react-icons/lu";
import { IoBookOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import MenuDropdown from "./MenuDropdown";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { user } = useAuth();
  // console.log(user);
  const navLinks = [
    { name: "Home", path: "/", icon: <IoHomeOutline /> },
    { name: "Property", path: "/property", icon: <MdOutlineHomeWork /> },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog", icon: <IoBookOutline /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed w-full z-10 ${
        scrolled
          ? "bg-white transition-all ease-out duration-500"
          : "bg-transparent"
      }`}
    >
      <div className="py-0">
        <div className="flex justify-between px-5">
          <div className="navbar-start flex items-center">
            <div className="dropdown ml-4">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
                {navLinks.map((nav) => (
                  <li key={nav.name}>
                    <NavLink to={nav.path} className="font-semibold">
                      {nav.icon}
                      {nav.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <Link to="/" className="flex items-center">
              <img
                src="https://i.ibb.co/yqb15nv/Gold-and-Black-Minimalist-Real-Estate-Logo.png"
                alt="logo"
                width={100}
              />
              <span className="font-bold text-sm md:text-2xl md:block hidden">
                <span className="text-purple-900 italic">Urban-</span>
                <span className="italic">Estate</span>
              </span>
            </Link>
          </div>

          <div className="navbar-center hidden lg:flex lg:justify-center lg:items-center">
            <ul className="menu menu-horizontal px-1 gap-2">
              {navLinks.map((nav) => (
                <li key={nav.name}>
                  <NavLink to={nav.path} className="font-semibold">
                    {nav.icon}
                    {nav.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-3">
            <div className="flex justify-center items-center gap-2 hover:cursor-pointer">
              <LuPhoneIncoming />
              <p className="font-semibold text-xs md:text-sm">
                +09 721 827 386
              </p>
            </div>
            {user && user.photoURL ? (
              <MenuDropdown />
            ) : (
              <div className="join join-horizontal">
                <button className="btn join-item">
                  <NavLink to="/login">Login</NavLink>
                </button>
                <button className="btn join-item">
                  <NavLink to="/signup">Signup</NavLink>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
