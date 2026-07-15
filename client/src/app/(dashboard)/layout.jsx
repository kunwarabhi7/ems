import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";
import AuthGuard from "@/components/AuthGuard";

export default function DashboardLayout({ children }) {
  return (
    <AuthGuard>
      <div className="flex min-h-screen">
        <Sidebar />

        <div className="flex-1">
          <Navbar />

          <main className="p-6">
            {children}
          </main>
        </div>
      </div>
    </AuthGuard>
  );
}