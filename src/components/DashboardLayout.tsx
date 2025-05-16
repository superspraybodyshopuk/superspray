
import { Outlet, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, Home, Image, Star, LogOut } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const DashboardLayout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('supabase.auth.token');
      setIsAuthenticated(!!token);
    };
    
    checkAuth();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('supabase.auth.token');
    setIsAuthenticated(false);
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
  };

  if (isAuthenticated === false) {
    return <Navigate to="/login" replace />;
  }

  if (isAuthenticated === null) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-blue"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar for larger screens */}
      <div className={`bg-brand-dark text-white w-full md:w-64 flex-shrink-0 transition-all duration-300 ${isSidebarOpen ? "md:translate-x-0" : "md:-translate-x-64"} ${isSidebarOpen ? "block" : "hidden md:block"} md:sticky md:top-0 md:h-screen`}>
        <div className="p-4 flex justify-between items-center md:justify-center border-b border-gray-700">
          <h1 className="text-xl font-bold">SuperSpray Admin</h1>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
        <div className="py-4">
          <nav className="space-y-1 px-2">
            <Link
              to="/"
              className="flex items-center px-4 py-2 text-sm font-medium rounded-md hover:bg-gray-700 transition-colors"
            >
              <Home className="mr-3 h-5 w-5" />
              Main Site
            </Link>
            <Link
              to="/admin"
              className="flex items-center px-4 py-2 text-sm font-medium rounded-md hover:bg-gray-700 transition-colors"
            >
              <Image className="mr-3 h-5 w-5" />
              Gallery Management
            </Link>
            <Link
              to="/admin"
              className="flex items-center px-4 py-2 text-sm font-medium rounded-md hover:bg-gray-700 transition-colors"
            >
              <Star className="mr-3 h-5 w-5" />
              Reviews Management
            </Link>
            <button
              onClick={handleLogout}
              className="flex w-full items-center px-4 py-2 text-sm font-medium rounded-md hover:bg-gray-700 transition-colors"
            >
              <LogOut className="mr-3 h-5 w-5" />
              Log Out
            </button>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1">
        {/* Top bar for mobile */}
        <div className="bg-white shadow md:hidden">
          <div className="px-4 py-2 flex justify-between items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
            <h1 className="text-lg font-semibold">SuperSpray Admin</h1>
          </div>
        </div>

        <main className="p-4 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
