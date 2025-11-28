'use client';

import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '../../../context/AuthContext';
import {
    AcademicCapIcon,
    ClipboardDocumentCheckIcon,
    PlusIcon
} from '@heroicons/react/24/outline';
import { API_URL } from '@/config';

export default function TeacherGrades() {
    const [classes, setClasses] = useState<any[]>([]);
    const [selectedClass, setSelectedClass] = useState('');
    const [students, setStudents] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const { user, logout } = useAuth();

    // Form State
    const [selectedStudent, setSelectedStudent] = useState('');
    const [subject, setSubject] = useState('');
    const [assessmentType, setAssessmentType] = useState('Test');
    const [score, setScore] = useState('');
    const [maxScore, setMaxScore] = useState('100');
    const [term, setTerm] = useState('Term 1');
    const [remarks, setRemarks] = useState('');

    const fetchClasses = useCallback(async () => {
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`${API_URL}/api/classes`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            if (res.status === 401) { logout(); return; }
            const data = await res.json();
            if (res.ok) setClasses(data);
        } catch (error) {
            console.error('Error fetching classes:', error);
        }
    }, [logout]);

    const fetchStudents = useCallback(async () => {
        setLoading(true);
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`${API_URL}/api/students`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            const allStudents = await res.json();
            const classStudents = allStudents.filter((s: any) => s.class_id == selectedClass);
            setStudents(classStudents);
        } catch (error) {
            console.error('Error fetching students:', error);
        } finally {
            setLoading(false);
        }
    }, [selectedClass]);

    useEffect(() => {
        fetchClasses();
    }, [fetchClasses]);

    useEffect(() => {
        if (selectedClass) {
            fetchStudents();
        }
    }, [selectedClass, fetchStudents]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedStudent || !subject || !score) {
            alert('Please fill in all required fields');
            return;
        }

        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`${API_URL}/api/grades`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    student_id: selectedStudent,
                    class_id: selectedClass,
                    subject,
                    assessment_type: assessmentType,
                    score: parseFloat(score),
                    max_score: parseFloat(maxScore),
                    term,
                    remarks
                })
            });

            if (res.ok) {
                alert('Grade recorded successfully!');
                setScore('');
                setRemarks('');
            } else {
                alert('Failed to record grade.');
            }
        } catch (error) {
            console.error('Error recording grade:', error);
        }
    };

    return (
        <div className="space-y-6">
            <div className="sm:flex sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-white">Grade Management</h1>
                    <p className="mt-2 text-sm text-gray-400">Record student grades for tests, exams, and assignments.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column: Selection & Form */}
                <div className="lg:col-span-1 space-y-6">
                    {/* Class Selection */}
                    <div className="bg-[rgba(255,255,255,0.05)] p-4 rounded-xl border border-[var(--glass-border)]">
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

                    {/* Grade Entry Form */}
                    {selectedClass && (
                        <div className="glass-panel p-6 rounded-xl border border-[var(--glass-border)]">
                            <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                                <ClipboardDocumentCheckIcon className="h-5 w-5 mr-2 text-[var(--neon-cyan)]" />
                                Enter Grades
                            </h3>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300">Student</label>
                                    <select
                                        value={selectedStudent}
                                        onChange={(e) => setSelectedStudent(e.target.value)}
                                        className="mt-1 block w-full rounded-lg border border-[var(--glass-border)] bg-[rgba(30,41,59,0.9)] text-white px-3 py-2"
                                        required
                                    >
                                        <option value="">Select Student</option>
                                        {students.map((s) => (
                                            <option key={s.student_id} value={s.student_id}>{s.name}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-300">Subject</label>
                                    <input
                                        type="text"
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                        className="mt-1 block w-full rounded-lg border border-[var(--glass-border)] bg-[rgba(255,255,255,0.05)] text-white px-3 py-2"
                                        placeholder="e.g. Mathematics"
                                        required
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300">Type</label>
                                        <select
                                            value={assessmentType}
                                            onChange={(e) => setAssessmentType(e.target.value)}
                                            className="mt-1 block w-full rounded-lg border border-[var(--glass-border)] bg-[rgba(30,41,59,0.9)] text-white px-3 py-2"
                                        >
                                            <option>Test</option>
                                            <option>Exam</option>
                                            <option>Assignment</option>
                                            <option>Project</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300">Term</label>
                                        <select
                                            value={term}
                                            onChange={(e) => setTerm(e.target.value)}
                                            className="mt-1 block w-full rounded-lg border border-[var(--glass-border)] bg-[rgba(30,41,59,0.9)] text-white px-3 py-2"
                                        >
                                            <option>Term 1</option>
                                            <option>Term 2</option>
                                            <option>Term 3</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300">Score</label>
                                        <input
                                            type="number"
                                            value={score}
                                            onChange={(e) => setScore(e.target.value)}
                                            className="mt-1 block w-full rounded-lg border border-[var(--glass-border)] bg-[rgba(255,255,255,0.05)] text-white px-3 py-2"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300">Max Score</label>
                                        <input
                                            type="number"
                                            value={maxScore}
                                            onChange={(e) => setMaxScore(e.target.value)}
                                            className="mt-1 block w-full rounded-lg border border-[var(--glass-border)] bg-[rgba(255,255,255,0.05)] text-white px-3 py-2"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-300">Remarks</label>
                                    <textarea
                                        value={remarks}
                                        onChange={(e) => setRemarks(e.target.value)}
                                        className="mt-1 block w-full rounded-lg border border-[var(--glass-border)] bg-[rgba(255,255,255,0.05)] text-white px-3 py-2"
                                        rows={3}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-black bg-[var(--neon-cyan)] hover:bg-[var(--neon-blue)] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--neon-cyan)] transition-all"
                                >
                                    Save Grade
                                </button>
                            </form>
                        </div>
                    )}
                </div>

                {/* Right Column: Recent Grades (Placeholder for now) */}
                <div className="lg:col-span-2">
                    <div className="glass-panel p-6 rounded-xl border border-[var(--glass-border)] h-full flex flex-col justify-center items-center text-center">
                        <AcademicCapIcon className="h-16 w-16 text-gray-600 mb-4" />
                        <h3 className="text-xl font-bold text-white">Grade Book</h3>
                        <p className="text-gray-400 max-w-md mt-2">
                            Select a class and student to start recording grades.
                            (Future Feature: View full class grade sheet here)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
