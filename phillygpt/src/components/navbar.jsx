import React from 'react';

function Navbar() {
    return (
        <div className="relative">
            <nav className="bg-gray-navbar text-white text-xl flex justify-between items-center gap-4 p-2">
                <ul className="flex space-x-12 m-0 p-0 list-none">
                    <li className="hover:bg-gray-600 p-2">
                        <a href="/" className="no-underline text-inherit">Home</a>
                    </li>
                    <li className="hover:bg-gray-600 p-2">
                        <a href="/docs" className="no-underline text-inherit">Documentation</a>
                    </li>
                    <li className="hover:bg-gray-600 p-2">
                        <a href="/github" className="no-underline text-inherit">GitHub</a>
                    </li>
                </ul>
            </nav>
            <div className="bg-white h-0.5 w-full absolute bottom-0 left-0"></div>
        </div>
    );
}

export default Navbar;
