import AdminSidebar from '../../components/AdminSidebar';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Background Elements can go here if needed, but body has the gradient */}
            <AdminSidebar />
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
