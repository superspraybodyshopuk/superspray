import { useState, useEffect } from "react";
import GalleryUpload from "@/components/GalleryUpload";
import GalleryManager from "@/components/GalleryManager";
import ReviewManager from "@/components/ReviewManager";
import { Card, CardContent } from "@/components/ui/card";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import StyleGuide from "@/components/StyleGuide";
import { useLocation } from "react-router-dom";

// Add CSS to hide scrollbars but keep scroll functionality
const scrollStyles = `
.hide-scrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;  /* Chrome, Safari and Opera */
}
`;

const Dashboard = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("gallery");

  useEffect(() => {
    // Get the hash from the URL (e.g., #gallery, #reviews)
    const hash = location.hash.slice(1);
    if (hash) {
      setActiveTab(hash);
    } else {
      setActiveTab("gallery"); // Default to gallery if no hash
    }
  }, [location.hash]);

  const renderContent = () => {
    switch (activeTab) {
      case "gallery":
        return (
          <div className="space-y-6">
            {/* Desktop view: Gallery content and Upload form side by side */}
            <div className="hidden md:grid md:grid-cols-3 md:gap-6">
              <div className="col-span-2">
                {/* Before/After Gallery Section moved to left column */}
                <BeforeAfterGallery />
                {/* Regular gallery images below Before/After */}
                <div className="mt-6 hide-scrollbar">
                  <GalleryManager />
                </div>
              </div>
              <div className="relative">
                <div className="sticky top-4">
                  <GalleryUpload />
                </div>
              </div>
            </div>
            
            {/* Mobile view: Before/After Gallery, then Upload form, then Gallery Manager */}
            <div className="block md:hidden space-y-6">
              <BeforeAfterGallery />
              <GalleryUpload />
              <div className="hide-scrollbar">
                <GalleryManager />
              </div>
            </div>
          </div>
        );
      case "reviews":
        return <ReviewManager />;
      case "analytics":
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="text-gray-500 text-sm">Total Visitors</h3>
                    <p className="text-3xl font-bold mt-2">1,234</p>
                    <p className="text-green-500 text-sm mt-2">↑ 12% from last month</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="text-gray-500 text-sm">Contact Form Submissions</h3>
                    <p className="text-3xl font-bold mt-2">56</p>
                    <p className="text-green-500 text-sm mt-2">↑ 8% from last month</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="text-gray-500 text-sm">Average Rating</h3>
                    <p className="text-3xl font-bold mt-2">4.8/5</p>
                    <p className="text-gray-500 text-sm mt-2">From 250+ reviews</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Website Traffic</h3>
                <div className="h-64 bg-gray-100 rounded-md flex items-center justify-center">
                  <p className="text-gray-500">Traffic chart would appear here</p>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Popular Pages</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Home</span>
                      <span className="text-gray-500">45%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Gallery</span>
                      <span className="text-gray-500">28%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Contact</span>
                      <span className="text-gray-500">15%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>About</span>
                      <span className="text-gray-500">12%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Traffic Sources</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Direct</span>
                      <span className="text-gray-500">40%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Search</span>
                      <span className="text-gray-500">35%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Social</span>
                      <span className="text-gray-500">15%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Referral</span>
                      <span className="text-gray-500">10%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      case "style-guide":
        return <StyleGuide />;
      default:
        return null;
    }
  };

  // Add the custom styles to the page
  useEffect(() => {
    // Create a style element
    const styleEl = document.createElement('style');
    // Add the styles to hide the scrollbar
    styleEl.innerHTML = scrollStyles;
    // Append it to the document head
    document.head.appendChild(styleEl);

    // Cleanup on component unmount
    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      {renderContent()}
    </div>
  );
};

export default Dashboard;
