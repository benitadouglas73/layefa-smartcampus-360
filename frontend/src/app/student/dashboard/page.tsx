'use client';

import {
    BookOpenIcon,
    ClockIcon,
    CalendarIcon,
    CheckCircleIcon,
    ChartBarIcon,
    BellIcon,
    AcademicCapIcon
} from '@heroicons/react/24/outline';

const stats = [
    { name: 'Current GPA', value: '3.8', change: '+0.2', changeType: 'increase', icon: AcademicCapIcon },
    { name: 'Attendance', value: '95%', change: 'Target: 90%', changeType: 'neutral', icon: CheckCircleIcon },
    { name: 'Pending Tasks', value: '4', change: '2 due today', changeType: 'decrease', icon: BookOpenIcon },
    { name: 'Next Class', value: 'Physics', change: 'Room 302', changeType: 'neutral', icon: ClockIcon },
];

const schedule = [
    { id: 1, subject: 'Mathematics', time: '08:00 AM - 09:30 AM', room: 'Room 101', teacher: 'Mr. Anderson', status: 'completed' },
    { id: 2, subject: 'Physics', time: '09:45 AM - 11:15 AM', room: 'Room 302', teacher: 'Ms. Davis', status: 'current' },
    { id: 3, subject: 'Computer Science', time: '11:30 AM - 01:00 PM', room: 'Lab 2', teacher: 'Mr. Wilson', status: 'upcoming' },
    { id: 4, subject: 'English Literature', time: '02:00 PM - 03:30 PM', room: 'Room 204', teacher: 'Mrs. Thompson', status: 'upcoming' },
];

const assignments = [
    { id: 1, title: 'Calculus Problem Set', subject: 'Mathematics', due: 'Today, 11:59 PM', status: 'pending', priority: 'high' },
    { id: 2, title: 'Physics Lab Report', subject: 'Physics', due: 'Tomorrow, 5:00 PM', status: 'pending', priority: 'medium' },
    { id: 3, title: 'Hamlet Essay Draft', subject: 'English', due: 'Nov 24, 11:59 PM', status: 'in-progress', priority: 'medium' },
    { id: 4, title: 'Database Project', subject: 'CS', due: 'Nov 28, 11:59 PM', status: 'not-started', priority: 'low' },
];

const performance = [
    { subject: 'Mathematics', grade: 92, color: 'bg-blue-500' },
    { subject: 'Physics', grade: 88, color: 'bg-green-500' },
    { subject: 'Computer Science', grade: 95, color: 'bg-purple-500' },
    { subject: 'English', grade: 85, color: 'bg-yellow-500' },
    { subject: 'History', grade: 90, color: 'bg-red-500' },
];

