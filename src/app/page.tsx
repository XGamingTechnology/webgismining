import Dashboard from '@/components/dashboard/map-container';
import Sidebar from '@/components/sidebar';
import StatsCards from '@/components/dashboard/StatsCards';
import Analytics from '@/components/dashboard/analytics';

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-800">Mining Asset Dashboard</h1>
          <p className="text-sm text-gray-500 mt-1">Real-time monitoring & geofence management</p>
        </header>
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <StatsCards />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2">
              <Dashboard />
            </div>
            <div className="lg:col-span-1">
              <Analytics />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}