
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { SplitSquareVertical } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface GalleryItem {
  id: string;
  title: string;
  before_image_url: string | null;
  after_image_url: string | null;
  service_name?: string;
}

const BeforeAfterGallery = () => {
  const [beforeAfterItems, setBeforeAfterItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchBeforeAfterItems();
  }, []);

  const fetchBeforeAfterItems = async () => {
    try {
      const { data, error } = await supabase
        .from('gallery')
        .select(`
          id,
          title,
          before_image_url,
          after_image_url,
          services:service_id (
            name
          )
        `)
        .eq('is_before_after', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      
      const formattedItems = data.map(item => ({
        ...item,
        service_name: item.services ? item.services.name : null
      }));
      
      setBeforeAfterItems(formattedItems);
    } catch (error: any) {
      console.error('Error fetching before/after items:', error);
      toast({
        title: "Error",
        description: "Failed to load before/after images. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading && beforeAfterItems.length === 0) {
    return (
      <Card className="shadow-md">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <SplitSquareVertical className="mr-2 h-5 w-5" /> 
            Before & After Gallery
          </h3>
          <div className="flex justify-center items-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-blue"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (beforeAfterItems.length === 0) {
    return (
      <Card className="shadow-md">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <SplitSquareVertical className="mr-2 h-5 w-5" /> 
            Before & After Gallery
          </h3>
          <p className="text-center text-gray-500 py-6">No before and after images available</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="shadow-md">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <SplitSquareVertical className="mr-2 h-5 w-5" /> 
          Before & After Gallery
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {beforeAfterItems.map((item) => (
            <div key={item.id} className="space-y-2">
              <h4 className="font-medium text-lg">{item.title}</h4>
              <p className="text-sm text-gray-500 capitalize mb-2">{item.service_name}</p>
              
              <div className="grid grid-cols-2 gap-2">
                {item.before_image_url && (
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-gray-600">BEFORE</p>
                    <div className="bg-gray-200 aspect-square rounded-md overflow-hidden">
                      <img 
                        src={supabase.storage.from('gallery').getPublicUrl(item.before_image_url).data.publicUrl} 
                        alt={`Before - ${item.title}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}
                
                {item.after_image_url && (
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-gray-600">AFTER</p>
                    <div className="bg-gray-200 aspect-square rounded-md overflow-hidden">
                      <img 
                        src={supabase.storage.from('gallery').getPublicUrl(item.after_image_url).data.publicUrl} 
                        alt={`After - ${item.title}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default BeforeAfterGallery;
