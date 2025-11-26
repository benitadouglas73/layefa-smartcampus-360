'use client';

import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    BarChart,
    Bar,
    Legend
} from 'recharts';
import { ArrowUpIcon, ArrowDownIcon, UsersIcon, CurrencyDollarIcon, SignalIcon } from '@heroicons/react/24/solid';

// Mock Data
const userGrowthData = [
    { name: 'Jan', users: 400 },
    { name: 'Feb', users: 600 },
    { name: 'Mar', users: 900 },
    { name: 'Apr', users: 1200 },
    { name: 'May', users: 1500 },
    { name: 'Jun', users: 1800 },
    { name: 'Jul', users: 2400 },
];

const roleData = [
    { name: 'Students', value: 1200, color: '#06b6d4' }, // neon-cyan
    { name: 'Teachers', value: 80, color: '#a855f7' },  // neon-purple
    { name: 'Parents', value: 800, color: '#ec4899' },  // neon-pink
];

const activityData = [
    { name: 'Mon', logins: 120, actions: 240 },
    { name: 'Tue', logins: 150, actions: 300 },
    { name: 'Wed', logins: 180, actions: 350 },
    { name: 'Thu', logins: 170, actions: 320 },
    { name: 'Fri', logins: 140, actions: 280 },
    { name: 'Sat', logins: 90, actions: 150 },
    { name: 'Sun', logins: 80, actions: 120 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-[rgba(2,6,23,0.9)] border border-[var(--glass-border)] p-3 rounded-lg shadow-xl backdrop-blur-md">
                <p className="text-gray-300 font-bold mb-1">{label}</p>
                {payload.map((entry: any, index: number) => (
                    <p key={index} style={{ color: entry.color }} className="text-sm">
                        {entry.name}: <span className="font-bold text-white">{entry.value}</span>
                    </p>
                ))}
            </div>
        );
    }
    return null;
};

