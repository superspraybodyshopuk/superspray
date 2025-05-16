
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GalleryUpload from "@/components/GalleryUpload";
import ReviewManager from "@/components/ReviewManager";
import { Card, CardContent } from "@/components/ui/card";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("gallery");

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      <Tabs defaultValue="gallery" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="gallery">Gallery Management</TabsTrigger>
          <TabsTrigger value="reviews">Reviews Management</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        
        <TabsContent value="gallery" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card className="shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Gallery Images</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* This would be populated with actual gallery images from Supabase in a real implementation */}
                    {[1, 2, 3, 4].map((item) => (
                      <div key={item} className="relative group">
                        <div className="bg-gray-200 aspect-square rounded-md flex items-center justify-center">
                          <span className="text-gray-500">Gallery Image {item}</span>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-md">
                          <button className="bg-red-500 text-white px-3 py-1 rounded-md text-sm">Remove</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <GalleryUpload />
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="reviews" className="space-y-6">
          <ReviewManager />
        </TabsContent>
        
        <TabsContent value="analytics" className="space-y-6">
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
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
