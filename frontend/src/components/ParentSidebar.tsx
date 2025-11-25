'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '../context/AuthContext';
import {
    HomeIcon,
    UserGroupIcon,
    CreditCardIcon,
    ChatBubbleLeftRightIcon as ChatAltIcon,
    ArrowLeftIcon,
    ArrowRightOnRectangleIcon
} from '@heroicons/react/24/outline';

const navigation = [
    { name: 'Dashboard', href: '/parent/dashboard', icon: HomeIcon },
    { name: 'My Children', href: '/parent/children', icon: UserGroupIcon },
    { name: 'Fees & Payments', href: '/parent/fees', icon: CreditCardIcon },
    { name: 'Messages', href: '/parent/messages', icon: ChatAltIcon },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export default function ParentSidebar() {
    const pathname = usePathname();
    const { logout } = useAuth();

    return (
        <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
            <div className="flex-1 flex flex-col min-h-0 bg-cyan-900">
                <div className="flex items-center h-16 flex-shrink-0 px-4 bg-cyan-950">
                    <h1 className="text-white text-xl font-bold">Parent Portal</h1>
                </div>
                <div className="flex-1 flex flex-col overflow-y-auto">
                    <nav className="flex-1 px-2 py-4 space-y-1">
                        {navigation.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                        isActive ? 'bg-cyan-800 text-white' : 'text-cyan-100 hover:bg-cyan-800 hover:text-white',
                                        'group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors'
                                    )}
                                >
                                    <item.icon
                                        className={classNames(
                                            isActive ? 'text-white' : 'text-cyan-300 group-hover:text-white',
                                            'mr-3 flex-shrink-0 h-6 w-6 transition-colors'
                                        )}
                                        aria-hidden="true"
                                    />
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="p-4 border-t border-cyan-800 space-y-2">
                        <Link
                            href="/"
                            className="flex items-center px-2 py-2 text-sm font-medium text-cyan-100 rounded-md hover:bg-cyan-800 hover:text-white transition-colors group"
                        >
                            <ArrowLeftIcon className="mr-3 flex-shrink-0 h-6 w-6 text-cyan-300 group-hover:text-white transition-colors" />
                            Back to Website
                        </Link>
                        <button
                            onClick={logout}
                            className="flex w-full items-center px-2 py-2 text-sm font-medium text-cyan-100 rounded-md hover:bg-cyan-800 hover:text-white transition-colors group"
                        >
                            <ArrowRightOnRectangleIcon className="mr-3 flex-shrink-0 h-6 w-6 text-cyan-300 group-hover:text-white transition-colors" />
                            Sign Out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
