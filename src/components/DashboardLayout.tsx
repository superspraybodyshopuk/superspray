
import { Outlet, Navigate, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home, Image, Star, LogOut, BarChart, Palette } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

const DashboardLayout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  
  // Get the current hash or set default to gallery
  const [activeSection, setActiveSection] = useState<string>("gallery");

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setIsAuthenticated(!!session);
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsAuthenticated(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Handle section change when location changes
  useEffect(() => {
    const hash = location.hash.slice(1);
    if (hash) {
      setActiveSection(hash);
    }
  }, [location.hash]);

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      toast({
        title: "Logged out",
        description: "You have been successfully logged out.",
      });
      navigate("/login");
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to log out. Please try again.",
        variant: "destructive",
      });
    }
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

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    navigate(`/admin#${section}`);
  };

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
            <span className="sr-only">Close menu</span>
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
            <button
              onClick={() => handleNavClick("gallery")}
              className={`flex w-full items-center px-4 py-2 text-sm font-medium rounded-md hover:bg-gray-700 transition-colors ${activeSection === "gallery" ? "bg-gray-700" : ""}`}
            >
              <Image className="mr-3 h-5 w-5" />
              Gallery Management
            </button>
            <button
              onClick={() => handleNavClick("reviews")}
              className={`flex w-full items-center px-4 py-2 text-sm font-medium rounded-md hover:bg-gray-700 transition-colors ${activeSection === "reviews" ? "bg-gray-700" : ""}`}
            >
              <Star className="mr-3 h-5 w-5" />
              Reviews Management
            </button>
            <button
              onClick={() => handleNavClick("analytics")}
              className={`flex w-full items-center px-4 py-2 text-sm font-medium rounded-md hover:bg-gray-700 transition-colors ${activeSection === "analytics" ? "bg-gray-700" : ""}`}
            >
              <BarChart className="mr-3 h-5 w-5" />
              Analytics
            </button>
            <button
              onClick={() => handleNavClick("style-guide")}
              className={`flex w-full items-center px-4 py-2 text-sm font-medium rounded-md hover:bg-gray-700 transition-colors ${activeSection === "style-guide" ? "bg-gray-700" : ""}`}
            >
              <Palette className="mr-3 h-5 w-5" />
              Style Guide
            </button>
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
              <span className="sr-only">Toggle menu</span>
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
