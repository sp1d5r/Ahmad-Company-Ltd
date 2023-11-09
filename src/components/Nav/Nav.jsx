import React from 'react';
import { Link } from 'react-router-dom'; // If you're using react-router for navigation

const Navbar = () => {
    return (
        <nav className="bg-white shadow-lg sticky top-0 z-20">
            <div className="container mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-7">
                        <div>
                            {/* Website Logo */}
                            <a href="#" className="flex items-center py-4 px-2">
                                <span className="font-semibold text-gray-500 text-lg">Ahmad Company Ltd</span>
                            </a>
                        </div>
                        {/* Primary Nav Items */}
                        <div className="hidden md:flex items-center space-x-1">
                            <Link to="/" className="py-4 px-2 text-gray-500  hover:text-blue-700 transition duration-300">Home</Link>
                            <Link to="/services" className="py-4 px-2 text-gray-500 hover:text-blue-700 transition duration-300">Services</Link>
                            <Link to="/library" className="py-4 px-2 text-gray-500  hover:text-blue-700 transition duration-300">Component Library</Link>
                            <Link to="/contact" className="py-4 px-2 text-gray-500  hover:text-blue-700 transition duration-300">Contact</Link>
                        </div>
                    </div>
                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button className="outline-none mobile-menu-button">
                            <svg className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                                 x-show="!showMenu"
                                 fill="none"
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 strokeWidth="2"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor"
                            >
                                <path d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            <div className="hidden mobile-menu">
                <ul className="">
                    <li className="active"><Link to="/" className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</Link></li>
                    <li><Link to="/services" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Services</Link></li>
                    <li><Link to="/library" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Component Library</Link></li>
                    <li><Link to="/contact" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;