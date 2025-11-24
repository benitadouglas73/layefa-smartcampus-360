'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('student');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const res = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password, role }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || 'Registration failed');
            }

            // Registration successful - log them in automatically
            login(data.token, {
                id: data._id,
                name: data.name,
                email: data.email,
                role: data.role
            }, false);

            // Redirect based on role
            switch (data.role) {
                case 'admin':
                    router.push('/admin/dashboard');
                    break;
                case 'student':
                    router.push('/student/dashboard');
                    break;
                case 'teacher':
                    router.push('/teacher/dashboard');
                    break;
                case 'parent':
                    router.push('/parent/dashboard');
                    break;
                default:
                    router.push('/dashboard');
            }

        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[var(--background-dark)] flex flex-col justify-center pt-24 pb-12 sm:px-6 lg:px-8 font-sans">
            <Navbar />
            <div className="sm:mx-auto sm:w-full sm:max-w-md mt-10">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-white tracking-tight">
                    Create your account
                </h2>
                <p className="mt-2 text-center text-sm text-gray-400">
                    Already have an account?{' '}
                    <Link href="/login" className="font-medium text-[var(--neon-cyan)] hover:text-[var(--neon-blue)] transition-colors">
                        Sign in
                    </Link>
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="glass-panel py-8 px-4 shadow sm:rounded-xl sm:px-10 border border-[var(--glass-border)]">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {error && (
                            <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-3 rounded relative" role="alert">
                                <span className="block sm:inline">{error}</span>
                            </div>
                        )}

                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                                Full Name
                            </label>
                            <div className="mt-1">
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="appearance-none block w-full px-3 py-2 border border-[var(--glass-border)] rounded-lg shadow-sm placeholder-gray-500 focus:outline-none focus:ring-[var(--neon-cyan)] focus:border-[var(--neon-cyan)] sm:text-sm bg-[rgba(255,255,255,0.05)] text-white"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                                Email address
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="appearance-none block w-full px-3 py-2 border border-[var(--glass-border)] rounded-lg shadow-sm placeholder-gray-500 focus:outline-none focus:ring-[var(--neon-cyan)] focus:border-[var(--neon-cyan)] sm:text-sm bg-[rgba(255,255,255,0.05)] text-white"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                                Password
                            </label>
                            <div className="mt-1">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="appearance-none block w-full px-3 py-2 border border-[var(--glass-border)] rounded-lg shadow-sm placeholder-gray-500 focus:outline-none focus:ring-[var(--neon-cyan)] focus:border-[var(--neon-cyan)] sm:text-sm bg-[rgba(255,255,255,0.05)] text-white"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="role" className="block text-sm font-medium text-gray-300">
                                I am a...
                            </label>
                            <div className="mt-1">
                                <select
                                    id="role"
                                    name="role"
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                    className="block w-full px-3 py-2 border border-[var(--glass-border)] rounded-lg shadow-sm focus:outline-none focus:ring-[var(--neon-cyan)] focus:border-[var(--neon-cyan)] sm:text-sm bg-[rgba(30,41,59,0.9)] text-white"
                                >
                                    <option value="student">Student</option>
                                    <option value="teacher">Teacher</option>
                                    <option value="parent">Parent</option>
                                    <option value="admin">Administrator</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-black bg-[var(--neon-cyan)] hover:bg-[var(--neon-blue)] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--neon-cyan)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? 'Creating Account...' : 'Sign Up'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
