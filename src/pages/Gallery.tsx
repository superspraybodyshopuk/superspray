import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface GalleryItem {
  id: string;
  imageUrl: string;
  title: string;
  category: string;
  description: string;
}

// Sample gallery data - this would come from Supabase in the real implementation
const sampleGallery: GalleryItem[] = [
  {
    id: "1",
    imageUrl: "https://images.unsplash.com/photo-1603145733146-ae562a55031e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    title: "Classic Mustang Restoration",
    category: "restoration",
    description: "Full body restoration of a 1967 Ford Mustang, including custom paintwork."
  },
  {
    id: "2",
    imageUrl: "https://images.unsplash.com/photo-1611566026373-c6c8da0ea861?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    title: "Accident Repair - BMW",
    category: "repair",
    description: "Major collision damage repair and respray on a BMW 3 Series."
  },
  {
    id: "3",
    imageUrl: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Custom Paint Job",
    category: "paintwork",
    description: "Custom metallic blue paint with clear coat finish."
  },
  {
    id: "4",
    imageUrl: "https://images.unsplash.com/photo-1621361365424-06f0e1eb5c49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1444&q=80",
    title: "Classic Jaguar E-Type",
    category: "restoration",
    description: "Complete restoration of a 1964 Jaguar E-Type, bringing it back to showroom condition."
  },
  {
    id: "5",
    imageUrl: "https://images.unsplash.com/photo-1600259828526-77f8617ceec9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
    title: "Range Rover Dent Repair",
    category: "repair",
    description: "PDR (Paintless Dent Repair) on a Range Rover door panel."
  },
  {
    id: "6",
    imageUrl: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1583&q=80",
    title: "Aston Martin Respray",
    category: "paintwork",
    description: "Full respray in original factory color on an Aston Martin DB9."
  },
];

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real implementation, this would fetch from Supabase
    const fetchGallery = async () => {
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));
        setGalleryItems(sampleGallery);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching gallery:", error);
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  const filteredItems = filter === "all"
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

  return (
    <>
      <Hero
        title="Our Work Gallery"
        subtitle="See the quality of our bodywork repairs and restorations"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-brand-dark mb-4">Gallery</h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-600">
              Browse our portfolio of completed projects, from minor repairs to full restorations.
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all" onClick={() => setFilter("all")}>All</TabsTrigger>
                <TabsTrigger value="restoration" onClick={() => setFilter("restoration")}>Restorations</TabsTrigger>
                <TabsTrigger value="repair" onClick={() => setFilter("repair")}>Repairs</TabsTrigger>
                <TabsTrigger value="paintwork" onClick={() => setFilter("paintwork")}>Paintwork</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              {loading ? (
                <div className="flex justify-center items-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-blue"></div>
                </div>
              ) : filteredItems.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredItems.map((item) => (
                    <div key={item.id} className="rounded-lg overflow-hidden shadow-lg group">
                      <div className="relative overflow-hidden h-72">
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500">No gallery items found in this category.</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="restoration" className="mt-0">
              {/* Same structure as "all" but with filtered items */}
            </TabsContent>

            <TabsContent value="repair" className="mt-0">
              {/* Same structure as "all" but with filtered items */}
            </TabsContent>

            <TabsContent value="paintwork" className="mt-0">
              {/* Same structure as "all" but with filtered items */}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Before/After Showcase */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-brand-dark mb-4">Before & After</h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-600">
              See the transformation our skilled technicians achieve with these before and after comparisons.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="bg-white p-2 shadow-lg rounded-lg">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80"
                    alt="Before restoration"
                    className="rounded w-full h-72 object-cover object-center"
                  />
                  <div className="absolute bottom-0 left-0 bg-brand-dark text-white py-2 px-4 rounded-tr">
                    Before
                  </div>
                </div>
                <div className="relative mt-4">
                  <img
                    src="https://images.unsplash.com/photo-1581112606025-6e91da971d20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    alt="After restoration"
                    className="rounded w-full h-72 object-cover object-center"
                  />
                  <div className="absolute bottom-0 left-0 bg-brand-blue text-white py-2 px-4 rounded-tr">
                    After
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="font-bold text-xl mb-2">Classic Corvette Restoration</h3>
                <p className="text-gray-600">
                  Complete body restoration and refinishing on this classic Corvette, bringing it back to showroom condition.
                </p>
              </div>
            </div>

            <div>
              <div className="bg-white p-2 shadow-lg rounded-lg">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1634437045339-1cbfbba70e38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1325&q=80"
                    alt="Before repair"
                    className="rounded w-full h-72 object-cover object-center"
                  />
                  <div className="absolute bottom-0 left-0 bg-brand-dark text-white py-2 px-4 rounded-tr">
                    Before
                  </div>
                </div>
                <div className="relative mt-4">
                  <img
                    src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    alt="After repair"
                    className="rounded w-full h-72 object-cover object-center"
                  />
                  <div className="absolute bottom-0 left-0 bg-brand-blue text-white py-2 px-4 rounded-tr">
                    After
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="font-bold text-xl mb-2">Collision Damage Repair</h3>
                <p className="text-gray-600">
                  Major front-end collision damage repaired and refinished with perfect color matching.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
