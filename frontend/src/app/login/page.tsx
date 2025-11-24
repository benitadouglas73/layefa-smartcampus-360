'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';
import { API_URL } from '@/config';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [logoutOthers, setLogoutOthers] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const res = await fetch(`${API_URL}/api/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password, logoutOthers }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || 'Login failed');
            }

            // Login successful
            login(data.token, {
                id: data._id,
                name: data.name,
                email: data.email,
                role: data.role
            }, rememberMe);

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
                    Sign in to your account
                </h2>
                <p className="mt-2 text-center text-sm text-gray-400">
                    Or{' '}
                    <Link href="/register" className="font-medium text-[var(--neon-cyan)] hover:text-[var(--neon-blue)] transition-colors">
                        create a new account
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
                                    autoComplete="current-password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="appearance-none block w-full px-3 py-2 border border-[var(--glass-border)] rounded-lg shadow-sm placeholder-gray-500 focus:outline-none focus:ring-[var(--neon-cyan)] focus:border-[var(--neon-cyan)] sm:text-sm bg-[rgba(255,255,255,0.05)] text-white"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    className="h-4 w-4 text-[var(--neon-cyan)] focus:ring-[var(--neon-cyan)] border-gray-600 rounded bg-[rgba(255,255,255,0.05)]"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium text-[var(--neon-cyan)] hover:text-[var(--neon-blue)]">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center mt-2">
                            <input
                                id="logout-others"
                                name="logout-others"
                                type="checkbox"
                                checked={logoutOthers}
                                onChange={(e) => setLogoutOthers(e.target.checked)}
                                className="h-4 w-4 text-[var(--neon-cyan)] focus:ring-[var(--neon-cyan)] border-gray-600 rounded bg-[rgba(255,255,255,0.05)]"
                            />
                            <label htmlFor="logout-others" className="ml-2 block text-sm text-gray-300">
                                Log out from all other devices
                            </label>
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-black bg-[var(--neon-cyan)] hover:bg-[var(--neon-blue)] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--neon-cyan)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? 'Signing in...' : 'Sign in'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
