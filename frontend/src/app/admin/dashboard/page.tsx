'use client';

import {
    UsersIcon,
    CurrencyDollarIcon,
    ChartBarIcon,
    ServerIcon,
    UserPlusIcon,
    EnvelopeIcon,
    DocumentChartBarIcon,
    Cog6ToothIcon,
    ArrowUpIcon,
    ArrowDownIcon
} from '@heroicons/react/24/outline';

const metrics = [
    { name: 'Total Users', value: '2,453', change: '+12.5%', changeType: 'increase', icon: UsersIcon },
    { name: 'Total Revenue', value: '$45,231', change: '+8.2%', changeType: 'increase', icon: CurrencyDollarIcon },
    { name: 'Attendance Rate', value: '94.8%', change: '-0.5%', changeType: 'decrease', icon: ChartBarIcon },
    { name: 'System Health', value: '99.9%', change: 'Optimal', changeType: 'neutral', icon: ServerIcon },
];

const recentActivity = [
    { id: 1, user: 'John Doe', action: 'Registered new student', target: 'Alice Smith', time: '2 minutes ago', icon: UserPlusIcon, iconBg: 'bg-[rgba(6,182,212,0.2)]', iconColor: 'text-[var(--neon-cyan)]' },
    { id: 2, user: 'System', action: 'Generated monthly report', target: 'Financials_Oct.pdf', time: '1 hour ago', icon: DocumentChartBarIcon, iconBg: 'bg-[rgba(139,92,246,0.2)]', iconColor: 'text-[var(--neon-purple)]' },
    { id: 3, user: 'Sarah Wilson', action: 'Sent broadcast message', target: 'All Parents', time: '3 hours ago', icon: EnvelopeIcon, iconBg: 'bg-[rgba(236,72,153,0.2)]', iconColor: 'text-[var(--neon-pink)]' },
    { id: 4, user: 'Admin', action: 'Updated system settings', target: 'Security Policy', time: '5 hours ago', icon: Cog6ToothIcon, iconBg: 'bg-[rgba(255,255,255,0.1)]', iconColor: 'text-gray-300' },
];

const revenueData = [
    { month: 'Jan', value: 30 },
    { month: 'Feb', value: 45 },
    { month: 'Mar', value: 35 },
    { month: 'Apr', value: 60 },
    { month: 'May', value: 55 },
    { month: 'Jun', value: 75 },
];

