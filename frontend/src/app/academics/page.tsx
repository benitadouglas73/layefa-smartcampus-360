import Navbar from '../../components/Navbar';

export default function Academics() {
    return (
        <div className="min-h-screen bg-[var(--background-dark)] font-sans text-white selection:bg-[var(--neon-cyan)] selection:text-black">
            <Navbar />

            {/* Hero Section */}
            <div className="relative py-24 sm:py-32 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--neon-purple)] opacity-20 rounded-full blur-[100px]"></div>
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--neon-cyan)] opacity-20 rounded-full blur-[100px]"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                    <h1 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[var(--neon-cyan)] via-white to-[var(--neon-purple)] sm:text-6xl lg:text-7xl drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                        Academic Excellence
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300 leading-relaxed">
                        Preparing students for the future with a curriculum that fuses traditional rigor with <span className="text-[var(--neon-cyan)] font-semibold">next-gen technology</span>.
                    </p>
                </div>
            </div>

            {/* Centers of Excellence Details */}
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="space-y-24">
                    {[
                        {
                            name: 'School of AI & Robotics',
                            desc: 'Dive into the world of artificial intelligence, machine learning, and robotics. Students learn to build intelligent systems, program autonomous robots, and understand the ethical implications of AI.',
                            features: ['Python & C++ Programming', 'Neural Networks', 'Robotics Lab', 'AI Ethics'],
                            image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
                            color: 'var(--neon-cyan)'
                        },
                        {
                            name: 'School of Sustainable Innovation',
                            desc: 'Focusing on green technology and renewable energy. This program empowers students to design solutions for climate change, sustainable urban planning, and eco-friendly engineering.',
                            features: ['Renewable Energy Systems', 'Environmental Science', 'Green Architecture', 'Circular Economy'],
                            image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800',
                            color: 'var(--neon-green)'
                        },
                        {
                            name: 'School of Digital Arts & VR',
                            desc: 'Where creativity meets technology. Students explore 3D modeling, virtual reality development, digital animation, and user experience design.',
                            features: ['3D Modeling (Blender/Maya)', 'Unity/Unreal Engine', 'UX/UI Design', 'Digital Storytelling'],
                            image: 'https://images.unsplash.com/photo-1626379953822-baec19c3accd?auto=format&fit=crop&q=80&w=800',
                            color: 'var(--neon-purple)'
                        },
                        {
                            name: 'School of Future Business',
                            desc: 'Preparing the next generation of entrepreneurs and global leaders. The curriculum covers fintech, blockchain, startup management, and global economics.',
                            features: ['Entrepreneurship', 'Fintech & Blockchain', 'Global Economics', 'Leadership Strategy'],
                            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
                            color: 'var(--neon-pink)'
                        }
                    ].map((school, index) => (
                        <div key={index} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                            <div className="lg:w-1/2 w-full">
                                <div className="relative rounded-2xl overflow-hidden group shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-[var(--glass-border)]">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
                                    <img
                                        src={school.image}
                                        alt={school.name}
                                        className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-[var(--neon-blue)] opacity-0 group-hover:opacity-20 transition-opacity duration-500 mix-blend-overlay"></div>
                                </div>
                            </div>
                            <div className="lg:w-1/2 space-y-6">
                                <h2 className="text-3xl font-bold text-white" style={{ textShadow: `0 0 10px ${school.color}` }}>{school.name}</h2>
                                <p className="text-lg text-gray-300 leading-relaxed">
                                    {school.desc}
                                </p>
                                <div className="glass-panel p-6 rounded-xl border border-[var(--glass-border)] bg-[rgba(255,255,255,0.03)]">
                                    <h3 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: school.color }}>Key Focus Areas</h3>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {school.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center text-gray-300">
                                                <svg className="h-5 w-5 mr-2" style={{ color: school.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <button
                                    className="mt-4 inline-flex items-center px-8 py-3 border border-transparent text-base font-bold rounded-xl text-black transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900"
                                    style={{
                                        backgroundColor: school.color,
                                        boxShadow: `0 0 20px ${school.color}40`
                                    }}
                                >
                                    View Curriculum
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Core Curriculum Section */}
            <div className="relative py-16">
                <div className="absolute inset-0 bg-[rgba(255,255,255,0.02)] skew-y-3 transform origin-top-left"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white sm:text-4xl uppercase tracking-wide drop-shadow-lg">
                            Core Curriculum
                        </h2>
                        <div className="w-24 h-1 bg-[var(--neon-cyan)] mx-auto mt-4 shadow-[0_0_10px_var(--neon-cyan)]"></div>
                        <p className="mt-4 text-xl text-gray-400">
                            A solid foundation built on the essential subjects for academic success.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            'Mathematics', 'English Language', 'Basic Science', 'Basic Technology',
                            'Social Studies', 'Civic Education', 'Cultural & Creative Arts',
                            'Christian Religious Studies / Islamic Religious Studies',
                            'Physical & Health Education', 'French / Local Language'
                        ].map((subject, index) => (
                            <div key={index} className="glass-card p-6 border-l-4 border-[var(--neon-cyan)] hover:bg-[rgba(6,182,212,0.1)] transition-colors group">
                                <h3 className="text-lg font-semibold text-white flex items-center">
                                    <span className="bg-[rgba(6,182,212,0.2)] text-[var(--neon-cyan)] rounded-full h-8 w-8 flex items-center justify-center mr-3 text-sm font-bold border border-[var(--neon-cyan)] shadow-[0_0_10px_rgba(6,182,212,0.3)] group-hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-shadow">
                                        {index + 1}
                                    </span>
                                    {subject}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Senior Secondary School Departments */}
            <div className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white sm:text-4xl uppercase tracking-wide drop-shadow-lg">
                            Senior Secondary Departments
                        </h2>
                        <div className="w-24 h-1 bg-[var(--neon-purple)] mx-auto mt-4 shadow-[0_0_10px_var(--neon-purple)]"></div>
                        <p className="mt-4 text-xl text-gray-400">
                            Specialized pathways for focused academic growth.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* School of Science */}
                        <div className="glass-panel rounded-2xl overflow-hidden hover:translate-y-[-5px] transition-transform duration-300 border border-[var(--glass-border)]">
                            <div className="bg-[rgba(6,182,212,0.2)] py-4 px-6 border-b border-[var(--glass-border)]">
                                <h3 className="text-xl font-bold text-[var(--neon-cyan)] flex items-center shadow-[0_0_10px_rgba(6,182,212,0.2)]">
                                    <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                    </svg>
                                    School of Science
                                </h3>
                            </div>
                            <div className="p-6">
                                <ul className="space-y-3">
                                    {['Mathematics', 'English Language', 'Physics', 'Chemistry', 'Biology', 'Further Mathematics', 'Agricultural Science', 'Civic Education', 'Data Processing'].map((subject, idx) => (
                                        <li key={idx} className="flex items-center text-gray-300">
                                            <span className="w-2 h-2 bg-[var(--neon-cyan)] rounded-full mr-3 shadow-[0_0_5px_var(--neon-cyan)]"></span>
                                            {subject}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* School of Arts */}
                        <div className="glass-panel rounded-2xl overflow-hidden hover:translate-y-[-5px] transition-transform duration-300 border border-[var(--glass-border)]">
                            <div className="bg-[rgba(168,85,247,0.2)] py-4 px-6 border-b border-[var(--glass-border)]">
                                <h3 className="text-xl font-bold text-[var(--neon-purple)] flex items-center shadow-[0_0_10px_rgba(168,85,247,0.2)]">
                                    <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                    School of Arts
                                </h3>
                            </div>
                            <div className="p-6">
                                <ul className="space-y-3">
                                    {['Mathematics', 'English Language', 'Literature in English', 'Government', 'History', 'Christian Religious Studies', 'Civic Education', 'French / Local Language'].map((subject, idx) => (
                                        <li key={idx} className="flex items-center text-gray-300">
                                            <span className="w-2 h-2 bg-[var(--neon-purple)] rounded-full mr-3 shadow-[0_0_5px_var(--neon-purple)]"></span>
                                            {subject}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* School of Social Sciences */}
                        <div className="glass-panel rounded-2xl overflow-hidden hover:translate-y-[-5px] transition-transform duration-300 border border-[var(--glass-border)]">
                            <div className="bg-[rgba(34,197,94,0.2)] py-4 px-6 border-b border-[var(--glass-border)]">
                                <h3 className="text-xl font-bold text-[var(--neon-green)] flex items-center shadow-[0_0_10px_rgba(34,197,94,0.2)]">
                                    <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    School of Social Sciences
                                </h3>
                            </div>
                            <div className="p-6">
                                <ul className="space-y-3">
                                    {['Mathematics', 'English Language', 'Economics', 'Geography', 'Commerce', 'Financial Accounting', 'Government', 'Civic Education'].map((subject, idx) => (
                                        <li key={idx} className="flex items-center text-gray-300">
                                            <span className="w-2 h-2 bg-[var(--neon-green)] rounded-full mr-3 shadow-[0_0_5px_var(--neon-green)]"></span>
                                            {subject}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative py-16 overflow-hidden">
                <div className="absolute inset-0 bg-[rgba(255,255,255,0.02)] -skew-y-3 transform origin-bottom-right"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white sm:text-4xl uppercase tracking-wide drop-shadow-lg">
                            Beyond the Classroom
                        </h2>
                        <div className="w-24 h-1 bg-[var(--neon-pink)] mx-auto mt-4 shadow-[0_0_10px_var(--neon-pink)]"></div>
                        <p className="mt-4 text-xl text-gray-400">
                            Developing well-rounded students through diverse activities.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Tailoring */}
                        <div className="relative rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.5)] h-80 group border border-[var(--glass-border)]">
                            <img
                                src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=800"
                                alt="Tailoring and Fashion Design"
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90"></div>
                            <div className="absolute bottom-0 left-0 p-8">
                                <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-md">Tailoring & Fashion Design</h3>
                                <p className="text-gray-200">
                                    Mastering the art of garment construction, pattern drafting, and fashion illustration.
                                </p>
                            </div>
                        </div>

                        {/* Sports */}
                        <div className="relative rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.5)] h-80 group border border-[var(--glass-border)]">
                            <img
                                src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800"
                                alt="Sporting Activities"
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90"></div>
                            <div className="absolute bottom-0 left-0 p-8">
                                <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-md">Sporting Activities</h3>
                                <p className="text-gray-200">
                                    Fostering teamwork, discipline, and physical fitness through football, basketball, athletics, and more.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
