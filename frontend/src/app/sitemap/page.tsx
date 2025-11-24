'use client';

import Link from 'next/link';
import Navbar from '../../components/Navbar';

export default function Sitemap() {
    const routes = [
        {
            category: 'Public', links: [
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Academics', path: '/academics' },
                { name: 'Contact', path: '/contact' },
            ]
        },
        {
            category: 'Auth', links: [
                { name: 'Login', path: '/login' },
                { name: 'Register', path: '/register' },
            ]
        },
        {
            category: 'Dashboards (Protected)', links: [
                { name: 'Student Dashboard', path: '/student/dashboard' },
                { name: 'Teacher Dashboard', path: '/teacher/dashboard' },
                { name: 'Parent Dashboard', path: '/parent/dashboard' },
                { name: 'Admin Dashboard', path: '/admin/dashboard' },
            ]
        },
        {
            category: 'Admin Pages', links: [
                { name: 'Users', path: '/admin/users' },
                { name: 'Classes', path: '/admin/classes' },
                { name: 'Analytics', path: '/admin/analytics' },
                { name: 'Settings', path: '/admin/settings' },
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-[var(--background-dark)] font-sans">
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
                <h1 className="text-4xl font-bold text-white mb-8">
                    Application <span className="text-[var(--neon-cyan)]">Sitemap</span>
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {routes.map((section) => (
                        <div key={section.category} className="glass-panel p-6 rounded-xl border border-[var(--glass-border)]">
                            <h2 className="text-xl font-bold text-[var(--neon-purple)] mb-4 border-b border-gray-700 pb-2">
                                {section.category}
                            </h2>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.path}>
                                        <Link
                                            href={link.path}
                                            className="text-gray-300 hover:text-[var(--neon-cyan)] transition-colors flex items-center group"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--neon-cyan)] mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
