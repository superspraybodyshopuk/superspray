
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Star, Trash2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";

interface Review {
  id: string;
  name: string;
  vehicle: string;
  rating: number;
  reviewText: string;
  date: string;
  approved: boolean;
}

// Sample review data - this would come from Supabase in the real implementation
const sampleReviews: Review[] = [
  {
    id: "1",
    name: "John Smith",
    vehicle: "Jaguar E-Type",
    rating: 5,
    reviewText: "The restoration work SuperSpray did on my E-Type was exceptional. Their attention to detail and craftsmanship is unmatched. I couldn't be happier with the results.",
    date: "2023-10-15",
    approved: true
  },
  {
    id: "2",
    name: "Sarah Johnson",
    vehicle: "BMW 3 Series",
    rating: 5,
    reviewText: "After a nasty accident, I thought my car was beyond saving. SuperSpray worked magic and it looks brand new again. The team was professional, kept me updated throughout the process, and delivered ahead of schedule.",
    date: "2023-09-28",
    approved: true
  },
  {
    id: "3",
    name: "Michael Davies",
    vehicle: "Ford Mustang",
    rating: 5,
    reviewText: "The team's passion for classic cars is evident in their work. My Mustang has never looked better. They understood exactly what I wanted and went above and beyond to deliver it.",
    date: "2023-09-20",
    approved: true
  },
  {
    id: "4",
    name: "Emily Wilson",
    vehicle: "Audi Q5",
    rating: 4,
    reviewText: "Very satisfied with the quality of work. The repair was completed on time and the finish is perfect. Would recommend to friends and family.",
    date: "2023-08-15",
    approved: false
  },
];

const ReviewManager = () => {
  const [reviews, setReviews] = useState<Review[]>(sampleReviews);
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const toggleApproval = async (id: string) => {
    setLoading(true);
    try {
      // In a real implementation, this would update the review in Supabase
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Update local state
      setReviews(reviews.map(review => 
        review.id === id ? { ...review, approved: !review.approved } : review
      ));
      
      toast({
        title: "Status Updated",
        description: "The review status has been updated successfully.",
      });
    } catch (error) {
      toast({
        title: "Update failed",
        description: "There was an error updating the review.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const deleteReview = async (id: string) => {
    setLoading(true);
    try {
      // In a real implementation, this would delete the review from Supabase
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Update local state
      setReviews(reviews.filter(review => review.id !== id));
      setSelectedReview(null);
      
      toast({
        title: "Review Deleted",
        description: "The review has been deleted successfully.",
      });
    } catch (error) {
      toast({
        title: "Delete failed",
        description: "There was an error deleting the review.",
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
                      {selectedReview && (
                        <DialogContent className="sm:max-w-[500px]">
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
                              <p className="mt-1 text-gray-600">{selectedReview.reviewText}</p>
                            </div>
                            <div>
                              <h4 className="font-medium">Date</h4>
                              <p>{new Date(selectedReview.date).toLocaleString()}</p>
                            </div>
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
      </CardContent>
    </Card>
  );
};

export default ReviewManager;
