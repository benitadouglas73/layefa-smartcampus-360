'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
    { name: 'Dashboard', href: '/student/dashboard', icon: 'HomeIcon' },
    { name: 'My Courses', href: '/student/courses', icon: 'BookOpenIcon' },
    { name: 'Assignments', href: '/student/assignments', icon: 'ClipboardListIcon' },
    { name: 'Grades', href: '/student/grades', icon: 'ChartBarIcon' },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export default function StudentSidebar() {
    const pathname = usePathname();

    return (
        <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
            <div className="flex-1 flex flex-col min-h-0 bg-indigo-800">
                <div className="flex items-center h-16 flex-shrink-0 px-4 bg-indigo-900">
                    <h1 className="text-white text-xl font-bold">Student Portal</h1>
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
                                        isActive ? 'bg-indigo-900 text-white' : 'text-indigo-100 hover:bg-indigo-700 hover:text-white',
                                        'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                                    )}
                                >
                                    <span className="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300">
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
