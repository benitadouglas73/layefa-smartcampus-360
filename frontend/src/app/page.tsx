'use client';

import Navbar from '../components/Navbar';
import Link from 'next/link';
import { ArrowRightIcon, AcademicCapIcon, ComputerDesktopIcon, UserGroupIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background-dark)] font-sans text-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[var(--neon-blue)] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[var(--neon-purple)] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="inline-block mb-4 px-4 py-1 rounded-full border border-[var(--neon-cyan)] bg-[rgba(6,182,212,0.1)] backdrop-blur-sm">
            <span className="text-[var(--neon-cyan)] text-sm font-bold uppercase tracking-widest">Welcome to the Future</span>
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter leading-tight mb-8">
            TRANSFORMING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--neon-cyan)] via-[var(--neon-blue)] to-[var(--neon-purple)] drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">
              EDUCATION
            </span>
          </h1>

          <p className="mt-4 text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
            Layefa SmartCampus 360 is a digital ecosystem empowering the next generation of leaders through accessible technology and comprehensive school management.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/register" className="group relative px-8 py-4 bg-[var(--neon-cyan)] text-black font-bold text-lg uppercase tracking-wide rounded-lg overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]">
              <span className="relative z-10 flex items-center">
                Get Started <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </Link>
            <Link href="/about" className="px-8 py-4 bg-transparent border border-[var(--glass-border)] text-white font-bold text-lg uppercase tracking-wide rounded-lg hover:bg-[rgba(255,255,255,0.05)] hover:border-[var(--neon-purple)] hover:text-[var(--neon-purple)] transition-all hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]">
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-5xl font-bold text-white uppercase tracking-wide mb-4">
              What We <span className="text-[var(--neon-cyan)]">Do</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-purple)] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Academic Excellence',
                desc: 'Robust platform for managing academic records and tracking student progress.',
                icon: AcademicCapIcon,
                color: 'var(--neon-cyan)'
              },
              {
                title: 'Digital Management',
                desc: 'Streamline operations with tools for attendance, fees, and communication.',
                icon: ComputerDesktopIcon,
                color: 'var(--neon-purple)'
              },
              {
                title: 'Community Portal',
                desc: 'Unified ecosystem connecting students, teachers, and parents.',
                icon: UserGroupIcon,
                color: 'var(--neon-pink)'
              }
            ].map((item, index) => (
              <div key={index} className="glass-panel p-8 rounded-2xl hover:border-[var(--neon-cyan)] transition-all duration-300 group hover:-translate-y-2">
                <div className="h-14 w-14 rounded-xl bg-[rgba(255,255,255,0.05)] flex items-center justify-center mb-6 group-hover:bg-[rgba(6,182,212,0.1)] transition-colors">
                  <item.icon className="h-8 w-8 text-gray-300 group-hover:text-[var(--neon-cyan)] transition-colors" style={{ color: `group-hover:${item.color}` }} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[var(--neon-cyan)] transition-colors">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Centers of Excellence Section */}
      <div className="py-24 relative bg-[rgba(0,0,0,0.2)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-5xl font-bold text-white uppercase tracking-wide mb-4">
              Centers of <span className="text-[var(--neon-purple)]">Excellence</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[var(--neon-purple)] to-[var(--neon-pink)] mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Pioneering the future of education with specialized, high-tech learning hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'AI & Robotics',
                image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
                desc: 'Machine learning & automation.'
              },
              {
                name: 'Sustainable Innovation',
                image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800',
                desc: 'Green solutions for tomorrow.'
              },
              {
                name: 'Digital Arts & VR',
                image: 'https://images.unsplash.com/photo-1626379953822-baec19c3accd?auto=format&fit=crop&q=80&w=800',
                desc: 'Immersive creative experiences.'
              },
              {
                name: 'Future Business',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
                desc: 'Fintech & global economics.'
              }
            ].map((school, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl h-80 border border-[var(--glass-border)] hover:border-[var(--neon-purple)] transition-all duration-500">
                <img
                  src={school.image}
                  alt={school.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[var(--neon-purple)] transition-colors">{school.name}</h3>
                  <p className="text-gray-400 text-sm mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    {school.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