const quickActions = [
    { name: 'Add User', icon: UserPlusIcon, href: '#', color: 'bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400' },
    { name: 'Send Email', icon: EnvelopeIcon, href: '#', color: 'bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400' },
    { name: 'View Reports', icon: DocumentChartBarIcon, href: '#', color: 'bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400' },
    { name: 'Settings', icon: Cog6ToothIcon, href: '#', color: 'bg-gradient-to-r from-gray-600 to-gray-500 hover:from-gray-500 hover:to-gray-400' },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export default function AdminDashboard() {
    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white tracking-tight">Admin Dashboard</h1>
                    <p className="mt-1 text-sm text-gray-400">Overview of system performance and recent activities.</p>
                </div>
                <div className="flex space-x-3">
                    <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-[rgba(16,185,129,0.2)] text-green-400 border border-green-500/30 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                        <span className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
                        System Online
                    </span>
                </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {metrics.map((item) => (
                    <div key={item.name} className="glass-card rounded-xl overflow-hidden relative group">
                        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-br from-[var(--neon-cyan)] to-transparent opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-opacity"></div>
                        <div className="p-6">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 p-3 rounded-lg bg-[rgba(255,255,255,0.05)]">
                                    <item.icon className="h-6 w-6 text-[var(--neon-cyan)]" aria-hidden="true" />
                                </div>
                                <div className="ml-5 w-0 flex-1">
                                    <dl>
                                        <dt className="text-sm font-medium text-gray-400 truncate">{item.name}</dt>
                                        <dd>
                                            <div className="text-2xl font-bold text-white mt-1">{item.value}</div>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[rgba(0,0,0,0.2)] px-6 py-3 border-t border-[var(--glass-border)]">
                            <div className="text-sm">
                                <span className={classNames(
                                    item.changeType === 'increase' ? 'text-green-400' :
                                        item.changeType === 'decrease' ? 'text-red-400' : 'text-gray-400',
                                    'font-medium inline-flex items-center'
                                )}>
                                    {item.changeType === 'increase' && <ArrowUpIcon className="h-3 w-3 mr-1" />}
                                    {item.changeType === 'decrease' && <ArrowDownIcon className="h-3 w-3 mr-1" />}
                                    {item.change}
                                </span>
                                <span className="text-gray-500 ml-2">from last month</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column (Revenue & Quick Actions) */}
                <div className="lg:col-span-2 space-y-8">

                    {/* Revenue Overview */}
                    <div className="glass-card rounded-xl">
                        <div className="px-6 py-5 border-b border-[var(--glass-border)] flex justify-between items-center">
                            <h3 className="text-lg leading-6 font-medium text-white">Revenue Overview</h3>
                            <button className="text-sm text-[var(--neon-cyan)] hover:text-cyan-300 transition-colors">View Details</button>
                        </div>
                        <div className="px-6 py-6">
                            <div className="relative h-64 w-full flex items-end justify-between space-x-4">
                                {revenueData.map((data) => (
                                    <div key={data.month} className="w-full flex flex-col items-center group">
                                        <div
                                            className="w-full bg-gradient-to-t from-[var(--neon-cyan)] to-cyan-300/50 rounded-t-sm group-hover:to-cyan-300 transition-all relative opacity-80 group-hover:opacity-100 shadow-[0_0_10px_rgba(6,182,212,0.3)]"
                                            style={{ height: `${data.value}%` }}
                                        >
                                            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 border border-gray-700 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                                {data.value}%
                                            </div>
                                        </div>
                                        <p className="mt-3 text-xs text-gray-400 font-medium">{data.month}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="glass-card rounded-xl">
                        <div className="px-6 py-5 border-b border-[var(--glass-border)]">
                            <h3 className="text-lg leading-6 font-medium text-white">Quick Actions</h3>
                        </div>
                        <div className="px-6 py-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                            {quickActions.map((action) => (
                                <a
                                    key={action.name}
                                    href={action.href}
                                    className={`${action.color} rounded-xl p-4 flex flex-col items-center justify-center text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl border border-white/10`}
                                >
                                    <action.icon className="h-8 w-8 mb-3" />
                                    <span className="text-sm font-medium">{action.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column (Recent Activity) */}
                <div className="glass-card rounded-xl flex flex-col h-full">
                    <div className="px-6 py-5 border-b border-[var(--glass-border)]">
                        <h3 className="text-lg leading-6 font-medium text-white">Recent Activity</h3>
                    </div>
                    <ul className="divide-y divide-[var(--glass-border)] flex-1">
                        {recentActivity.map((activity) => (
                            <li key={activity.id} className="px-6 py-4 hover:bg-[rgba(255,255,255,0.02)] transition-colors">
                                <div className="flex space-x-4">
                                    <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${activity.iconBg} ring-1 ring-white/10`}>
                                        <activity.icon className={`h-5 w-5 ${activity.iconColor}`} />
                                    </div>
                                    <div className="flex-1 space-y-1">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-sm font-medium text-white">{activity.user}</h3>
                                            <p className="text-xs text-gray-500">{activity.time}</p>
                                        </div>
                                        <p className="text-sm text-gray-400">
                                            {activity.action} <span className="font-medium text-[var(--neon-cyan)]">{activity.target}</span>
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="bg-[rgba(0,0,0,0.2)] px-6 py-4 rounded-b-xl border-t border-[var(--glass-border)]">
                        <div className="text-sm">
                            <a href="#" className="font-medium text-[var(--neon-cyan)] hover:text-cyan-300 flex items-center transition-colors">
                                View all activity <span aria-hidden="true" className="ml-1">&rarr;</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