const announcements = [
    { id: 1, title: 'Science Fair Registration', date: '2 hours ago', type: 'Event' },
    { id: 2, title: 'Mid-Term Exam Schedule', date: 'Yesterday', type: 'Academic' },
    { id: 3, title: 'Library Maintenance', date: '2 days ago', type: 'General' },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export default function StudentDashboard() {
    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white tracking-tight">Welcome back, Alex!</h1>
                    <p className="mt-1 text-sm text-gray-400">Here's what's happening with your academic life today.</p>
                </div>
                <div className="text-right">
                    <p className="text-sm font-medium text-[var(--neon-purple)]">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    <p className="text-sm text-gray-500">Fall Semester 2025</p>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((item) => (
                    <div key={item.name} className="glass-card rounded-xl overflow-hidden relative group">
                        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-br from-[var(--neon-purple)] to-transparent opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-opacity"></div>
                        <div className="p-6">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 p-3 rounded-lg bg-[rgba(255,255,255,0.05)]">
                                    <item.icon className="h-6 w-6 text-[var(--neon-purple)]" aria-hidden="true" />
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
                                    'font-medium'
                                )}>
                                    {item.change}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column (Schedule & Assignments) */}
                <div className="lg:col-span-2 space-y-8">

                    {/* Today's Schedule */}
                    <div className="glass-card rounded-xl">
                        <div className="px-6 py-5 border-b border-[var(--glass-border)] flex justify-between items-center">
                            <h3 className="text-lg leading-6 font-medium text-white">Today's Schedule</h3>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[rgba(139,92,246,0.2)] text-purple-300 border border-purple-500/30">
                                4 Classes
                            </span>
                        </div>
                        <div className="px-6 py-6">
                            <div className="flow-root">
                                <ul className="-mb-8">
                                    {schedule.map((event, eventIdx) => (
                                        <li key={event.id}>
                                            <div className="relative pb-8">
                                                {eventIdx !== schedule.length - 1 ? (
                                                    <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-[var(--glass-border)]" aria-hidden="true" />
                                                ) : null}
                                                <div className="relative flex space-x-3">
                                                    <div>
                                                        <span className={classNames(
                                                            event.status === 'current' ? 'bg-[var(--neon-purple)] ring-[var(--neon-purple)] shadow-[0_0_10px_rgba(139,92,246,0.5)]' :
                                                                event.status === 'completed' ? 'bg-green-500 ring-green-500' : 'bg-gray-700 ring-gray-700',
                                                            'h-8 w-8 rounded-full flex items-center justify-center ring-4 ring-[var(--bg-space)]'
                                                        )}>
                                                            <ClockIcon className="h-5 w-5 text-white" aria-hidden="true" />
                                                        </span>
                                                    </div>
                                                    <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                                        <div>
                                                            <p className="text-sm font-medium text-white">{event.subject}</p>
                                                            <p className="text-sm text-gray-400">{event.time} • {event.teacher}</p>
                                                        </div>
                                                        <div className="text-right text-sm whitespace-nowrap text-gray-500">
                                                            <p>{event.room}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Upcoming Assignments */}
                    <div className="glass-card rounded-xl">
                        <div className="px-6 py-5 border-b border-[var(--glass-border)]">
                            <h3 className="text-lg leading-6 font-medium text-white">Upcoming Assignments</h3>
                        </div>
                        <ul className="divide-y divide-[var(--glass-border)]">
                            {assignments.map((assignment) => (
                                <li key={assignment.id} className="px-6 py-4 hover:bg-[rgba(255,255,255,0.02)] transition-colors">
                                    <div className="flex items-center justify-between">
                                        <div className="flex flex-col">
                                            <p className="text-sm font-medium text-[var(--neon-pink)] truncate">{assignment.title}</p>
                                            <p className="text-sm text-gray-500">{assignment.subject}</p>
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <p className="text-sm text-white font-medium">{assignment.due}</p>
                                            <span className={classNames(
                                                assignment.priority === 'high' ? 'bg-red-900/30 text-red-400 border border-red-500/30' :
                                                    assignment.priority === 'medium' ? 'bg-yellow-900/30 text-yellow-400 border border-yellow-500/30' : 'bg-green-900/30 text-green-400 border border-green-500/30',
                                                'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mt-1'
                                            )}>
                                                {assignment.priority.charAt(0).toUpperCase() + assignment.priority.slice(1)} Priority
                                            </span>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="bg-[rgba(0,0,0,0.2)] px-6 py-4 rounded-b-xl border-t border-[var(--glass-border)]">
                            <div className="text-sm">
                                <a href="#" className="font-medium text-[var(--neon-purple)] hover:text-purple-300 flex items-center transition-colors">
                                    View all assignments <span aria-hidden="true" className="ml-1">&rarr;</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column (Performance & Announcements) */}
                <div className="space-y-8">

                    {/* Performance Tracker */}
                    <div className="glass-card rounded-xl">
                        <div className="px-6 py-5 border-b border-[var(--glass-border)]">
                            <h3 className="text-lg leading-6 font-medium text-white">Performance Tracker</h3>
                        </div>
                        <div className="px-6 py-6 space-y-5">
                            {performance.map((subject) => (
                                <div key={subject.subject}>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-sm font-medium text-gray-300">{subject.subject}</span>
                                        <span className="text-sm font-medium text-white">{subject.grade}%</span>
                                    </div>
                                    <div className="w-full bg-gray-700 rounded-full h-2">
                                        <div className={`${subject.color} h-2 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.3)]`} style={{ width: `${subject.grade}%` }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Announcements */}
                    <div className="glass-card rounded-xl">
                        <div className="px-6 py-5 border-b border-[var(--glass-border)] flex justify-between items-center">
                            <h3 className="text-lg leading-6 font-medium text-white">Notice Board</h3>
                            <BellIcon className="h-5 w-5 text-gray-400" />
                        </div>
                        <ul className="divide-y divide-[var(--glass-border)]">
                            {announcements.map((item) => (
                                <li key={item.id} className="px-6 py-4 hover:bg-[rgba(255,255,255,0.02)] transition-colors">
                                    <div className="flex justify-between">
                                        <p className="text-sm font-medium text-white">{item.title}</p>
                                        <p className="text-xs text-gray-500">{item.date}</p>
                                    </div>
                                    <p className="mt-1 text-xs text-[var(--neon-cyan)]">{item.type}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Actions */}
                    <div className="bg-gradient-to-br from-[var(--neon-purple)] to-[var(--neon-pink)] shadow-lg rounded-xl text-white p-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl"></div>
                        <h3 className="text-lg font-bold mb-2 relative z-10">Need Help?</h3>
                        <p className="text-purple-100 text-sm mb-6 relative z-10">Contact your academic advisor or support team.</p>
                        <button className="w-full bg-white text-purple-600 font-bold py-3 px-4 rounded-lg shadow-md hover:bg-gray-50 transition-colors relative z-10">
                            Contact Support
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
