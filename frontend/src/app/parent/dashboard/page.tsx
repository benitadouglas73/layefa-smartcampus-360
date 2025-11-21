export default function ParentDashboard() {
    return (
        <div>
            <h1 className="text-2xl font-semibold text-gray-900">Parent Dashboard</h1>

            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {/* Card 1: Children Overview */}
                <div className="bg-white overflow-hidden shadow rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                        <dt className="text-sm font-medium text-gray-500 truncate">Children Enrolled</dt>
                        <dd className="mt-1 text-3xl font-semibold text-gray-900">2</dd>
                        <p className="mt-2 text-sm text-gray-600">Alex (Grade 5), Sarah (Grade 8)</p>
                    </div>
                </div>

                {/* Card 2: Attendance */}
                <div className="bg-white overflow-hidden shadow rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                        <dt className="text-sm font-medium text-gray-500 truncate">Attendance (This Month)</dt>
                        <dd className="mt-1 text-3xl font-semibold text-gray-900">98%</dd>
                        <p className="mt-2 text-sm text-green-600">Excellent attendance record</p>
                    </div>
                </div>

                {/* Card 3: Fee Status */}
                <div className="bg-white overflow-hidden shadow rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                        <dt className="text-sm font-medium text-gray-500 truncate">Fee Status</dt>
                        <dd className="mt-1 text-3xl font-semibold text-gray-900">Paid</dd>
                        <p className="mt-2 text-sm text-green-600">No outstanding dues</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
