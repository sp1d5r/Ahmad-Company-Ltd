import React from 'react';
import { Link } from 'react-router-dom'; // If you're using react-router for navigation

const Navbar = () => {
    return (
        <nav className="sticky top-0 bg-white w-full flex justify-between items-center mx-auto px-8 h-20">
            <div className="inline-flex">
                <a className="_o6689fn" href="/"
                ><div className="hidden md:block">
                    <p className={"font-bold"}>The Ahmad Company</p>
                </div>
                    <div className="block md:hidden">
                       <p>The Ahmad Company</p>
                    </div>
                </a>
            </div>

            <div className="hidden sm:block flex-shrink flex-grow-0 justify-start px-2">
                <div className="inline-block">
                    <div className="inline-flex items-center max-w-full">
                        <button className="flex items-center flex-grow-0 flex-shrink pl-2 relative w-60 border rounded-full px-1  py-1" type="button" onClick={() => {window.location.href="https://calendly.com/theahmadcompany/30min"}}>
                            <div className="block flex-grow flex-shrink overflow-hidden">Chat to our team</div>
                        </button>
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Navbar;