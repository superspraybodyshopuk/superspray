import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Star, Trash2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface Review {
  id: string;
  name: string;
  vehicle: string;
  rating: number;
  review_text: string;
  date: string;
  approved: boolean;
  images?: string[] | null;
}

const ReviewManager = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      // Format the reviews for the component
      const formattedReviews = data.map(review => ({
        ...review,
        date: new Date(review.created_at).toISOString()
      }));

      setReviews(formattedReviews);
    } catch (error: any) {
      console.error('Error fetching reviews:', error);
      toast({
        title: "Error",
        description: "Failed to load reviews. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const toggleApproval = async (id: string) => {
    setLoading(true);
    try {
      const reviewToUpdate = reviews.find(review => review.id === id);
      if (!reviewToUpdate) return;

      const { error } = await supabase
        .from('reviews')
        .update({ approved: !reviewToUpdate.approved })
        .eq('id', id);

      if (error) throw error;
      
      // Update local state
      setReviews(reviews.map(review => 
        review.id === id ? { ...review, approved: !review.approved } : review
      ));
      
      toast({
        title: "Status Updated",
        description: "The review status has been updated successfully.",
      });
    } catch (error: any) {
      toast({
        title: "Update failed",
        description: error.message || "There was an error updating the review.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const deleteReview = async (id: string) => {
    setLoading(true);
    try {
      const { error } = await supabase
        .from('reviews')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      // Update local state
      setReviews(reviews.filter(review => review.id !== id));
      setSelectedReview(null);
      
      toast({
        title: "Review Deleted",
        description: "The review has been deleted successfully.",
      });
    } catch (error: any) {
      toast({
        title: "Delete failed",
        description: error.message || "There was an error deleting the review.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="shadow-md">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-4">Manage Reviews</h3>
        
        {loading && reviews.length === 0 ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-blue"></div>
          </div>
        ) : reviews.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No reviews available.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rating
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {reviews.map((review) => (
                  <tr key={review.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{review.name}</div>
                      <div className="text-sm text-gray-500">{review.vehicle}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(review.date).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Switch
                          checked={review.approved}
                          onCheckedChange={() => toggleApproval(review.id)}
                          disabled={loading}
                        />
                        <span className="ml-2 text-sm text-gray-500">
                          {review.approved ? "Approved" : "Hidden"}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            variant="ghost" 
                            className="text-brand-blue hover:text-brand-blue hover:bg-blue-50"
                            onClick={() => setSelectedReview(review)}
                          >
                            View
                          </Button>
                        </DialogTrigger>
                        {selectedReview && selectedReview.id === review.id && (
                          <DialogContent className="sm:max-w-[500px] max-h-[80vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle>Review Details</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div>
                                <h4 className="font-medium">Customer</h4>
                                <p>{selectedReview.name}</p>
                              </div>
                              <div>
                                <h4 className="font-medium">Vehicle</h4>
                                <p>{selectedReview.vehicle}</p>
                              </div>
                              <div>
                                <h4 className="font-medium">Rating</h4>
                                <div className="flex mt-1">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`h-5 w-5 ${
                                        i < selectedReview.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                                      }`}
                                    />
                                  ))}
                                </div>
                              </div>
                              <div>
                                <h4 className="font-medium">Review</h4>
                                <p className="mt-1 text-gray-600">{selectedReview.review_text}</p>
                              </div>
                              <div>
                                <h4 className="font-medium">Date</h4>
                                <p>{new Date(selectedReview.date).toLocaleString()}</p>
                              </div>
                              {selectedReview.images && selectedReview.images.length > 0 && (
                                <div>
                                  <h4 className="font-medium">Images</h4>
                                  <div className="grid grid-cols-2 gap-2 mt-2">
                                    {selectedReview.images.map((imageUrl, index) => (
                                      <div key={index} className="relative">
                                        <img 
                                          src={`${supabase.storage.from('reviews').getPublicUrl(imageUrl).data.publicUrl}`}
                                          alt={`Review image ${index + 1}`}
                                          className="w-full h-32 object-cover rounded"
                                        />
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                              <div>
                                <h4 className="font-medium">Status</h4>
                                <div className="flex items-center mt-1">
                                  <Switch
                                    checked={selectedReview.approved}
                                    onCheckedChange={() => toggleApproval(selectedReview.id)}
                                    disabled={loading}
                                  />
                                  <span className="ml-2">
                                    {selectedReview.approved ? "Approved" : "Hidden"}
                                  </span>
                                </div>
                              </div>
                              <div className="flex justify-between mt-6">
                                <Button
                                  variant="destructive"
                                  onClick={() => deleteReview(selectedReview.id)}
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
                        )}
                      </Dialog>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ReviewManager;
