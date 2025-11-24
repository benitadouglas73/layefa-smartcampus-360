'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '../../../context/AuthContext';
import {
    CheckCircleIcon,
    XCircleIcon,
    ClockIcon,
    ExclamationCircleIcon
} from '@heroicons/react/24/outline';

export default function StudentAttendance() {
    const [attendance, setAttendance] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const { user, logout } = useAuth();

    useEffect(() => {
        if (user) {
            fetchAttendance();
        }
    }, [user]);

    const fetchAttendance = async () => {
        try {
            const token = localStorage.getItem('token');
            // We need the student ID. The user object has the user ID, but the attendance is linked to student_profile ID.
            // We need an endpoint to get the current student's profile or assume the backend handles "me" or we fetch the profile first.
            // For now, let's assume we can fetch the student profile using the user ID or a specific endpoint.
            // Actually, let's fetch the student profile first.

            // 1. Get Student Profile (we need a way to get this. Let's assume /api/auth/me returns it or we have a /api/students/me)
            // Since we don't have a dedicated /me endpoint for profile, let's search for the student by email (which is unique) from the students list
            // This is a bit hacky but works without changing backend too much right now.
            const studentsRes = await fetch('http://localhost:5000/api/students', {
                headers: { Authorization: `Bearer ${token}` }
            });
            if (studentsRes.status === 401) { logout(); return; }
            const allStudents = await studentsRes.json();
            const myProfile = allStudents.find((s: any) => s.email === user?.email);

            if (myProfile) {
                // 2. Fetch Attendance
                const attRes = await fetch(`http://localhost:5000/api/attendance/student/${myProfile.id}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                const attData = await attRes.json();
                if (attRes.ok) setAttendance(attData);
            }
        } catch (error) {
            console.error('Error fetching attendance:', error);
        } finally {
            setLoading(false);
        }
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'present': return <CheckCircleIcon className="h-6 w-6 text-green-500" />;
            case 'absent': return <XCircleIcon className="h-6 w-6 text-red-500" />;
            case 'late': return <ClockIcon className="h-6 w-6 text-yellow-500" />;
            case 'excused': return <ExclamationCircleIcon className="h-6 w-6 text-blue-500" />;
            default: return <CheckCircleIcon className="h-6 w-6 text-gray-500" />;
        }
    };

    // Calculate stats
    const totalDays = attendance.length;
    const presentDays = attendance.filter(a => a.status === 'present').length;
    const attendancePercentage = totalDays > 0 ? Math.round((presentDays / totalDays) * 100) : 100;

    return (
        <div className="space-y-6">
            <div className="sm:flex sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-white">My Attendance</h1>
                    <p className="mt-2 text-sm text-gray-400">View your attendance history and statistics.</p>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                <div className="glass-panel p-6 rounded-xl border border-[var(--glass-border)]">
                    <dt className="text-sm font-medium text-gray-400 truncate">Attendance Rate</dt>
                    <dd className="mt-1 text-3xl font-semibold text-white">{attendancePercentage}%</dd>
                </div>
                <div className="glass-panel p-6 rounded-xl border border-[var(--glass-border)]">
                    <dt className="text-sm font-medium text-gray-400 truncate">Total Days Present</dt>
                    <dd className="mt-1 text-3xl font-semibold text-green-400">{presentDays}</dd>
                </div>
                <div className="glass-panel p-6 rounded-xl border border-[var(--glass-border)]">
                    <dt className="text-sm font-medium text-gray-400 truncate">Total Days Absent</dt>
                    <dd className="mt-1 text-3xl font-semibold text-red-400">{attendance.filter(a => a.status === 'absent').length}</dd>
                </div>
            </div>

            {/* Attendance List */}
            <div className="glass-panel overflow-hidden shadow rounded-xl border border-[var(--glass-border)]">
                {loading ? (
                    <div className="p-8 text-center text-gray-400">Loading attendance...</div>
                ) : attendance.length === 0 ? (
                    <div className="p-8 text-center text-gray-400">No attendance records found.</div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-[var(--glass-border)]">
                            <thead className="bg-[rgba(255,255,255,0.05)]">
                                <tr>
                                    <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white">Date</th>
                                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-white">Status</th>
                                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-white">Remarks</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[var(--glass-border)] bg-[rgba(255,255,255,0.02)]">
                                {attendance.map((record) => (
                                    <tr key={record.id} className="hover:bg-[rgba(255,255,255,0.05)]">
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white">
                                            {new Date(record.date).toLocaleDateString()}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                                            <div className="flex items-center">
                                                {getStatusIcon(record.status)}
                                                <span className="ml-2 capitalize">{record.status}</span>
                                            </div>
                                        </td>
                                        <td className="px-3 py-4 text-sm text-gray-300">{record.remarks || '-'}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}
