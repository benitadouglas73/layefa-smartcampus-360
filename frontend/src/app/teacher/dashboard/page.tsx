export default function TeacherDashboard() {
    return (
        <div>
            <h1 className="text-2xl font-semibold text-gray-900">Teacher Dashboard</h1>

            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {/* Card 1: Today's Schedule */}
                <div className="bg-white overflow-hidden shadow rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                        <dt className="text-sm font-medium text-gray-500 truncate">Today's Classes</dt>
                        <dd className="mt-1 text-3xl font-semibold text-gray-900">4</dd>
                        <p className="mt-2 text-sm text-gray-600">Next: Physics 101 (11:00 AM)</p>
                    </div>
                </div>

                {/* Card 2: Pending Grading */}
                <div className="bg-white overflow-hidden shadow rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                        <dt className="text-sm font-medium text-gray-500 truncate">Pending Grading</dt>
                        <dd className="mt-1 text-3xl font-semibold text-gray-900">12</dd>
                        <p className="mt-2 text-sm text-orange-600">Assignments to review</p>
                    </div>
                </div>

                {/* Card 3: Messages */}
                <div className="bg-white overflow-hidden shadow rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                        <dt className="text-sm font-medium text-gray-500 truncate">Unread Messages</dt>
                        <dd className="mt-1 text-3xl font-semibold text-gray-900">5</dd>
                        <p className="mt-2 text-sm text-blue-600">From parents & students</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
