'use client';

import {
    UserPlusIcon,
    MagnifyingGlassIcon,
    FunnelIcon
} from '@heroicons/react/24/outline';

const users = [
    {
        id: 1,
        name: 'Tamaralayefa Divine Douglas',
        email: 'divine23642@gmail.com',
        role: 'Student',
        class: 'SS 3',
        status: 'Active',
        feesPaid: '₦5,000',
        balance: '₦0',
        avatarColor: 'bg-blue-100 text-blue-600'
    },
    {
        id: 2,
        name: 'Oyovwikigho Bazunu',
        email: 'kigh@gmail.com',
        role: 'Student',
        class: 'SS 2',
        status: 'Active',
        feesPaid: '₦3,500',
        balance: '₦1,500',
        avatarColor: 'bg-green-100 text-green-600'
    },
    {
        id: 3,
        name: 'Umukoro David',
        email: 'umukorodavid@gmail.com',
        role: 'Student',
        class: 'JSS 1',
        status: 'Active',
        feesPaid: '₦5,000',
        balance: '₦0',
        avatarColor: 'bg-purple-100 text-purple-600'
    },
    {
        id: 4,
        name: 'Ese Obgan',
        email: 'ogbawilliam@gmail.com',
        role: 'Student',
        class: 'SS 1',
        status: 'Pending',
        feesPaid: '₦2,000',
        balance: '₦3,000',
        avatarColor: 'bg-yellow-100 text-yellow-600'
    },
    {
        id: 5,
        name: 'Nzete Prince Ifeakachukwu',
        email: 'princeNete12@gmail.com',
        role: 'Student',
        class: 'JSS 3',
        status: 'Active',
        feesPaid: '₦4,500',
        balance: '₦500',
        avatarColor: 'bg-red-100 text-red-600'
    },
];

export default function AdminUsers() {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="sm:flex sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all students including their name, class, status, and fee payment details.
                    </p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto"
                    >
                        <UserPlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                        Add User
                    </button>
                </div>
            </div>

            {/* Filters */}
            <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow border border-gray-100">
                <div className="relative flex-1 max-w-md">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <input
                        type="text"
                        name="search"
                        id="search"
                        className="block w-full rounded-md border-gray-300 pl-10 focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2 border"
                        placeholder="Search users..."
                    />
                </div>
                <button className="ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    <FunnelIcon className="-ml-1 mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                    Filter
                </button>
            </div>

            {/* Table */}
            <div className="flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                            Name
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Role
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Class
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Status
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Fees Paid
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Balance
                                        </th>
                                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {users.map((user) => (
                                        <tr key={user.id}>
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                                                <div className="flex items-center">
                                                    <div className={`h-10 w-10 flex-shrink-0 rounded-full flex items-center justify-center ${user.avatarColor} font-bold`}>
                                                        {user.name.charAt(0)}
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="font-medium text-gray-900">{user.name}</div>
                                                        <div className="text-gray-500">{user.email}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                                                    {user.role}
                                                </span>
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                                                {user.class}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                                                    }`}>
                                                    {user.status}
                                                </span>
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900 font-medium">
                                                {user.feesPaid}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm">
                                                <span className={`${user.balance === '₦0' ? 'text-green-600' : 'text-red-600'} font-medium`}>
                                                    {user.balance}
                                                </span>
                                            </td>
                                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                <a href="#" className="text-blue-600 hover:text-blue-900">
                                                    Edit<span className="sr-only">, {user.name}</span>
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
