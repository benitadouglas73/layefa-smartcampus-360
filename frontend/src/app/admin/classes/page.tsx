'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '../../../context/AuthContext';
import {
    AcademicCapIcon,
    UserGroupIcon,
    PlusIcon,
    PencilSquareIcon,
    TrashIcon
} from '@heroicons/react/24/outline';

export default function AdminClasses() {
    const [classes, setClasses] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [newClass, setNewClass] = useState({ name: '', capacity: 30 });
    const { user, logout } = useAuth();

    useEffect(() => {
        fetchClasses();
    }, []);

    const fetchClasses = async () => {
        try {
            const token = localStorage.getItem('token');
            const res = await fetch('http://localhost:5000/api/classes', {
                headers: { Authorization: `Bearer ${token}` }
            });

            if (res.status === 401) {
                logout();
                return;
            }

            const data = await res.json();

            if (res.ok && Array.isArray(data)) {
                setClasses(data);
            } else {
                console.error('Failed to fetch classes:', data);
                setClasses([]);
            }
        } catch (error) {
            console.error('Error fetching classes:', error);
            setClasses([]);
        } finally {
            setLoading(false);
        }
    };

    const handleCreateClass = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            const res = await fetch('http://localhost:5000/api/classes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(newClass)
            });

            if (res.ok) {
                setShowModal(false);
                setNewClass({ name: '', capacity: 30 });
                fetchClasses();
            }
        } catch (error) {
            console.error('Error creating class:', error);
        }
    };

    const handleDeleteClass = async (id: number) => {
        if (!confirm('Are you sure you want to delete this class?')) return;

        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`http://localhost:5000/api/classes/${id}`, {
                method: 'DELETE',
                headers: { Authorization: `Bearer ${token}` }
            });

            if (res.ok) {
                fetchClasses();
            }
        } catch (error) {
            console.error('Error deleting class:', error);
        }
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="sm:flex sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-white">Class Management</h1>
                    <p className="mt-2 text-sm text-gray-400">
                        Manage all classes, view student counts, and assign class teachers.
                    </p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <button
                        onClick={() => setShowModal(true)}
                        type="button"
                        className="inline-flex items-center justify-center rounded-xl border border-transparent bg-[var(--neon-cyan)] px-4 py-2 text-sm font-bold text-black shadow-sm hover:bg-[var(--neon-blue)] hover:text-white focus:outline-none focus:ring-2 focus:ring-[var(--neon-cyan)] focus:ring-offset-2 sm:w-auto transition-all"
                    >
                        <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                        Add Class
                    </button>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <div className="relative overflow-hidden rounded-xl bg-[rgba(255,255,255,0.05)] border border-[var(--glass-border)] px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6">
                    <dt>
                        <div className="absolute rounded-md p-3 bg-[rgba(6,182,212,0.1)] text-[var(--neon-cyan)]">
                            <AcademicCapIcon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <p className="ml-16 truncate text-sm font-medium text-gray-400">Total Classes</p>
                    </dt>
                    <dd className="ml-16 flex items-baseline pb-1 sm:pb-7">
                        <p className="text-2xl font-semibold text-white">{classes.length}</p>
                    </dd>
                </div>
            </div>

            {/* Classes Grid */}
            {loading ? (
                <div className="text-white">Loading...</div>
            ) : (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {classes.map((cls) => (
                        <div key={cls.id} className="glass-panel overflow-hidden shadow rounded-xl divide-y divide-[var(--glass-border)] border border-[var(--glass-border)] hover:border-[var(--neon-cyan)] transition-all duration-300">
                            <div className="px-4 py-5 sm:px-6 flex justify-between items-center bg-[rgba(255,255,255,0.02)]">
                                <h3 className="text-lg leading-6 font-bold text-white">{cls.name}</h3>
                                <span className="inline-flex rounded-full px-2 text-xs font-semibold leading-5 bg-green-100 text-green-800">
                                    Active
                                </span>
                            </div>
                            <div className="px-4 py-5 sm:p-6">
                                <dl className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
                                    <div className="sm:col-span-1">
                                        <dt className="text-sm font-medium text-gray-400">Students</dt>
                                        <dd className="mt-1 text-sm text-white">{cls.student_count || 0}</dd>
                                    </div>
                                    <div className="sm:col-span-1">
                                        <dt className="text-sm font-medium text-gray-400">Capacity</dt>
                                        <dd className="mt-1 text-sm text-white">{cls.capacity}</dd>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <dt className="text-sm font-medium text-gray-400">Class Teacher</dt>
                                        <dd className="mt-1 text-sm text-white">{cls.teacher_name || 'Unassigned'}</dd>
                                    </div>
                                </dl>
                            </div>
                            <div className="px-4 py-4 sm:px-6 bg-[rgba(255,255,255,0.02)] flex justify-end space-x-3">
                                <button className="text-[var(--neon-cyan)] hover:text-white text-sm font-medium flex items-center transition-colors">
                                    <PencilSquareIcon className="h-4 w-4 mr-1" /> Edit
                                </button>
                                <button
                                    onClick={() => handleDeleteClass(cls.id)}
                                    className="text-red-500 hover:text-red-400 text-sm font-medium flex items-center transition-colors"
                                >
                                    <TrashIcon className="h-4 w-4 mr-1" /> Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Add Class Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
                    <div className="bg-[var(--background-dark)] border border-[var(--glass-border)] rounded-xl p-6 w-full max-w-md shadow-2xl">
                        <h2 className="text-xl font-bold text-white mb-4">Add New Class</h2>
                        <form onSubmit={handleCreateClass}>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300">Class Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={newClass.name}
                                        onChange={(e) => setNewClass({ ...newClass, name: e.target.value })}
                                        className="mt-1 block w-full rounded-lg border border-[var(--glass-border)] bg-[rgba(255,255,255,0.05)] text-white px-3 py-2 focus:border-[var(--neon-cyan)] focus:ring-[var(--neon-cyan)]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300">Capacity</label>
                                    <input
                                        type="number"
                                        required
                                        value={newClass.capacity}
                                        onChange={(e) => setNewClass({ ...newClass, capacity: parseInt(e.target.value) })}
                                        className="mt-1 block w-full rounded-lg border border-[var(--glass-border)] bg-[rgba(255,255,255,0.05)] text-white px-3 py-2 focus:border-[var(--neon-cyan)] focus:ring-[var(--neon-cyan)]"
                                    />
                                </div>
                            </div>
                            <div className="mt-6 flex justify-end space-x-3">
                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-[rgba(255,255,255,0.1)] transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 rounded-lg bg-[var(--neon-cyan)] text-black font-bold hover:bg-[var(--neon-blue)] hover:text-white transition-colors"
                                >
                                    Create Class
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
