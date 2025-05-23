import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";

interface GalleryItem {
  id: string;
  imageUrl: string;
  title: string;
  category: string;
  description: string;
  service: string | null;
  isBeforeAfter: boolean;
  beforeImageUrl?: string | null;
  afterImageUrl?: string | null;
}

interface Service {
  id: string;
  name: string;
  slug: string;
  description: string;
}

interface BeforeAfterItem {
  id: string;
  title: string;
  description: string;
  beforeImageUrl: string;
  afterImageUrl: string;
}

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [beforeAfterItems, setBeforeAfterItems] = useState<BeforeAfterItem[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServices();
    fetchGalleryItems();
  }, []);

  const fetchServices = async () => {
    try {
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .order('name');
      
      if (error) throw error;
      setServices(data || []);
    } catch (error: any) {
      console.error("Error fetching services:", error);
    }
  };

  const fetchGalleryItems = async () => {
    try {
      const { data, error } = await supabase
        .from('gallery')
        .select(`
          *,
          services:service_id (
            name,
            slug
          )
        `);
      
      if (error) throw error;
      
      const beforeAfterItems: BeforeAfterItem[] = [];
      const galleryItems: GalleryItem[] = [];
      
      data.forEach(item => {
        if (item.is_before_after && item.before_image_url && item.after_image_url) {
          beforeAfterItems.push({
            id: item.id,
            title: item.title,
            description: item.description || "",
            beforeImageUrl: supabase.storage.from('gallery').getPublicUrl(item.before_image_url).data.publicUrl,
            afterImageUrl: supabase.storage.from('gallery').getPublicUrl(item.after_image_url).data.publicUrl,
          });
        } else {
          galleryItems.push({
            id: item.id,
            title: item.title,
            description: item.description || "",
            category: item.category,
            service: item.services ? item.services.slug : null,
            isBeforeAfter: false,
            imageUrl: item.image_url.startsWith('http') 
              ? item.image_url 
              : supabase.storage.from('gallery').getPublicUrl(item.image_url).data.publicUrl
          });
        }
      });
      
      setGalleryItems(galleryItems);
      setBeforeAfterItems(beforeAfterItems);
    } catch (error: any) {
      console.error("Error fetching gallery:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredItems = filter === "all"
    ? galleryItems
    : galleryItems.filter(item => item.service === filter);

  return (
    <>
      <Hero
        title="Our Work Gallery"
        subtitle="The Proof is in the Perfection: See Our Commitment to Quality  and Attention to Detail  in Every Project."
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
            <div className="flex justify-center mb-8 overflow-x-auto">
              <TabsList className="flex-wrap">
                <TabsTrigger value="all" onClick={() => setFilter("all")}>All Work</TabsTrigger>
                {services.map(service => (
                  <TabsTrigger 
                    key={service.id}
                    value={service.slug} 
                    onClick={() => setFilter(service.slug)}
                  >
                    {service.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              {renderGalleryItems(filteredItems, loading)}
            </TabsContent>

            {services.map(service => (
              <TabsContent key={service.id} value={service.slug} className="mt-0">
                {renderGalleryItems(filteredItems, loading)}
              </TabsContent>
            ))}
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
            {beforeAfterItems.length > 0 ? (
              beforeAfterItems.map(item => (
                <div key={item.id}>
                  <div className="bg-white p-2 shadow-lg rounded-lg">
                    <div className="relative">
                      <img
                        src={item.beforeImageUrl}
                        alt={`Before ${item.title}`}
                        className="rounded w-full h-72 object-cover object-center"
                      />
                      <div className="absolute bottom-0 left-0 bg-brand-dark text-white py-2 px-4 rounded-tr">
                        Before
                      </div>
                    </div>
                    <div className="relative mt-4">
                      <img
                        src={item.afterImageUrl}
                        alt={`After ${item.title}`}
                        className="rounded w-full h-72 object-cover object-center"
                      />
                      <div className="absolute bottom-0 left-0 bg-brand-blue text-white py-2 px-4 rounded-tr">
                        After
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))
            ) : loading ? (
              <div className="col-span-2 flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-blue"></div>
              </div>
            ) : (
              <div className="col-span-2 text-center py-12">
                <p className="text-gray-500">No before & after examples available yet.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

// Helper function to render gallery items
const renderGalleryItems = (items: GalleryItem[], loading: boolean) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-blue"></div>
      </div>
    );
  }
  
  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No gallery items found in this category.</p>
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
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
  );
};

export default Gallery;
