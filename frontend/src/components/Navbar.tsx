'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { user, logout, logoutAll, isAuthenticated } = useAuth();

    return (
        <nav className="fixed top-0 w-full z-50 border-b border-[var(--glass-border)] bg-[rgba(2,6,23,0.8)] backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="text-2xl font-bold text-white tracking-tighter flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--neon-cyan)] to-[var(--neon-purple)] flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                                <span className="text-white text-lg">S</span>
                            </div>
                            LAYEFA <span className="text-[var(--neon-cyan)]">SMARTCAMPUS 360</span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {['Home', 'About', 'Academics', 'Contact'].map((item) => (
                            <Link
                                key={item}
                                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                className="text-gray-300 hover:text-[var(--neon-cyan)] font-medium text-sm uppercase tracking-wide transition-colors"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button / Auth */}
                    <div className="hidden md:flex items-center space-x-6">
                        {isAuthenticated ? (
                            <div className="flex items-center space-x-4">
                                <span className="text-gray-300 text-sm">
                                    Hello, <span className="text-[var(--neon-cyan)] font-bold">{user?.name}</span>
                                </span>
                                <button
                                    onClick={logout}
                                    className="text-gray-300 hover:text-white font-medium text-sm uppercase tracking-wide transition-colors"
                                >
                                    Sign Out
                                </button>
                                <button
                                    onClick={logoutAll}
                                    className="text-gray-300 hover:text-white font-medium text-sm uppercase tracking-wide transition-colors"
                                    title="Sign out from all devices"
                                >
                                    Sign Out All
                                </button>
                                <Link
                                    href={user?.role ? `/${user.role}/dashboard` : '/dashboard'}
                                    className="bg-[var(--neon-cyan)] text-black px-6 py-2 rounded-lg font-bold text-sm uppercase tracking-wide hover:bg-[var(--neon-blue)] hover:text-white transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)]"
                                >
                                    Dashboard
                                </Link>
                            </div>
                        ) : (
                            <>
                                <Link href="/login" className="text-gray-300 hover:text-[var(--neon-cyan)] font-medium text-sm uppercase tracking-wide transition-colors">
                                    Login
                                </Link>
                                <Link href="/register" className="bg-[var(--neon-cyan)] text-black px-6 py-2 rounded-lg font-bold text-sm uppercase tracking-wide hover:bg-[var(--neon-blue)] hover:text-white transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)]">
                                    Get Started
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="-mr-2 flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[rgba(255,255,255,0.1)] focus:outline-none"
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
                <div className="md:hidden bg-[var(--background-dark)] border-t border-[var(--glass-border)]">
                    <div className="pt-2 pb-3 space-y-1 px-4">
                        {['Home', 'About', 'Academics', 'Contact'].map((item) => (
                            <Link
                                key={item}
                                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                className="block py-2 text-base font-medium text-gray-300 hover:text-[var(--neon-cyan)]"
                            >
                                {item}
                            </Link>
                        ))}

                        <div className="pt-4 border-t border-[var(--glass-border)] mt-4">
                            {isAuthenticated ? (
                                <>
                                    <div className="block py-2 text-base font-medium text-gray-300">
                                        Signed in as <span className="text-[var(--neon-cyan)]">{user?.name}</span>
                                    </div>
                                    <Link href={user?.role ? `/${user.role}/dashboard` : '/dashboard'} className="block py-2 text-base font-medium text-gray-300 hover:text-[var(--neon-cyan)]">
                                        Dashboard
                                    </Link>
                                    <button onClick={logout} className="block w-full text-left py-2 text-base font-medium text-gray-300 hover:text-[var(--neon-cyan)]">
                                        Sign Out
                                    </button>
                                    <button onClick={logoutAll} className="block w-full text-left py-2 text-base font-medium text-gray-300 hover:text-[var(--neon-cyan)]">
                                        Sign Out All
                                    </button>
                                </>
                            ) : (
                                <>
                                    <Link href="/login" className="block py-2 text-base font-medium text-gray-300 hover:text-[var(--neon-cyan)]">
                                        Login
                                    </Link>
                                    <Link href="/register" className="block w-full text-center bg-[var(--neon-cyan)] text-black px-4 py-3 mt-4 rounded-lg font-bold text-sm uppercase tracking-wide hover:bg-[var(--neon-blue)] hover:text-white transition-all">
                                        Get Started
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
