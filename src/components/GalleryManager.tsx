
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trash2, Edit } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface GalleryItem {
  id: string;
  title: string;
  description: string | null;
  category: string;
  image_url: string;
  created_at: string;
}

const GalleryManager = () => {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchGalleryItems();
  }, []);

  const fetchGalleryItems = async () => {
    try {
      const { data, error } = await supabase
        .from('gallery')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setGalleryItems(data);
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

  const deleteGalleryItem = async (id: string, imageUrl: string) => {
    setLoading(true);
    try {
      // Delete the image from storage
      const { error: storageError } = await supabase
        .storage
        .from('gallery')
        .remove([imageUrl]);

      if (storageError) throw storageError;

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
                </div>
                <div className="p-2">
                  <h4 className="font-medium truncate">{item.title}</h4>
                  <p className="text-sm text-gray-500 capitalize">{item.category}</p>
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
                    onClick={() => deleteGalleryItem(item.id, item.image_url)}
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
                <div>
                  <img 
                    src={`${supabase.storage.from('gallery').getPublicUrl(selectedItem.image_url).data.publicUrl}`} 
                    alt={selectedItem.title}
                    className="w-full h-64 object-contain rounded-md"
                  />
                </div>
                <div>
                  <h4 className="font-medium">Title</h4>
                  <p>{selectedItem.title}</p>
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
                    onClick={() => deleteGalleryItem(selectedItem.id, selectedItem.image_url)}
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
