import Navbar from '../../components/Navbar';

export default function Academics() {
    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <Navbar />

            {/* Hero Section */}
            <div className="relative bg-blue-900 py-24 sm:py-32">
                <div className="absolute inset-0 overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1920"
                        alt="Academics background"
                        className="h-full w-full object-cover opacity-20"
                    />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                        Academic Excellence
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-100">
                        Our curriculum is designed to prepare students for the challenges of tomorrow, combining traditional rigor with cutting-edge technology.
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
                            image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800'
                        },
                        {
                            name: 'School of Sustainable Innovation',
                            desc: 'Focusing on green technology and renewable energy. This program empowers students to design solutions for climate change, sustainable urban planning, and eco-friendly engineering.',
                            features: ['Renewable Energy Systems', 'Environmental Science', 'Green Architecture', 'Circular Economy'],
                            image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800'
                        },
                        {
                            name: 'School of Digital Arts & VR',
                            desc: 'Where creativity meets technology. Students explore 3D modeling, virtual reality development, digital animation, and user experience design.',
                            features: ['3D Modeling (Blender/Maya)', 'Unity/Unreal Engine', 'UX/UI Design', 'Digital Storytelling'],
                            image: 'https://images.unsplash.com/photo-1626379953822-baec19c3accd?auto=format&fit=crop&q=80&w=800'
                        },
                        {
                            name: 'School of Future Business',
                            desc: 'Preparing the next generation of entrepreneurs and global leaders. The curriculum covers fintech, blockchain, startup management, and global economics.',
                            features: ['Entrepreneurship', 'Fintech & Blockchain', 'Global Economics', 'Leadership Strategy'],
                            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
                        }
                    ].map((school, index) => (
                        <div key={index} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                            <div className="lg:w-1/2">
                                <div className="relative rounded-2xl shadow-xl overflow-hidden group">
                                    <img
                                        src={school.image}
                                        alt={school.name}
                                        className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                                </div>
                            </div>
                            <div className="lg:w-1/2 space-y-6">
                                <h2 className="text-3xl font-bold text-gray-900">{school.name}</h2>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    {school.desc}
                                </p>
                                <div>
                                    <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">Key Focus Areas</h3>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {school.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center text-gray-700">
                                                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <button className="mt-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                                    View Curriculum
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Core Curriculum Section */}
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl uppercase tracking-wide">
                            Core Curriculum
                        </h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
                        <p className="mt-4 text-xl text-gray-500">
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
                            <div key={index} className="bg-gray-50 rounded-lg p-6 border-l-4 border-blue-500 shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                                    <span className="bg-blue-100 text-blue-600 rounded-full h-8 w-8 flex items-center justify-center mr-3 text-sm font-bold">
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
            <div className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl uppercase tracking-wide">
                            Senior Secondary Departments
                        </h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
                        <p className="mt-4 text-xl text-gray-500">
                            Specialized pathways for focused academic growth.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* School of Science */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            <div className="bg-blue-600 py-4 px-6">
                                <h3 className="text-xl font-bold text-white flex items-center">
                                    <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                    </svg>
                                    School of Science
                                </h3>
                            </div>
                            <div className="p-6">
                                <ul className="space-y-3">
                                    {['Mathematics', 'English Language', 'Physics', 'Chemistry', 'Biology', 'Further Mathematics', 'Agricultural Science', 'Civic Education', 'Data Processing'].map((subject, idx) => (
                                        <li key={idx} className="flex items-center text-gray-700">
                                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                            {subject}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* School of Arts */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            <div className="bg-purple-600 py-4 px-6">
                                <h3 className="text-xl font-bold text-white flex items-center">
                                    <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                    School of Arts
                                </h3>
                            </div>
                            <div className="p-6">
                                <ul className="space-y-3">
                                    {['Mathematics', 'English Language', 'Literature in English', 'Government', 'History', 'Christian Religious Studies', 'Civic Education', 'French / Local Language'].map((subject, idx) => (
                                        <li key={idx} className="flex items-center text-gray-700">
                                            <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                                            {subject}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* School of Social Sciences */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            <div className="bg-green-600 py-4 px-6">
                                <h3 className="text-xl font-bold text-white flex items-center">
                                    <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    School of Social Sciences
                                </h3>
                            </div>
                            <div className="p-6">
                                <ul className="space-y-3">
                                    {['Mathematics', 'English Language', 'Economics', 'Geography', 'Commerce', 'Financial Accounting', 'Government', 'Civic Education'].map((subject, idx) => (
                                        <li key={idx} className="flex items-center text-gray-700">
                                            <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                            {subject}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl uppercase tracking-wide">
                            Beyond the Classroom
                        </h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
                        <p className="mt-4 text-xl text-gray-500">
                            Developing well-rounded students through diverse activities.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Tailoring */}
                        <div className="relative rounded-2xl overflow-hidden shadow-lg h-80 group">
                            <img
                                src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=800"
                                alt="Tailoring and Fashion Design"
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90"></div>
                            <div className="absolute bottom-0 left-0 p-8">
                                <h3 className="text-2xl font-bold text-white mb-2">Tailoring & Fashion Design</h3>
                                <p className="text-gray-200">
                                    Mastering the art of garment construction, pattern drafting, and fashion illustration.
                                </p>
                            </div>
                        </div>

                        {/* Sports */}
                        <div className="relative rounded-2xl overflow-hidden shadow-lg h-80 group">
                            <img
                                src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800"
                                alt="Sporting Activities"
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90"></div>
                            <div className="absolute bottom-0 left-0 p-8">
                                <h3 className="text-2xl font-bold text-white mb-2">Sporting Activities</h3>
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
