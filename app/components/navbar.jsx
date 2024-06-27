"use client";
import { useState } from "react";
import Link from "next/link";
import { RiMenuFill } from "react-icons/ri";
import { MdClose } from "react-icons/md";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "/#about", label: "ABOUT" },
    { href: "/#experience", label: "EXPERIENCE" },
    { href: "/#skills", label: "SKILLS" },
    { href: "/#education", label: "EDUCATION" },
    { href: "/#testimonials", label: "TESTIMONIALS" },
    { href: "/#projects", label: "PROJECTS" },
  ];

  return (
    <>
      <nav className="bg-transparent  flex w-full justify-between">
        <div className="flex w-screen items-center justify-between pt- px-4 md:px-8">
          <div className="flex flex-shrink-0 items-center">
            <Link href="/" className="text-[#16f2b3]">
              <svg
                width="200"
                height="100"
                viewBox="0 0 200 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#16f2b3" />
                    <stop offset="100%" stopColor="#0a8f89" />
                  </linearGradient>
                  <filter
                    id="shadow"
                    x="-20%"
                    y="-20%"
                    width="140%"
                    height="140%"
                  >
                    <feDropShadow
                      dx="0"
                      dy="4"
                      stdDeviation="4"
                      floodColor="#000000"
                      floodOpacity="0.3"
                    />
                  </filter>
                </defs>
                <text
                  x="50%"
                  y="45%"
                  textAnchor="middle"
                  fill="url(#gradient)"
                  fontSize="40"
                  fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                  fontWeight="bold"
                  dy=".3em"
                  filter="url(#shadow)"
                >
                  Swasti
                </text>
                <text
                  x="50%"
                  y="80%"
                  textAnchor="middle"
                  fill="#ffffff"
                  fontSize="16"
                  fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                  filter="url(#shadow)"
                >
                  {"< Developer🧑‍💻 />"}
                </text>
                <line
                  x1="20%"
                  y1="90%"
                  x2="80%"
                  y2="90%"
                  stroke="url(#gradient)"
                  strokeWidth="3"
                />
              </svg>
            </Link>
          </div>
          <div className={`hidden  w-full lg:flex md:w-auto`}>
            <ul
              className="flex flex-col mt-4 space-y-2 md:mt-0 md:flex-row md:space-y-0 md:space-x-6"
              id="navbar-default"
            >
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    className="block px-4 py-2 no-underline outline-none hover:no-underline"
                    href={item.href}
                  >
                    <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                      {item.label}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white text-2xl focus:outline-none"
            >
              {isOpen ? <MdClose /> : <RiMenuFill />}
            </button>
          </div>
        </div>
      </nav>
      <div>
        {
          isOpen &&
          <div onClick={()=>{setIsOpen(!open)}} className="bg-transparent">
            <ul className="flex flex-col justify-center items-center mt-4 space-y-2 md:mt-0 md:flex-row md:space-y-0 md:space-x-6">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    className="block px-4 py-2 no-underline outline-none hover:no-underline"
                    href={item.href}
                  >
                    <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                      {item.label}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        }
      </div>
    </>
  );
}

export default Navbar;
