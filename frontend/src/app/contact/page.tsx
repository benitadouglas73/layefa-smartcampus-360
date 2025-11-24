'use client';

import Navbar from '../../components/Navbar';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function Contact() {
    return (
        <div className="min-h-screen bg-[var(--background-dark)] font-sans text-white">
            <Navbar />

            <div className="relative py-24 sm:py-32">
                {/* Background Effects */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[var(--neon-blue)] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-black tracking-tighter text-white sm:text-6xl mb-4">
                            Contact <span className="text-[var(--neon-cyan)]">Us</span>
                        </h1>
                        <p className="text-xl text-gray-400">
                            We'd love to hear from you. Reach out to us via phone or email.
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <div className="glass-panel rounded-2xl overflow-hidden border border-[var(--glass-border)]">
                            <div className="px-6 py-8 sm:p-10">
                                <div className="grid gap-8">
                                    {/* Phone */}
                                    <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-[rgba(255,255,255,0.05)] transition-colors">
                                        <div className="flex-shrink-0">
                                            <div className="h-12 w-12 rounded-lg bg-[rgba(6,182,212,0.1)] flex items-center justify-center text-[var(--neon-cyan)]">
                                                <PhoneIcon className="h-6 w-6" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white mb-1">Phone Numbers</h3>
                                            <div className="flex flex-col space-y-1">
                                                <a href="tel:07055125627" className="text-gray-400 hover:text-[var(--neon-cyan)] transition-colors">07055125627</a>
                                                <a href="tel:09032900186" className="text-gray-400 hover:text-[var(--neon-cyan)] transition-colors">09032900186</a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-[rgba(255,255,255,0.05)] transition-colors">
                                        <div className="flex-shrink-0">
                                            <div className="h-12 w-12 rounded-lg bg-[rgba(168,85,247,0.1)] flex items-center justify-center text-[var(--neon-purple)]">
                                                <EnvelopeIcon className="h-6 w-6" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white mb-1">Email Address</h3>
                                            <a href="mailto:benitadoudglas73@gmail.com" className="text-gray-400 hover:text-[var(--neon-purple)] transition-colors">
                                                benitadoudglas73@gmail.com
                                            </a>
                                        </div>
                                    </div>

                                    {/* Address */}
                                    <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-[rgba(255,255,255,0.05)] transition-colors">
                                        <div className="flex-shrink-0">
                                            <div className="h-12 w-12 rounded-lg bg-[rgba(236,72,153,0.1)] flex items-center justify-center text-[var(--neon-pink)]">
                                                <MapPinIcon className="h-6 w-6" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white mb-1">Address</h3>
                                            <p className="text-gray-400">
                                                Layefa SmartCampus 360<br />
                                                Lagos, Nigeria
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
