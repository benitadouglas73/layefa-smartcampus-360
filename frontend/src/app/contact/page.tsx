import Navbar from '../../components/Navbar';

export default function Contact() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 mt-16">
                <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
                <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Contact Information</h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">Reach out to us via phone or email.</p>
                    </div>
                    <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                        <dl className="sm:divide-y sm:divide-gray-200">
                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Phone Numbers</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    <div className="flex flex-col space-y-1">
                                        <a href="tel:07055125627" className="hover:text-blue-600">07055125627</a>
                                        <a href="tel:09032900186" className="hover:text-blue-600">09032900186</a>
                                    </div>
                                </dd>
                            </div>
                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Email Address</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    <a href="mailto:benitadoudglas73@gmail.com" className="hover:text-blue-600">
                                        benitadoudglas73@gmail.com
                                    </a>
                                </dd>
                            </div>
                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Address</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    SmartCampus Academy<br />
                                    Lagos, Nigeria
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
}
