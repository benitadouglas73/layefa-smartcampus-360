'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '../../../context/AuthContext';
import {
    UserGroupIcon,
    PlusIcon,
    MagnifyingGlassIcon,
    TrashIcon,
    PencilSquareIcon
} from '@heroicons/react/24/outline';
import { API_URL } from '@/config';

export default function AdminStudents() {
    const [students, setStudents] = useState<any[]>([]);
    const [classes, setClasses] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [newStudent, setNewStudent] = useState({
        name: '',
        email: '',
        password: '',
        class_id: '',
        admission_number: '',
        parent_phone: ''
    });

    const { user, logout } = useAuth();

    useEffect(() => {
        fetchStudents();
        fetchClasses();
    }, []);

    const fetchStudents = async () => {
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`${API_URL}/api/students`, {
                headers: { Authorization: `Bearer ${token}` }
            });

            if (res.status === 401) {
                logout();
                return;
            }

            const data = await res.json();
            if (res.ok && Array.isArray(data)) {
                setStudents(data);
            } else {
                setStudents([]);
            }
        } catch (error) {
            console.error('Error fetching students:', error);
            setStudents([]);
        } finally {
            setLoading(false);
        }
    };

    const fetchClasses = async () => {
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`${API_URL}/api/classes`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            const data = await res.json();
            if (res.ok && Array.isArray(data)) {
                setClasses(data);
            }
        } catch (error) {
            console.error('Error fetching classes:', error);
        }
    };

    const handleCreateStudent = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`${API_URL}/api/students`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(newStudent)
            });

            if (res.ok) {
                setShowModal(false);
                setNewStudent({
                    name: '',
                    email: '',
                    password: '',
                    class_id: '',
                    admission_number: '',
                    parent_phone: ''
                });
                fetchStudents();
            } else {
                const data = await res.json();
                alert(data.message || 'Failed to create student');
            }
        } catch (error) {
            console.error('Error creating student:', error);
        }
    };

    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.admission_number?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="sm:flex sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-white">Student Management</h1>
                    <p className="mt-2 text-sm text-gray-400">
                        Manage student enrollments, view profiles, and assign classes.
                    </p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <button
                        onClick={() => setShowModal(true)}
                        type="button"
                        className="inline-flex items-center justify-center rounded-xl border border-transparent bg-[var(--neon-cyan)] px-4 py-2 text-sm font-bold text-black shadow-sm hover:bg-[var(--neon-blue)] hover:text-white focus:outline-none focus:ring-2 focus:ring-[var(--neon-cyan)] focus:ring-offset-2 sm:w-auto transition-all"
                    >
                        <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                        Add Student
                    </button>
                </div>
            </div>

            {/* Search and Filters */}
            <div className="flex items-center space-x-4 bg-[rgba(255,255,255,0.05)] p-4 rounded-xl border border-[var(--glass-border)]">
                <div className="flex-1 relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <input
                        type="text"
                        className="block w-full rounded-lg border-0 bg-[rgba(0,0,0,0.2)] py-2 pl-10 text-white ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[var(--neon-cyan)] sm:text-sm sm:leading-6"
                        placeholder="Search students..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* Students Table */}
            <div className="glass-panel overflow-hidden shadow rounded-xl border border-[var(--glass-border)]">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-[var(--glass-border)]">
                        <thead className="bg-[rgba(255,255,255,0.05)]">
                            <tr>
                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Name</th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">Class</th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">Admission No</th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">Parent Phone</th>
                                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                    <span className="sr-only">Actions</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[var(--glass-border)] bg-[rgba(255,255,255,0.02)]">
                            {loading ? (
                                <tr>
                                    <td colSpan={5} className="text-center py-4 text-gray-400">Loading students...</td>
                                </tr>
                            ) : filteredStudents.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="text-center py-4 text-gray-400">No students found.</td>
                                </tr>
                            ) : (
                                filteredStudents.map((student) => (
                                    <tr key={student.id} className="hover:bg-[rgba(255,255,255,0.05)] transition-colors">
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                                            <div className="flex items-center">
                                                <div className="h-10 w-10 flex-shrink-0 rounded-full bg-[rgba(6,182,212,0.1)] flex items-center justify-center text-[var(--neon-cyan)]">
                                                    <UserGroupIcon className="h-5 w-5" />
                                                </div>
                                                <div className="ml-4">
                                                    <div className="font-medium text-white">{student.name}</div>
                                                    <div className="text-gray-400">{student.email}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                                            <span className="inline-flex items-center rounded-md bg-[rgba(6,182,212,0.1)] px-2 py-1 text-xs font-medium text-[var(--neon-cyan)] ring-1 ring-inset ring-[var(--neon-cyan)]/20">
                                                {student.class_name || 'Unassigned'}
                                            </span>
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{student.admission_number || '-'}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{student.parent_phone || '-'}</td>
                                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                            <button className="text-[var(--neon-cyan)] hover:text-white mr-4 transition-colors">Edit</button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Add Student Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
                    <div className="bg-[var(--background-dark)] border border-[var(--glass-border)] rounded-xl p-6 w-full max-w-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
                        <h2 className="text-xl font-bold text-white mb-6">Register New Student</h2>
                        <form onSubmit={handleCreateStudent} className="space-y-6">
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300">Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={newStudent.name}
                                        onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
                                        className="mt-1 block w-full rounded-lg border border-[var(--glass-border)] bg-[rgba(255,255,255,0.05)] text-white px-3 py-2 focus:border-[var(--neon-cyan)] focus:ring-[var(--neon-cyan)]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300">Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        value={newStudent.email}
                                        onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
                                        className="mt-1 block w-full rounded-lg border border-[var(--glass-border)] bg-[rgba(255,255,255,0.05)] text-white px-3 py-2 focus:border-[var(--neon-cyan)] focus:ring-[var(--neon-cyan)]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300">Password</label>
                                    <input
                                        type="password"
                                        required
                                        value={newStudent.password}
                                        onChange={(e) => setNewStudent({ ...newStudent, password: e.target.value })}
                                        className="mt-1 block w-full rounded-lg border border-[var(--glass-border)] bg-[rgba(255,255,255,0.05)] text-white px-3 py-2 focus:border-[var(--neon-cyan)] focus:ring-[var(--neon-cyan)]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300">Assign Class</label>
                                    <select
                                        required
                                        value={newStudent.class_id}
                                        onChange={(e) => setNewStudent({ ...newStudent, class_id: e.target.value })}
                                        className="mt-1 block w-full rounded-lg border border-[var(--glass-border)] bg-[rgba(30,41,59,0.9)] text-white px-3 py-2 focus:border-[var(--neon-cyan)] focus:ring-[var(--neon-cyan)]"
                                    >
                                        <option value="">Select a Class</option>
                                        {classes.map((cls) => (
                                            <option key={cls.id} value={cls.id}>{cls.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300">Admission Number</label>
                                    <input
                                        type="text"
                                        value={newStudent.admission_number}
                                        onChange={(e) => setNewStudent({ ...newStudent, admission_number: e.target.value })}
                                        className="mt-1 block w-full rounded-lg border border-[var(--glass-border)] bg-[rgba(255,255,255,0.05)] text-white px-3 py-2 focus:border-[var(--neon-cyan)] focus:ring-[var(--neon-cyan)]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300">Parent Phone</label>
                                    <input
                                        type="tel"
                                        value={newStudent.parent_phone}
                                        onChange={(e) => setNewStudent({ ...newStudent, parent_phone: e.target.value })}
                                        className="mt-1 block w-full rounded-lg border border-[var(--glass-border)] bg-[rgba(255,255,255,0.05)] text-white px-3 py-2 focus:border-[var(--neon-cyan)] focus:ring-[var(--neon-cyan)]"
                                    />
                                </div>
                            </div>
                            <div className="mt-6 flex justify-end space-x-3 pt-4 border-t border-[var(--glass-border)]">
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
                                    Register Student
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
