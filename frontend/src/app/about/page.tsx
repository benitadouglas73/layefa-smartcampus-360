import Navbar from '../../components/Navbar';

export default function About() {
    return (
        <div className="min-h-screen bg-white font-sans">
            <Navbar />

            {/* Hero Section */}
            <div className="relative bg-blue-600 py-24 sm:py-32">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 mix-blend-multiply"></div>
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                        About Us
                    </h1>
                    <p className="mt-6 max-w-3xl mx-auto text-xl text-blue-100">
                        Revolutionizing education through technology.
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-xl rounded-lg border border-gray-100">
                    <div className="px-4 py-5 sm:p-6">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">
                                Our Mission
                            </h2>
                            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                                SmartCampus 360 is the modern, all-in-one school management platform designed to simplify operations and elevate the learning experience. We connect administrators, teachers, students, and parents through smart automation, real-time insights, and a seamless digital environment.
                            </p>

                            <div className="my-12 w-24 h-1 bg-blue-600 mx-auto"></div>

                            <h2 className="text-3xl font-bold text-gray-900 mb-8">
                                Our Vision
                            </h2>
                            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto font-medium">
                                With SmartCampus 360, schools run smarter, communicate better, and focus more on what truly matters—quality education.
                            </p>
                            <p className="mt-4 text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                                To become the leading school management platform shaping the future of education across Africa and beyond.
                            </p>

                            <div className="my-12 w-24 h-1 bg-blue-600 mx-auto"></div>

                            <h2 className="text-3xl font-bold text-gray-900 mb-8">
                                Our Core Values
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
                                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 hover:shadow-md transition-shadow">
                                    <h3 className="text-xl font-bold text-blue-900 mb-2">Innovation</h3>
                                    <p className="text-gray-600">Pioneering smart solutions for modern education.</p>
                                </div>
                                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 hover:shadow-md transition-shadow">
                                    <h3 className="text-xl font-bold text-blue-900 mb-2">Excellence</h3>
                                    <p className="text-gray-600">Striving for perfection in every school operation.</p>
                                </div>
                                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 hover:shadow-md transition-shadow">
                                    <h3 className="text-xl font-bold text-blue-900 mb-2">Integrity</h3>
                                    <p className="text-gray-600">Upholding transparency and trust in all we do.</p>
                                </div>
                                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 hover:shadow-md transition-shadow">
                                    <h3 className="text-xl font-bold text-blue-900 mb-2">Impact</h3>
                                    <p className="text-gray-600">Empowering African education for a brighter future.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
