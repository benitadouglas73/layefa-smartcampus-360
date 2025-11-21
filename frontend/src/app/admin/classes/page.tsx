'use client';

import {
    AcademicCapIcon,
    UserGroupIcon,
    PlusIcon,
    PencilSquareIcon,
    TrashIcon
} from '@heroicons/react/24/outline';

const stats = [
    { name: 'Total Classes', stat: '6', icon: AcademicCapIcon, color: 'bg-blue-500' },
    { name: 'Total Students', stat: '1,240', icon: UserGroupIcon, color: 'bg-green-500' },
];

const classes = [
    { id: 1, name: 'JSS 1', students: 210, teacher: 'Mr. Oyibo', capacity: 250, status: 'Active' },
    { id: 2, name: 'JSS 2', students: 198, teacher: 'Mr. Oshare', capacity: 250, status: 'Active' },
    { id: 3, name: 'JSS 3', students: 205, teacher: 'Mr. Ogban', capacity: 250, status: 'Active' },
    { id: 4, name: 'SS 1', students: 220, teacher: 'Mr. Enomate', capacity: 250, status: 'Active' },
    { id: 5, name: 'SS 2', students: 195, teacher: 'Mr. Umukoro', capacity: 250, status: 'Active' },
    { id: 6, name: 'SS 3', students: 212, teacher: 'Mr. Nzete', capacity: 250, status: 'Active' },
];

export default function AdminClasses() {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="sm:flex sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Class Management</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        Manage all classes, view student counts, and assign class teachers.
                    </p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto"
                    >
                        <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                        Add Class
                    </button>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((item) => (
                    <div key={item.name} className="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6">
                        <dt>
                            <div className={`absolute rounded-md p-3 ${item.color}`}>
                                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                            </div>
                            <p className="ml-16 truncate text-sm font-medium text-gray-500">{item.name}</p>
                        </dt>
                        <dd className="ml-16 flex items-baseline pb-1 sm:pb-7">
                            <p className="text-2xl font-semibold text-gray-900">{item.stat}</p>
                        </dd>
                    </div>
                ))}
            </div>

            {/* Classes Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {classes.map((cls) => (
                    <div key={cls.id} className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200 border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="px-4 py-5 sm:px-6 flex justify-between items-center bg-gray-50">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">{cls.name}</h3>
                            <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${cls.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                }`}>
                                {cls.status}
                            </span>
                        </div>
                        <div className="px-4 py-5 sm:p-6">
                            <dl className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">Students</dt>
                                    <dd className="mt-1 text-sm text-gray-900">{cls.students}</dd>
                                </div>
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">Capacity</dt>
                                    <dd className="mt-1 text-sm text-gray-900">{cls.capacity}</dd>
                                </div>
                                <div className="sm:col-span-2">
                                    <dt className="text-sm font-medium text-gray-500">Class Teacher</dt>
                                    <dd className="mt-1 text-sm text-gray-900">{cls.teacher}</dd>
                                </div>
                                <div className="sm:col-span-2">
                                    <dt className="text-sm font-medium text-gray-500">Progress</dt>
                                    <dd className="mt-1">
                                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                                            <div
                                                className="bg-blue-600 h-2.5 rounded-full"
                                                style={{ width: `${(cls.students / cls.capacity) * 100}%` }}
                                            ></div>
                                        </div>
                                        <p className="mt-1 text-xs text-gray-500 text-right">{Math.round((cls.students / cls.capacity) * 100)}% Full</p>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                        <div className="px-4 py-4 sm:px-6 bg-gray-50 flex justify-end space-x-3">
                            <button className="text-blue-600 hover:text-blue-900 text-sm font-medium flex items-center">
                                <PencilSquareIcon className="h-4 w-4 mr-1" /> Edit
                            </button>
                            <button className="text-red-600 hover:text-red-900 text-sm font-medium flex items-center">
                                <TrashIcon className="h-4 w-4 mr-1" /> Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
