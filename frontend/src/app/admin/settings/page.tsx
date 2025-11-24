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
    { name: 'General', icon: BuildingOfficeIcon },
    { name: 'Notifications', icon: BellIcon },
    { name: 'Security', icon: ShieldCheckIcon },
    { name: 'Team', icon: UserCircleIcon },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export default function AdminSettings() {
    const [activeTab, setActiveTab] = useState('General');
    const [saved, setSaved] = useState(false);

    const handleSave = () => {
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
    };

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white tracking-tight">Settings</h1>
                    <p className="mt-1 text-sm text-gray-400">
                        Manage your system preferences and account settings.
                    </p>
                </div>
                <div className="flex-none">
                    <button
                        onClick={handleSave}
                        type="button"
                        className="inline-flex items-center justify-center rounded-xl border border-transparent bg-gradient-to-r from-[var(--neon-cyan)] to-blue-600 px-6 py-3 text-sm font-bold text-white shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--neon-cyan)] transition-all duration-300"
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

            <div className="lg:grid lg:grid-cols-12 lg:gap-x-8">
                {/* Sidebar Navigation */}
                <aside className="py-6 lg:col-span-3 lg:py-0">
                    <nav className="space-y-2">
                        {tabs.map((tab) => (
                            <button
                                key={tab.name}
                                onClick={() => setActiveTab(tab.name)}
                                className={classNames(
                                    activeTab === tab.name
                                        ? 'bg-[rgba(6,182,212,0.15)] text-[var(--neon-cyan)] border border-[rgba(6,182,212,0.3)] shadow-[0_0_10px_rgba(6,182,212,0.1)]'
                                        : 'text-gray-400 hover:bg-[rgba(255,255,255,0.05)] hover:text-white border border-transparent',
                                    'group rounded-xl px-4 py-3 flex items-center text-sm font-medium w-full transition-all duration-200'
                                )}
                            >
                                <tab.icon
                                    className={classNames(
                                        activeTab === tab.name ? 'text-[var(--neon-cyan)]' : 'text-gray-500 group-hover:text-gray-300',
                                        'flex-shrink-0 -ml-1 mr-3 h-6 w-6 transition-colors'
                                    )}
                                    aria-hidden="true"
                                />
                                <span className="truncate">{tab.name}</span>
                            </button>
                        ))}
                    </nav>
                </aside>

                {/* Content Area */}
                <div className="space-y-6 lg:col-span-9">
                    <div className="glass-panel rounded-2xl p-8 relative overflow-hidden">
                        {/* Background Glow */}
                        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-[var(--neon-cyan)] opacity-5 rounded-full blur-3xl pointer-events-none"></div>

                        {activeTab === 'General' && (
                            <div className="space-y-8 relative z-10">
                                <div>
                                    <h3 className="text-xl font-bold text-white">System Information</h3>
                                    <p className="mt-1 text-sm text-gray-400">Basic details about your institution.</p>
                                </div>

                                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                    <div className="sm:col-span-4">
                                        <label htmlFor="school-name" className="block text-sm font-medium text-gray-300">School Name</label>
                                        <input type="text" name="school-name" id="school-name" defaultValue="Layefa SmartCampus 360" className="mt-2 block w-full rounded-lg border border-[var(--glass-border)] bg-[rgba(255,255,255,0.05)] text-white shadow-sm focus:border-[var(--neon-cyan)] focus:ring-[var(--neon-cyan)] sm:text-sm px-4 py-3" />
                                    </div>

                                    <div className="sm:col-span-4">
                                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-300">Official Email Address</label>
                                        <input type="text" name="email-address" id="email-address" defaultValue="admin@layefasmartcampus.edu" className="mt-2 block w-full rounded-lg border border-[var(--glass-border)] bg-[rgba(255,255,255,0.05)] text-white shadow-sm focus:border-[var(--neon-cyan)] focus:ring-[var(--neon-cyan)] sm:text-sm px-4 py-3" />
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label htmlFor="country" className="block text-sm font-medium text-gray-300">Country</label>
                                        <select id="country" name="country" autoComplete="country-name" className="mt-2 block w-full rounded-lg border border-[var(--glass-border)] bg-[rgba(255,255,255,0.05)] text-white shadow-sm focus:border-[var(--neon-cyan)] focus:ring-[var(--neon-cyan)] sm:text-sm px-4 py-3">
                                            <option className="bg-slate-900">Nigeria</option>
                                            <option className="bg-slate-900">United States</option>
                                            <option className="bg-slate-900">Canada</option>
                                        </select>
                                    </div>

                                    <div className="col-span-6">
                                        <label className="block text-sm font-medium text-gray-300">School Logo</label>
                                        <div className="mt-2 flex items-center">
                                            <span className="inline-block h-16 w-16 overflow-hidden rounded-full bg-[rgba(255,255,255,0.1)] border border-[var(--glass-border)] flex items-center justify-center">
                                                <BuildingOfficeIcon className="h-8 w-8 text-gray-400" />
                                            </span>
                                            <button type="button" className="ml-5 rounded-lg border border-[var(--glass-border)] bg-[rgba(255,255,255,0.05)] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[rgba(255,255,255,0.1)] focus:outline-none focus:ring-2 focus:ring-[var(--neon-cyan)] focus:ring-offset-2 transition-colors">
                                                Change
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'Notifications' && (
                            <div className="space-y-8 relative z-10">
                                <div>
                                    <h3 className="text-xl font-bold text-white">Notifications</h3>
                                    <p className="mt-1 text-sm text-gray-400">Decide which communications you'd like to receive.</p>
                                </div>
                                <fieldset>
                                    <legend className="sr-only">By Email</legend>
                                    <div className="text-base font-medium text-white" aria-hidden="true">By Email</div>
                                    <div className="mt-4 space-y-4">
                                        <div className="flex items-start">
                                            <div className="flex h-6 items-center">
                                                <input id="comments" name="comments" type="checkbox" className="h-5 w-5 rounded border-gray-600 bg-[rgba(255,255,255,0.05)] text-[var(--neon-cyan)] focus:ring-[var(--neon-cyan)] focus:ring-offset-gray-900" defaultChecked />
                                            </div>
                                            <div className="ml-3 text-sm">
                                                <label htmlFor="comments" className="font-medium text-gray-300">New Student Registrations</label>
                                                <p className="text-gray-500">Get notified when a new student applies.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="flex h-6 items-center">
                                                <input id="candidates" name="candidates" type="checkbox" className="h-5 w-5 rounded border-gray-600 bg-[rgba(255,255,255,0.05)] text-[var(--neon-cyan)] focus:ring-[var(--neon-cyan)] focus:ring-offset-gray-900" />
                                            </div>
                                            <div className="ml-3 text-sm">
                                                <label htmlFor="candidates" className="font-medium text-gray-300">Fee Payments</label>
                                                <p className="text-gray-500">Get notified when a payment is made.</p>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                        )}

                        {activeTab === 'Security' && (
                            <div className="space-y-8 relative z-10">
                                <div>
                                    <h3 className="text-xl font-bold text-white">Security</h3>
                                    <p className="mt-1 text-sm text-gray-400">Update your password and security preferences.</p>
                                </div>
                                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                    <div className="sm:col-span-4">
                                        <label htmlFor="current-password" className="block text-sm font-medium text-gray-300">Current Password</label>
                                        <input type="password" name="current-password" id="current-password" className="mt-2 block w-full rounded-lg border border-[var(--glass-border)] bg-[rgba(255,255,255,0.05)] text-white shadow-sm focus:border-[var(--neon-cyan)] focus:ring-[var(--neon-cyan)] sm:text-sm px-4 py-3" />
                                    </div>
                                    <div className="sm:col-span-4">
                                        <label htmlFor="new-password" className="block text-sm font-medium text-gray-300">New Password</label>
                                        <input type="password" name="new-password" id="new-password" className="mt-2 block w-full rounded-lg border border-[var(--glass-border)] bg-[rgba(255,255,255,0.05)] text-white shadow-sm focus:border-[var(--neon-cyan)] focus:ring-[var(--neon-cyan)] sm:text-sm px-4 py-3" />
                                    </div>
                                    <div className="sm:col-span-4">
                                        <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-300">Confirm Password</label>
                                        <input type="password" name="confirm-password" id="confirm-password" className="mt-2 block w-full rounded-lg border border-[var(--glass-border)] bg-[rgba(255,255,255,0.05)] text-white shadow-sm focus:border-[var(--neon-cyan)] focus:ring-[var(--neon-cyan)] sm:text-sm px-4 py-3" />
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'Team' && (
                            <div className="space-y-8 relative z-10">
                                <div>
                                    <h3 className="text-xl font-bold text-white">Team Members</h3>
                                    <p className="mt-1 text-sm text-gray-400">Manage who has access to the admin panel.</p>
                                </div>
                                <div className="flex flex-col">
                                    <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                                                <table className="min-w-full divide-y divide-[var(--glass-border)]">
                                                    <thead className="bg-[rgba(255,255,255,0.05)]">
                                                        <tr>
                                                            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Name</th>
                                                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">Role</th>
                                                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">Status</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-[var(--glass-border)] bg-[rgba(255,255,255,0.02)]">
                                                        <tr>
                                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-6">Admin User</td>
                                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">Super Admin</td>
                                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-green-400">Active</td>
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
        </div>
    );
}
