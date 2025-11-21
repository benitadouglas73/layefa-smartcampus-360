'use client';

import { useState } from 'react';
import {
    UserCircleIcon,
    BellIcon,
    ShieldCheckIcon,
    BuildingOfficeIcon,
    CheckCircleIcon
} from '@heroicons/react/24/outline';

const tabs = [
    { name: 'General', icon: BuildingOfficeIcon, current: true },
    { name: 'Notifications', icon: BellIcon, current: false },
    { name: 'Security', icon: ShieldCheckIcon, current: false },
    { name: 'Team', icon: UserCircleIcon, current: false },
];

export default function AdminSettings() {
    const [activeTab, setActiveTab] = useState('General');
    const [saved, setSaved] = useState(false);

    const handleSave = () => {
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="sm:flex sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        Manage your system preferences and account settings.
                    </p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <button
                        onClick={handleSave}
                        type="button"
                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto"
                    >
                        {saved ? (
                            <>
                                <CheckCircleIcon className="-ml-1 mr-2 h-5 w-5" />
                                Saved!
                            </>
                        ) : (
                            'Save Changes'
                        )}
                    </button>
                </div>
            </div>

            <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
                {/* Sidebar Navigation */}
                <aside className="py-6 px-2 sm:px-6 lg:col-span-3 lg:py-0 lg:px-0">
                    <nav className="space-y-1">
                        {tabs.map((tab) => (
                            <button
                                key={tab.name}
                                onClick={() => setActiveTab(tab.name)}
                                className={`
                                    ${activeTab === tab.name
                                        ? 'bg-blue-50 text-blue-700 hover:bg-blue-50 hover:text-blue-700'
                                        : 'text-gray-900 hover:bg-gray-50 hover:text-gray-900'
                                    }
                                    group rounded-md px-3 py-2 flex items-center text-sm font-medium w-full
                                `}
                            >
                                <tab.icon
                                    className={`
                                        ${activeTab === tab.name ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500'}
                                        flex-shrink-0 -ml-1 mr-3 h-6 w-6
                                    `}
                                    aria-hidden="true"
                                />
                                <span className="truncate">{tab.name}</span>
                            </button>
                        ))}
                    </nav>
                </aside>

                {/* Content Area */}
                <div className="space-y-6 sm:px-6 lg:col-span-9 lg:px-0">
                    {activeTab === 'General' && (
                        <div className="shadow sm:overflow-hidden sm:rounded-md">
                            <div className="space-y-6 bg-white py-6 px-4 sm:p-6">
                                <div>
                                    <h3 className="text-lg font-medium leading-6 text-gray-900">System Information</h3>
                                    <p className="mt-1 text-sm text-gray-500">Basic details about your institution.</p>
                                </div>

                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-4">
                                        <label htmlFor="school-name" className="block text-sm font-medium text-gray-700">School Name</label>
                                        <input type="text" name="school-name" id="school-name" defaultValue="SmartCampus Academy" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2" />
                                    </div>

                                    <div className="col-span-6 sm:col-span-4">
                                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">Official Email Address</label>
                                        <input type="text" name="email-address" id="email-address" defaultValue="admin@smartcampus.edu" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2" />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                                        <select id="country" name="country" autoComplete="country-name" className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm">
                                            <option>Nigeria</option>
                                            <option>United States</option>
                                            <option>Canada</option>
                                        </select>
                                    </div>

                                    <div className="col-span-6">
                                        <label className="block text-sm font-medium text-gray-700">School Logo</label>
                                        <div className="mt-1 flex items-center">
                                            <span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                                                <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                                </svg>
                                            </span>
                                            <button type="button" className="ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Change</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'Notifications' && (
                        <div className="shadow sm:overflow-hidden sm:rounded-md">
                            <div className="space-y-6 bg-white py-6 px-4 sm:p-6">
                                <div>
                                    <h3 className="text-lg font-medium leading-6 text-gray-900">Notifications</h3>
                                    <p className="mt-1 text-sm text-gray-500">Decide which communications you'd like to receive.</p>
                                </div>
                                <fieldset>
                                    <legend className="sr-only">By Email</legend>
                                    <div className="text-base font-medium text-gray-900" aria-hidden="true">By Email</div>
                                    <div className="mt-4 space-y-4">
                                        <div className="flex items-start">
                                            <div className="flex h-5 items-center">
                                                <input id="comments" name="comments" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" defaultChecked />
                                            </div>
                                            <div className="ml-3 text-sm">
                                                <label htmlFor="comments" className="font-medium text-gray-700">New Student Registrations</label>
                                                <p className="text-gray-500">Get notified when a new student applies.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="flex h-5 items-center">
                                                <input id="candidates" name="candidates" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                                            </div>
                                            <div className="ml-3 text-sm">
                                                <label htmlFor="candidates" className="font-medium text-gray-700">Fee Payments</label>
                                                <p className="text-gray-500">Get notified when a payment is made.</p>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                    )}

                    {activeTab === 'Security' && (
                        <div className="shadow sm:overflow-hidden sm:rounded-md">
                            <div className="space-y-6 bg-white py-6 px-4 sm:p-6">
                                <div>
                                    <h3 className="text-lg font-medium leading-6 text-gray-900">Security</h3>
                                    <p className="mt-1 text-sm text-gray-500">Update your password and security preferences.</p>
                                </div>
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-4">
                                        <label htmlFor="current-password" className="block text-sm font-medium text-gray-700">Current Password</label>
                                        <input type="password" name="current-password" id="current-password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2" />
                                    </div>
                                    <div className="col-span-6 sm:col-span-4">
                                        <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">New Password</label>
                                        <input type="password" name="new-password" id="new-password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2" />
                                    </div>
                                    <div className="col-span-6 sm:col-span-4">
                                        <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                                        <input type="password" name="confirm-password" id="confirm-password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'Team' && (
                        <div className="shadow sm:overflow-hidden sm:rounded-md">
                            <div className="space-y-6 bg-white py-6 px-4 sm:p-6">
                                <div>
                                    <h3 className="text-lg font-medium leading-6 text-gray-900">Team Members</h3>
                                    <p className="mt-1 text-sm text-gray-500">Manage who has access to the admin panel.</p>
                                </div>
                                <div className="flex flex-col">
                                    <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                            <table className="min-w-full divide-y divide-gray-300">
                                                <thead>
                                                    <tr>
                                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Name</th>
                                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Role</th>
                                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200">
                                                    <tr>
                                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">Admin User</td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Super Admin</td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-green-600">Active</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
