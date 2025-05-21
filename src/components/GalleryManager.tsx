
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trash2, Edit, SplitSquareVertical } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface GalleryItem {
  id: string;
  title: string;
  description: string | null;
  category: string;
  image_url: string;
  created_at: string;
  service_id: string | null;
  service_name?: string;
  is_before_after?: boolean;
  before_image_url?: string | null;
  after_image_url?: string | null;
}

interface Service {
  id: string;
  name: string;
  slug: string;
}

const GalleryManager = () => {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchServices();
    fetchGalleryItems();
  }, []);

  const fetchServices = async () => {
    try {
      const { data, error } = await supabase
        .from('services')
        .select('id, name, slug')
        .order('name');
      
      if (error) throw error;
      setServices(data || []);
    } catch (error: any) {
      console.error('Error fetching services:', error);
      toast({
        title: "Error",
        description: "Failed to load services. Please try again.",
        variant: "destructive",
      });
    }
  };

  const fetchGalleryItems = async () => {
    try {
      const { data, error } = await supabase
        .from('gallery')
        .select(`
          *,
          services:service_id (
            name
          )
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      
      const formattedItems = data.map(item => ({
        ...item,
        service_name: item.services ? item.services.name : null
      }));
      
      setGalleryItems(formattedItems);
    } catch (error: any) {
      console.error('Error fetching gallery items:', error);
      toast({
        title: "Error",
        description: "Failed to load gallery items. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const deleteGalleryItem = async (id: string, item: GalleryItem) => {
    setLoading(true);
    try {
      // Delete all associated images from storage
      const filesToDelete = [item.image_url];
      
      if (item.is_before_after) {
        if (item.before_image_url) filesToDelete.push(item.before_image_url);
        if (item.after_image_url) filesToDelete.push(item.after_image_url);
      }
      
      // Delete all images
      for (const fileUrl of filesToDelete) {
        if (fileUrl) {
          const { error: storageError } = await supabase
            .storage
            .from('gallery')
            .remove([fileUrl]);

          if (storageError) throw storageError;
        }
      }

      // Delete the database record
      const { error: dbError } = await supabase
        .from('gallery')
        .delete()
        .eq('id', id);

      if (dbError) throw dbError;
      
      // Update local state
      setGalleryItems(galleryItems.filter(item => item.id !== id));
      setSelectedItem(null);
      
      toast({
        title: "Item Deleted",
        description: "The gallery item has been deleted successfully.",
      });
    } catch (error: any) {
      toast({
        title: "Delete failed",
        description: error.message || "There was an error deleting the item.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="shadow-md">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-4">Gallery Management</h3>
        
        {loading && galleryItems.length === 0 ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-blue"></div>
          </div>
        ) : galleryItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No gallery items available.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryItems.map((item) => (
              <div key={item.id} className="relative group">
                <div className="bg-gray-200 aspect-square rounded-md overflow-hidden">
                  <img 
                    src={`${supabase.storage.from('gallery').getPublicUrl(item.image_url).data.publicUrl}`} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  {item.is_before_after && (
                    <div className="absolute top-2 left-2 bg-brand-blue text-white rounded-full p-1.5">
                      <SplitSquareVertical className="h-4 w-4" />
                    </div>
                  )}
                </div>
                <div className="p-2">
                  <h4 className="font-medium truncate">{item.title}</h4>
                  <p className="text-sm text-gray-500 capitalize">{item.service_name || item.category}</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-md">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="mr-2"
                        onClick={() => setSelectedItem(item)}
                      >
                        <Edit className="h-4 w-4 mr-1" />
                        View
                      </Button>
                    </DialogTrigger>
                  </Dialog>
                  <Button 
                    variant="destructive" 
                    size="sm"
                    onClick={() => deleteGalleryItem(item.id, item)}
                    disabled={loading}
                  >
                    <Trash2 className="h-4 w-4 mr-1" />
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {selectedItem && (
          <Dialog open={!!selectedItem} onOpenChange={(open) => !open && setSelectedItem(null)}>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Gallery Item Details</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                {selectedItem.is_before_after ? (
                  <>
                    {/* Before/After Images */}
                    <div className="space-y-3">
                      <h4 className="font-medium">Before Image</h4>
                      {selectedItem.before_image_url && (
                        <img 
                          src={`${supabase.storage.from('gallery').getPublicUrl(selectedItem.before_image_url).data.publicUrl}`} 
                          alt={`Before - ${selectedItem.title}`}
                          className="w-full h-48 object-contain rounded-md"
                        />
                      )}
                      
                      <h4 className="font-medium mt-4">After Image</h4>
                      {selectedItem.after_image_url && (
                        <img 
                          src={`${supabase.storage.from('gallery').getPublicUrl(selectedItem.after_image_url).data.publicUrl}`} 
                          alt={`After - ${selectedItem.title}`}
                          className="w-full h-48 object-contain rounded-md"
                        />
                      )}
                    </div>
                  </>
                ) : (
                  <div>
                    <img 
                      src={`${supabase.storage.from('gallery').getPublicUrl(selectedItem.image_url).data.publicUrl}`} 
                      alt={selectedItem.title}
                      className="w-full h-64 object-contain rounded-md"
                    />
                  </div>
                )}
                <div>
                  <h4 className="font-medium">Title</h4>
                  <p>{selectedItem.title}</p>
                </div>
                <div>
                  <h4 className="font-medium">Service</h4>
                  <p className="capitalize">{selectedItem.service_name || "None"}</p>
                </div>
                <div>
                  <h4 className="font-medium">Category</h4>
                  <p className="capitalize">{selectedItem.category}</p>
                </div>
                {selectedItem.description && (
                  <div>
                    <h4 className="font-medium">Description</h4>
                    <p className="mt-1 text-gray-600">{selectedItem.description}</p>
                  </div>
                )}
                <div>
                  <h4 className="font-medium">Date Added</h4>
                  <p>{new Date(selectedItem.created_at).toLocaleString()}</p>
                </div>
                <div className="flex justify-between mt-6">
                  <Button
                    variant="destructive"
                    onClick={() => deleteGalleryItem(selectedItem.id, selectedItem)}
                    disabled={loading}
                    className="flex items-center"
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete
                  </Button>
                  <DialogClose asChild>
                    <Button variant="outline">Close</Button>
                  </DialogClose>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </CardContent>
    </Card>
  );
};

export default GalleryManager;
