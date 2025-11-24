'use client';

import Link from 'next/link';
import { HomeIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

export default function NotFound() {
    const [particles, setParticles] = useState<Array<{
        width: string;
        height: string;
        top: string;
        left: string;
        animationDuration: string;
        animationDelay: string;
    }>>([]);

    useEffect(() => {
        const newParticles = [...Array(20)].map(() => ({
            width: Math.random() * 4 + 1 + 'px',
            height: Math.random() * 4 + 1 + 'px',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
            animationDuration: Math.random() * 10 + 10 + 's',
            animationDelay: Math.random() * 5 + 's'
        }));
        setParticles(newParticles);
    }, []);

    return (
        <div className="min-h-screen bg-[var(--background-dark)] flex items-center justify-center relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--neon-purple)] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--neon-cyan)] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse delay-1000"></div>
            </div>

            <div className="relative z-10 text-center px-4">
                <h1 className="text-[150px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-purple)] leading-none select-none drop-shadow-[0_0_25px_rgba(6,182,212,0.5)]">
                    404
                </h1>
                <h2 className="mt-4 text-3xl font-bold text-white tracking-wide uppercase">
                    Lost in <span className="text-[var(--neon-pink)]">Space</span>?
                </h2>
                <p className="mt-4 text-gray-400 text-lg max-w-md mx-auto">
                    The page you are looking for seems to have drifted into a black hole. Let's get you back to safety.
                </p>

                <div className="mt-10">
                    <Link
                        href="/"
                        className="inline-flex items-center px-8 py-3 border border-transparent text-base font-bold rounded-lg text-black bg-[var(--neon-cyan)] hover:bg-[var(--neon-blue)] hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] uppercase tracking-wider"
                    >
                        <HomeIcon className="w-5 h-5 mr-2" />
                        Return to Base
                    </Link>
                </div>
            </div>

            {/* Floating Particles (CSS only representation) */}
            <div className="absolute inset-0 pointer-events-none">
                {particles.map((style, i) => (
                    <div
                        key={i}
                        className="absolute bg-white rounded-full opacity-20 animate-float"
                        style={style}
                    ></div>
                ))}
            </div>
        </div>
    );
}