export default function Analytics() {
    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-white tracking-tight">Analytics Dashboard</h1>
                <p className="text-gray-400 mt-1">Real-time insights and system performance overview.</p>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    {
                        title: 'Total Users',
                        value: '2,080',
                        change: '+12.5%',
                        trend: 'up',
                        icon: UsersIcon,
                        color: 'text-[var(--neon-cyan)]',
                        bg: 'bg-[rgba(6,182,212,0.1)]'
                    },
                    {
                        title: 'Revenue (YTD)',
                        value: '$45,200',
                        change: '+8.2%',
                        trend: 'up',
                        icon: CurrencyDollarIcon,
                        color: 'text-[var(--neon-purple)]',
                        bg: 'bg-[rgba(168,85,247,0.1)]'
                    },
                    {
                        title: 'Active Sessions',
                        value: '342',
                        change: '-2.4%',
                        trend: 'down',
                        icon: SignalIcon,
                        color: 'text-[var(--neon-pink)]',
                        bg: 'bg-[rgba(236,72,153,0.1)]'
                    }
                ].map((stat, index) => (
                    <div key={index} className="glass-panel p-6 rounded-2xl border border-[var(--glass-border)] hover:border-[var(--neon-cyan)] transition-all duration-300">
                        <div className="flex items-center justify-between mb-4">
                            <div className={`p-3 rounded-xl ${stat.bg}`}>
                                <stat.icon className={`w-6 h-6 ${stat.color}`} />
                            </div>
                            <div className={`flex items-center text-sm font-bold ${stat.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                                {stat.trend === 'up' ? <ArrowUpIcon className="w-4 h-4 mr-1" /> : <ArrowDownIcon className="w-4 h-4 mr-1" />}
                                {stat.change}
                            </div>
                        </div>
                        <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider">{stat.title}</h3>
                        <p className="text-3xl font-black text-white mt-1">{stat.value}</p>
                    </div>
                ))}
            </div>

            {/* Charts Row 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* User Growth Chart */}
                <div className="glass-panel p-6 rounded-2xl border border-[var(--glass-border)]">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                        <span className="w-2 h-6 bg-[var(--neon-cyan)] rounded-full mr-3"></span>
                        User Growth
                    </h3>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={userGrowthData}>
                                <defs>
                                    <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="var(--neon-cyan)" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="var(--neon-cyan)" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                                <XAxis dataKey="name" stroke="#9ca3af" tick={{ fill: '#9ca3af' }} axisLine={false} tickLine={false} />
                                <YAxis stroke="#9ca3af" tick={{ fill: '#9ca3af' }} axisLine={false} tickLine={false} />
                                <Tooltip content={<CustomTooltip />} />
                                <Area type="monotone" dataKey="users" stroke="var(--neon-cyan)" strokeWidth={3} fillOpacity={1} fill="url(#colorUsers)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Role Distribution */}
                <div className="glass-panel p-6 rounded-2xl border border-[var(--glass-border)]">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                        <span className="w-2 h-6 bg-[var(--neon-purple)] rounded-full mr-3"></span>
                        User Distribution
                    </h3>
                    <div className="h-[300px] w-full flex items-center justify-center">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={roleData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={80}
                                    outerRadius={110}
                                    paddingAngle={5}
                                    dataKey="value"
                                    stroke="none"
                                >
                                    {roleData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip content={<CustomTooltip />} />
                                <Legend
                                    verticalAlign="bottom"
                                    height={36}
                                    formatter={(value: any) => <span className="text-gray-300 ml-2 font-medium">{value}</span>}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            {/* Charts Row 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* System Activity */}
                <div className="lg:col-span-2 glass-panel p-6 rounded-2xl border border-[var(--glass-border)]">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                        <span className="w-2 h-6 bg-[var(--neon-pink)] rounded-full mr-3"></span>
                        System Activity
                    </h3>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={activityData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                                <XAxis dataKey="name" stroke="#9ca3af" tick={{ fill: '#9ca3af' }} axisLine={false} tickLine={false} />
                                <YAxis stroke="#9ca3af" tick={{ fill: '#9ca3af' }} axisLine={false} tickLine={false} />
                                <Tooltip content={<CustomTooltip />} />
                                <Legend formatter={(value: any) => <span className="text-gray-300 ml-2">{value}</span>} />
                                <Bar dataKey="logins" fill="var(--neon-cyan)" radius={[4, 4, 0, 0]} />
                                <Bar dataKey="actions" fill="var(--neon-purple)" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Recent Logs */}
                <div className="glass-panel p-6 rounded-2xl border border-[var(--glass-border)]">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                        <span className="w-2 h-6 bg-gray-500 rounded-full mr-3"></span>
                        Recent Logs
                    </h3>
                    <div className="space-y-4 overflow-y-auto max-h-[300px] pr-2 custom-scrollbar">
                        {[
                            { action: 'New User Registered', time: '2 mins ago', user: 'John Doe', type: 'success' },
                            { action: 'System Backup', time: '1 hour ago', user: 'System', type: 'info' },
                            { action: 'Failed Login Attempt', time: '2 hours ago', user: 'Unknown', type: 'error' },
                            { action: 'Class Created', time: '3 hours ago', user: 'Sarah Smith', type: 'success' },
                            { action: 'Payment Received', time: '5 hours ago', user: 'Mike Ross', type: 'success' },
                        ].map((log, index) => (
                            <div key={index} className="flex items-start p-3 rounded-lg bg-[rgba(255,255,255,0.03)] hover:bg-[rgba(255,255,255,0.05)] transition-colors">
                                <div className={`w-2 h-2 mt-2 rounded-full mr-3 flex-shrink-0 ${log.type === 'success' ? 'bg-green-400' :
                                    log.type === 'error' ? 'bg-red-400' : 'bg-blue-400'
                                    }`}></div>
                                <div>
                                    <p className="text-sm font-medium text-white">{log.action}</p>
                                    <p className="text-xs text-gray-400">{log.user} • {log.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
