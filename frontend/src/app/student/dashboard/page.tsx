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
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Welcome back, Alex!</h1>
                    <p className="text-sm text-gray-500">Here's what's happening with your academic life today.</p>
                </div>
                <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    <p className="text-sm text-gray-500">Fall Semester 2025</p>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((item) => (
                    <div key={item.name} className="bg-white overflow-hidden shadow rounded-lg border border-gray-100">
                        <div className="p-5">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <item.icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                                </div>
                                <div className="ml-5 w-0 flex-1">
                                    <dl>
                                        <dt className="text-sm font-medium text-gray-500 truncate">{item.name}</dt>
                                        <dd>
                                            <div className="text-lg font-medium text-gray-900">{item.value}</div>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-5 py-3">
                            <div className="text-sm">
                                <span className={classNames(
                                    item.changeType === 'increase' ? 'text-green-600' :
                                        item.changeType === 'decrease' ? 'text-red-600' : 'text-gray-500',
                                    'font-medium'
                                )}>
                                    {item.change}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column (Schedule & Assignments) */}
                <div className="lg:col-span-2 space-y-6">

                    {/* Today's Schedule */}
                    <div className="bg-white shadow rounded-lg border border-gray-100">
                        <div className="px-4 py-5 sm:px-6 border-b border-gray-100 flex justify-between items-center">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">Today's Schedule</h3>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                4 Classes
                            </span>
                        </div>
                        <div className="px-4 py-5 sm:p-6">
                            <div className="flow-root">
                                <ul className="-mb-8">
                                    {schedule.map((event, eventIdx) => (
                                        <li key={event.id}>
                                            <div className="relative pb-8">
                                                {eventIdx !== schedule.length - 1 ? (
                                                    <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                                                ) : null}
                                                <div className="relative flex space-x-3">
                                                    <div>
                                                        <span className={classNames(
                                                            event.status === 'current' ? 'bg-blue-500' :
                                                                event.status === 'completed' ? 'bg-green-500' : 'bg-gray-400',
                                                            'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
                                                        )}>
                                                            <ClockIcon className="h-5 w-5 text-white" aria-hidden="true" />
                                                        </span>
                                                    </div>
                                                    <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                                        <div>
                                                            <p className="text-sm font-medium text-gray-900">{event.subject}</p>
                                                            <p className="text-sm text-gray-500">{event.time} • {event.teacher}</p>
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
                    <div className="bg-white shadow rounded-lg border border-gray-100">
                        <div className="px-4 py-5 sm:px-6 border-b border-gray-100">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">Upcoming Assignments</h3>
                        </div>
                        <ul className="divide-y divide-gray-100">
                            {assignments.map((assignment) => (
                                <li key={assignment.id} className="px-4 py-4 sm:px-6 hover:bg-gray-50 transition-colors">
                                    <div className="flex items-center justify-between">
                                        <div className="flex flex-col">
                                            <p className="text-sm font-medium text-blue-600 truncate">{assignment.title}</p>
                                            <p className="text-sm text-gray-500">{assignment.subject}</p>
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <p className="text-sm text-gray-900 font-medium">{assignment.due}</p>
                                            <span className={classNames(
                                                assignment.priority === 'high' ? 'bg-red-100 text-red-800' :
                                                    assignment.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800',
                                                'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mt-1'
                                            )}>
                                                {assignment.priority.charAt(0).toUpperCase() + assignment.priority.slice(1)} Priority
                                            </span>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="bg-gray-50 px-4 py-4 sm:px-6 rounded-b-lg">
                            <div className="text-sm">
                                <a href="#" className="font-medium text-blue-600 hover:text-blue-500">View all assignments <span aria-hidden="true">&rarr;</span></a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column (Performance & Announcements) */}
                <div className="space-y-6">

                    {/* Performance Tracker */}
                    <div className="bg-white shadow rounded-lg border border-gray-100">
                        <div className="px-4 py-5 sm:px-6 border-b border-gray-100">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">Performance Tracker</h3>
                        </div>
                        <div className="px-4 py-5 sm:p-6 space-y-4">
                            {performance.map((subject) => (
                                <div key={subject.subject}>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm font-medium text-gray-700">{subject.subject}</span>
                                        <span className="text-sm font-medium text-gray-900">{subject.grade}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className={`${subject.color} h-2 rounded-full`} style={{ width: `${subject.grade}%` }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Announcements */}
                    <div className="bg-white shadow rounded-lg border border-gray-100">
                        <div className="px-4 py-5 sm:px-6 border-b border-gray-100 flex justify-between items-center">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">Notice Board</h3>
                            <BellIcon className="h-5 w-5 text-gray-400" />
                        </div>
                        <ul className="divide-y divide-gray-100">
                            {announcements.map((item) => (
                                <li key={item.id} className="px-4 py-4 sm:px-6 hover:bg-gray-50">
                                    <div className="flex justify-between">
                                        <p className="text-sm font-medium text-gray-900">{item.title}</p>
                                        <p className="text-xs text-gray-500">{item.date}</p>
                                    </div>
                                    <p className="mt-1 text-xs text-blue-600">{item.type}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Actions */}
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 shadow rounded-lg text-white p-6">
                        <h3 className="text-lg font-bold mb-2">Need Help?</h3>
                        <p className="text-blue-100 text-sm mb-4">Contact your academic advisor or support team.</p>
                        <button className="w-full bg-white text-blue-600 font-medium py-2 px-4 rounded shadow hover:bg-blue-50 transition-colors">
                            Contact Support
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
