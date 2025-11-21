import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            alt="Students learning"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mt-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6">
            TRANSFORMING LIVES VIA <br className="hidden md:block" />
            <span className="text-blue-500">EDUCATION</span> AND <span className="text-blue-500">INNOVATION</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto mb-10">
            SmartCampus 360 is a digital ecosystem empowering the next generation of leaders through accessible technology and comprehensive school management.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/apply" className="bg-blue-600 text-white px-8 py-4 font-bold text-base uppercase tracking-wide hover:bg-blue-700 transition-transform transform hover:scale-105">
              Apply Now
            </Link>
            <Link href="/about" className="bg-transparent border-2 border-white text-white px-8 py-4 font-bold text-base uppercase tracking-wide hover:bg-white hover:text-black transition-colors">
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl uppercase tracking-wide">
              What We Do
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-blue-600">
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Academic Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                We provide a robust platform for managing academic records, ensuring that every student's progress is tracked and nurtured.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-blue-600">
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Digital Management</h3>
              <p className="text-gray-600 leading-relaxed">
                Streamline school operations with our comprehensive digital tools for attendance, fees, and communication.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-blue-600">
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Community Portal</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect students, teachers, and parents in a unified ecosystem that fosters collaboration and growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Centers of Excellence Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl uppercase tracking-wide">
              Centers of Excellence
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
            <p className="mt-4 text-xl text-gray-500">
              Pioneering the future of education with specialized, high-tech learning hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'School of AI & Robotics',
                image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
                desc: 'Mastering machine learning, automation, and intelligent systems.'
              },
              {
                name: 'School of Sustainable Innovation',
                image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800',
                desc: 'Engineering green solutions for a cleaner, brighter tomorrow.'
              },
              {
                name: 'School of Digital Arts & VR',
                image: 'https://images.unsplash.com/photo-1626379953822-baec19c3accd?auto=format&fit=crop&q=80&w=800',
                desc: 'Creating immersive experiences through AR, VR, and modern design.'
              },
              {
                name: 'School of Future Business',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
                desc: 'Leading the next wave of fintech, startups, and global economics.'
              }
            ].map((school, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer h-96">
                <img
                  src={school.image}
                  alt={school.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h3 className="text-2xl font-bold text-white mb-2">{school.name}</h3>
                  <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    {school.desc}
                  </p>
                  <span className="inline-flex items-center text-blue-400 font-bold text-sm uppercase tracking-wider group-hover:text-blue-300 transition-colors">
                    Explore Program
                    <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
