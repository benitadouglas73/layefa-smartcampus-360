import StudentSidebar from '../../components/StudentSidebar';

export default function StudentLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen relative overflow-hidden">
            <StudentSidebar />
            <div className="md:pl-72 flex flex-col flex-1 transition-all duration-300">
                <main className="flex-1">
                    <div className="py-8">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                            {children}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
