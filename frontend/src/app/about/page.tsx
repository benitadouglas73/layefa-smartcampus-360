'use client';

import Navbar from '../../components/Navbar';
import { LightBulbIcon, GlobeAltIcon, SparklesIcon, UserGroupIcon } from '@heroicons/react/24/outline';

export default function About() {
    return (
        <div className="min-h-screen bg-[var(--background-dark)] font-sans text-white">
            <Navbar />

            {/* Hero Section */}
            <div className="relative py-24 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--neon-purple)] rounded-full mix-blend-multiply filter blur-[128px] opacity-10"></div>
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--neon-cyan)] rounded-full mix-blend-multiply filter blur-[128px] opacity-10"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-6">
                        REDEFINING <span className="text-[var(--neon-cyan)]">POSSIBILITY</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Layefa SmartCampus 360 is not just a platform; it's a vision of the future where education meets limitless innovation.
                    </p>
                </div>
            </div>

            {/* Mission & Vision */}
            <div className="py-16 bg-[rgba(255,255,255,0.02)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6 flex items-center">
                                <SparklesIcon className="w-8 h-8 text-[var(--neon-purple)] mr-3" />
                                Our Mission
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                To empower educational institutions with cutting-edge technology that dissolves physical boundaries, automates the mundane, and elevates the human experience of learning.
                            </p>

                            <h2 className="text-3xl font-bold mb-6 flex items-center">
                                <GlobeAltIcon className="w-8 h-8 text-[var(--neon-cyan)] mr-3" />
                                Our Vision
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                A world where every student has access to a personalized, AI-driven education ecosystem that adapts to their unique potential and prepares them for a gravity-defying future.
                            </p>
                        </div>
                        <div className="relative h-96 rounded-2xl overflow-hidden border border-[var(--glass-border)] group">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                                alt="Team collaboration"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats / Values */}
            <div className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { label: 'Schools Onboarded', value: '500+', icon: HomeIcon },
                            { label: 'Students Empowered', value: '1M+', icon: UserGroupIcon },
                            { label: 'Countries Reached', value: '25', icon: GlobeAltIcon },
                            { label: 'Innovation Awards', value: '12', icon: LightBulbIcon },
                        ].map((stat, index) => (
                            <div key={index} className="glass-panel p-8 rounded-xl text-center hover:border-[var(--neon-cyan)] transition-colors duration-300">
                                {/* Note: HomeIcon is not imported, using UserGroupIcon as placeholder for logic if needed, but let's fix imports */}
                                <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
                                <div className="text-[var(--neon-cyan)] font-bold uppercase tracking-wider text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function HomeIcon(props: any) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
    );
}
