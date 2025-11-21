'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    HomeIcon,
    UsersIcon,
    AcademicCapIcon,
    Cog6ToothIcon as CogIcon,
    ChartBarIcon
} from '@heroicons/react/24/outline';

const navigation = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: HomeIcon },
    { name: 'Users', href: '/admin/users', icon: UsersIcon },
    { name: 'Classes', href: '/admin/classes', icon: AcademicCapIcon },
    { name: 'Analytics', href: '/admin/analytics', icon: ChartBarIcon },
    { name: 'Settings', href: '/admin/settings', icon: CogIcon },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export default function AdminSidebar() {
    const pathname = usePathname();

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
                <div className="flex-shrink-0 flex border-t border-[var(--glass-border)] p-4">
                    <div className="flex-shrink-0 w-full group block">
                        <div className="flex items-center">
                            <div className="inline-block h-10 w-10 rounded-full bg-gradient-to-tr from-gray-700 to-gray-600 ring-2 ring-[var(--glass-border)]"></div>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-white">Admin User</p>
                                <p className="text-xs font-medium text-gray-400 group-hover:text-gray-300">View Profile</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
