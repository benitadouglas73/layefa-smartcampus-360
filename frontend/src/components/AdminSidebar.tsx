'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '../context/AuthContext';
import {
    HomeIcon,
    UsersIcon,
    AcademicCapIcon,
    Cog6ToothIcon as CogIcon,
    ChartBarIcon,
    ArrowRightOnRectangleIcon
} from '@heroicons/react/24/outline';

const navigation = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: HomeIcon },
    { name: 'Users', href: '/admin/users', icon: UsersIcon },
    { name: 'Students', href: '/admin/students', icon: AcademicCapIcon },
    { name: 'Teachers', href: '/admin/teachers', icon: AcademicCapIcon },
    { name: 'Classes', href: '/admin/classes', icon: AcademicCapIcon },
    { name: 'Analytics', href: '/admin/analytics', icon: ChartBarIcon },
    { name: 'Settings', href: '/admin/settings', icon: CogIcon },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export default function AdminSidebar() {
    const pathname = usePathname();
    const { logout } = useAuth();

    return (
        <div className="hidden md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-50 p-4">
            {/* Glass Panel Container */}
            <div className="flex-1 flex flex-col min-h-0 glass-panel rounded-2xl overflow-hidden">

                {/* Logo Area */}
                <div className="flex items-center h-20 flex-shrink-0 px-6 border-b border-[var(--glass-border)]">
                    <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[var(--neon-cyan)] to-[var(--neon-purple)] flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                            <span className="text-white font-bold text-lg">S</span>
                        </div>
                        <h1 className="text-white text-xl font-bold tracking-wide">
                            Smart<span className="text-[var(--neon-cyan)]">Campus</span>
                        </h1>
                    </div>
                </div>

                {/* Navigation */}
                <div className="flex-1 flex flex-col overflow-y-auto py-6 px-4">
                    <nav className="space-y-2">
                        {navigation.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                        isActive
                                            ? 'bg-[rgba(6,182,212,0.15)] text-[var(--neon-cyan)] border border-[rgba(6,182,212,0.3)] shadow-[0_0_10px_rgba(6,182,212,0.1)]'
                                            : 'text-gray-400 hover:bg-[rgba(255,255,255,0.05)] hover:text-white',
                                        'group flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ease-in-out'
                                    )}
                                >
                                    <item.icon
                                        className={classNames(
                                            isActive ? 'text-[var(--neon-cyan)]' : 'text-gray-500 group-hover:text-white',
                                            'mr-3 flex-shrink-0 h-6 w-6 transition-colors duration-200'
                                        )}
                                        aria-hidden="true"
                                    />
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                {/* User Profile / Footer */}
                <div className="flex-shrink-0 flex flex-col border-t border-[var(--glass-border)] p-4 bg-[rgba(0,0,0,0.2)]">
                    <Link
                        href="/"
                        className="flex items-center justify-center w-full px-4 py-2 mb-4 text-sm font-medium text-gray-300 bg-[rgba(255,255,255,0.05)] border border-[var(--glass-border)] rounded-lg hover:bg-[rgba(255,255,255,0.1)] hover:text-white transition-all duration-200"
                    >
                        Back to Website
                    </Link>
                    <div className="flex items-center mb-4">
                        <div className="inline-block h-10 w-10 rounded-full bg-gradient-to-tr from-gray-700 to-gray-600 ring-2 ring-[var(--glass-border)]"></div>
                        <div className="ml-3">
                            <p className="text-sm font-medium text-white">Admin User</p>
                            <p className="text-xs font-medium text-gray-400 group-hover:text-gray-300">View Profile</p>
                        </div>
                    </div>
                    <button
                        onClick={logout}
                        className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-[rgba(6,182,212,0.1)] border border-[rgba(6,182,212,0.3)] rounded-lg hover:bg-[rgba(6,182,212,0.2)] hover:shadow-[0_0_10px_rgba(6,182,212,0.2)] transition-all duration-200 group"
                    >
                        <ArrowRightOnRectangleIcon className="w-5 h-5 mr-2 text-[var(--neon-cyan)] group-hover:text-white transition-colors" />
                        Sign Out
                    </button>
                </div>
            </div>
        </div>
    );
}
