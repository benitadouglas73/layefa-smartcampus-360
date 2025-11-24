'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '../../../context/AuthContext';
import {
    AcademicCapIcon
} from '@heroicons/react/24/outline';

export default function StudentGrades() {
    const [grades, setGrades] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const { user, logout } = useAuth();

    useEffect(() => {
        if (user) {
            fetchGrades();
        }
    }, [user]);

    const fetchGrades = async () => {
        try {
            const token = localStorage.getItem('token');
            // 1. Get Student Profile
            const studentsRes = await fetch('http://localhost:5000/api/students', {
                headers: { Authorization: `Bearer ${token}` }
            });
            if (studentsRes.status === 401) { logout(); return; }
            const allStudents = await studentsRes.json();
            const myProfile = allStudents.find((s: any) => s.email === user?.email);

            if (myProfile) {
                // 2. Fetch Grades
                const gradesRes = await fetch(`http://localhost:5000/api/grades/student/${myProfile.id}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                const gradesData = await gradesRes.json();
                if (gradesRes.ok) setGrades(gradesData);
            }
        } catch (error) {
            console.error('Error fetching grades:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-6">
            <div className="sm:flex sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-white">My Grades</h1>
                    <p className="mt-2 text-sm text-gray-400">View your academic performance and report cards.</p>
                </div>
            </div>

            {/* Grades List */}
            <div className="glass-panel overflow-hidden shadow rounded-xl border border-[var(--glass-border)]">
                {loading ? (
                    <div className="p-8 text-center text-gray-400">Loading grades...</div>
                ) : grades.length === 0 ? (
                    <div className="p-8 text-center text-gray-400">No grades recorded yet.</div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-[var(--glass-border)]">
                            <thead className="bg-[rgba(255,255,255,0.05)]">
                                <tr>
                                    <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white">Subject</th>
                                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-white">Assessment</th>
                                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-white">Term</th>
                                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-white">Score</th>
                                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-white">Max Score</th>
                                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-white">Percentage</th>
                                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-white">Remarks</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[var(--glass-border)] bg-[rgba(255,255,255,0.02)]">
                                {grades.map((grade) => {
                                    const percentage = (grade.score / grade.max_score) * 100;
                                    let gradeColor = 'text-white';
                                    if (percentage >= 80) gradeColor = 'text-green-400';
                                    else if (percentage >= 60) gradeColor = 'text-yellow-400';
                                    else gradeColor = 'text-red-400';

                                    return (
                                        <tr key={grade.id} className="hover:bg-[rgba(255,255,255,0.05)]">
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white">
                                                {grade.subject}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{grade.assessment_type}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{grade.term}</td>
                                            <td className={`whitespace-nowrap px-3 py-4 text-sm font-bold ${gradeColor}`}>{grade.score}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{grade.max_score}</td>
                                            <td className={`whitespace-nowrap px-3 py-4 text-sm font-bold ${gradeColor}`}>{percentage.toFixed(1)}%</td>
                                            <td className="px-3 py-4 text-sm text-gray-300">{grade.remarks || '-'}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}
