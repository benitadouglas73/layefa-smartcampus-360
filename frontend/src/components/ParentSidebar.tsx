'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
    { name: 'Dashboard', href: '/parent/dashboard', icon: 'HomeIcon' },
    { name: 'My Children', href: '/parent/children', icon: 'UserGroupIcon' },
    { name: 'Fees & Payments', href: '/parent/fees', icon: 'CreditCardIcon' },
    { name: 'Messages', href: '/parent/messages', icon: 'ChatAltIcon' },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export default function ParentSidebar() {
    const pathname = usePathname();

    return (
        <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
            <div className="flex-1 flex flex-col min-h-0 bg-cyan-800">
                <div className="flex items-center h-16 flex-shrink-0 px-4 bg-cyan-900">
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
                                        isActive ? 'bg-cyan-900 text-white' : 'text-cyan-100 hover:bg-cyan-700 hover:text-white',
                                        'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                                    )}
                                >
                                    <span className="mr-3 flex-shrink-0 h-6 w-6 text-cyan-300">
                                        O
                                    </span>
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            </div>
        </div>
    );
}
