'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '../../../context/AuthContext';
import {
    CalendarDaysIcon,
    CheckCircleIcon,
    XCircleIcon,
    ClockIcon,
    ExclamationCircleIcon
} from '@heroicons/react/24/outline';

export default function TeacherAttendance() {
    const [classes, setClasses] = useState<any[]>([]);
    const [selectedClass, setSelectedClass] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
    const [students, setStudents] = useState<any[]>([]);
    const [attendance, setAttendance] = useState<any>({}); // { studentId: { status: 'present', remarks: '' } }
    const [loading, setLoading] = useState(false);
    const { user, logout } = useAuth();

    useEffect(() => {
        fetchClasses();
    }, []);

    useEffect(() => {
        if (selectedClass && selectedDate) {
            fetchStudentsAndAttendance();
        }
    }, [selectedClass, selectedDate]);

    const fetchClasses = async () => {
        try {
            const token = localStorage.getItem('token');
            const res = await fetch('http://localhost:5000/api/classes', {
                headers: { Authorization: `Bearer ${token}` }
            });
            if (res.status === 401) { logout(); return; }
            const data = await res.json();
            if (res.ok) setClasses(data);
        } catch (error) {
            console.error('Error fetching classes:', error);
        }
    };

    const fetchStudentsAndAttendance = async () => {
        setLoading(true);
        try {
            const token = localStorage.getItem('token');

            // 1. Fetch Students for the class
            // Note: We need an endpoint to get students by class. 
            // For now, we'll filter the all-students list or assume the backend supports query params.
            // Let's assume we can filter /api/students?class_id=... or just fetch all and filter client side for now if API doesn't support it.
            // Actually, let's use the existing /api/students and filter client-side for simplicity, 
            // OR better, let's assume the attendance endpoint returns students if we ask for it, 
            // but the standard way is to get students first.

            // Let's fetch all students and filter by class_id (since our getStudents API returns all)
            const studentsRes = await fetch('http://localhost:5000/api/students', {
                headers: { Authorization: `Bearer ${token}` }
            });
            const allStudents = await studentsRes.json();
            const classStudents = allStudents.filter((s: any) => s.class_id == selectedClass);
            setStudents(classStudents);

            // 2. Fetch existing attendance
            const attRes = await fetch(`http://localhost:5000/api/attendance/class/${selectedClass}?date=${selectedDate}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            const attData = await attRes.json();

            // Map existing attendance to state
            const initialAttendance: any = {};
            // Initialize all students as 'present' by default if no record
            classStudents.forEach((s: any) => {
                initialAttendance[s.student_id] = { status: 'present', remarks: '' };
            });

            // Override with existing records
            if (Array.isArray(attData)) {
                attData.forEach((record: any) => {
                    initialAttendance[record.student_id] = {
                        status: record.status,
                        remarks: record.remarks || ''
                    };
                });
            }
            setAttendance(initialAttendance);

        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleStatusChange = (studentId: number, status: string) => {
        setAttendance((prev: any) => ({
            ...prev,
            [studentId]: { ...prev[studentId], status }
        }));
    };

    const handleRemarksChange = (studentId: number, remarks: string) => {
        setAttendance((prev: any) => ({
            ...prev,
            [studentId]: { ...prev[studentId], remarks }
        }));
    };

    const handleSubmit = async () => {
        try {
            const token = localStorage.getItem('token');
            const attendanceData = Object.keys(attendance).map(studentId => ({
                student_id: parseInt(studentId),
                status: attendance[studentId].status,
                remarks: attendance[studentId].remarks
            }));

            const res = await fetch('http://localhost:5000/api/attendance', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    class_id: selectedClass,
                    date: selectedDate,
                    attendanceData
                })
            });

            if (res.ok) {
                alert('Attendance marked successfully!');
            } else {
                alert('Failed to mark attendance.');
            }
        } catch (error) {
            console.error('Error submitting attendance:', error);
        }
    };

    return (
        <div className="space-y-6">
            <div className="sm:flex sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-white">Attendance Management</h1>
                    <p className="mt-2 text-sm text-gray-400">Mark daily attendance for your classes.</p>
                </div>
            </div>

            {/* Controls */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 bg-[rgba(255,255,255,0.05)] p-4 rounded-xl border border-[var(--glass-border)]">
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Select Class</label>
                    <select
                        value={selectedClass}
                        onChange={(e) => setSelectedClass(e.target.value)}
                        className="block w-full rounded-lg border border-[var(--glass-border)] bg-[rgba(30,41,59,0.9)] text-white px-3 py-2 focus:border-[var(--neon-cyan)] focus:ring-[var(--neon-cyan)]"
                    >
                        <option value="">Choose a class...</option>
                        {classes.map((c) => (
                            <option key={c.id} value={c.id}>{c.name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Date</label>
                    <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="block w-full rounded-lg border border-[var(--glass-border)] bg-[rgba(30,41,59,0.9)] text-white px-3 py-2 focus:border-[var(--neon-cyan)] focus:ring-[var(--neon-cyan)]"
                    />
                </div>
            </div>

            {/* Attendance List */}
            {selectedClass && (
                <div className="glass-panel overflow-hidden shadow rounded-xl border border-[var(--glass-border)]">
                    {loading ? (
                        <div className="p-8 text-center text-gray-400">Loading students...</div>
                    ) : students.length === 0 ? (
                        <div className="p-8 text-center text-gray-400">No students found in this class.</div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-[var(--glass-border)]">
                                <thead className="bg-[rgba(255,255,255,0.05)]">
                                    <tr>
                                        <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white">Student Name</th>
                                        <th className="px-3 py-3.5 text-center text-sm font-semibold text-white">Status</th>
                                        <th className="px-3 py-3.5 text-left text-sm font-semibold text-white">Remarks</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[var(--glass-border)] bg-[rgba(255,255,255,0.02)]">
                                    {students.map((student) => (
                                        <tr key={student.student_id} className="hover:bg-[rgba(255,255,255,0.05)]">
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white">
                                                {student.name}
                                                <div className="text-xs text-gray-500">{student.admission_number}</div>
                                            </td>
                                            <td className="px-3 py-4 text-sm text-gray-300">
                                                <div className="flex justify-center space-x-2">
                                                    {[
                                                        { id: 'present', icon: CheckCircleIcon, color: 'text-green-500', bg: 'bg-green-500/10' },
                                                        { id: 'absent', icon: XCircleIcon, color: 'text-red-500', bg: 'bg-red-500/10' },
                                                        { id: 'late', icon: ClockIcon, color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
                                                        { id: 'excused', icon: ExclamationCircleIcon, color: 'text-blue-500', bg: 'bg-blue-500/10' }
                                                    ].map((status) => (
                                                        <button
                                                            key={status.id}
                                                            onClick={() => handleStatusChange(student.student_id, status.id)}
                                                            className={`p-2 rounded-lg transition-all ${attendance[student.student_id]?.status === status.id
                                                                    ? `${status.bg} ${status.color} ring-1 ring-inset ring-${status.color.split('-')[1]}-500`
                                                                    : 'text-gray-600 hover:bg-gray-800'
                                                                }`}
                                                            title={status.id.charAt(0).toUpperCase() + status.id.slice(1)}
                                                        >
                                                            <status.icon className="h-6 w-6" />
                                                        </button>
                                                    ))}
                                                </div>
                                            </td>
                                            <td className="px-3 py-4 text-sm text-gray-300">
                                                <input
                                                    type="text"
                                                    placeholder="Optional remarks..."
                                                    value={attendance[student.student_id]?.remarks || ''}
                                                    onChange={(e) => handleRemarksChange(student.student_id, e.target.value)}
                                                    className="block w-full rounded-md border-0 bg-[rgba(0,0,0,0.2)] py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-[var(--neon-cyan)] sm:text-sm sm:leading-6"
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            )}

            {selectedClass && students.length > 0 && (
                <div className="flex justify-end">
                    <button
                        onClick={handleSubmit}
                        className="inline-flex items-center justify-center rounded-xl border border-transparent bg-[var(--neon-cyan)] px-6 py-3 text-base font-bold text-black shadow-sm hover:bg-[var(--neon-blue)] hover:text-white focus:outline-none focus:ring-2 focus:ring-[var(--neon-cyan)] focus:ring-offset-2 transition-all"
                    >
                        Save Attendance
                    </button>
                </div>
            )}
        </div>
    );
}
