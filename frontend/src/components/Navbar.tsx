'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white fixed top-0 w-full z-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="text-2xl font-bold text-black tracking-tighter">
                            SMART<span className="text-blue-600">CAMPUS</span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        <Link href="/" className="text-gray-900 hover:text-blue-600 font-medium text-sm uppercase tracking-wide">
                            Home
                        </Link>
                        <Link href="/about" className="text-gray-900 hover:text-blue-600 font-medium text-sm uppercase tracking-wide">
                            About Us
                        </Link>
                        <Link href="/academics" className="text-gray-900 hover:text-blue-600 font-medium text-sm uppercase tracking-wide">
                            Our Schools
                        </Link>
                        <Link href="/contact" className="text-gray-900 hover:text-blue-600 font-medium text-sm uppercase tracking-wide">
                            Contact
                        </Link>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link href="/login" className="text-gray-900 hover:text-blue-600 font-medium text-sm uppercase tracking-wide">
                            Login
                        </Link>
                        <Link href="/apply" className="bg-blue-600 text-white px-6 py-3 rounded-none font-bold text-sm uppercase tracking-wide hover:bg-blue-700 transition-colors">
                            Apply Now
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="-mr-2 flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100">
                    <div className="pt-2 pb-3 space-y-1 px-4">
                        <Link href="/" className="block py-2 text-base font-medium text-gray-900 hover:text-blue-600">
                            Home
                        </Link>
                        <Link href="/about" className="block py-2 text-base font-medium text-gray-900 hover:text-blue-600">
                            About Us
                        </Link>
                        <Link href="/academics" className="block py-2 text-base font-medium text-gray-900 hover:text-blue-600">
                            Our Schools
                        </Link>
                        <Link href="/contact" className="block py-2 text-base font-medium text-gray-900 hover:text-blue-600">
                            Contact
                        </Link>
                        <Link href="/login" className="block py-2 text-base font-medium text-gray-900 hover:text-blue-600">
                            Login
                        </Link>
                        <Link href="/apply" className="block w-full text-center bg-blue-600 text-white px-4 py-3 mt-4 font-bold text-sm uppercase tracking-wide">
                            Apply Now
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
